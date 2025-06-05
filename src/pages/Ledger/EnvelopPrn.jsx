import React, { useState } from 'react'
import SearchableDropdown from '../../components/SearchableDropdown';
import { ledgergroup } from '../../assets/LedgerGroup';
import PopUp from '../../components/PopUp';

const EnvelopPrn = ({onClose}) => {
    const [EnvelopePrn, setEnvelopePrn] = useState({
        ledgergroup:'',
        envelope:''
    })
  return (
    <PopUp onClose={onClose}>
      <div className="md:w-[500px] border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">Print Envelope</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col px-2 py-2 space-y-3">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-70">Ledger Group</span>
              <SearchableDropdown
                className="px-2 py-2 border flex-1"
                options={ledgergroup}
                value={EnvelopePrn.ledgergroup}
                onChange={(e) => {
                  const update = { ...EnvelopePrn };
                  update.ledgergroup = e.target.value;
                  setLabelPrn(update);
                }}
              />
            </div>
           
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44">Template Name</span>
              <select
                className="px-2 py-2 border flex-1"
                value={EnvelopePrn.templateName}
                // onChange={(e) => {
                //   const update = { ...EnvelopePrn };
                //   update.templateName = e.target.value;
                //   setLabelPrn(update);
                // }}
              >
                <option value=""></option>
                <option value="standard landscape">Standard Landscape</option>
                <option value="standard portrait">Standard Portrait</option>
              </select>
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
  )
}

export default EnvelopPrn
