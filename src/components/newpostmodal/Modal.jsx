import React, { useRef } from 'react';
import ReactDom from "react-dom";
import NewPostForm from "./NewPostForm"

const Modal = ({ setShowModal, setAllPosts, currentUser }) => {

    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            return setShowModal(false)
        }
    }

    return ReactDom.createPortal(
        <div className='modalContainer' ref={modalRef} onClick={closeModal}>
            <div className='newPostContainer'>
                <NewPostForm setAllPosts={setAllPosts} currentUser={currentUser} setShowModal={setShowModal} />
                <button className='newPostCloseBtn' onClick={() => setShowModal(false)}> X </button>
            </div>
        </div>,
        document.getElementById('portal')
    )

}

export default Modal