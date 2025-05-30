import React from "react";
import Datatable from "../../components/Datatable";
import { lists } from "../../assets/Dummydata";

const List = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-center w-full bg-green-600">
        <h1 className="text-xl font-bold text-white">
          List of Tax INVOICE Voucher
        </h1>
      </div>
      <div className=" h-[80vh] overflow-auto relative p-4 xl:p-10 table-data border-b">
        <Datatable data={lists}/>
      </div>
      <div className="w-full border flex flex-col xl:flex-row justify-center px-2 mt-3 mb-10">
          <div className="flex flex-col xl:flex-row w-full">
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              List Prn
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              New
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Edit
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              XLS
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Print
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
             Prn
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Delete(Range)
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Email/SMS
            </button>
           
          </div>
        </div>
    </div>
  );
};

export default List;
