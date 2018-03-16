import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Sign in
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}