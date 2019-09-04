import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const BOOKS_QUERY= gql `
  {
    books {
      title
      author
    }
  }
`;

const Books = () => (
  <Query query={BOOKS_QUERY}>
    {
      ({ loading, error, data }) => {
        if (loading) return (<p> Cargando </p>)
        if (error) return (<p> A ocurrido un error! </p>)

        return(
         <div>
          {
            data.books.map( (book) => ( 
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            ))
          }
          </div>
        )
      }
    }
  </Query>
);

export default Books;