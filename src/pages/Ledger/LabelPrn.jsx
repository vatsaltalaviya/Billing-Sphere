import React, { useState } from "react";
import PopUp from "../../components/PopUp";
import { ledgergroup } from "../../assets/LedgerGroup";
import SearchableDropdown from "../../components/SearchableDropdown";

const LabelPrn = ({ onClose }) => {
  const [LabelPrn, setLabelPrn] = useState({
    ledgergroup: "",
    pincode:'',
    city:'',
    templateName:'',
    usedLabel:'',
    barcodeCopy:''
  });
  return (
    <PopUp onClose={onClose}>
      <div className="md:w-[500px] border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">Label Address Label on Barcode Template</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col px-2 py-2 space-y-3">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44">Ledger Group</span>
              <SearchableDropdown
                className="px-2 py-2 border flex-1"
                options={ledgergroup}
                value={LabelPrn.ledgergroup}
                onChange={(e) => {
                  const update = { ...LabelPrn };
                  update.ledgergroup = e.target.value;
                  setLabelPrn(update);
                }}
              />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col md:flex-row xl:items-center">
                <span className="w-32">PinCode</span>
                <input
                  type="number"
                  className="px-2 py-2 border w-26"
                  value={LabelPrn.pincode}
                  onChange={(e) => {
                    const update = { ...LabelPrn };
                    update.pincode = e.target.value;
                    setLabelPrn(update);
                  }}
                />
              </div>
              <div className="flex flex-col md:flex-row xl:items-center">
                <span className="w-32">City/Place</span>
                <input
                  type="text"
                  className="px-2 py-2 border w-26"
                  value={LabelPrn.city}
                  onChange={(e) => {
                    const update = { ...LabelPrn };
                    update.city = e.target.value;
                    setLabelPrn(update);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44">Template Name</span>
              <select
                className="px-2 py-2 border flex-1"
                value={LabelPrn.templateName}
                onChange={(e) => {
                  const update = { ...LabelPrn };
                  update.templateName = e.target.value;
                  setLabelPrn(update);
                }}
              >
                <option value=""></option>
                <option value="16">16</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44">Used Label</span>
              <input type="number"
                className="px-2 py-2 border flex-1"
                value={LabelPrn.usedLabel}
                onChange={(e) => {
                  const update = { ...LabelPrn };
                  update.usedLabel = e.target.value;
                  setLabelPrn(update);
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44">Barcode Copies</span>
              <input type="number"
                className="px-2 py-2 border flex-1"
                value={LabelPrn.barcodeCopy}
                onChange={(e) => {
                  const update = { ...LabelPrn };
                  update.barcodeCopy = e.target.value;
                  setLabelPrn(update);
                }}
              />
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

export default LabelPrn;
