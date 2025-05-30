import React, { useRef, useState } from "react";
import BasePage from "../../components/BasePage";
import ChangeVoucher from "./ChangeVoucher";
import SearchItem from "./SearchItem";

const Sales = () => {


  const [showVoucher, setshowVoucher] = useState(false)
  const [showSearchItem, setshowSearchItem] = useState(false)


  const salesSidebarData = [
    {
      name: "List",
      onClick: () => {
        console.log("List clicked");
      },
      navigate: "/dashboard/sales/list",
    },
    { name: "New", onClick: () => {} },
    { name: "Print", onClick: () => {} },
    { name: "All Print", onClick: () => {} },
    {
      name: "Change Type",
      onClick: () => {setshowVoucher(true)},
      navigate:'',
    },
    { name: "Search Item", onClick: () => {setshowSearchItem(true)} },
    { name: "New Line", onClick: () => {
      
    } },
    { name: "Audit Trail", onClick: () => {} },
    { name: "Previous", onClick: () => {} },
    { name: "Next", onClick: () => {} },
    { name: "Search No", onClick: () => {} },
    { name: "Attach. Img", onClick: () => {} },
    { name: "Vch Setup", onClick: () => {} },
    { name: "Print Setup", onClick: () => {} },
  ];
  return (
    <div className="w-full">
      <BasePage
        heading="Sales Entry"
        subHeading="Bill of Supply"
        mode="Sales"
        Sidebardata={salesSidebarData}
       
      />
      {showVoucher && <ChangeVoucher onClose={()=>setshowVoucher(false)} />}
      {showSearchItem && <SearchItem onClose={()=>setshowSearchItem(false)} />}
    </div>
  );
};

export default Sales;
