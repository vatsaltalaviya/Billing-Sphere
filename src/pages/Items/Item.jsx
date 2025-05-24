import React from 'react'
import Datatable from '../../components/Datatable';
import BasePage from '../../components/BasePage';

const Item = () => {
   const ItemSidebardata = ["New","Edit","Delete","Export to excel","Bulk Upd" , "Op. Balance", "MultiEdit","Filters","MinMax up","Copy item","Img galary","Dup Items","Non/Used"]
  return (
    <div className='w-full'>
      <BasePage Sidebardata={ItemSidebardata}/>
    </div>
  )
}

export default Item
