import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { useAuth } from './authContext'; 

function Header() {
    const { user } = useAuth();  // Use the hook to get the user state

    return (
        <div>
            <div className='navBar'>
                <Link to="/homepage">
                <h4><b>DEV@Deakin</b></h4>
                </Link>

                <input className='searchBar' type="searchBar" placeholder="&#xF002; 
                 Search..." style={{ fontFamily: 'FontAwesome' }} />
                <Link to="/findquestions">Find Questions</Link>
                <Link to="/post">Post</Link>
                <Link to="/login">{user ? "Logout" : "Login"}</Link>
            </div>

        </div>
    );
}

export default Header