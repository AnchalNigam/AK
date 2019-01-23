import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        /*
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <img src="https://s3.amazonaws.com/admitkard-frontend-resources/img/img-2/logo.png"/>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link test-danger">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/link" className="nav-link text-danger">Link</Link>
            </li>
          </ul>
        </nav>
        */
        <nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
            <img src="https://s3.amazonaws.com/admitkard-frontend-resources/img/img-2/logo.png" alt=""/>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link">Link</Link>
              </li>
            </ul>
          </div>
      </nav>
      );
    }
  }
  
export default Header;
  