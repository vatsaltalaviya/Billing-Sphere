import React from 'react'
import BasePage from '../../components/BasePage'

const Sales = () => {
    const salesSidebarData = ["List","New","Print","All Print","Change Type","Search Item","New Line","Audit Trail","Previous","Next","Search No","Attach. Img","Vch Setup","Print Setup"]
  return (
     <div className='w-full'>
      <BasePage heading="Sales Entry" subHeading="Bill of Supply" mode="Sales" Sidebardata={salesSidebarData} />
    </div>
  )
}

export default Sales
