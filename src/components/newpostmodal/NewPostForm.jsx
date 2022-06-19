import React, { useState } from "react";

const NewPostForm = () => {
    const [formData, setFormData] = useState({
        textContent: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="textareaNewPost"
                    name="textContent"
                    value={formData.textContent}
                    onChange={handleChange}
                    rows="7"
                    cols="40"
                    placeholder="Whats on your mind?"
                /> <br />
                <input type='submit' value='Post' />

            </form>
        </div>
    )
}

export default NewPostForm