import React from 'react'
import Datatable from './Datatable'

const MasterPart = ({tableData}) => {
  
  return (
    <div className='h-full w-full'>
      {/* ----------------------------- search ----------------------------------------------- */}
      <div className='w-full py-3'>
        <form className='flex'>
          <button className='bg-white border font-medium px-3 py-1'>Search</button>
          <input type="text" className='bg-white border font-medium px-3 py-1 w-full' />
        </form>
      </div>
      {/* -------------------------------- table ------------------------------ */}
      <div className='w-full h-[70vh] table-data overflow-y-auto'>
        <Datatable data={tableData}/>
      </div>
    </div>
  )
}

export default MasterPart
