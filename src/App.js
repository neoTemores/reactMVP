import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoginPage from "./components/loginpage/LoginPage";
import Navbar from "./components/Navbar";
import Modal from "./components/newpostmodal/Modal.jsx"
import Home from "./components/homepage/Home";
import MyPosts from "./components/mypostspage/MyPosts";
import UserPosts from "./components/userpostspage/UserPosts";
import Settings from './components/settingspage/Settings'
import About from './components/aboutpage/About'


const App = () => {
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLogIn] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [allPosts, setAllPosts] = useState([])
  const [clickedUserPosts, setClickedUserPosts] = useState(null)

  let body = document.getElementById('body');

  loading ? body.classList.add('loading') : body.classList.remove('loading')

  useEffect(() => {
    fetchAllPosts()
  }, [allPosts.length])


  const fetchAllPosts = () => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setAllPosts(data))
      .catch((error) => console.log(error))
  }

  // const fetchAllPosts = async () => {
  //   const res = await fetch('/api/posts')
  //   const data = await res.json()
  //   return setAllPosts(data)
  // }

  if (!loggedIn) {
    return <LoginPage setLogIn={setLogIn} setCurrentUser={setCurrentUser} setLoading={setLoading} />
  }
  if (loggedIn) {
    currentUser.darktheme ? body.classList.add('darkTheme') : body.classList.remove('darkTheme')
  }

  const openModal = () => {
    setShowModal(true)
  }


  return (
    <>

      <Navbar openModal={openModal} setCurrentUser={setCurrentUser} currentUser={currentUser} />
      {showModal ? <Modal setShowModal={setShowModal} setAllPosts={setAllPosts} currentUser={currentUser} /> : null}
      <div className="App">

        <Routes>
          <Route exact path='/' element={<Home allPosts={allPosts} setClickedUserPosts={setClickedUserPosts} currentUser={currentUser} />} />
          <Route exact path='/myPosts' element={<MyPosts currentUser={currentUser} allPosts={allPosts} setAllPosts={setAllPosts} />} />
          <Route exact path='/userPosts' element={<UserPosts clickedUserPosts={clickedUserPosts} />} />
          <Route exact path='/settings' element={<Settings currentUser={currentUser} setCurrentUser={setCurrentUser} setLogIn={setLogIn} setAllPosts={setAllPosts} />} />
          <Route exact path='/about' element={<About />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
