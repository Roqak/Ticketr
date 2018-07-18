import React, {Component} from 'react';
import "./Style.css"
import {Link} from 'react-router-dom';


class Footer extends Component{
    render(){
        return(
            <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Ticketr</h5>
                <p className="grey-text text-lighten-4">Book Your Tickets Noww.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Social</h5>
                <ul>
                  <li><Link className="grey-text text-lighten-3" to="#!"><i class="fab fa-facebook"> facebook</i></Link></li>
                  <li><Link className="grey-text text-lighten-3" to="#!"><i class="fab fa-twitter"> twitter</i></Link></li>
                  <li><Link className="grey-text text-lighten-3" to="www.github.com/Roqak"><i class="fab fa-github"> Github</i></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
    )
}
}
export default Footer;