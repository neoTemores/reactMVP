import React from 'react';

const RenderClickedPosts = ({ clickedUserPosts }) => {

    return (
        <>
            {
                clickedUserPosts.map((post) => (
                    <div className='indivPostDiv clickedUserPost' key={post.post_id} id={post.user_id} >
                        <p className='postUsername' id={post.user_id}>@{post.user_name}</p>
                        <p className="post" id={post.user_id}> * {post.post_content}</p>
                    </div>
                ))
            }

        </>
    )
}

export default RenderClickedPosts