import React from 'react'
import BasePage from '../../components/BasePage';

const Item = () => {
 
 const ItemSidebarData = [
  { name: "New", onClick: () => {}, navigate:'/dashboard/items/new' },
  { name: "Edit", onClick: () => {} },
  { name: "Delete", onClick: () => {} },
  { name: "Export to excel", onClick: () => {} },
  { name: "Bulk Upd", onClick: () => {} },
  { name: "Op. Balance", onClick: () => {} },
  { name: "MultiEdit", onClick: () => {} },
  { name: "Filters", onClick: () => {} },
  { name: "MinMax up", onClick: () => {} },
  { name: "Copy item", onClick: () => {} },
  { name: "Img galary", onClick: () => {} },
  { name: "Dup Items", onClick: () => {} },
  { name: "Non/Used", onClick: () => {} }
];

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
    <div className='w-full'>
      <BasePage heading="Item Master" Sidebardata={ItemSidebarData} tableData={tableData}/>
    </div>
  )
}

export default Item
