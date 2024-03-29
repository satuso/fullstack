import React, { useState } from 'react'

const Blog = ({ blog, updateBlog, user, removeBlog }) => {
  const [viewToggle, setViewToggle] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const addLike = (event) => {
    event.preventDefault()
    const updatedBlog = { ...blog, likes: blog.likes + 1 }
    updateBlog(blog.id, updatedBlog)
  }

  const hideWhenVisible = { display: viewToggle ? 'none' : '' }
  const showWhenVisible = { display: viewToggle ? '' : 'none' }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {blog.title} {blog.author} <button onClick={() => setViewToggle(true)}>view</button>
      </div>
      <div style={showWhenVisible} className='blog'>
        {blog.title} {blog.author} <button onClick={() => setViewToggle(false)}>view</button><br />
        {blog.url}<br />
        likes {blog.likes} <button onClick={addLike}>like</button><br />
        {blog.user.username}<br />
        {user.username === blog.user.username && <button onClick={() => removeBlog(blog.id, blog, user)}>remove</button>}
      </div>
    </div>
  )
}

export default Blog