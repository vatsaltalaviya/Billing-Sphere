import React, { useState } from "react";
import PopUp from "../../components/PopUp";

const OpBalance = ({ onClose }) => {
 
  const ledgerTableData = [
    {
      Sr: 1,
      LedgerName: "Agent Commission",
      LedgerGroup: "Indirect Expenses",
      OpBalance: "0 Dr",
      DrCr: "Dr",
      ClBalance: "1000 Dr",
      Active: "Yes",
    },
    {
      Sr: 2,
      LedgerName: "Bank Charges",
      LedgerGroup: "Indirect Expenses",
      OpBalance: "0 Dr",
      ClBalance: "0 Dr",
      DrCr: "Dr",
      Active: "Yes",
    },
    {
      Sr: 3,
      LedgerName: "Books & Periodicals",
      LedgerGroup: "Indirect Expenses",
      OpBalance: "0 Dr",
      ClBalance: "500 Dr",
      DrCr: "Dr",
      Active: "Yes",
    },
    {
      Sr: 4,
      LedgerName: "Cash Discount",
      LedgerGroup: "Indirect Expenses",
      OpBalance: "0 Dr",
      DrCr: "Dr",
      ClBalance: "0 Dr",
      Active: "Yes",
    },
    {
      Sr: 5,
      LedgerName: "Cash In Hand",
      LedgerGroup: "Cash-in-Hand",
      OpBalance: "0 Dr",
      ClBalance: "270 Cr",
      DrCr: "Dr",
      Active: "Yes",
    },
    {
      Sr: 6,
      LedgerName: "CESS A/C",
      LedgerGroup: "Duties & Taxes",
      OpBalance: "0 Cr",
      ClBalance: "0 Dr",
      DrCr: "Dr",
      Active: "Yes",
    },
    {
      Sr: 7,
      LedgerName: "CGST A/C",
      LedgerGroup: "Duties & Taxes",
      DrCr: "Dr",
      OpBalance: "0 Cr",
      ClBalance: "0 Dr",
      Active: "Yes",
    },
    {
      Sr: 8,
      LedgerName: "Electricity Expense",
      LedgerGroup: "Indirect Expenses",
      OpBalance: "0 Dr",
      DrCr: "Dr",
      ClBalance: "0 Dr",
      Active: "Yes",
    },
    {
      Sr: 9,
      LedgerName: "Entertainment Expense",
      LedgerGroup: "Indirect Expenses",
      OpBalance: "0 Dr",
      DrCr: "Dr",
      ClBalance: "0 Dr",
    },
    {
    Sr: 10,
    LedgerName: "Goods Shortage",
    LedgerGroup: "Sales Accounts",
    OpBalance: "0 Cr",
    DrCr: "Cr",
    ClBalance: "0 Cr",
  },
  {
    Sr: 11,
    LedgerName: "GST Interest A/c",
    LedgerGroup: "Indirect Expenses",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 12,
    LedgerName: "GST Penalty A/c",
    LedgerGroup: "Indirect Expenses",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 13,
    LedgerName: "IGST A/C",
    LedgerGroup: "Duties & Taxes",
    OpBalance: "0 Cr",
    DrCr: "Cr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 14,
    LedgerName: "Interest Received",
    LedgerGroup: "Indirect Incomes",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 15,
    LedgerName: "Labour Charges",
    LedgerGroup: "Indirect Expenses",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 16,
    LedgerName: "Miscellaneous Expenses",
    LedgerGroup: "Indirect Expenses",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 17,
    LedgerName: "Office Rent",
    LedgerGroup: "Indirect Expenses",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 18,
    LedgerName: "Printing & Stationery",
    LedgerGroup: "Indirect Expenses",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  },
  {
    Sr: 19,
    LedgerName: "Purchase Return",
    LedgerGroup: "Purchase Accounts",
    OpBalance: "0 Dr",
    DrCr: "Dr",
    ClBalance: "0 Dr",
  }
  ];


   const [OpeningBalance, setOpeningBalance] = useState(ledgerTableData.map((item) => ({
      openingBalance: item.OpBalance.split(" ")[0], // get numeric part
      DrCr: item.DrCr,
    })));

    console.log(OpeningBalance);
    

  return (
    <PopUp onClose={onClose}>
      <div className="w-full md:w-[1000px] border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">
            Ledger Opening Balanace Editor
          </h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
         <div className="max-h-[500px] w-[340px] md:w-full table-data overflow-auto">
             <table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px]">
            <colgroup>
              <col className="w-10 min-w-[40px] max-w-[40px]" />
              <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
              <col className="w-16 min-w-[60px] max-w-[60px]" />
              <col className="w-16 min-w-[60px] max-w-[60px]" />
              <col className="w-8 min-w-[40px] max-w-[80px]" />
              
            </colgroup>
            <thead>
              <tr className="bg-white text-purple-900 font-bold">
                <th className="border text-sm text-center">Sr</th>
                <th className="border text-sm text-left">Ledger group</th>
                <th className="border text-sm text-left">Ledger Name</th>
                <th className="border text-sm text-right">Op Bal</th>
                <th className="border text-sm text-left">DrCr</th>
              </tr>
            </thead>
            <tbody>
              {ledgerTableData.map((item, idx) => (
                <tr key={idx} className="font-medium">
                  <td className="border text-sm py-1 px-1 text-center">{item.Sr}</td>
                  <td className="border text-sm py-1 px-1 text-left">{item.LedgerGroup}</td>
                  <td className="border text-sm py-1 px-1 text-left">{item.LedgerName}</td>
                  <td className="border text-sm py-1 px-1 text-right"><input type="number" className="w-full h-full text-right" value={OpeningBalance[idx].openingBalance} onChange={(e)=>{
                    const update = [...OpeningBalance];
                    update[idx].openingBalance = e.target.value;
                    setOpeningBalance(update)
                  }}/></td>
                  <td className="border text-sm px-1 py-1 text-left"><select className="w-full" name="" id="" value={OpeningBalance[idx].DrCr} onChange={(e)=>{
                    const update = [...OpeningBalance];
                    update[idx].DrCr = e.target.value;
                    setOpeningBalance(update)}}>
                        <option value="Dr">Dr</option>
                        <option value="Cr">Cr</option>
                        </select></td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
             
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>

               <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Find
              </button>
               <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Find Next
              </button>
            </div>
        </form>
      </div>
    </PopUp>
  );
};

export default OpBalance;
