const Blog = require('../models/blog')

const initialBlogs = [
    {
        "title": "My first blog",
        "author": "John Doe",
        "url": "http://example.com",
        "likes": 2
    },
    {
        "title": "asdv blog",
        "author": "John zzm",
        "url": "http://example.com",
        "likes": 3
    }
]

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map( blog => blog.toJSON())
}

module.exports = {
    initialBlogs, blogsInDb
}