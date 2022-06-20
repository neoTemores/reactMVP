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

    return ReactDom.createPortal(
        <div className='modalContainer' ref={modalRef} onClick={closeModal}>
            <div className='newPostContainer'>
                <UpdatePostForm postToUpdate={postToUpdate[0]} setAllPosts={setAllPosts} setShowUpdatePostModal={setShowUpdatePostModal} />
                <button className='newPostCloseBtn' onClick={() => setShowUpdatePostModal(false)}> X </button>
            </div>
        </div>,
        document.getElementById('portal')
    )

}

export default UpdatePostModal