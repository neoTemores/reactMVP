import React, { useRef } from 'react';
import ReactDom from "react-dom";
import UpdatePostForm from './UpdatePostForm'

const UpdatePostModal = ({ postToUpdate, setAllPosts, setShowUpdatePostModal }) => {

    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            return setShowUpdatePostModal(false)
        }
    }

    //! create text area inside modal and display post_content as value for user to edit
    //! copy new post modal format. import update post form
    //!use newpostmodal/Modal.js & newpostmodal/NewPostForm.jsx as template
    //!create controlled component inisde the UpdatePostForm and send update request from that file
    //! UpdatePostForm == newpostmodal/NewPostForm.js,  but will patch current post with new text from TextArea
    //! dont forget to setAllPosts([]) after PATCH req to trigger refresh via useEffect

    return ReactDom.createPortal(
        <div className='modalContainer' ref={modalRef} onClick={closeModal}>
            <div className='newPostContainer'>
                {/* <p>{postToUpdate[0].post_content}</p> */}
                {console.log(postToUpdate)}
                <UpdatePostForm postToUpdate={postToUpdate[0]} setAllPosts={setAllPosts} setShowUpdatePostModal={setShowUpdatePostModal} />
                {/* <NewPostForm setAllPosts={setAllPosts} currentUser={currentUser} setShowModal={setShowModal} /> */}
                <button className='newPostCloseBtn' onClick={() => setShowUpdatePostModal(false)}> X </button>
            </div>
        </div>,
        document.getElementById('portal')
    )

}

export default UpdatePostModal