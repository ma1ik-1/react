import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts'
import Comments from './Components/Comments'
import Albums from './Components/Albums'
import Photos from './Components/Photos'
import Todos from './Components/Todos'
import Users from './Components/Users'

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/posts' element={<Posts/>}></Route>
    <Route path='/comments' element={<Comments/>}></Route>
    <Route path='/Albums' element={<Albums/>}></Route>
    <Route path='/Photos' element={<Photos/>}></Route>
    <Route path='/Todos' element={<Todos/>}></Route>
    <Route path='/Users' element={<Users/>}></Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App;