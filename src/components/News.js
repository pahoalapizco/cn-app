import React from 'react'
import Post from './Post'
import Books from './books';

class News extends React.Component {
  state = {
    posts: [
      {
        title: "Advertencia",
        subtitle: "Esta es una advertencia",
        content: "Este es el contenido",
      },
      {
        title: "Venta",
        subtitle: "Venta de Sombreros",
        content: "Este es un post para vender sombreros",
      }
    ]
  }
  handleClick = () => {
    const newPost = {
      title: "Nuevo",
      subtitle: "Nuevo post",
      content: "Nuevo post desde el clic"
    }
    this.setState({
      posts: [ 
        ...this.state.posts,
        newPost
      ]
    })
  }
  render() {   
    return (
      <section>
        <Books />
        <button onClick={this.handleClick}> Add post</button>
        <h2>Post</h2>
        <div>
          {
            this.state.posts.map(post => (
              <Post 
                title={post.title}
                subtitle={post.subtitle}
                content={post.content}
              />
            ))
          }
        </div>
      </section>
    )
  }
}
export default News