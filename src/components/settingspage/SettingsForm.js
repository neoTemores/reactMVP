import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch'
import DeleteButton from './DeleteButton'

const SettingsForm = ({ currentUser, setCurrentUser, setLogIn, setAllPosts }) => {

    const [settingsData, setSettingsData] = useState({
        userId: currentUser.user_id,
        First_Name: currentUser.first_name,
        Last_Name: currentUser.last_name,
        email: currentUser.email,
        userName: currentUser.user_name,
        password: currentUser.password,
        verifyPassword: currentUser.password,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        settingsData.password === settingsData.verifyPassword ? checkForBlankField() : passwordsDoNotMatch()
    }

    const passwordsDoNotMatch = () => { return alert('Error: Passwords need to match!') }

    const checkForBlankField = () => {
        for (const key in settingsData) {
            if (settingsData[key].length === 0) {
                return alert(`All fields are required, missing ${key}`)
            }
        }
        return updateUserSettings()
    }

    const updateUserSettings = () => {

        fetch('api/users/update', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify((settingsData))
        })
            .then(() => alert('Account successfully updated!'))
            .then(() => setCurrentUser(prevUserData => {
                return {
                    ...prevUserData,
                    first_name: settingsData.First_Name,
                    last_name: settingsData.Last_Name,
                    email: settingsData.email,
                    password: settingsData.password
                }
            }

            ))
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
                    name="First_Name"
                    onChange={handleChange}
                    value={settingsData.First_Name} />

                <label>Last name:</label>

                <input
                    className='settingsData'
                    type='text'
                    name="Last_Name"
                    onChange={handleChange}
                    value={settingsData.Last_Name} />
                <label>E-Mail:</label>

                <input
                    className='settingsData'
                    type='text'
                    name="email"
                    onChange={handleChange}
                    value={settingsData.email} />

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

                <ToggleSwitch currentUser={currentUser} />
                <input className='updateAccBtn' type='submit' value='Update Settings'></input>
                <DeleteButton currentUser={currentUser} setLogIn={setLogIn} setAllPosts={setAllPosts} />
            </form>

        </div>
    )
}

export default SettingsForm;