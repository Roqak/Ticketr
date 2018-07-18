import React, {Component} from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ResultsTable from './ResultTable';


class Login extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            password:'',
            loading: false,
            data: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
        // console.log(this.getState([e.target.name]))
    }
    handleSubmit(e){
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            password: this.state.password
        }
    //     axios.post('api/user/login',newUser)
    //     .then(result=>{
    //         console.log("Successful");
    //         console.log(result.token);
    // })
    //     .catch(err=>{console.log(err.message)})
        //
        this.setState({ loading: true }, () => {
            axios.post('/api/user/login',newUser)
              .then(result => {this.setState({
                loading: false,
                data: result.data.token,
              });
              console.log(result.data.token)
              })
            .catch(err=>(console.log(err)))
          });
    }
    render(){
        return(
            <main>
                <center><h1>Login</h1></center>
            <div className="row">
<div className="col s12 m8">
  <div className="card-panel">
  <div className="row">
<form onSubmit={this.handleSubmit} className="">
      <input placeholder="Username" name="name" onChange={this.handleChange} value={this.state.name} id="name" type="text" className="validate" />
      <label htmlFor="first_name">Name</label>
    <br />
      <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} id="password" type="password" className="validate" />
      <label htmlFor="password">Password</label><br />
    <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
</form>
</div>
  </div>
</div>
{this.state.loading ? <LoadingSpinner /> : <ResultsTable nn={this.state.data} />}
</div>

</main>
        )
    }
}
export default Login;