import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MyEvent extends Component{
    render(){
        return(
          <div className="col s12 m3 l3">
          <div className="card">
            <div className="card-image">
              <img src={this.props.pic} />
              <span className="card-title">{this.props.ticketname}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"></i></a>
            </div>
            <div className="card-content">
              <p>{this.props.ticketdescription}</p>
            </div>
            <div className="card-action">
              <Link to="/ticket">View Tickets</Link>
            </div>
          </div>
        </div>
        )
    }
}

export default MyEvent;