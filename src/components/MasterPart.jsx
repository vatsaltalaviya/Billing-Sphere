import React, { useEffect } from 'react'
import Datatable from './Datatable'
import { useDispatch, useSelector } from 'react-redux'
import { ScaleLoader } from 'react-spinners'
import NoTableData from './NoTableData'


const MasterPart = ({ getitemUrl , mode ,tableData}) => {
    const { loading } = useSelector((state)=>state.items)
    
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
      </div>:
      <div className={`w-full flex justify-center max-h-[85vh] min-h-[80vh] table-data overflow-y-auto`}>
        {(mode == "item")&&tableData && (tableData.length > 0 ? <Datatable mode={mode} getitemUrl={getitemUrl} list={tableData}/>:<NoTableData mode={mode}/>)}
        {(mode == "ledgers")&&tableData && (tableData.length > 0 ? <Datatable mode={mode} getitemUrl={getitemUrl} list={tableData}/>:<NoTableData mode="item"/>)}
      </div>}
     
      
    </div>
  )
}

export default MasterPart
