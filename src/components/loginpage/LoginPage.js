import React, { useState } from 'react'
import Login from './LogIn';
import CreateAccount from './CreateAccount'


function LoginPage() {
    return (
        <div className='loginPage'>
            <h1>LoginPage</h1>
            <Login />
            <CreateAccount />
        </div>
    )
}

export default LoginPage