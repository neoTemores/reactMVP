import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoginPage from "./components/loginpage/LoginPage";
import Navbar from "./components/Navbar";
import Modal from "./components/newpostmodal/Modal.jsx"
import Home from "./components/homepage/Home";
import MyPosts from "./components/mypostspage/MyPosts";
import Settings from './components/settingspage/Settings'
import About from './components/aboutpage/About'


const App = () => {
  const [loggedIn, setLogIn] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    fetchAllPosts()
  }, [])

  const fetchAllPosts = async () => {
    const res = await fetch('http://localhost:8000/api/posts')
    const data = await res.json()
    return setAllPosts(data)
  }

  if (!loggedIn) {
    return <LoginPage setLogIn={setLogIn} setCurrentUser={setCurrentUser} />
  }

  const openModal = () => {
    setShowModal(true)
  }


  return (
    <>

      <Navbar openModal={openModal} setCurrentUser={setCurrentUser} currentUser={currentUser} />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}

      <div className="App">

        <Routes>
          <Route exact path='/' element={<Home allPosts={allPosts} />} />
          <Route exact path='/myPosts' element={<MyPosts />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/about' element={<About />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
