import React from "react";

const NoTableData = ({ mode }) => {
  // Define table headers based on mode
  const headersMap = {
    item: [
      "Sr",
      "Item Name",
      "Code No",
      "Group",
      "Retail",
      "MRP",
      "Cl.Stk",
      "Active",
    ],
    ledgers: [
      "Sr",
      "Ledger Name",
      "Group",
      "Op. Balance",
      "Debit Balance",
      "Active",
    ],
    hsn: ["Sr", "name", "Description"],
    itemGroup: ["Sr", "name"],
    brand: ["Sr", "Brand category"],
    tax: ["sr", "Tax Category"],
    store: ["sr", "Store Location", "isActive"],
    unit: ["sr", "Stock Unit category"],
  };

  const headers = headersMap[mode] || [];

  return (
    <div className="overflow-x-auto w-full" tabIndex={0}>
      {headers.length > 0 && (
        <table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px]">
          <thead>
            <tr className="bg-white text-purple-900 font-bold text-left">
              {headers.map((header, i) => (
                <th key={i} className="border border-black px-3 py-1">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      )}
      <h1 className="text-3xl text-nowrap flex my-32 justify-center items-center">
        No {mode} Found
      </h1>
    </div>
  );
};

export default NoTableData;
