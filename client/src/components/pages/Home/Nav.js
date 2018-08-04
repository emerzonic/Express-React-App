import React from 'react';
import { Link } from "react-router-dom";
import './home.css';



const Nav = props => (
    <div className="ui inverted secondary pointing menu">
        <div className="ui container">
            <Link  className="ui item" to={"/"}>Home</Link>
            <div className="right menu">
                <Link  className="ui item" to={"/search"}>Search</Link>
                <Link  className="ui item" to={"/saved"}>Saved</Link>
            </div>
        </div>
    </div>
);

export default Nav;