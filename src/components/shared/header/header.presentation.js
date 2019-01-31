import React from 'react';
import {Link} from 'react-router-dom';
import './header.presentation.css'; 

export const HeaderView = (handleClick) => (
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
             <li className="nav-item">
                <button type="button" className="btn btn-style" onClick={handleClick}>Sign Out</button>
              </li>   
            </ul>
          </div>  
        </div>
      </nav>
)
export default HeaderView;
  