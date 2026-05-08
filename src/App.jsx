import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Memo from './pages/memo/Memo'
import Todo from './pages/todo/Todo'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/memo' element={<Memo />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </>
  )
}

export default App
