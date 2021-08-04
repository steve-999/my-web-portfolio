import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    render() { 
        return (  
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="/home" className={`nav-links__a ${this.props.location.pathname === '/home' ? 'activeLink' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/apps" className={`nav-links__a ${this.props.location.pathname === '/apps' ? 'activeLink' : ''}`}>
                            Apps
                        </Link>
                    </li>
                    <li>
                        <Link to="/tech" className={`nav-links__a ${this.props.location.pathname === '/tech' ? 'activeLink' : ''}`}>
                            Technologies
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`nav-links__a ${this.props.location.pathname === '/contact' ? 'activeLink' : ''}`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default withRouter(Navbar);