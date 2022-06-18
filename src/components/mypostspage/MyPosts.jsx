import React from "react";

const MyPosts = ({ currentUser }) => {
    console.log(currentUser)

    const fetchCurrentUserPosts = async () => {
        try {
            let res = await fetch(`http://localhost:8000/api/posts/${currentUser.user_id}`)
            let data = await res.json()
            console.log(data)
        } catch (error) {

        }
    }
    return (


        <div onClick={fetchCurrentUserPosts}>{currentUser.first_name}</div>
    )
}

export default MyPosts