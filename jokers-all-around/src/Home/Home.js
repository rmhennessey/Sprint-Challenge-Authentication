import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignIn from '../Login/Login';
import SignUp from '../Register/Register';
import Jokes from '../Jokes/Jokes';

export default class Home extends Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/');
      };

  render() {
    return (
      <div>
        <h2> 🤣 LOL 🤣</h2>
       <header>
        <NavLink to='/signup'>Register</NavLink>
        &nbsp;|&nbsp;
        <NavLink to ='/signin'>Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to ='/jokes'>Jokes</NavLink>
        <button onClick={this.logout}>Logout</button>
       </header>
       <main>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/jokes' component={Jokes} />
       </main>
      </div>
    )
  }
}