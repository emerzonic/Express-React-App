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
            API.sendNewUserData(newUser).then(res => {
                if (res.data.username) {
                    localStorage.setItem('erapp_user', res.data.username)
                    localStorage.setItem('erapp_id', res.data._id)
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('erapp_user')
                        }
                    })
                    this.props.history.push('/search');
                } else {
                    this.props.history.push('/signup');
                }
            }).catch(err => console.log(err));
        }


        //Fires when the search form is submitted
        this.handleUserSignin = (preciousUser) => {
            API.sendPreviousUserData(preciousUser).then(res => {
                if (res.data.username) {
                    localStorage.setItem('erapp_user', res.data.username)
                    localStorage.setItem('erapp_id', res.data._id)
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('erapp_user')
                        }
                    })
                    this.props.history.push('/search');
                } else {
                    this.props.history.push('/login');
                }
            }).catch(err => console.log(err));

        }

        //This method handle user signout
        this.handleUserSignout= (action) => {
            if(action === "positive"){
            localStorage.removeItem('erapp_id');
            localStorage.removeItem('erapp_user');
            localStorage.removeItem('erapp_articles');
            this.props.history.push('/');
            }else{
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