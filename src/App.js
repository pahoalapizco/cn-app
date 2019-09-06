import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Erro404 from './components/404/'
import News from './components/news'
import SignUp from './components/signup/'
import Login from './components/login/'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={News} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route component={Erro404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
