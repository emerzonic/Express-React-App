import React from 'react';
import './home.css';

const Footer = () => (
    <div className="ui bottom fixed menu">
        <span className="item">Built with Express & React Copyright &copy;{new Date().getFullYear()} Emerson Doyah Projects</span>
    </div> 
);

export default Footer;