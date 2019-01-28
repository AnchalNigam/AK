import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-md navbar-light bg-light static-top">
        <div  className="container-fluid">
          <img src="https://s3.amazonaws.com/admitkard-frontend-resources/img/img-2/logo.png" alt=""/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span></span>
            <i className="fa fa-ellipsis-v text-dark"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/chat' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                 <Link to='/list/student' className="nav-link">Student List</Link>
              </li>
              <li className="nav-item">
                <Link to='/list/mentor' className="nav-link">Mentor List</Link>     
             </li>    
            </ul>
          </div>  
        </div>
      </nav>
      //   <nav className="navbar navbar-expand-lg ">
      //       <img src="https://s3.amazonaws.com/admitkard-frontend-resources/img/img-2/logo.png" alt=""/>
      //       <div className="collapse navbar-collapse" id="navbarResponsive">
      //         <ul className="navbar-nav ml-auto">
      //           <li className="nav-item">
      //             <Link to='/' className="nav-link">Home</Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to="/" className="nav-link">Link</Link>
      //           </li>
      //         </ul>
      //       </div>
      //   </nav>
      // );
      )
    }
  }
export default Header;
  