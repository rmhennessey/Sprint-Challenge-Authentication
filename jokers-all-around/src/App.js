import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <Route path='/' component={Home}/>
      </>
    );
  }
}

export default App;
