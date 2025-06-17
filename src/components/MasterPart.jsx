import React, { useEffect, useState } from 'react'
import Datatable from './Datatable'
import { useDispatch, useSelector } from 'react-redux'
import { ScaleLoader } from 'react-spinners'
import NoTableData from './NoTableData'
import { setItemSearchQuery, } from '../feature/itemSlice'
import { setLedgerSearchQuery } from '../feature/ledgerSlice'


const MasterPart = ({ getitemUrl , mode ,tableData}) => {
    const { loading } = useSelector((state)=>state.items)
    const dispatch = useDispatch();
  const query = useSelector((state) => state.items.searchquery);
  const ledgerquery = useSelector((state) => state.ledgers.searchledgerquery);
    
  return (
    <div className='h-full w-full xl:px-5'>
      {/* ----------------------------- search ----------------------------------------------- */}
      <div className='w-full py-3 '>
        <form className='flex'>
          <span className='bg-white border font-medium px-3 py-1'>Search</span>
          {(mode == "item")&&<input type="text" className='bg-white border font-medium px-3 py-1 w-full'  value={query} onChange={(e) => dispatch(setItemSearchQuery(e.target.value))} />}
          {(mode == "ledgers")&&<input type="text" className='bg-white border font-medium px-3 py-1 w-full'  value={ledgerquery} onChange={(e) => dispatch(setLedgerSearchQuery(e.target.value))} />}
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
