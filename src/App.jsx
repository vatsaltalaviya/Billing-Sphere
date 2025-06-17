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
import ItemGroup from './pages/Items/ItemGroup'
import Brand from './pages/Items/Brand'
import HsnPage from './pages/Items/HsnPage'
import BulkItemUpd from './pages/Items/BulkItemUpd'
import Filteritem from './pages/Items/Filteritem'
import ImgGallery from './pages/Items/ImgGallery'
import Receivable from './pages/Receivable'
import ReceivableTable from './pages/ReceivableTable'
import RecTabReport from './components/RecTabReport'
import ProtectedRoute from './components/ProtectedRoute'
import Rack from './pages/Items/Rack'
import StockUnit from './pages/Items/StockUnit'
import TaxCategory from './pages/Items/TaxCategory'
import UpdateItem from './pages/Items/UpdateItem'
import UpDateLedger from './pages/Ledger/UpDateLedger'

const App = () => {
  return (
    <>
    {/* bg-[url("https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?ga=GA1.1.1175547896.1749882111&semt=ais_hybrid&w=740")] */}
    <div className='xl:h-screen bg-white bg-fixed bg-no-repeat bg-cover'>
      <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
      <Route path='/' element={<Login />} />
     <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />

     {/* items */}
      <Route path='/dashboard/items' element={<ProtectedRoute><Item /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/new' element={<ProtectedRoute><AddItem /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/itemgroup' element={<ProtectedRoute><ItemGroup /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/brand' element={<ProtectedRoute><Brand /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/hsn' element={<ProtectedRoute><HsnPage /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/rack' element={<ProtectedRoute><Rack /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/stockUnit' element={<ProtectedRoute><StockUnit /></ProtectedRoute>} /> 
      <Route path='/dashboard/items/taxcategory' element={<ProtectedRoute><TaxCategory /></ProtectedRoute>} /> 
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