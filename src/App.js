import React, { Component } from 'react';
import Header from './components/shared/header/header.presentation';
import {Router} from './routing/router';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router/>
      </div>
    );
  }
}

export default App;
