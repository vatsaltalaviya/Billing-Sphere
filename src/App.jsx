import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AddItem from './pages/Items/AddItem'
import Item from './pages/Items/Item'
import Ledger from './pages/Ledger/Ledger'
import AddLedger from './pages/Ledger/AddLedger'
import Sales from './pages/Sales/Sales'
import Purchase from './pages/Purchase/Purchase'
import Receipt from './pages/Receipt/Receipt'
import Payment from './pages/Payment/Payment'
import Start from './pages/Start'

const App = () => {
  return (
    <>
    <div className='xl:h-screen bg-white bg-fixed bg-no-repeat bg-cover'>
    <Routes>
      <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<Home />} />
      <Route path='/dashboard/items' element={<Item />} /> 
      <Route path='/dashboard/items/new' element={<AddItem />} /> 
      <Route path='/dashboard/items/edit/:editid' element={<AddItem />} /> 
      <Route path='/dashboard/items/edit' element={<AddItem />} /> 
      <Route path='/dashboard/items/delete/:deleteid' element={<AddItem />} /> 
      <Route path='/dashboard/items/delete' element={<AddItem />} /> 

      <Route path='/dashboard/ledger' element={<Ledger />} /> 
      <Route path='/dashboard/ledger/new' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/edit/:editid' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/edit' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/delete/:deleteid' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/delete' element={<AddLedger />} /> 
      
      <Route path='/dashboard/sales' element={<Sales />} /> 
      <Route path='/dashboard/purchase' element={<Purchase />} /> 
      <Route path='/dashboard/receipt' element={<Receipt />} /> 
      <Route path='/dashboard/payment' element={<Payment />} /> 
      
    </Routes>
    </div>
    </>
  )
}

export default App