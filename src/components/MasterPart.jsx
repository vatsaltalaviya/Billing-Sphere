import React, { useEffect } from 'react'
import Datatable from './Datatable'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../feature/itemSlice'
import { ScaleLoader } from 'react-spinners'
import NoTableData from './NoTableData'

const MasterPart = ({ getitemUrl }) => {
const dispatch = useDispatch()
  const {items , loading ,groupMap , itemDelete} = useSelector((state)=>state.items)

  useEffect(()=>{
   dispatch(fetchItems())
  },[])

  useEffect(()=>{
   dispatch(fetchItems())
  },[itemDelete])
 

 
  const tableData = items.map((item, index) => ({
    Sr: index + 1,
    id: item._id,
    "Item Name": item.itemName,
    "Code No": item.codeNo,
    Group: groupMap[item.itemGroup] || "Loading...", // ✅ safe access
    Retail: item.retail,
    MRP: item.mrp,
    "Cl.Stk": item.maximumStock,
    Active: item.status,
  }));
  return (
    <div className='h-full w-full xl:px-5'>
      {/* ----------------------------- search ----------------------------------------------- */}
      <div className='w-full py-3 '>
        <form className='flex'>
          <button className='bg-white border font-medium px-3 py-1'>Search</button>
          <input type="text" className='bg-white border font-medium px-3 py-1 w-full' />
        </form>
      </div>
      {/* -------------------------------- table ------------------------------ */}
      {loading ? <div className={`w-full flex justify-center items-center min-h-[80vh] max-h-[85vh] table-data overflow-y-auto`}>
       <ScaleLoader height='30px' color='blue' />
        {/* <span className='w-[70px] rounded-full bb h-[70px] border-4 border-gray-200 animate-spin'></span> */}
      </div>:
      <div className={`w-full flex justify-center max-h-[85vh] min-h-[80vh] table-data overflow-y-auto`}>
        {items && (items.length > 0 ? <Datatable mode="item" getitemUrl={getitemUrl} list={tableData}/>:<NoTableData mode="item"/>)}
        
      </div>}
     
      
    </div>
  )
}

export default MasterPart
