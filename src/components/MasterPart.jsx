import React from 'react'
import Datatable from './Datatable'

const MasterPart = ({tableData , isLoading }) => {
  
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
      {isLoading ? <div className={`w-full flex justify-center items-center min-h-[60vh] max-h-[85vh] table-data overflow-y-auto`}>
        <span className='w-[70px] rounded-full bb h-[70px] border-4 border-gray-200 animate-spin'></span>
      </div>:
      <div className={`w-full flex justify-center max-h-[85vh] table-data overflow-y-auto xl:border-b`}>
        <Datatable list={tableData}/>
      </div>}
     
      
    </div>
  )
}

export default MasterPart
