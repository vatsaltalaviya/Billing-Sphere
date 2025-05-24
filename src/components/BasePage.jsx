import React from 'react'
import ButtonGroup from './ButtonGroup'
import MasterPart from './MasterPart'

const BasePage = ({Sidebardata}) => {

  return (
    <div className='h-screen w-full relative bg-white overflow-hidden'>
      <div className='bg-blue-600 text-xl font-bold py-1.5 text-white'>
        <h1 className='text-center'>BASE COMPONENT</h1>
      </div>
      <div className='flex justify-end'>
        <div className='w-full h-screen p-5'>
            <MasterPart />
        </div>
        <div className='w-48 h-screen'>
            <ButtonGroup className='w-full py-2 border mb-0.5 font-bold text-left px-3' data={Sidebardata} />
        </div>
      </div>
    </div>
  )
}

export default BasePage
