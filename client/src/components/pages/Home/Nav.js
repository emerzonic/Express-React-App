import React from 'react';
import { Link } from "react-router-dom";
import './home.css';


const Nav = () => (
    
    <div className="ui inverted secondary pointing stackable menu">
        <div className="ui container">
            <Link  className="ui item" to={"/"}>Home</Link>
            <div className="right menu">
                <Link  className="ui item" to={"/search"}>Search</Link>
                <Link  className="ui item" to={localStorage.getItem('user')?"/saved":"/signin"}>Saved</Link>
                <span  className="ui item"> {localStorage.getItem('user')}</span>
            </div>
        </div>
    </div>
);

export default Nav;