import React from   'react'
import {
    Component
} from 'react';


class Signout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : true
        }

        this.logout= () => {

            // var userId = window.localStorage.getItem('id');
            // var user = window.localStorage.getItem('user');
            // window.localStorage.removeItem(userId);
            // window.localStorage.removeItem(user);
            console.log('componentDidMount')
            // window.location.reload();
            this.props.history.push('/');
       
        }
    }

    componentDidMount() {
        localStorage.clear();
    
    }
    render() { 

        return null;
    }
}
 
export default Signout;


