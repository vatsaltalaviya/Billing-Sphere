import React from 'react'
import PopUp from './PopUp'

const SystemErrorMessage = ({onClose ,message}) => {
  return (
   <PopUp onClose={onClose}>
    <div className='xl:w-[400px] p-2 border bg-white flex flex-col'>
      <h1 className='text-xl font-medium text-center py-2'>System Error</h1>
      <p className='text-center text-red-500 font-medium'>{message}</p>
      <div className='flex justify-center mt-4'>
        <button onClick={()=> onClose()} className='px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500'>
          Close
        </button>
      </div>

    </div>
   </PopUp>
  )
}

export default SystemErrorMessage
