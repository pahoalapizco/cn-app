import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";

import NavBar from '../components/NavBar'
import Error404 from '../components/404/'
import News from '../components/news'
// import SignUp from '../components/signup/'
import Login from '../components/login/'

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={(props) => <Component {...props}/>}
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={(props) =>(
      rest.userLogged === true
      ?  <Component {...props}/>
      : <Redirect to='/' />
    )
    }
  />
);

const Root = () => (
  <div> INICIO!!! </div>
);

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <PublicRoute 
            exact 
            path="/"
            component={() => <Root/>}
          />
          <PublicRoute 
            path="/login"
            component={() => <Login/>}
          />
          <PrivateRoute 
            path="/home"
            userLogged={false}
            component={() => <News/>}
          />
          <PublicRoute  
            component={() => <Error404/>}
          />
        </Switch>
      </Router>
    )
  }
}

export default Routing
