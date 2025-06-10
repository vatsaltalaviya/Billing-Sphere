import React, { useContext, useEffect, useState } from 'react'
import BasePage from '../../components/BasePage';
import OpItemBal from './OpItemBal';
import MinMaxQty from './MinMaxQty';
import CopyItem from './CopyItem';
import { userdataContext } from '../../context/UserContext';
import axios from 'axios';

const Item = () => {
   const {User} = useContext(userdataContext)
 const [showopitemBal, setOpitemBal] = useState(false)
 const [TableData, setTableData] = useState([])
 const [IsLoading, setIsLoading] = useState(null)
 const [showMinMax, setMinMax] = useState(false)
 const [showCopyItem, setshowCopyItem] = useState(false)

 const ItemSidebarData = [
  { name: "New", onClick: () => {}, navigate:'/dashboard/items/new' },
  { name: "Edit", onClick: () => {} ,navigate:`/dashboard/items/edit/1`},
  { name: "Delete", onClick: () => {} ,navigate:`/dashboard/items/delete/1`},
  { name: "Export to excel", onClick: () => {} },
  { name: "Bulk Upd", onClick: () => {} ,navigate:`/dashboard/items/bu` },
  { name: "Op. Balance", onClick: () => {setOpitemBal(true)} },
  { name: "MultiEdit", onClick: () => {} },
  { name: "Filters", onClick: () => {},navigate: `/dashboard/items/fi` },
  { name: "MinMax up", onClick: () => {setMinMax(true)} },
  { name: "Copy item", onClick: () => {setshowCopyItem(true)} },
  { name: "Img gallery", onClick: () => {}, navigate:`/dashboard/items/gallery` },
  { name: "Dup Items", onClick: () => {} },
  { name: "Non/Used", onClick: () => {} }
];


const fetchData = async()=>{
 try {
   const companyid = localStorage.getItem('companies');
  setIsLoading(true);
   const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/items/get-items/${companyid}`);
   if(res.data.success){
    setIsLoading(false)
   }
   const data = res.data.data;
   setTableData(data);
   
   
  } catch (error) {
    console.error(error)
  }
}

useEffect(()=>{
  fetchData()
},[])

const tableData = TableData.map((items,index) =>({
  Sr: index+1,
      "Item Name": items.itemName,
      "Code No": items.codeNo,
      Group: items.itemGroup,
      Retail: items.retail,
      MRP: items.mrp,
      "Cl.Stk":items.maximumStock,
      Active: items.status == "Active"?"Yes":"No",
}))
 

  return (
    <div className='w-full'>
      <BasePage heading="Item Master" Sidebardata={ItemSidebarData} tableData={tableData} isLoading={IsLoading}/>

      {showopitemBal && <OpItemBal onClose={()=>setOpitemBal(false)}/>}
      {showMinMax && <MinMaxQty onClose={()=>setMinMax(false)}/>}
      {showCopyItem && <CopyItem onClose={()=>setshowCopyItem(false)}/>}
    </div>
  )
}

export default Item
