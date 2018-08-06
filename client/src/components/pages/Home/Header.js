import React from 'react';
import { Link } from "react-router-dom";
import './home.css';

const Header = () => (
    <div className="ui raised segment">
        <h1 className="homeTitle">(ReactJS)  Newsopedia</h1>
        <h2 className="subTitle"> The New York Times Article Scrubber.</h2>
        <h3 className="headnotes">This is a MERN application built using MongoBD 
        database, Express js for server-side routing, React Js for client-side rendering 
        and Node js framework. Search for and save articles of interest.</h3>
        <div className="ui inverted divider"></div>
        {localStorage.getItem('user')?
        <Link className="huge ui orange button" to={"/signout"}>Sign Out</Link> :
        <div>
            <Link className="huge ui orange button" to={"/signin"}>Sign In</Link>
            <Link className="huge ui inverted orange button" to={"/signup"}>Sign Up</Link>
        </div>}
    </div>
);

export default Header;