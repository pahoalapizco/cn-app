import React from 'react'

const Post = (props) => {
  const {
    title,
    subtitle,
    content
  } = props
  
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Post