import React, { useState } from 'react';

const UpdatePostForm = ({ postToUpdate, setAllPosts, setShowUpdatePostModal }) => {
    const [formData, setFormData] = useState({
        textContent: postToUpdate.post_content
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        updatePost()
    }

    const updatePost = () => {

        fetch(`api/posts/${postToUpdate.post_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(() => { setAllPosts([]) })
            .then(() => { setShowUpdatePostModal(false) })
            .catch(error => console.error(error))
    }

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="newPostDiv">
            <form onSubmit={handleSubmit} className='newPostForm' id='editPostForm'>
                <input type='submit' value='Update Post'
                    id='editPostSubmitBtn' />
                <textarea
                    id='editPostTextArea'
                    className="textareaNewPost"
                    name="textContent"
                    value={formData.textContent}
                    onChange={handleChange}
                    rows="7"
                    cols="40"
                /> <br />


            </form>
        </div>
    )
}

export default UpdatePostForm