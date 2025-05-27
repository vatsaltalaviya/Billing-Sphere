import React from 'react'
import BasePage from '../../components/BasePage'

const Purchase = () => {
    const salesSidebarData = ["List","New","Print","All Print","Change Type","Search Item","New Line","Audit Trail","Previous","Next","Search No","Attach. Img","Vch Setup","Print Setup"]
  return (
    <div className='w-full'>
      <BasePage heading="Purchase Entry" subHeading='Retail Purchase' mode="Purchase" Sidebardata={salesSidebarData} />
    </div>
  )
}

export default Purchase
