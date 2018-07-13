import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();
        this.state={
            name :'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        alert('what the hell');
        const newUser = {
            name: this.state.name,
            password: this.state.password
        }
        console.log("Oya gbera "+ newUser.name);
        // axios.get('api/user/samp/')
        // .then(data=>(console.log(data)))
        // .catch(err=>{console.log("This is a fucking error "+err)})
        axios.post('api/user/add',newUser)
        .then(result=>{console.log("Successful")})
        .catch(err=>{console.log(err.message)})
    }
    render(){
        return(
            <main>
                <center><h1>Register</h1></center>
                <div className="row">
    <div className="col s12 m8">
      <div className="card-panel">
      <div className="row">
    <form onSubmit={this.handleSubmit} className="">
          <input placeholder="Username" name="name" onChange={this.handleChange} value={this.state.name} id="name" type="text" className="validate" required />
          <label htmlFor="first_name">Name</label>
        <br />
          <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} id="password" type="password" className="validate" required/>
          <label htmlFor="password">Password</label><br />
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
    </form>
  </div>
      </div>
    </div>
  </div>
  </main>

        )
    }
}
export default Register;