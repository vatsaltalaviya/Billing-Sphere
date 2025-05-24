import React from 'react'
import Datatable from './Datatable'

const MasterPart = () => {
  const tableData = [
    {
      Sr: 1,
      "Item Name": "Chocolate Box",
      "Code No": "1212",
      Group: "General",
      Retail: 125,
      MRP: 150,
      "Cl.Stk": "0 Kg",
      Active: "Yes",
    },
    {
      Sr: 2,
      "Item Name": "Maggie box",
      "Code No": "121212",
      Group: "General",
      Retail: 130,
      MRP: 170,
      "Cl.Stk": "0 Kg",
      Active: "Yes",
    },
    {
      Sr: 3,
      "Item Name": "pasta Box",
      "Code No": "721641",
      Group: "General",
      Retail: 105,
      MRP: 130,
      "Cl.Stk": "0 Kg",
      Active: "Yes",
    },
   
  ];
  return (
    <div className='h-full w-full'>
      {/* ----------------------------- search ----------------------------------------------- */}
      <div className='w-full py-3'>
        <form className='flex'>
          <button className='bg-white border font-medium px-3 py-1'>Search</button>
          <input type="text" className='bg-white border font-medium px-3 py-1 w-full' />
        </form>
      </div>
      {/* -------------------------------- table ------------------------------ */}
      <div className='w-full h-[70vh] table-data overflow-y-auto'>
        <Datatable data={tableData}/>
      </div>
    </div>
  )
}

export default MasterPart
