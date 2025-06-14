import React from 'react'
import PopUp from './PopUp'

const DeleteAlert = ({onClose , onYes ,field}) => {
  return (
    <PopUp>
        <div className='w-sm bg-white rounded-2xl border-2 p-4 py-10'>
            <div className='w-full'>
                <img className='w-20 mx-auto' src="https://cdn-icons-png.freepik.com/256/12236/12236949.png?ga=GA1.1.1175547896.1749882111&semt=ais_hybrid" alt="" />
            </div>
            <div className='px-2 py-5 w-full'>
                <h1 className='text-xl font-semibold text-center'> Delete {field}</h1>
                <h1 className='text-xl font-medium text-center'>Are You sure to delete {field} ?</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
                <button onClick={()=>[onYes(),onClose()]} className='flex-1 px-2 py-2 text-xl font-medium border rounded-xl  hover:bg-black hover:text-white'>Yes</button>
                <button onClick={()=>onClose()} className='flex-1 px-2 py-2 text-xl font-medium border rounded-xl hover:bg-black hover:text-white'>No</button>
            </div>
        </div>
    </PopUp>
  )
}

export default DeleteAlert
