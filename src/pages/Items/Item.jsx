import React, { useEffect, useState } from "react";
import BasePage from "../../components/BasePage";
import OpItemBal from "./OpItemBal";
import MinMaxQty from "./MinMaxQty";
import CopyItem from "./CopyItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlert, deleteItem, fetchItems, PositiveRes } from "../../feature/itemSlice";
import DeleteAlert from "../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";

const Item = () => {
  
  const [showopitemBal, setOpitemBal] = useState(false);
  const [itemUrl, setitemUrl] = useState(null);
  const [showMinMax, setMinMax] = useState(false);
  const [showCopyItem, setshowCopyItem] = useState(false);
  
  
  
  const {items ,groupMap , itemDelete} = useSelector((state)=>state.items)
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {ShowDeleteAlert , clickYes} = useSelector((state)=>state.items);
  
  const ItemSidebarData = [
    { name: "New", onClick: () => {}, navigate: "/dashboard/items/new" },
    {
      name: "Edit",
      onClick: () => {},
      navigate: `/dashboard/items/edit/${itemUrl}`,
    },
    {
      name: "Delete",
      onClick: () => {
        dispatch(deleteAlert(true))
      },
    },
    { name: "Export to excel", onClick: () => {} },
    { name: "Bulk Upd", onClick: () => {}, navigate: `/dashboard/items/bu` },
    {
      name: "Op. Balance",
      onClick: () => {
        setOpitemBal(true);
      },
    },
    { name: "MultiEdit", onClick: () => {} },
    { name: "Filters", onClick: () => {}, navigate: `/dashboard/items/fi` },
    {
      name: "MinMax up",
      onClick: () => {
        setMinMax(true);
      },
    },
    {
      name: "Copy item",
      onClick: () => {
        setshowCopyItem(true);
      },
    },
    {
      name: "Img gallery",
      onClick: () => {},
      navigate: `/dashboard/items/gallery`,
    },
    { name: "Dup Items", onClick: () => {} },
    { name: "Non/Used", onClick: () => {} },
  ];

  const getUrl = (url) => {
    setitemUrl(url);
  };
  useEffect(()=>{
     dispatch(fetchItems())
    },[])
  
    useEffect(()=>{
     dispatch(fetchItems())
    },[itemDelete])
  
    const tableData = items.map((item, index) => ({
      Sr: index + 1,
      id: item._id,
      "Item Name": item.itemName,
      "Code No": item.codeNo,
      Group: groupMap[item.itemGroup] || "Loading...", // ✅ safe access
      Retail: item.retail,
      MRP: item.mrp,
      "Cl.Stk": item.maximumStock,
      Active: item.status,
    }));
   const handleDelete = async () => {
      dispatch(deleteItem({editId:itemUrl})).unwrap().then(()=>{navigate('/dashboard/items')})
      dispatch(PositiveRes(false))
    };

    useEffect(()=>{
      if(clickYes){
        handleDelete()
        dispatch(fetchItems())
      }
    },[clickYes])
  
  return (
    <div className="w-full">
      <BasePage
        heading="Item Master"
        Sidebardata={ItemSidebarData}
        mode="item"
        getitemUrl={(e) => getUrl(e)}
        tableData={tableData}
      />

      {showopitemBal && <OpItemBal onClose={() => setOpitemBal(false)} />}
      {showMinMax && <MinMaxQty onClose={() => setMinMax(false)} />}
      {showCopyItem && <CopyItem onClose={() => setshowCopyItem(false)} />}
       {ShowDeleteAlert && <DeleteAlert field="Item" onYes={()=>dispatch(PositiveRes(true))} onClose={()=>dispatch(deleteAlert(false))}/>}
    </div>
  );
};

export default Item;
