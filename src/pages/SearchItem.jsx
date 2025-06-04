import React, { useState } from "react";
import PopUp from "../components/PopUp";
import SearchableDropdown from "../components/SearchableDropdown";
import { items } from "../assets/Dummydata";

const SearchItem = ({ onClose }) => {
  const [searchitems, setsearchitem] = useState({searchItem:''});
    console.log(searchitems);

  return (
    <PopUp onClose={onClose}>
      <div className="lg:w-[500px] lg:h-[300px] bg-white shadow-lg border flex flex-col gap-5">
        <div className="w-full flex justify-center bg-blue-600">
          <h1 className="text-white font-semibold text-xl">Select Item</h1>
        </div>
        <div className="flex flex-col p-5">
          <form action="">
            <div>
              <SearchableDropdown
                id="searchItem"
                className="w-full border h-10 px-2"
                options={items}
                value={searchitems.searchItem}
                onChange={(val) => {
                  const updated = {...searchitems};
                  updated.searchItem = val.target.value;
                  setsearchitem(updated);
                
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-20 items-center ">
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
      </div>
    </PopUp>
  );
};

export default SearchItem;
