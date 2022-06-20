import React, { useState } from "react";

const NewPostForm = ({ setAllPosts, currentUser, setShowModal }) => {
    const [formData, setFormData] = useState({
        textContent: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        createNewPost()
    }

    const createNewPost = () => {
        let postCreationData = {
            postContent: formData.textContent,
            userId: currentUser.user_id
        }

        fetch('api/posts/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postCreationData)
        })
            .then(res => res.json())
            .then(() => { setAllPosts([]) })
            .then(() => { setShowModal(false) })
            .catch(error => { console.error(error) })
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
            <form onSubmit={handleSubmit} className='newPostForm'>
                <input className='newPostSubBtn' type='submit' value='Post' />
                <textarea
                    className="textareaNewPost"
                    name="textContent"
                    value={formData.textContent}
                    onChange={handleChange}
                    rows="7"
                    cols="40"
                    placeholder="What's on your mind?"
                /> <br />

            </form>
        </div>
    )
}

export default NewPostForm