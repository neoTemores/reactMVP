import React, { useState } from 'react';
import ReactDom from "react-dom";

const CreateAccount = ({ setLoading, setShowLogin }) => {

    const [formData, setFormData] = useState({
        First_Name: '',
        Last_Name: '',
        email: '',
        userName: '',
        password: '',
        verifyPassword: ''
    })

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    //! 21JUne 10:38 added setLoading()
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        for (const key in formData) {
            if (formData[key].length === 0) {
                setLoading(false)
                return alert(`All fields are required, missing ${key}`)
            }
        }
        return verifyPasswordsMatch()
    }

    const verifyPasswordsMatch = () => {
        if (formData.password === formData.verifyPassword) {
            return fetchAllUsers()
        }

        else {
            setLoading(false)
            return alert('Passwords do not match')
        }
    }

    //! 21June 10:30 refactored to .then syntax
    // const fetchAllUsers = async () => {
    //     const res = await fetch('/api/users')
    //     const data = await res.json()
    //     return checkForTakenUserName(data)
    // }

    const fetchAllUsers = () => {
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => checkForTakenUserName(data))
            .catch((err) => console.log(err))
    }

    //!added setLoading
    const checkForTakenUserName = (data) => {

        for (let i = 0; i < data.length; i++) {
            const current = data[i];
            if (formData.userName === current.user_name) {
                setLoading(false)
                return alert('Sorry, that User Name is already taken!')
            }
        }

        return createNewUser()
    }

    //!setLoading
    function createNewUser() {

        fetch('/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(() => {
                setLoading(false)
                alert('Account successfuly create. Please log in!')
                return setShowLogin(true)
            })
            .catch((error) => {
                console.error('Error:', error)
            });
    }

    const handleReset = () => {
        setFormData(() => {
            return {
                First_Name: '',
                Last_Name: '',
                email: '',
                userName: '',
                password: '',
                verifyPassword: ''
            }
        })
    }

    return ReactDom.createPortal(
        <div className='modalContainer' >
            <div className='loginContainer'>
                <form className='createAccForm' onSubmit={handleSubmit}>
                    <input
                        className="loginData newAcc"
                        type='text'
                        placeholder='First Name'
                        name='First_Name'
                        onChange={handleChange}
                        value={formData.First_Name} /> <br />

                    <input
                        className="loginData newAcc"
                        type='text'
                        placeholder='Last Name'
                        name='Last_Name'
                        onChange={handleChange}
                        value={formData.Last_Name} /> <br />

                    <input
                        className="loginData newAcc"
                        type='text'
                        placeholder='E-Mail'
                        name='email'
                        onChange={handleChange}
                        value={formData.email} /> <br />

                    <input
                        className="loginData newAcc"
                        type='text'
                        placeholder='Desired User Name'
                        name='userName'
                        onChange={handleChange}
                        value={formData.userName} /> <br />

                    <input
                        className="loginData newAcc"
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={handleChange}
                        value={formData.password} /> <br />
                    <input
                        className="loginData newAcc"
                        type='password'
                        placeholder='Verify Password'
                        name='verifyPassword'
                        onChange={handleChange}
                        value={formData.verifyPassword}
                    /> <br />

                    <input className="createActBtn" type='submit' value='Create Account' /> <br />
                    <input className="restBtn" type='reset' onClick={handleReset} />
                </form>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default CreateAccount