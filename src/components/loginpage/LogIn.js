import React, { useState } from 'react';
import ReactDom from "react-dom";
import { useNavigate } from 'react-router-dom';

const Login = ({ setLogIn, setCurrentUser, setShowLogin, setLoading }) => {
    let navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        userName: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetchAllUsers()
    }

    const fetchAllUsers = async () => {
        const res = await fetch('/api/users')
        const data = await res.json()
        return authenticateInput(data)
    }

    const authenticateInput = (data) => {
        for (let i = 0; i < data.length; i++) {
            const current = data[i];
            if (current.user_name === loginData.userName && current.password === loginData.password) {

                setLoading(false)
                setLogIn(true)
                navigate('/')
                return setCurrentUser(() => {
                    return current
                })
            }
        }

        setLoading(false)
        return alert('Unable to authenticate Username and Password.')
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
                <form className="loginForm" onSubmit={handleSubmit}>
                    <input
                        className="loginData"
                        type='text'
                        placeholder='User Name'
                        name='userName'
                        onChange={handleChange}
                        value={loginData.userName} /> <br />

                    <input
                        className="loginData"
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={loginData.password} /> <br />

                    <input className="loginBtn" type='submit' value='Log In' /> <br />
                    <button type='button' className='createNewActBtn' onClick={() => setShowLogin(false)}>Create New Account</button>
                </form>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Login
