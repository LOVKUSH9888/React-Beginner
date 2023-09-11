import React from 'react'
import BlogPost from './BlogPost'

const BlogList = () => {
  return (
    <>
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </>
  )
}

export default BlogList
