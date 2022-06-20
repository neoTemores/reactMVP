import React from 'react';

const DeleteButton = ({ currentUser, setLogIn }) => {

    const handleDelete = () => {
        console.log('deleted', currentUser)
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

    return (
        <button className='deleteAccBtn' type='button' onClick={handleDelete}>DELETE Account</button>
    )
}

export default DeleteButton