import React from 'react'
import PopUp from '../../components/PopUp'

const CopyItem = ({onClose}) => {
  return (
    <PopUp onClose={onClose}>
         <div className="w-full border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">
           Copy Item
          </h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className=" md:w-full p-2 md:space-y-1.5">
            <h1 className="text-xl font-medium text-purple-600">
             New Item Values
            </h1>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Item Name</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Print Name</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Item Type</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
          </div>
          <div className='flex  flex-col md:flex-row gap-2 px-2'>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Retail</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">MRP</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
          </div>
          <div className='flex  flex-col md:flex-row gap-2 px-2 pt-0.5'>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Item Group</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-2 px-2 py-0.5'>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Item Brand</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Code No</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
          </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button
              className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </PopUp>
  )
}

export default CopyItem
