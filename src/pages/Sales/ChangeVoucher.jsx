import React, { useRef, useState } from "react";
import PopUp from "../../components/PopUp";

const ChangeVoucher = ({ onClose }) => {
  return (
    <PopUp onClose={onClose}>
      <div className="md:w-[500px] md:h-[100px] p-2 border bg-white flex flex-col">
        <div className="border-b flex justify-center text-purple-600">
          <h1>Select Voucher Type</h1>
        </div>
        <form action="">
          <div className="flex flex-col md:flex-row px-2">
            <div className="p-4">
              <select
                name="Vouchertype"
                id=""
                className="border px-2 py-1 xl:w-48"
              >
                <option value="Bill Of Sypply">Bill Of Sypply</option>
                <option value="Tax Invoice">Tax Invoice</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-2 xl:ml-5 items-center ">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Select
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

export default ChangeVoucher;
