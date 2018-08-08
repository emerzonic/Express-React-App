import React from 'react';
import {
    Component
} from 'react';
import API from "../../../API/request";
import Login from "./Login";
import SignUp from "./Sign-up";
import Signout from "./Sign-out";
import Nav from "./Nav";
import Footer from "./Footer";
import './home.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                _id: '',
                username: ''
            }
        };

        //Fires when the search form is submitted
        this.handleUserSignup = (newUser) => {
            // Takes the submitted data and pass it over to the API module
            API.sendNewUserData(newUser).then(res => {
                if (res.data.username) {
                    localStorage.setItem('user', res.data.username)
                    localStorage.setItem('id', res.data._id)
                    // Set the state with the results from the search
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('user')
                        }
                    })
                    //Redirect the user to search page
                    this.props.history.push('/search');
                } else {
                    //If fails stay on sign up page
                    this.props.history.push('/signup');
                }
            }).catch(err => console.log(err));
        }


        //Fires when the search form is submitted
        this.handleUserSignin = (preciousUser) => {
            // Takes the submitted data and pass it over to the API module
            API.sendPreviousUserData(preciousUser).then(res => {
                //If sign in is success
                if (res.data.username) {
                    //Store user info
                    localStorage.setItem('user', res.data.username)
                    localStorage.setItem('id', res.data._id)
                    // Set the state with the results from the search
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('user')
                        }
                    })
                    //Redirect to search page
                    this.props.history.push('/search');
                } else {
                    //If sign in fails, stay on ligin
                    this.props.history.push('/login');
                }
            }).catch(err => console.log(err));

        }

        //This method handle user signout
        this.handleUserSignout= (action) => {
            //If the user action is positive
            if(action === "positive"){
            //clear user data from storage
            localStorage.clear();
            //Redirect user to home page
            this.props.history.push('/');
            }else{
            //call
            this.props.history.goBack();
            }
        }

    }

    render() {
        return (
            <div>
            <Nav user={this.state.user.username}/>
                <div className="ui container user-container">
                    {this.props.match.path === '/signin'?
                    <div className="ui segment">
                        <Login handleUserSignin={this.handleUserSignin}/>
                    </div>:
                        this.props.match.path === '/signup'?
                        <div className="ui segment">
                        <SignUp handleUserSignup={this.handleUserSignup}/>
                        </div>:""}
                        {this.props.match.path === '/signout'?
                        <Signout handleUserSignout={this.handleUserSignout}/>:''} 
                </div>
            <Footer/>
        </div>
        );
    }
}

export default User;