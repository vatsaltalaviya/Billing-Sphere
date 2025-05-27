import React from 'react'
import BasePage from '../../components/BasePage'

const Payment = () => {
    const ReceiptsidebarData = ["List","Print","Payment","Receipt","Journal","Contra","C/Note","D/Note","GST Exp","Previous","Next","Audit Trail","Change Vch","Goto Date","Attach. Img","Vch Setup","Print Setup"]
  return (
    <div>
      <BasePage heading="Voucher Entry" subHeading="Payment" mode="Payment" Sidebardata={ReceiptsidebarData}/>
    </div>
  )
}

export default Payment
