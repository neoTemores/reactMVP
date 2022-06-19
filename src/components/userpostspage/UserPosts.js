import React from "react";
import RenderClickedPosts from './RenderClickedPosts'

const UserPosts = ({ clickedUserPosts }) => {

    return (
        <div className="myPostsContainer">
            {clickedUserPosts ? <RenderClickedPosts clickedUserPosts={clickedUserPosts} /> : null}
        </div>
    )
}

export default UserPosts