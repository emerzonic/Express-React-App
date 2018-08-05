import React from 'react';
import {
    Component
} from 'react';
import API from "../../../API/request";
import Login from "./Login";
import SignUp from "./Sign-up";
import Nav from "./Nav";
import Footer from "./Footer";
import './home.css';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                _id:'',
                username:''
            }
          };

        
    //Fires when the search form is submitted
    this.handleUserSignup = (newUser) => {
        // Takes the submitted data and pass it over to the API module
        API.sendNewUserData(newUser).then(res => {
            if(res.data.username){
            localStorage.setItem('user',res.data.username)
            localStorage.setItem('id',res.data._id)
            // Set the state with the results from the search
            this.setState({user: {
                id:res.data._id,
                username:localStorage.getItem('user')
            }})
            console.log(this.state.user)
            this.props.history.push('/search');
            // console.log(this.state.username)
        }else{
            this.props.history.push('/signup');
        } 
        }).catch(err => console.log(err));
    }


        //Fires when the search form is submitted
        this.handleUserSignin = (preciousUser) => {
            // Takes the submitted data and pass it over to the API module
            API.sendPreviousUserData(preciousUser).then(res => {
               if(res.data.username){
                console.log(res.data.username)
            localStorage.setItem('user',res.data.username)
            localStorage.setItem('id',res.data._id)
            // Set the state with the results from the search
            this.setState({user: {
                id:res.data._id,
                username:localStorage.getItem('user')
            }})
            console.log(this.state.user)
            this.props.history.push('/search');
            // console.log(this.state.username)
        }else{
            this.props.history.push('/login');
            window.reload('true');
        } 
            }).catch(err => console.log(err));
            
        }
    
    }
    
    render() { 
        return ( 
            <div>
                <Nav user={this.state.user.username}/>
                    <div className="ui container home-container">
                        <div className="ui segment">
                            {this.props.match.path === '/signin'?
                                <Login handleUserSignin={this.handleUserSignin}/>:
                                <SignUp handleUserSignup={this.handleUserSignup}/>} 
                        </div>
                    </div>
                <Footer/>
            </div>
         );
    }
}
 
export default User;