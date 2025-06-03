import React from 'react'
import BasePage from '../../components/BasePage'

const CreditNote = () => {
    const ReceiptsidebarData = [
      { name: "List", onClick: () => {},navigate: "/dashboard/receipt/list" },
  { name: "Print", onClick: () => {} },
  { name: "Payment", onClick: () => {} ,navigate: "/dashboard/payment" },
  { name: "Receipt", onClick: () => {} ,navigate: "/dashboard/receipt"},
  { name: "Journal", onClick: () => {} ,navigate: "/dashboard/journal"},
  { name: "Contra", onClick: () => {} , navigate: "/dashboard/contra"},
  { name: "C/Note", onClick: () => {} },
  { name: "D/Note", onClick: () => {} },
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
      <BasePage heading="Voucher Entry" subHeading='Credit Note W/O st' mode="CreditNote" Sidebardata={ReceiptsidebarData}/>
    </div>
  )
}

export default CreditNote
