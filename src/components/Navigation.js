import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation(){
    return (
    <div className="nav">
        <Link className="home btn" to="/">Home</Link>
        <Link className="About btn" to="/about">About</Link>
    </div>
    )
}

export default Navigation;