import React from "react";
import PopUp from "../../components/PopUp";

const MinMaxQty = ({ onClose }) => {
  return (
    <PopUp onClose={onClose}>
      <div className="w-full border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">
            Item Min / Max Qty Updation
          </h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className=" md:w-full p-2 md:space-y-1.5">
            <h1 className="text-sm font-medium text-purple-600">
              Apply Updation to Item With Below Conditon
            </h1>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Group</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Item Brand</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-32">Item Type</span>
              <input type="text" name="" className="flex-1 border px-2 py-1" />
            </div>
          </div>
          <div className=" md:w-full p-2 space-y-1.5">
            <h1 className="text-sm font-medium text-purple-600">
              From Min Qty Update -&gt; Consider
            </h1>
            <div className="flex flex-col gap-2 md:flex-row xl:items-center justify-between">
              <span className="w-32">Sale Of Last</span>
             <div className="flex gap-2"><input type="text" name="" className="w-20 border px-2 py-1" /><span>Days</span></div>
              <div className="flex gap-2 md:ml-10 items-center">
                <span>From</span>
                <input type="text" className="w-20 border px-2 py-1" />
                <span>To</span>
                <input type="text" className="w-20 border px-2 py-1" />
              </div>
            </div>
          </div>
          <div className=" md:w-full p-2 space-y-1.5">
            <h1 className="text-sm font-medium text-purple-600">
              From Max Qty Update -&gt; Consider
            </h1>
            <div className="flex flex-col gap-2 md:flex-row xl:items-center justify-between">
              <span className="w-32">Sale Of Last</span>
              <div className="flex gap-2"><input type="text" name="" className="w-20 border px-2 py-1" /><span>Days</span></div>
              <div className="flex gap-2 md:ml-10 items-center">
                <span>From</span>
                <input type="text" className="w-20 border px-2 py-1" />
                <span>To</span>
                <input type="text" className="w-20 border px-2 py-1" />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button
              className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
            >
              Save
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

export default MinMaxQty;
