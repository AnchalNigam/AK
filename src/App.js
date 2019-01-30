import React, { Component } from 'react';
import HeaderContainer from './components/shared/header/header.container';
import {Router} from './routing/router';
import Footer from './components/shared/footer/footer.presentation';
import './App.css';
import {withRouter} from 'react-router-dom';

// import Login from './components/login/login.presentation';
class App extends Component {
  render() {
    return (
      <div className="col-12 nopad">
        <HeaderContainer />
        <div className="set-height">
           <Router/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
