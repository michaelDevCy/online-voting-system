import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Online Voting System</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/campaigns">Campaigns</Link>
                    </li>
                    <li>
                        <Link to="/candidates">Candidates</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
