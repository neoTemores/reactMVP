import React, { useState } from 'react';
import './ToggleSwitchStyles.css'

const SettingsForm = ({ currentUser }) => {

    const [settingsData, setSettingsData] = useState({
        firstName: currentUser.first_name,
        lastName: currentUser.last_name,
        email: currentUser.email,
        userName: currentUser.user_name,
        password: currentUser.password,
        verifyPassword: '',
        darkTheme: currentUser.darktheme
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setSettingsData((prevSettingsData) => {
            return {
                ...prevSettingsData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className='settingsFormContainer'>
            <form onSubmit={handleSubmit}>
                <label> First name:</label>
                <input
                    className='settingsData'
                    type='text'
                    name="firstName"
                    onChange={handleChange}
                    value={settingsData.firstName} />

                <label>Last name:</label>

                <input
                    className='settingsData'
                    type='text'
                    name="lastName"
                    onChange={handleChange}
                    value={settingsData.lastName} />
                <label>E-Mail:</label>

                <input
                    className='settingsData'
                    type='text'
                    name="email"
                    onChange={handleChange}
                    value={settingsData.email} />

                <label>User Name:</label>
                <input
                    className='settingsData'
                    type='text'
                    name="userName"
                    onChange={handleChange}
                    value={settingsData.userName} />

                <label>Password:</label>
                <input
                    className='settingsData'
                    type='password'
                    name="password"
                    onChange={handleChange}
                    value={settingsData.password} />

                <label>Verify password:</label>
                <input
                    className='settingsData'
                    type='password'
                    name="verifyPassword"
                    onChange={handleChange}
                    value={settingsData.verifyPassword}
                    placeholder="Please reenter password" />

                <div className="container">
                    {'Dark Theme?'}{" "}
                    <div className="toggle-switch">

                        <input type="checkbox" className="checkbox"
                            name={'darkTheme'} id={'darkTheme'} />
                        <label className="label" htmlFor={'darkTheme'}>
                            <span className="inner" />
                            <span className="switch" />
                        </label>

                    </div>
                </div>
            </form>

        </div>
    )
}

export default SettingsForm;