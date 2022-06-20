import React from "react";
import SettingsForm from "./SettingsForm";

const Settings = ({ currentUser, setCurrentUser, setLogIn, setAllPosts }) => {
    return (
        <div className="settingsPageContainer">
            <h5 className="settingsTitle"><span className="settingsTitleUsername">@{currentUser.user_name}</span> Settings...</h5>
            <SettingsForm currentUser={currentUser} setCurrentUser={setCurrentUser} setLogIn={setLogIn} setAllPosts={setAllPosts} />
        </div>
    )
}

export default Settings