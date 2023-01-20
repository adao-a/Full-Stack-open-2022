const blogsRouter = require('express').Router()
const { request, response } = require('../app')
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
    if (blog) {
        response.json(blog)
        } else {
            response.status(404).end()
        }
})

blogsRouter.post('/', (request, response) => {
    if(request.body.likes === undefined) {
        request.body.likes = 0
    }
    if(request.body.title === undefined || request.body.url === undefined) {
        return response.status(400).end()
    }
    const blog = new Blog(request.body)

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

blogsRouter.put('/:id', async (request, response) => {
    const body = request.body

    const blog = {
        title: body.title, 
        author: body.author,
        url: body.url,
        likes: body.likes
    }

    const updateBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})

    response.json(updateBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

module.exports = blogsRouter