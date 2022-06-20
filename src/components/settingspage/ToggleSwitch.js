
import React, { useState, useEffect } from 'react'
import "./ToggleSwitchStyles.css";

const ToggleSwitch = ({ currentUser, setCurrentUser }) => {

    const [darkTheme, setDarkTheme] = useState(currentUser.darktheme)

    const handleChange = (e) => {
        setDarkTheme(e.target.checked)
        setCurrentUser(() => {
            return {
                ...currentUser,
                darktheme: e.target.checked
            }
        })
        // updateThemeSetting()
    }

    useEffect(() => {
        updateThemeSetting()
    }, [darkTheme])

    let body = document.getElementById('body');
    darkTheme ? body.classList.add('darkTheme') : body.classList.remove('darkTheme')

    const updateThemeSetting = () => {
        console.log(darkTheme)
        const darkThemeSetting = {
            "darktheme": darkTheme,
            "userId": currentUser.user_id
        }

        fetch('/api/user/themesetting', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(darkThemeSetting)
        })
    }

    return (
        <div className="toggleContainer">
            {'Dark Theme?'}{" "}
            <div className="toggle-switch">

                <input type="checkbox" className="checkbox"
                    name={'darkTheme'} id={'darkTheme'} checked={darkTheme} onChange={handleChange} />
                <label className="label" htmlFor={'darkTheme'}>
                    <span className="inner" />
                    <span className="switch" />
                </label>

            </div>
        </div>
    )
}

export default ToggleSwitch