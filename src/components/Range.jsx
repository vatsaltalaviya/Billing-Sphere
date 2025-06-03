import React, { useState } from "react";
import PopUp from "./PopUp";
import SearchableDropdown from "./SearchableDropdown";
import { ledgergroup } from "../assets/LedgerGroup";
import { saletype } from "../assets/Dummydata";

const Range = ({ onClose ,mode , heading }) => {
  const options = ledgergroup.map((item) => ({
    name: item.name,
  }));
  const [formData, setFormData] = useState({
    rangeBy: "datewise",
    dateFrom: "",
    dateTo: "",
    noFrom: "",
    noTo: "",
    ledgerName: "",
    payment: "",
  });
  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  console.log("Form Data:", formData);

  return (
    <PopUp onClose={onClose}>
      <div className="w-full xl:w-[500px] bg-white border flex flex-col">
        <div className="flex items-center justify-center bg-blue-600">
          <h1 className="font-bold text-white text-xl">{heading}</h1>
        </div>
        <form>
          <div className="flex flex-col lg:flex-row gap-2 p-4">
            <span className="w-32">Range By:</span>
            <select
              className="border px-2 py-2 w-52"
              value={formData.rangeBy}
              onChange={handleFieldChange}
              name=""
              id="rangeBy"
            >
              <option value="datewise">Date Wise</option>
              <option value="nowise">No wise</option>
            </select>
          </div>
          {formData.rangeBy === "datewise" && (
            <div className="flex flex-col lg:flex-row gap-2 p-4 lg:items-center">
              <span className="w-32">Date From:</span>
              <div className="flex flex-row gap-2 items-center">
                <input
                  type="date"
                  className="border px-2 py-2 w-36"
                  name=""
                  id="dateFrom"
                  value={formData.dateFrom}
                  onChange={handleFieldChange}
                />
                <span className="text-center">To</span>
                <input
                  type="date"
                  className="border px-2 py-2 w-36"
                  name=""
                  id="dateTo"
                  value={formData.dateTo}
                  onChange={handleFieldChange}
                />
              </div>
            </div>
          )}

          {formData.rangeBy === "nowise" && (
            <div className="flex flex-col lg:flex-row gap-2 p-4 lg:items-center">
            <span className="w-32">No From:</span>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="number"
                className="border px-2 py-2 w-36"
                name=""
                id="noFrom"
                value={formData.noFrom}
                onChange={handleFieldChange}
              />
              <span className="text-center">To</span>
              <input
                type="number"
                className="border px-2 py-2 w-36"
                name=""
                id="noTo"
                value={formData.noTo}
                onChange={handleFieldChange}
              />
            </div>
          </div>
          )}
          <div className="flex flex-col lg:flex-row gap-2 p-4">
            <span className="w-44">Ledger Name:</span>
            <SearchableDropdown
              id="ledgerName"
              className="border px-2 py-2 w-full"
              options={options}
              value={formData.ledgerName}
              onChange={(val)=>{
                //  
                setFormData((prev) => ({ ...prev, ledgerName: val.target.value }));
              }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2 p-4 ">
            <span className="w-44">Payment:</span>
            <SearchableDropdown
              id="payment"
              className="border px-2 py-2 w-full"
              options={saletype}
              onChange={(val)=>{
                //  
                setFormData((prev) => ({ ...prev, payment: val.target.value }));
              }}
            />
          </div>
          <div className="flex flex-row gap-2 xl:mt-20 items-center justify-center py-3 ">
            <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              Show
            </button>
            <button
              onClick={onClose}
              className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </PopUp>
  );
};

export default Range;
