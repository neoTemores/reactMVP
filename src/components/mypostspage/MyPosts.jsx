import React, { useState, useEffect } from "react";
import IndividualPost from "./IndividualPost.js"
import UpdatePostModal from './UpdatePostModal'

const MyPosts = ({ currentUser, allPosts, setAllPosts }) => {

    useEffect(() => {
        fetchCurrentUserPosts()
    }, [allPosts, allPosts.length])

    const [myPosts, setMyPosts] = useState([])
    const [postToUpdate, setPostToUpdate] = useState(null)
    const [showUpdatePostModal, setShowUpdatePostModal] = useState(false)

    useEffect(() => {
        checkIfPostToUpdateIsAvail()
    }, [postToUpdate])

    const checkIfPostToUpdateIsAvail = () => {
        if (postToUpdate) { return setShowUpdatePostModal(true) }
    }



    const fetchCurrentUserPosts = () => {
        fetch(`/api/posts/${currentUser.user_id}`)
            .then((res) => res.json())
            .then((data) => setMyPosts(() => { return data }))
            .catch((err) => console.log(err))
    }

    return (

        <div className="myPostsContainer">
            {showUpdatePostModal ? <UpdatePostModal postToUpdate={postToUpdate} setAllPosts={setAllPosts} setShowUpdatePostModal={setShowUpdatePostModal} /> : null}

            <IndividualPost myPosts={myPosts} setAllPosts={setAllPosts} setShowUpdatePostModal={setShowUpdatePostModal} setPostToUpdate={setPostToUpdate} />
        </div>
    )
}

export default MyPosts