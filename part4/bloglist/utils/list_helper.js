const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs[0].likes
}

const favoriteBlog = (blogs) => {
    let maxLikesBlog = blogs[0]

    blogs.forEach(blog => {
        if (maxLikesBlog.likes < blog.likes)
            maxLikesBlog = blog
    })

    return maxLikesBlog = {
        title: maxLikesBlog.title,
        author: maxLikesBlog.author,
        likes: maxLikesBlog.likes
    }
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}