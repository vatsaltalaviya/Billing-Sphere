import React from "react";

const NoTableData = ({ mode }) => {
 
  return (
    <div className="overflow-x-auto w-full" tabIndex={0}>
      {(mode == "item"&&<table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px]">
        <thead>
          <tr className="bg-white text-purple-900 font-bold text-left">
            <th className={`border border-black px-3 py-1`}>Sr</th>
            <th className={`border border-black px-3 py-1`}>Item Name</th>
            <th className={`border border-black px-3 py-1`}>Code No</th>
            <th className={`border border-black px-3 py-1`}>Group</th>
            <th className={`border border-black px-3 py-1`}>Retail</th>
            <th className={`border border-black px-3 py-1`}>MRP</th>
            <th className={`border border-black px-3 py-1`}>Cl.Stk</th>
            <th className={`border border-black px-3 py-1`}>Active</th>
          </tr>
        </thead>
      </table>)}
      <h1 className="text-3xl text-nowrap flex my-32 justify-center items-center">
        No Item Found
      </h1>
      {/* RowData preview */}
    </div>
  );
};

export default NoTableData;
