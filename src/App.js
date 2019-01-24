import React, { Component } from 'react';
import Header from './components/shared/header/header.presentation';
import {Router} from './routing/router';
import Footer from './components/shared/footer/footer.presentation';
import './App.css';

// import Login from './components/login/login.presentation';
class App extends Component {
  render() {
    return (
      <div className="col-12 nopad">
        <Header/>
        <div className="set-height">
           <Router/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
