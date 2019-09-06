import React from 'react'
import Post from './Post'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo';
import PostForm from './PostForm';

const POST_QUERY = gql` 
{
  getPost {
      _id
      title
      content
      likes
      comments {
        _id
        content
      }
    }
  }
`;

const ADD_POST = gql`
  mutation addPost($data: PostInput) {
    addPost(data: $data) {
      title
      content
    }
}
`;

class News extends React.Component {

  render() {   
    return (
      <section>
        <div className="container">
        <Mutation mutation={ADD_POST}>
          {
            (addPost, {data, error, loading}) => {
              if (loading) return <p> Registrando Post...</p>
              if (error) return <p> A ocurrido un error!!</p>
              return(<PostForm addPost={addPost} />)
            }
          }
        </Mutation>
        
        <h2>Lista de post</h2>
        <Query query={POST_QUERY}>
          {
            ({ loading, error, data }) => {
              if(loading) return <p> Loading... </p>
              if(error) return <p> Error </p>
              return(
                <div>
                  {
                    data.getPost.map(post => (
                      <Post 
                        key={post._id}
                        title={post.title}
                        subtitle={post.subtitle}
                        content={post.content}
                      />
                    ))
                  }                  
                </div>
              )
            }
          }
        </Query>          
        </div>
      </section>
    )
  }
}
export default News