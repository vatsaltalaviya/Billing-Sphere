import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AddItem from './pages/Items/AddItem'
import Item from './pages/Items/Item'
import Ledger from './pages/Ledger/Ledger'
import AddLedger from './pages/Ledger/AddLedger'
import Sales from './pages/Sales'
import Purchase from './pages/Purchase'
import Receipt from './pages/Receipt'
import Payment from './pages/Payment'
import List from './pages/List'
import PrintPage from './components/PrintPage'
import Journal from './pages/Journal'
import Contra from './pages/Contra'
import CreditNote from './pages/CreditNote'
import DebitNote from './pages/DebitNote'
import GstExp from './pages/GstExp'
import ItemGroup from './pages/Items/ItemGroup'
import Brand from './pages/Items/Brand'
import HsnPage from './pages/Items/HsnPage'
import BulkItemUpd from './pages/Items/BulkItemUpd'
import Filteritem from './pages/Items/Filteritem'
import ImgGallery from './pages/Items/ImgGallery'
import Receivable from './pages/Receivable'

const App = () => {
  return (
    <>
    <div className='xl:h-screen bg-white bg-fixed bg-no-repeat bg-cover'>
    <Routes>
      <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<Home />} />

     {/* items */}
      <Route path='/dashboard/items' element={<Item />} /> 
      <Route path='/dashboard/items/new' element={<AddItem />} /> 
      <Route path='/dashboard/items/itemgroup' element={<ItemGroup />} /> 
      <Route path='/dashboard/items/brand' element={<Brand />} /> 
      <Route path='/dashboard/items/brand' element={<HsnPage />} /> 
      <Route path='/dashboard/items/fi' element={<Filteritem />} /> 
      <Route path='/dashboard/items/bu' element={<BulkItemUpd />} /> 
      <Route path='/dashboard/items/gallery' element={<ImgGallery />} /> 

      <Route path='/dashboard/items/edit/:editid' element={<AddItem />} /> 
      <Route path='/dashboard/items/edit' element={<AddItem />} /> 
      <Route path='/dashboard/items/delete/:deleteid' element={<AddItem />} /> 
      <Route path='/dashboard/items/delete' element={<AddItem />} /> 


      <Route path='/dashboard/receivable' element={<Receivable />} /> 

      {/* ledger */}
      <Route path='/dashboard/ledger' element={<Ledger />} /> 
      <Route path='/dashboard/ledger/new' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/edit/:editid' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/edit' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/delete/:deleteid' element={<AddLedger />} /> 
      <Route path='/dashboard/ledger/delete' element={<AddLedger />} /> 
      
      {/* sales */}
      <Route path='/dashboard/sales' element={<Sales />} /> 
      <Route path='/dashboard/sales/list' element={<List mode="sales"/>} /> 


      <Route path='/dashboard/purchase' element={<Purchase />} /> 
      <Route path='/dashboard/purchase/list' element={<List mode="purchase"/>} />   

      <Route path='/dashboard/receipt' element={<Receipt />} /> 
      <Route path='/dashboard/receipt/list' element={<List mode="receipt"/>} />

      <Route path='/dashboard/payment' element={<Payment />} /> 
      <Route path='/dashboard/payment/list' element={<List mode="payment"/>} />   
      
      <Route path='/dashboard/journal' element={<Journal />} /> 
      <Route path='/dashboard/contra' element={<Contra />} /> 
      <Route path='/dashboard/creditnote' element={<CreditNote />} /> 
      <Route path='/dashboard/debitnote' element={<DebitNote />} /> 
      <Route path='/dashboard/gstexpense' element={<GstExp />} /> 
      <Route path='/dashboard/print' element={<PrintPage />} /> 
      
    </Routes>
    </div>
    </>
  )
}

export default App