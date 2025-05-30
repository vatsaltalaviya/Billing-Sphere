import React, { useState } from "react";
import BasePage from "../../components/BasePage";

const Sales = () => {


  const salesSidebarData = [
    { name: "List", onClick: () => {
      console.log("List clicked");
    } },
    { name: "New", onClick: () => {} },
    { name: "Print", onClick: () => {} },
    { name: "All Print", onClick: () => {} },
    { name: "Change Type", onClick: () => {} },
    { name: "Search Item", onClick: () => {} },
    { name: "New Line", onClick: () => {} },
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

 
    </div>
  );
};

export default Sales;
