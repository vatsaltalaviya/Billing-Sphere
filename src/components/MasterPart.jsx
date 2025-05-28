import React from 'react'
import Datatable from './Datatable'

const MasterPart = ({tableData }) => {
  
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
      <div className={`w-full max-h-[85vh] table-data overflow-y-auto xl:border-b`}>
        <Datatable data={tableData}/>
      </div>
    </div>
  )
}

export default MasterPart
