import React, { useState } from 'react'
import Login from './LogIn';
import CreateAccount from './CreateAccount'


function LoginPage({ setLogIn, setCurrentUser, setLoading }) {
    const [showLogin, setShowLogin] = useState(true)


    return (
        <>
            <div className='loginLogo'>
                <h1>Logo</h1>
            </div>
            <div className='loginSiteName'>
                <h1>Site Name</h1>
            </div>

            <div className='loginPage'>
                {showLogin ? <Login setLogIn={setLogIn} setCurrentUser={setCurrentUser} setShowLogin={setShowLogin} setLoading={setLoading} /> : <CreateAccount setLoading={setLoading} setShowLogin={setShowLogin} />}

            </div>
        </>
    )
}

export default LoginPage