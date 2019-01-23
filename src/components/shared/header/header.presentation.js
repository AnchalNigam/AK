import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <div className="bg-success">
           <ul>
            <li className="text-danger"><Link to="/" className="text-danger">Home</Link></li>
            <li className="text-secondary"><Link to="/second">Second</Link></li>
           </ul>
           
        </div>
      );
    }
  }
  
export default Header;
  