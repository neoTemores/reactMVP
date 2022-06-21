import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

const IndividualPost = ({ myPosts, setAllPosts, setShowUpdatePostModal, setPostToUpdate }) => {

    const handleDelete = (e) => {

        confirmAlert({
            title: 'Hold on !',
            message: 'Are you sure you want to DELETE this post?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deletePost(+e.target.id)
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    const deletePost = (id) => {
        fetch(`https://project-ritter.herokuapp.com/api/posts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(() => setAllPosts([]))
            .catch(error => console.error(error))

    }

    const handleEdit = (e) => {
        fetchPostToUpdate(e.target.id)
    }

    const fetchPostToUpdate = (id) => {
        fetch(`https://project-ritter.herokuapp.com/api/singlepost/${id}`)
            .then(res => res.json())
            // .then(() => setShowUpdatePostModal(true))
            .then(data => {
                return setPostToUpdate(() => {
                    return data
                })
            })
            .catch(error => console.error(error))
    }

    if (myPosts.length === 0) { return <div className='noPostsMsg'><h4 >You don't have any posts!</h4></div> }
    return (

        myPosts.map(post =>
            <div className='singlePostDiv' key={post.post_id} >
                <div className='postControlsDiv'>
                    <button id={post.post_id} className='editPostBtn' onClick={handleEdit}>Edit</button> <button id={post.post_id} className='deletePostBtn' onClick={handleDelete}> X </button>
                </div>
                <p className='postUsername'>@{post.user_name}</p>
                <p className='singlePost' > * {post.post_content}</p>
            </div>)

    )
}

export default IndividualPost