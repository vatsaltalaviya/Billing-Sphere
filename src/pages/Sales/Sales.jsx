import React, { useRef, useState, useEffect } from "react";
import BasePage from "../../components/BasePage";
import ChangeVoucher from "./ChangeVoucher";
import SearchItem from "./SearchItem";
import SearchNo from "./SearchNo";
import { useLocation } from "react-router-dom";
import AttachImage from "./AttachImage";

const Sales = () => {

  const location = useLocation();
  // for add new rows
  const productRows = useRef([]);
  const [dropdownRefs, setDropdownRefs] = useState([]);
  const [selectedProductRow, setSelectedProductRow] = useState(0);

  // for create new form
  const [triggerNew, setTriggerNew] = useState(false);
  // for privious and next
  const [triggerPrevious, setTriggerPrevious] = useState(1);

  // popup states
  const [showVoucher, setshowVoucher] = useState(false);
  const [showSearchItem, setshowSearchItem] = useState(false);
  const [showSearchNo, setshowSearchNo] = useState(false);
  const [showAttachImages, setshowAttachImages] = useState(false);

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


// use when in list click new then new voucher is created
   useEffect(() => {
    if (location.state?.triggerNew) {
      setTriggerNew((perv)=> !perv); // This will trigger handleNewVoucher in SalePurchase
    }
  }, [location.state]);

  // handle new line creation
  const handleNewLine = () => {
  let rowToSelect = 0;

  // Function to check if a row is filled
   const isProductRowFilled = (row) =>
    row.item || row.qty || row.unit || row.rate || row.amount || row.disc || row.d1 || row.netAmt;

   // Function to check if a row is empty
  const isRowEmpty = (row) =>
    Object.values(row).every((val) => val === "" || val === null || val === undefined);



  // get current rows from the ref
  const currentRows = productRows.current;

  if (currentRows.length === 0) {
    createNewRow();
    rowToSelect = 0;
  }

  else {
    // Check if all rows are filled
    const allFilled = currentRows.every(isProductRowFilled);
    // If all rows are filled or more than 15 rows, create a new row
    if (allFilled || currentRows.length > 15) {
      createNewRow();
      rowToSelect = currentRows.length-1;
    } 
    else {
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
    { name: "List", onClick: () =>{}, navigate: "/dashboard/sales/list" },
    { name: "New", onClick: () => setTriggerNew((prev) => !prev)  },
    { name: "Print", onClick: () => {},navigate: "/dashboard/print" },
    { name: "All Print", onClick: () => {} ,navigate: "/dashboard/print" },
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
    { name: "Previous", onClick: () =>setTriggerPrevious(prev => (prev > 1 ? prev - 1 : 1)) },
    { name: "Next", onClick: () => setTriggerPrevious((perv) => perv + 1) },
    { name: "Search No", onClick: () => setshowSearchNo(true) },
    { name: "Attach. Img", onClick: () => setshowAttachImages(true) },
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
        triggerNew={triggerNew}
        triggerPrevious={triggerPrevious}
      />
      {showVoucher && <ChangeVoucher onClose={() => setshowVoucher(false)} />}
      {showSearchItem && <SearchItem onClose={() => setshowSearchItem(false)} />}
      {showSearchNo && <SearchNo onClose={() => setshowSearchNo(false)} />}
      {showAttachImages && <AttachImage onClose={() => setshowAttachImages(false)} />}
    </div>
  );
};

export default Sales;
