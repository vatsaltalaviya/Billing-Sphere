import React, { useState } from 'react'
import BasePage from '../components/BasePage'

const Receivable = () => {

    const receivableSidebar = [
        {name:"Print" , onclick: ()=>{}, navigate:`/dashboard/print`},
        {name:"Report" , onclick: ()=>{},navigate: `/dashboard/receivable`},
        {name:"StateMent" , onclick: ()=>{}},
        {name:"Make Payment" , onclick: ()=>{}},
        {name:"Prn Color" , onclick: ()=>{}},
        {name:"Prn Short" , onclick: ()=>{}},
        {name:"XLS" , onclick: ()=>{}},
        {name:"Find" , onclick: ()=>{}},
        {name:"Find Next" , onclick: ()=>{}},
        {name:"Quick Entry" , onclick: ()=>{}},
        {name:"WhatsApp" , onclick: ()=>{}},
    ]
  return (
    <div>
      <BasePage heading="Receivable Adjustment" mode="Receivable" Sidebardata={receivableSidebar}/>
    </div>
  )
}

export default Receivable
