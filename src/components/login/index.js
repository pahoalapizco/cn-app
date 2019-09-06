import React from 'react';
import LoginForm from './loginForm'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Redirect } from 'react-router-dom'
const LOGIN = gql`
  mutation doLogin($email: String, $password: String) {
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
  handleSubmit = (values, mutation) => {
    this.setState({
      ...values
    }, () => mutation())
  }
  setToken = ({ token }) => {
    if (token) {
      localStorage.setItem('jwt', token)
    }
  }

  render(){
    return (
      <div>
        <Mutation mutation={LOGIN} variables={this.state}>
          {
            
            (doLogin, { data, error, loading} ) => {
              if (data) {
                this.setToken(data.doLogin)
                return (<Redirect to='/' />)
              } 
              if (loading) return(<p> Cargando </p>);

              return (
                <div>
                  <LoginForm 
                    handleSubmit={(values) => this.handleSubmit(values, doLogin)}
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