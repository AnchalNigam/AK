import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
            <img src="https://s3.amazonaws.com/admitkard-frontend-resources/img/img-2/logo.png" alt=""/>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Link</Link>
              </li>
            </ul>
          </div>
      </nav>
      );
    }
  }
  
export default Header;
  