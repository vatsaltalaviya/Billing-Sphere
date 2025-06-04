import React, { useState } from 'react'
import BasePage from '../components/BasePage'
import ChangeReVoucher from './ChangeReVoucher';
import AttachImage from './AttachImage';

const Receipt = () => {

  const [showVoucher, setshowVoucher] = useState(false);

  const [triggerPrevious, setTriggerPrevious] = useState(1);
  const [focusDateTrigger, setFocusDateTrigger] = useState(false);
  const [showAttachImages, setshowAttachImages] = useState(false);


    const ReceiptsidebarData = [
      { name: "List", onClick: () => {},navigate: "/dashboard/receipt/list" },
  { name: "Print", onClick: () => {},navigate: "/dashboard/print" },
  { name: "Payment", onClick: () => {} ,navigate: "/dashboard/payment" },
  { name: "Receipt", onClick: () => {} ,navigate: "/dashboard/receipt"},
  { name: "Journal", onClick: () => {} ,navigate: "/dashboard/journal"},
  { name: "Contra", onClick: () => {} , navigate: "/dashboard/contra"},
  { name: "C/Note", onClick: () => {} , navigate: "/dashboard/creditnote"},
  { name: "D/Note", onClick: () => {} ,navigate: "/dashboard/debitnote"},
  { name: "GST Exp", onClick: () => {} ,navigate: "/dashboard/gstexpense"},
  { name: "Previous", onClick: () => {setTriggerPrevious(prev => (prev > 1 ? prev - 1 : 1))} },
  { name: "Next", onClick: () => {setTriggerPrevious(prev => ( prev + 1))} },
  { name: "Audit Trail", onClick: () => {} },
  { name: "Change Vch", onClick: () => {setshowVoucher(true)} },
  { name: "Goto Date", onClick: () => {setFocusDateTrigger((p)=> !p)} },
  { name: "Attach. Img", onClick: () => {setshowAttachImages(true)} },
  { name: "Vch Setup", onClick: () => {} },
  { name: "Print Setup", onClick: () => {} },]

 
  return (
    <div>
      <BasePage heading="Voucher Entry" subHeading='Receipt' mode="Receipt" Sidebardata={ReceiptsidebarData} triggerPrevious={triggerPrevious} focusDateTrigger={focusDateTrigger}/>

      {showVoucher && <ChangeReVoucher onClose={()=>setshowVoucher(false)}/>}
      {showAttachImages && <AttachImage onClose={() => setshowAttachImages(false)} />}
    </div>
  )
}

export default Receipt
