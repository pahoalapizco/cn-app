import React from 'react';
import LoginForm from './loginForm'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    doLogin(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handdleSubmit = (values, mutation) => {
    this.setState({
      ...values
    }, () => mutation())
  }

  render(){
    return (
      <div>
        <Mutation
          mutation={LOGIN} variables={this.state}
        >
          {
            
            (doLogin, { data, error, login} ) => {
              if (login) return(<p> Cargando </p>);

              return (
                <div>
                  <LoginForm 
                    handdleSubmit={(values) => this.handdleSubmit(values, doLogin)}
                  />
                  { error && <p> Erorr </p>}
                </div>
              );
            }
          }
        </Mutation>
      </div>
    );
  }
}


export default Login;