import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

const IndividualPost = ({ myPosts, setAllPosts }) => {

    const handleDelete = (e) => {
        // console.log(e.target)
        // console.log(e.target.id)
        // console.log(typeof +e.target.id)

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
        fetch(`api/posts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(() => setAllPosts([]))
            .catch(error => console.error(error))

    }

    return (
        myPosts.map(post =>
            <div className='singlePostDiv' key={post.post_id} >
                <div className='postControlsDiv'>
                    <button id={post.post_id} className='editPostBtn'>Edit</button> <button id={post.post_id} className='deletePostBtn' onClick={handleDelete}> X </button>
                </div>
                <p className='postUsername'>@{post.user_name}</p>
                <p className='singlePost' > * {post.post_content}</p>
            </div>)

    )
}

export default IndividualPost