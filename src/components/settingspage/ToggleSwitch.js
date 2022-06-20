
import React, { useState } from 'react'
import "./ToggleSwitchStyles.css";

const ToggleSwitch = ({ currentUser }) => {

    const [darkTheme, setDarkTheme] = useState(currentUser.darkTheme)

    const handleChange = (e) => {
        setDarkTheme()
    }


    return (
        <div className="container">
            {'Dark Theme?'}{" "}
            <div className="toggle-switch">

                <input type="checkbox" className="checkbox"
                    name={'darkTheme'} id={'darkTheme'} checked={darkTheme} />
                <label className="label" htmlFor={'darkTheme'}>
                    <span className="inner" />
                    <span className="switch" />
                </label>

            </div>
        </div>
    )
}

export default ToggleSwitch