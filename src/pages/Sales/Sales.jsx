import React, { useRef, useState, useEffect } from "react";
import BasePage from "../../components/BasePage";
import ChangeVoucher from "./ChangeVoucher";
import SearchItem from "./SearchItem";

const Sales = () => {
  const productRows = useRef([]);
  const [dropdownRefs, setDropdownRefs] = useState([]);
  const [selectedProductRow, setSelectedProductRow] = useState(0);

  // popup states
  const [showVoucher, setshowVoucher] = useState(false);
  const [showSearchItem, setshowSearchItem] = useState(false);

  // Handle child sending updated product rows
  const handleRowsChange = (rows) => {
    productRows.current = rows;
  };

  // Get dropdown refs from SalePurchase
  const handleDropdownRef = (refs) => {
    setDropdownRefs(refs);
  };

  const createNewRow = () => {
  const newRow = {
    item: "",
    qty: "",
    unit: "",
    rate: "",
    amount: "",
    disc: "",
    d1: "",
    netAmt: "",
  };
  return productRows.current.push(newRow);
};



  const isProductRowFilled = (row) =>
    row.item || row.qty || row.unit || row.rate || row.amount || row.disc || row.d1 || row.netAmt;

  const isRowEmpty = (row) =>
    Object.values(row).every((val) => val === "" || val === null || val === undefined);


  // handle new line creation
  const handleNewLine = () => {
  let rowToSelect = 0;

  const currentRows = productRows.current;

  if (currentRows.length === 0) {
    createNewRow();
    rowToSelect = 0;
  }
  if(currentRows.length > 15){
   createNewRow();
   rowToSelect = currentRows.length - 1;
  }
  else {
    const allFilled = currentRows.every(isProductRowFilled);

    if (allFilled) {
      createNewRow();
      rowToSelect = currentRows.length;
    } else {
      const firstEmptyIdx = currentRows.findIndex(isRowEmpty);
      if (firstEmptyIdx !== -1) {
        rowToSelect = firstEmptyIdx;
      } else {
        createNewRow();
        rowToSelect = currentRows.length;
      }
    }
  }
  setSelectedProductRow(rowToSelect);
  setTimeout(() => {
    dropdownRefs[rowToSelect]?.focusInput?.();
  }, 0);
};


  const salesSidebarData = [
    { name: "List", onClick: () => console.log("List clicked"), navigate: "/dashboard/sales/list" },
    { name: "New", onClick: () => {} },
    { name: "Print", onClick: () => {} },
    { name: "All Print", onClick: () => {} },
    {
      name: "Change Type",
      onClick: () => setshowVoucher(true),
      navigate: "",
    },
    {
      name: "Search Item",
      onClick: () => setshowSearchItem(true),
    },
    {
      name: "New Line",
      onClick: handleNewLine,
    },
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
        selectedProductRow={selectedProductRow}
        onDropdownRef={handleDropdownRef}
        onRowsChange={handleRowsChange}
        createNewRow={createNewRow}
      />
      {showVoucher && <ChangeVoucher onClose={() => setshowVoucher(false)} />}
      {showSearchItem && <SearchItem onClose={() => setshowSearchItem(false)} />}
    </div>
  );
};

export default Sales;
