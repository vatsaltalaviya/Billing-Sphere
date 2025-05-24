import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AddItem from './pages/Items/AddItem'
import Item from './pages/Items/Item'

const App = () => {
  return (
    <>
    <div className='h-screen bg-[url("https://img.freepik.com/free-vector/dollar-sign-pattern-background_23-2150979310.jpg?ga=GA1.1.775609723.1747975701&semt=ais_hybrid&w=740")] bg-no-repeat bg-cover'>
    <Routes>
      <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<Home />} />
      <Route path='/dashboard/items' element={<Item />} /> 
      <Route path='/dashboard/items/new' element={<AddItem />} /> 
      <Route path='/dashboard/items/edit' element={<AddItem />} /> 
    </Routes>
    </div>
    </>
  )
}

export default App