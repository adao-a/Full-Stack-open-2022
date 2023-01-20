const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const { response, request } = require('../app')
const blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(helper.initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(helper.initialBlogs[1])
    await blogObject.save()
}, 10000)

describe('when there is initially some blogs saved', () => {
    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    }, 10000)

    test('all blogs are turned', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(helper.initialBlogs.length)
    })

})

describe('viewing a specific blog', () => {
    test('blogs return id', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToView = blogsAtStart[0]
        const response = await api
            .get(`/api/blogs/${blogToView.id}`)
            .expect(200)

        expect(response.body.id).toBeDefined()
    }, 10000)
})

describe('addition of a new blog', () => {
    test('a valid blog can be added', async () => {
        const newBlog = {
            "title": "fazsdf blog",
            "author": "fdfn Doe",
            "url": "http://example.com",
            "likes": 3
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnds = await helper.blogsInDb()
        expect(blogsAtEnds).toHaveLength(helper.initialBlogs.length + 1)

        const authors = blogsAtEnds.map(blog => blog.author)
        expect(authors).toContain('fdfn Doe')

        const titles = blogsAtEnds.map(blog => blog.title)
        expect(titles).toContain('fazsdf blog')
    })

    test('a blog without likes is added with 0 likes', async () => {
        const newBlog = {
            "title": "fazsdf blog",
            "author": "fdfn Doe",
            "url": "http://example.com"
        }
        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect('Content-Type', /application\/json/)
        const blogsAtEnds = await helper.blogsInDb()
        const likes = blogsAtEnds.map(blog => blog.likes)
        expect(likes).toContain(0)
    })

    test('a blog without title and url is not added', async () => {
        const newBlog = {
            author: "fdf"
        }
        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)
        const blogsAtEnds = await helper.blogsInDb()
        expect(blogsAtEnds).toHaveLength(helper.initialBlogs.length)
    }, 10000)
})

describe('deletion of a blog', () => {
    test('succeeds with status code 204 if id is valid', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToDelete = blogsAtStart[0]

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)
        const blogsAtEnd = await helper.blogsInDb()

        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

        const titles = blogsAtEnd.map(blog => blog.title)
        expect(titles).not.toContain(blogToDelete.title)
    })
})

test('update of a blog', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToUpdate = blogsAtStart[0]

    blogToUpdate.likes = 99
    await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send(blogToUpdate)
        .expect(200)

    const likes = blogsAtStart.map(blog => blog.likes)
    expect(likes).toContain(blogToUpdate.likes)
})

afterAll(() => {
    mongoose.connection.close()
})