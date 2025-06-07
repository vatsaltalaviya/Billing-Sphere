import React from "react";
import BasePage from "../components/BasePage";

    const receivableSidebar = [
        {name:"Print" , onclick: ()=>{}},
        {name:"Report" , onclick: ()=>{}},
        {name:"StateMent" , onclick: ()=>{}},
        {name:"Make Payment" , onclick: ()=>{}},
        {name:"Auto Adj." , onclick: ()=>{}},
        {name:"Reminder" , onclick: ()=>{}},
        {name:"AgeWise" , onclick: ()=>{}},
        {name:"BillWise" , onclick: ()=>{}},
        {name:"Prn Color" , onclick: ()=>{}},
        {name:"Prn Short" , onclick: ()=>{}},
        {name:"XLS" , onclick: ()=>{}},
        {name:"Find" , onclick: ()=>{}},
        {name:"Find Next" , onclick: ()=>{}},
        {name:"Quick Entry" , onclick: ()=>{}},
        {name:"WhatsApp" , onclick: ()=>{}},
    ]
  
const ReceivableTable = () => {
  return (
   <div>
      <BasePage heading="Receivable Adjustment" mode="ReceivableTable" Sidebardata={receivableSidebar}/>
    </div>
  );
};

export default ReceivableTable;
