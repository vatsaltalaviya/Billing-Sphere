import React, { useContext, useEffect, useState } from "react";
import BasePage from "../../components/BasePage";
import OpItemBal from "./OpItemBal";
import MinMaxQty from "./MinMaxQty";
import CopyItem from "./CopyItem";
import { userdataContext } from "../../context/UserContext";
import axios from "axios";

const Item = () => {
  const { User } = useContext(userdataContext);
  const [showopitemBal, setOpitemBal] = useState(false);
  const [itemUrl, setitemUrl] = useState(null);
  const [TableData, setTableData] = useState([]);
  const [IsLoading, setIsLoading] = useState(null);
  const [groupMap, setGroupMap] = useState({}); // ✅ added state
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

  const fetchData = async () => {
    try {
      const companyid = localStorage.getItem("companies");
      const token = localStorage.getItem("token");
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/items/get-items/${companyid}`
      );
      if (res.data.success) {
        setIsLoading(false);
      }
      const data = res.data.data;
      setTableData(data);

      const groupIds = [...new Set(data.map((item) => item.itemGroup))];
      const groupMapTemp = {};

      await Promise.all(
        groupIds.map(async (id) => {
          try {
            const res = await axios.get(
              `${import.meta.env.VITE_BASE_URL}/item-group/getById/${id}`,
              { headers: { Authorization: `${token}` } }
            );
            if (res.data.success) {
              groupMapTemp[id] = res.data.data.name;
            }
          } catch (err) {
            console.error(`Error fetching itemGroup ${id}`, err);
          }
        })
      );

      setGroupMap(groupMapTemp); // ✅ update state here
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tableData = TableData.map((items, index) => ({
    Sr: index + 1,
    id: items._id,
    "Item Name": items.itemName,
    "Code No": items.codeNo,
    Group: groupMap[items.itemGroup] || "Loading...", // ✅ safe access
    Retail: items.retail,
    MRP: items.mrp,
    "Cl.Stk": items.maximumStock,
    Active: items.status,
  }));

  return (
    <div className="w-full">
      <BasePage
        heading="Item Master"
        Sidebardata={ItemSidebarData}
        tableData={tableData}
        isLoading={IsLoading}
        getitemUrl={(e) => getUrl(e)}
      />

      {showopitemBal && <OpItemBal onClose={() => setOpitemBal(false)} />}
      {showMinMax && <MinMaxQty onClose={() => setMinMax(false)} />}
      {showCopyItem && <CopyItem onClose={() => setshowCopyItem(false)} />}
    </div>
  );
};

export default Item;
