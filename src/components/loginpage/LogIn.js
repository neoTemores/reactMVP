import React, { useState } from 'react';
import ReactDom from "react-dom";


const Login = ({ setLogIn, setCurrentUser, setShowLogin }) => {

    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const fetchAllUsers = async () => {
            const res = await fetch('http://localhost:8000/api/users')
            const data = await res.json()
            return authenticateInput(data)
        }
        fetchAllUsers()

    }

    const authenticateInput = (data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            const current = data[i];
            if (current.user_name === loginData.userName && current.password === loginData.password) {

                setLogIn(true)
                return setCurrentUser(() => {
                    return current
                })
            }
        }

        return console.log('login Failed')
    }

    const handleChange = (e) => {
        setLoginData(prevLoginData => {
            return {
                ...prevLoginData,
                [e.target.name]: e.target.value
            }
        })
    }


    return ReactDom.createPortal(
        <div className='modalContainer' >
            <div className='loginContainer'>
                <form onSubmit={handleSubmit}>
                    <input
                        className="loginData"
                        type='text'
                        placeholder='User Name'
                        name='userName'
                        onChange={handleChange}
                        value={loginData.userName} /> <br />

                    <input
                        className="loginData"
                        type='text'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={loginData.password} /> <br />

                    <input className="loginBtn" type='submit' value='Log In' /> <br />
                </form>
                <button className='createNewActBtn' onClick={() => setShowLogin(false)}>Create New Account</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Login
