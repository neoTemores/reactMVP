import React from 'react'

const IndividualPost = ({ myPosts }) => {

    return (
        myPosts.map(post =>
            <div className='singlePostDiv' key={post.post_id} >
                <div className='postControlsDiv'>
                    <button className='editPostBtn'>Edit</button> <button className='deletePostBtn'> X </button>
                </div>
                <p className='postUsername'>@{post.user_name}</p>
                <p className='singlePost' > * {post.post_content}</p>
            </div>)

    )
}

export default IndividualPost