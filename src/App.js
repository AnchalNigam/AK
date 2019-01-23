import React, { Component } from 'react';
import Header from './components/shared/header/header.presentation';
import {Router} from './routing/router';
import Footer from './components/shared/footer/footer.presentation';
import './App.css';
// import Login from './components/login/login.presentation';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router/>
       
        <Footer />
      </div>
    );
  }
}

export default App;
