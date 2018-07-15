import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
            <div className="navbar-fixed">
        <nav>
                <div className="nav-wrapper teal">
                  <Link to="#" className="brand-logo">Ticketr</Link>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/register">Sign Up</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/events">Events</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            </header>
    )
}
}
export default Header;