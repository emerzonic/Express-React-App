import React from 'react';
import { Link } from "react-router-dom";
import './home.css';

const Nav = () => (
    
    <div className="ui inverted secondary pointing stackable menu">
        <div className="ui container">
            <Link  className="ui item" to={"/"}><i className="home icon"></i> Home</Link>
            <div className="right menu">
                <Link  className="ui item" to={"/search"}><i className="search icon"></i> Search</Link>
                <Link  className="ui item" to={localStorage.getItem('user')?"/saved":"/signin"}> <i className="save icon"></i> Saved</Link>
                <span  className="ui item">{localStorage.getItem('user')?<i className="user circle icon"></i>:''} {localStorage.getItem('user')}</span>
            </div>
        </div>
    </div>
);

export default Nav;