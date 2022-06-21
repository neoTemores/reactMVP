import React from 'react'
import { Link } from "react-router-dom"
// import logo from ''

const Navbar = ({ openModal, setLogIn, setCurrentUser, currentUser }) => {
    const handleLogOut = () => {
        // take in func from app.js to change 'logged in' state to false 
        //also to clear current logged in user info from state
        setLogIn(false)
        setCurrentUser(() => {
            return null
        })
    }

    return (
        <div className='navbar'>

            <Link to='/' className='nav-site-logo'><img src='imgs/mountain-clipart-3.png' alt='logoSmall' id='logoSmall' /></Link> <br />
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
                        <Link to="/" className='nav-link' onClick={handleLogOut}>Log Out</Link>
                    </li>
                    <li>
                        <Link to="/settings" className='nav-link currentUser'>@{currentUser.user_name}</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar