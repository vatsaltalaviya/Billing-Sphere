import React, { useState } from "react";
import BasePage from "../components/BasePage";
import ReminderReceivable from "./ReminderReceivable";

  
  
const ReceivableTable = () => {
    const [showReminder, setshowReminder] = useState(false)
      const receivableSidebar = [
        {name:"Print" , onClick: ()=>{}},
        {name:"Report" , onClick: ()=>{}},
        {name:"StateMent" , onClick: ()=>{}},
        {name:"Make Payment" , onClick: ()=>{}},
        {name:"Auto Adj." , onClick: ()=>{}},
        {name:"Reminder" , onClick: ()=>{setshowReminder(true)}},
        {name:"AgeWise" , onClick: ()=>{}},
        {name:"BillWise" , onClick: ()=>{}},
        {name:"Prn Color" , onClick: ()=>{}},
        {name:"Prn Short" , onClick: ()=>{}},
        {name:"XLS" , onClick: ()=>{}},
        {name:"Find" , onClick: ()=>{}},
        {name:"Find Next" , onClick: ()=>{}},
        {name:"Quick Entry" , onClick: ()=>{}},
        {name:"WhatsApp" , onClick: ()=>{}},
    ]
  return (
   <div>
      <BasePage heading="Receivable Adjustment" mode="ReceivableTable" Sidebardata={receivableSidebar}/>
      {showReminder && <ReminderReceivable onClose={()=>setshowReminder(false)}/>}
    </div>
  );
};

export default ReceivableTable;
