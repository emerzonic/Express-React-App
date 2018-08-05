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
            };;
          this.props.handleUserSignup(newUser);
          }
    }
    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
              <div className="field">
                <label>Full Name</label>
                <input type="text" name="fullName"  placeholder="Ex. John Doe"  ref="fullName"/>
              </div>
            <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" ref="username"/>
          </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" ref="password"/>
              </div>
            <button type="submit" className="ui button">Submit</button>
          </form>

        );
    }
}

export default SignUP;