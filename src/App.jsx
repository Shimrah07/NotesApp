import React from 'react'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import NoteForm from './components/pages/NoteForm'
import Login from './components/pages/Login'
import NotesList from './components/pages/NotesList'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/notes" element={<NoteForm/>}  />
      <Route path="/notes" element={<NotesList/>}  />

    </Routes>
    
    </>

  )
}

export default App
