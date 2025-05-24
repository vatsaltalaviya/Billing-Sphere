import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AddItem from './pages/Items/AddItem'
import Item from './pages/Items/Item'

const App = () => {
  return (
    <>
    <div className='xl:h-screen bg-gradient-to-r from-[#f1f2b5] to-[#135058] bg-fixed bg-no-repeat bg-cover'>
    <Routes>
      <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<Home />} />
      <Route path='/dashboard/items' element={<Item />} /> 
      <Route path='/dashboard/items/new' element={<AddItem />} /> 
      <Route path='/dashboard/items/edit/:editid' element={<AddItem />} /> 
      <Route path='/dashboard/items/delete/:deleteid' element={<AddItem />} /> 
    </Routes>
    </div>
    </>
  )
}

export default App