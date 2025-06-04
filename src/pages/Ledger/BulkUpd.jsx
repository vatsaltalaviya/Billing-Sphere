import React, { useState } from "react";
import PopUp from "../../components/PopUp";
import SearchableDropdown from "../../components/SearchableDropdown";

const BulkUpd = ({ onClose }) => {
  const [bulkData, setbulkData] = useState({
    ledger: "",
    billwise: "no",
    SendSms: "",
    PriceType: "",
    TCS: "",
  });

  const [billwisecheck, setbillwisecheck] = useState(false)
  const [smscheck, setsmscheck] = useState(false)
  const [priceTypecheck, setpriceTypecheck] = useState(false)
  const [tcscheck, setTcscheck] = useState(false)

  const ladgerGorups = [
    { name: "Customer" },
    { name: "Sundry Creditors" },
    { name: "Sundry Debtors" },
    { name: "Vendors" },
  ];

  const PriceType = [{name:"Retail"}]

  return (
    <PopUp onClose={onClose}>
      <div className="md:w-[500px] border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">Bulk Update</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col px-2 py-2 space-y-3">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44">Ledger Group</span>
              <SearchableDropdown
                className="px-2 py-2 border flex-1"
                options={ladgerGorups}
                value={bulkData.ledger}
                onChange={(e) => {
                  const update = { ...bulkData };
                  update.ledger = e.target.value;
                  setbulkData(update);
                }}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-44">Billwise</span>
                <div className="flex gap-2">
                  <input type="checkbox" value={billwisecheck} onChange={()=>setbillwisecheck(!billwisecheck)} />
                <select
                  className="px-2 py-2 border flex-1"
                  disabled={!billwisecheck}
                  value={bulkData.billwise}
                  onChange={(e) => {
                    const update = { ...bulkData };
                    update.billwise = e.target.value;
                    setbulkData(update);
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                </div>
              </div>
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                 <span className="w-20">Send SMS</span>
                 <div className="flex gap-2">
                  <input type="checkbox" value={smscheck} onChange={()=>setsmscheck(!smscheck)} />
                <select
                  className="px-2 py-2 border flex-1"
                  value={bulkData.SendSms}
                  disabled={!smscheck}
                  onChange={(e) => {
                    const update = { ...bulkData };
                    update.SendSms = e.target.value;
                    setbulkData(update);
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:flex-row xl:items-center">
              <span className="w-44">Price Type</span>
               <div className="flex gap-2">
                <input type="checkbox" value={priceTypecheck} onChange={()=>setpriceTypecheck(!priceTypecheck)} />
              <SearchableDropdown
              disabled={!priceTypecheck}
                className="px-2 py-2 border flex-1"
                options={PriceType}
                value={bulkData.PriceType}
                onChange={(e) => {
                  const update = { ...bulkData };
                  update.PriceType = e.target.value;
                  setbulkData(update);
                }}
              />
               </div>
            </div>
            <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                 <span className="w-44">TCS</span>
                  <div className="flex gap-2">
                    <input type="checkbox" value={tcscheck} onChange={()=>setTcscheck(!tcscheck)} />
                <select
                  className="px-2 py-2 border w-32"
                  disabled={!tcscheck}
                  value={bulkData.TCS}
                  onChange={(e) => {
                    const update = { ...bulkData };
                    update.TCS = e.target.value;
                    setbulkData(update);
                  }}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                  </div>
              </div>

            <div className="flex flex-col md:flex-row gap-2 xl:ml-5 items-center ">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Save
              </button>
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </PopUp>
  );
};

export default BulkUpd;
