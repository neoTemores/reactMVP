import React, { useRef } from 'react';
import ReactDom from "react-dom";

const UpdatePostModal = ({ postToUpdate, setAllPosts, setShowUpdatePostModal }) => {

    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            return setShowUpdatePostModal(false)
        }
    }

    //! create text area inside modal and display post_content as value for user to edit
    //! p tag on line just proof that we have the content text
    //! copy new post modal format. Create an update form and import. 
    //!use newpostmodal/Modal.js & newpostmodal/NewPostForm.jsx as template
    //!create controlled component inisde the UpdatePostForm and send update request from that file
    //! UpdatePostForm == newpostmodal/NewPostForm.js,  but will patch current post with new text from TextArea

    return ReactDom.createPortal(
        <div className='modalContainer' ref={modalRef} onClick={closeModal}>
            <div className='newPostContainer'>
                <p>{postToUpdate[0].post_content}</p>
                {/* <NewPostForm setAllPosts={setAllPosts} currentUser={currentUser} setShowModal={setShowModal} /> */}
                <button className='newPostCloseBtn' onClick={() => setShowUpdatePostModal(false)}> X </button>
            </div>
        </div>,
        document.getElementById('portal')
    )

}

export default UpdatePostModal