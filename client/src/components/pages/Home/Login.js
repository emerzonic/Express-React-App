import React from 'react';
import {
    Component
} from 'react';
import './home.css';


class Login extends Component {
    constructor(props) {
        super(props);
    
    this.handleSubmit = e =>{
        e.preventDefault();
        let preciousUser = {
            username: e.target.username.value,
            password: e.target.password.value
        };;
      this.props.handleUserSignin(preciousUser);
      }
}
render() {
    return (
        <form className="ui form" onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="ui divider"></div>
        <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" ref="username"/>
      </div>
        <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" ref="password"/>
          </div>
        <button type="submit" className="ui orange button">Submit</button>
      </form>

    );
}
}
 
export default Login;