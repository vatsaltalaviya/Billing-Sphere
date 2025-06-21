import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Brand from './pages/itemMaster/Brand/Brand';
import BulkItemUpd from './pages/Items/BulkItemUpd'
import Filteritem from './pages/Items/Filteritem'
import ImgGallery from './pages/Items/ImgGallery'
import Receivable from './pages/Receivable'
import ReceivableTable from './pages/ReceivableTable'
import RecTabReport from './components/RecTabReport'
import ProtectedRoute from './components/ProtectedRoute'
import Rack from './pages/itemMaster/Storelocation/Rack'; 
import UpdateItem from './pages/Items/UpdateItem'
import UpDateLedger from './pages/Ledger/UpDateLedger'
import AddItemGroup from './pages/itemMaster/Itemgroup/AddItemGroup';
import ItemGroup from './pages/itemMaster/Itemgroup/ItemGroup';
import UpdateItemGroup from './pages/itemMaster/Itemgroup/UpdateItemGroup';
import AddHsnPage from './pages/itemMaster/Hsn/AddHsnPage';
import Hsn from './pages/itemMaster/Hsn/Hsn';
import Updatehsn from './pages/itemMaster/Hsn/Updatehsn';
import Tax from './pages/itemMaster/Tax/Tax';
import Addtax from './pages/itemMaster/Tax/Addtax';
import Updatetax from './pages/itemMaster/Tax/Updatetax';
import AddBrand from './pages/itemMaster/Brand/Addbrand';
import Updatebrand from './pages/itemMaster/Brand/Updatebrand';
import Addunit from './pages/itemMaster/Unit/Addunit';
import Unit from './pages/itemMaster/Unit/Unit';
import Updateunit from './pages/itemMaster/Unit/Updateunit';
import Addrack from './pages/itemMaster/Storelocation/Addrack';
import Updaterack from './pages/itemMaster/Storelocation/Updaterack';

const App = () => {
  return (
    <>
    <div className='xl:h-screen bg-white bg-fixed bg-no-repeat bg-cover'>
      <ToastContainer position="top-right" autoClose={1000} />
    <Routes>
      <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />

     {/* items */}
      <Route path='/dashboard/items' element={<ProtectedRoute><Item /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/new' element={<ProtectedRoute><AddItem /></ProtectedRoute>} /> 
      
      <Route path='/dashboard/items/itemgroup' element={<ProtectedRoute><ItemGroup /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/additemgroup' element={<ProtectedRoute><AddItemGroup /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/edititemgroup/:id' element={<ProtectedRoute><UpdateItemGroup /></ProtectedRoute>} /> 
      
      <Route path='/dashboard/items/brand' element={<ProtectedRoute><Brand /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/addbrand' element={<ProtectedRoute><AddBrand /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/editbrand/:id' element={<ProtectedRoute><Updatebrand /></ProtectedRoute>} /> 
      
      <Route path='/dashboard/items/hsn' element={<ProtectedRoute><Hsn /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/addhsn' element={<ProtectedRoute><AddHsnPage /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/edithsn/:id' element={<ProtectedRoute><Updatehsn /></ProtectedRoute>} /> 

      <Route path='/dashboard/items/rack' element={<ProtectedRoute><Rack /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/addrack' element={<ProtectedRoute><Addrack /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/editrack/:id' element={<ProtectedRoute><Updaterack /></ProtectedRoute>} /> 
      
      <Route path='/dashboard/items/unit' element={<ProtectedRoute><Unit /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/addunit' element={<ProtectedRoute><Addunit /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/editunit/:id' element={<ProtectedRoute><Updateunit /></ProtectedRoute>} /> 
      
      <Route path='/dashboard/items/tax' element={<ProtectedRoute><Tax /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/addtax' element={<ProtectedRoute><Addtax /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/edittax/:id' element={<ProtectedRoute><Updatetax /></ProtectedRoute>} /> 
      
      <Route path='/dashboard/items/fi' element={<ProtectedRoute><Filteritem /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/bu' element={<ProtectedRoute><BulkItemUpd /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/gallery' element={<ProtectedRoute><ImgGallery /></ProtectedRoute>} /> 

      <Route path='/dashboard/items/edit/:editid' element={<ProtectedRoute><UpdateItem /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/delete/:deleteid' element={<ProtectedRoute><UpdateItem /></ProtectedRoute>} /> 


      <Route path='/dashboard/receivable' element={<Receivable />} /> 
      <Route path='/dashboard/receivable/receivereport' element={<ReceivableTable />} /> 
      {/* <Route path='/dashboard/receivable/ra' element={<RecTabReport />} />  */}

      {/* ledger */}
      <Route path='/dashboard/ledger' element={<ProtectedRoute><Ledger /></ProtectedRoute>} /> 
      <Route path='/dashboard/ledger/new' element={<ProtectedRoute><AddLedger /></ProtectedRoute>} /> 
      <Route path='/dashboard/ledger/edit/:editid' element={<ProtectedRoute><UpDateLedger /></ProtectedRoute>} /> 
      <Route path='/dashboard/ledger/delete/:deleteid' element={<AddLedger />} />  
      
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