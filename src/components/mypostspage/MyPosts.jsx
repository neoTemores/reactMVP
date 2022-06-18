import React, { useState, useEffect } from "react";
import IndividualPost from "./IndividualPost.js"

const MyPosts = ({ currentUser }) => {

    useEffect(() => {
        fetchCurrentUserPosts()
    }, [])

    const [myPosts, setMyPosts] = useState([])

    const fetchCurrentUserPosts = async () => {
        try {
            let res = await fetch(`http://localhost:8000/api/posts/${currentUser.user_id}`)
            let data = await res.json()
            return setMyPosts(() => {
                return data
            })
        } catch (error) {

        }
    }
    return (

        <div className="myPostsContainer">
            <IndividualPost myPosts={myPosts} />
        </div>
    )
}

export default MyPosts