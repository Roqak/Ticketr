import React, { Component } from 'react';
import 'materialize-css';
import Axios from 'axios';
import axios from "axios/index";
import Header from './Header';
import Footer from './Footer';
import "./Style.css";
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Events from './Events';
import Ticket from './Ticket';


class App extends Component {
    getData = event => {
        Axios.post(`https://api.coinmarketcap.com/v1/ticker/bitcoin/`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
      {/* <Register/> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/ticket" component={Ticket} />
      {/* <Login /> */}
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
