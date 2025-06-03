import React from 'react'
import BasePage from '../../components/BasePage'

const GstExp = () => {
   const ReceiptsidebarData = [
      { name: "List", onClick: () => {},navigate: "/dashboard/receipt/list" },
  { name: "Print", onClick: () => {} },
  { name: "Payment", onClick: () => {} ,navigate: "/dashboard/payment" },
  { name: "Receipt", onClick: () => {} ,navigate: "/dashboard/receipt"},
  { name: "Journal", onClick: () => {} ,navigate: "/dashboard/journal"},
  { name: "Contra", onClick: () => {} , navigate: "/dashboard/contra"},
  { name: "C/Note", onClick: () => {} , navigate: "/dashboard/creditnote"},
  { name: "D/Note", onClick: () => {} ,navigate: "/dashboard/debitnote"},
  { name: "GST Exp", onClick: () => {} },
  { name: "Previous", onClick: () => {} },
  { name: "Next", onClick: () => {} },
  { name: "Audit Trail", onClick: () => {} },
  { name: "Change Vch", onClick: () => {} },
  { name: "Goto Date", onClick: () => {} },
  { name: "Attach. Img", onClick: () => {} },
  { name: "Vch Setup", onClick: () => {} },
  { name: "Print Setup", onClick: () => {} },]

  return (
    <div>
      <BasePage heading="Voucher Entry" subHeading='GST Expense' mode="GST" Sidebardata={ReceiptsidebarData}/>
    </div>
  
  )
}

export default GstExp
