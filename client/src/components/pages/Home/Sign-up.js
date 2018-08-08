import React from 'react';
import {
    Component
} from 'react';

import './home.css';

// let style = { display: 'block !important'};

class SignUP extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    
        this.handleSubmit = e =>{
            e.preventDefault();
            let newUser = {
                fullName: e.target.fullName.value,
                username: e.target.username.value,
                password: e.target.password.value
            };
            if(!newUser.fullName.length ||!newUser.password.length ||!newUser.password.length){ 
              return;
          }else{
            console.log(newUser)
              this.props.handleUserSignup(newUser);
          }
          }
    }
    render() {
        return (
            <form id="signupForm" className="ui form" onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
              <div className="required field">
                <label>Full Name</label>
                <input type="text" name="fullName"  placeholder="Ex. John Doe" autoComplete="off"/>
              </div>
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

export default SignUP;