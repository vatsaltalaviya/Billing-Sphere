import React, { useState } from 'react'
import ButtonGroup from './ButtonGroup'
import MasterPart from './MasterPart'

const BasePage = ({Sidebardata}) => {

  const [showSidebar, setshowSidebar] = useState(false)

  return (
    <div className='h-screen w-full relative bg-white overflow-hidden'>
      <div className='bg-blue-600 flex justify-between xl:justify-center px-2 text-xl font-bold py-1.5 text-white'>
        <h1 className='text-center'>BASE COMPONENT</h1>
      <button
            className="text-xl px-5 block xl:hidden"
            onClick={() => setshowSidebar(!showSidebar)}
          >
            <i className="ri-menu-line "></i>
          </button>

      </div>
      <div className='flex justify-end'>
        <div className='w-full h-screen p-5 sm:p-2'>
            <MasterPart />
        </div>
        <div className='w-48 h-screen hidden xl:block '>
            <ButtonGroup className='w-full py-2 border mb-0.5 font-bold text-left px-3' data={Sidebardata} />
        </div>
        <div className={` w-64 bg-white transform transition-all absolute duration-200 z-10 ${
            showSidebar ? "translate-x-[0%]" : " translate-x-[200%]"
          }`}>
            <ButtonGroup className='w-full py-2 border mb-0.5 font-bold text-left px-3' data={Sidebardata} />
        </div>
      </div>
    </div>
  )
}

export default BasePage
