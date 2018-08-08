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
        if(!preciousUser.username.length ||!preciousUser.password.length){ 
            return;
        }else{
            this.props.handleUserSignin(preciousUser);
        }
      }
}

render() {
    return (
        <form id="signinForm" className="ui form" onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="ui divider"></div>
        <div className="required field">
        <label>Username</label>
            <div className="ui left icon input"> <i className="user icon"></i>
            <input name="username" placeholder="Username" type="text" autoComplete="off"/>
            </div>
        </div>
          <div className="required field">
            <label>Password</label>
            <div className="ui left icon input"><i className="lock icon"></i>
          <input type="password" name="password" placeholder="Password"/>
        </div>
          </div>
        <button type="submit" className="ui orange button">Submit</button>
        <div className="ui error message"></div>
      </form>

    );
}
}
 
export default Login;