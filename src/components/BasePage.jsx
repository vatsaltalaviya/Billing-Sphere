import React, { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";
import MasterPart from "./MasterPart";
import SalePurchase from "./SalePurchase";
import ReceptPayment from "./ReceptPayment";
import ReceivablePayable from "./ReceivablePayable";
import ReceivableTable from "../pages/ReceivableTable";
import RecTabReport from "./RecTabReport";

const BasePage = ({
  Sidebardata,
  heading,
  mode,
  getitemUrl,
  subHeading,
  tableData,
  selectedProductRow,
  onDropdownRef,
  onRowsChange,
  triggerNew,
  triggerPrevious,
  focusDateTrigger,
}) => {
  const [showSidebar, setshowSidebar] = useState(false);
  const modeColorMap = {
    Sales: "bg-green-500",
    Purchase: "bg-orange-400",
    Receipt: "bg-emerald-400",
    Payment: "bg-orange-300",
    Journal: "bg-purple-500",
    Contra: "bg-indigo-500",
    CreditNote: "bg-fuchsia-500",
    DebitNote: "bg-fuchsia-500",
    GST: "bg-fuchsia-500",
  };
  const bgClass = modeColorMap[mode] || "bg-blue-500";

  return (
    <div className="h-screen w-full relative bg-white overflow-hidden">
      <div className={`${bgClass} text-xl font-bold text-white`}>
        {subHeading ? (
          <div className="flex justify-between items-center w-full">
            <div className="flex md:hidden"></div>
            <h1 className={`px-10 bg-yellow-900 py-0.5 hidden md:block`}>
              {subHeading}
            </h1>
            <h1 className="text-center flex-1 py-0.5">{heading}</h1>
            <div className="lg:flex hidden"></div>
            <button
              className="text-xl px-5 block xl:hidden"
              onClick={() => setshowSidebar(!showSidebar)}
            >
              <i className="ri-menu-line "></i>
            </button>
          </div>
        ) : (
          <div className="flex justify-between xl:justify-center items-center w-full">
            <div className="flex md:hidden"></div>
            <h1 className="text-center text-xl">{heading}</h1>
            <button
              className="text-xl px-5 block xl:hidden"
              onClick={() => setshowSidebar(!showSidebar)}
            >
              <i className="ri-menu-line "></i>
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        {/* ------------------ displaying main content according their mode or table data -------------------------------- */}
        <div className="w-full h-screen overflow-y-auto p-5 sm:p-2 table-data">
          {[
            "item",
            "itemGroup",
            "hsn",
            "tax",
            "brand",
            "unit",
            "store",
            "ledgers"
          ].includes(mode) && (
            <MasterPart
              mode={mode}
              getitemUrl={getitemUrl}
              tableData={tableData}
            />
          )}
         

          {["Sales", "Purchase"].includes(mode) && (
            <SalePurchase
              mode={mode}
              selectedProductRow={selectedProductRow}
              onDropdownRef={onDropdownRef}
              onRowsChange={onRowsChange}
              triggerNew={triggerNew}
              triggerPrevious={triggerPrevious}
            />
          )}

          {[
            "Receipt",
            "Payment",
            "Journal",
            "Contra",
            "CreditNote",
            "DebitNote",
            "GST",
          ].includes(mode) && (
            <ReceptPayment
              mode={mode}
              triggerPrevious={triggerPrevious}
              focusDateTrigger={focusDateTrigger}
            />
          )}

          {mode == "Receivable" && <ReceivablePayable />}
          {mode == "ReceivableTable" && <RecTabReport />}
        </div>

        {/* --------------------------------- display sidebar  --------------------------------------------- */}
        <div className="w-48 h-screen hidden xl:block ">
          <ButtonGroup
            className="w-full py-2 border mb-0.5 font-bold text-left px-3"
            data={Sidebardata}
          />
        </div>
        <div
          className={` w-64 bg-white transform transition-all absolute duration-200 z-10 ${
            showSidebar ? "translate-x-[0%]" : " translate-x-[200%]"
          }`}
        >
          <ButtonGroup
            className="w-full py-2 border mb-0.5 font-bold text-left px-3"
            setshowSidebar={setshowSidebar}
            data={Sidebardata}
          />
        </div>
      </div>
    </div>
  );
};

export default BasePage;
