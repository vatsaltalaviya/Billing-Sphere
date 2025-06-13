import React, { useEffect, useState } from "react";
import BasePage from "../../components/BasePage";
import OpItemBal from "./OpItemBal";
import MinMaxQty from "./MinMaxQty";
import CopyItem from "./CopyItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../feature/itemSlice";

const Item = () => {
  
  const [showopitemBal, setOpitemBal] = useState(false);
  const [itemUrl, setitemUrl] = useState(null);
  const [showMinMax, setMinMax] = useState(false);
  const [showCopyItem, setshowCopyItem] = useState(false);

  const ItemSidebarData = [
    { name: "New", onClick: () => {}, navigate: "/dashboard/items/new" },
    {
      name: "Edit",
      onClick: () => {},
      navigate: `/dashboard/items/edit/${itemUrl}`,
    },
    {
      name: "Delete",
      onClick: () => {},
      navigate: `/dashboard/items/delete/1`,
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

  

  return (
    <div className="w-full">
      <BasePage
        heading="Item Master"
        Sidebardata={ItemSidebarData}
        
        getitemUrl={(e) => getUrl(e)}
      />

      {showopitemBal && <OpItemBal onClose={() => setOpitemBal(false)} />}
      {showMinMax && <MinMaxQty onClose={() => setMinMax(false)} />}
      {showCopyItem && <CopyItem onClose={() => setshowCopyItem(false)} />}
    </div>
  );
};

export default Item;
