import React from 'react'
import { Link } from "react-router-dom"

const Navbar = ({ openModal }) => {
    const handleLogOut = () => {
        // take in func from app.js to change 'logged in' state to false 
        //also to clear current logged in user info from state
        console.log('logged out')
    }


    return (
        <div className='navbar'>

            <Link to='/' className='nav-site-name'>LOGO</Link> <br />
            <Link to='/' className='nav-site-name'>Ritter</Link> <br />

            <button className='newPostBtn' onClick={openModal}>POST</button>

            <div className='siteLinks'>
                <ul>
                    <li>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/myPosts' className='nav-link'>My Posts</Link>
                    </li>
                    <li>
                        <Link to='/settings' className='nav-link'>Settings</Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li>
                        <Link to="#" className='nav-link' onClick={handleLogOut}>Log Out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar