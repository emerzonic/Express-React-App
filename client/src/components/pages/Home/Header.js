import React from 'react';
import { Link } from "react-router-dom";
import './home.css';

const Header = () => (
    <div className="ui raised segment">
        <h1>(ReactJS)  Newsopedia</h1>
        <h3>The New York Times Article Scrubber.</h3>
        <h3>Search for and save articles of interest.</h3>
        {localStorage.getItem('user')?
        <Link className="massive ui brown button" to={"/signout"}>Sign Out</Link> :
        <div>
            <Link className="massive ui brown button" to={"/signin"}>Sign In</Link>
            <Link className="massive ui inverted brown button" to={"/signup"}>Sign Up</Link>
        </div>}
    </div>
);

export default Header;