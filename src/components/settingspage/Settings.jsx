import React from "react";
import SettingsForm from "./SettingsForm";

const Settings = ({ currentUser }) => {
    return (
        <div className="settingsPageContainer">
            <h5 className="settingsTitle"><span className="settingsTitleUsername">@{currentUser.user_name}</span> Settings Page</h5>
            <SettingsForm currentUser={currentUser} />
            <button className="deleteAccBtn">Delete Account</button>
        </div>
    )
}

export default Settings