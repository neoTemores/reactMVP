import React from 'react';
import { confirmAlert } from 'react-confirm-alert';

const DeleteButton = ({ currentUser, setLogIn, setAllPosts }) => {

    const handleDelete = () => {
        confirmAlert({
            title: 'Wait! Please don\'t go!',
            message: 'Are you sure you want to DELETE your account?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteAllPostsFromUser()
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    const deleteAllPostsFromUser = () => {
        fetch(`/api/delete/allPosts/user/${currentUser.user_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => deleteUser())
    }

    const deleteUser = () => {
        fetch(`/api/users/delete/${currentUser.user_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => userDeletedMsg())
    }

    const userDeletedMsg = () => {
        setAllPosts([])
        alert('Sorry to see you go! Your account has been deleted, goodbye.')
        setLogIn(false)
        return window.location.reload()
    }
    return (
        <button className='deleteAccBtn' type='button' onClick={handleDelete}>DELETE Account</button>
    )
}

export default DeleteButton