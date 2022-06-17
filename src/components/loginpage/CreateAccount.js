import React, { useState } from 'react';
import ReactDom from "react-dom";

const CreateAccount = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        verifyPassword: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
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
                        placeholder='First Name'
                        name='firstName'
                        onChange={handleChange}
                        value={formData.firstName} /> <br />

                    <input
                        className="loginData"
                        type='text'
                        placeholder='Last Name'
                        name='lastName'
                        onChange={handleChange}
                        value={formData.lastName} /> <br />

                    <input
                        className="loginData"
                        type='text'
                        placeholder='E-Mail'
                        name='email'
                        onChange={handleChange}
                        value={formData.email} /> <br />

                    <input
                        className="loginData"
                        type='text'
                        placeholder='Desired User Name'
                        name='userName'
                        onChange={handleChange}
                        value={formData.userName} /> <br />

                    <input
                        className="loginData"
                        type='text'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={formData.password} /> <br />
                    <input
                        className="loginData"
                        type='text'
                        placeholder='Verify Password'
                        name='verifyPassword'
                        onChange={handleChange}
                        value={formData.verifyPassword}
                    /> <br />

                    <input className="createActBtn" type='submit' value='Create Account' /> <br />
                    <input className="restBtn" type='reset' />
                </form>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default CreateAccount