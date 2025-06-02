import React from "react";
import PopUp from "../../components/PopUp";

const SearchNo = ({ onClose }) => {
    
  return (
    <PopUp onClose={onClose}>
      <div className=" xl:w-[400px] p-2 border bg-white flex flex-col">
        <form action="">
          <div className="flex flex-col xl:flex-row px-2">
            <h1 className="xl:w-[70%] text-xl font-medium text-center py-2 xl:text-left">Enter no</h1>
            <div className="flex flex-col gap-2 xl:ml-5 items-center ">
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
          </div>
          <div className="py-2">
            <input type="number" name="" id="" className="px-2 py-2 w-full border rounded"/>
          </div>
        </form>
      </div>
    </PopUp>
  );
};

export default SearchNo;
