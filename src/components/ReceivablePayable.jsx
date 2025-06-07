import React, { useState } from "react";

const ReceivablePayable = () => {
    const [view, setview] = useState("DateWise")
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="lg:w-[800px] border bg-white">
        <form action="">
          <h1 className="text-center font-semibold text-xl">Report Criteria</h1>
          <div className="flex flex-col md:flex-row px-2 py-1 justify-between xl:items-center">
            <h1 className="text-fuchsia-600 font-medium text-lg">View</h1>
            <div className="flex gap-2">
              <input type="radio" name="view" id="Datewise" checked={view === "DateWise"} onChange={()=>setview("DateWise")}/>
              <span>DateWise</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="view" id="Datewise" checked={view === "LedgerWise"} onChange={()=>setview("LedgerWise")}/>
              <span>LedgerWise</span>
            </div>
          </div>

            {view == "DateWise" ?  <div className="border py-4">
            <div className="flex flex-col md:flex-row px-2 py-1 xl:items-center">
              <span className="w-52 text-lg font-medium">Date Range</span>
              <div className="flex gap-4">
                <input type="date" className="flex-1 border px-2 py-1" />
                <span>TO</span>
                <input type="date" className="flex-1 border px-2 py-1" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row px-2 py-1 xl:items-center">
              <span className="w-70">Ledger Group</span>
              <input type="text" className=" px-2 py-2 border flex-1" />
            </div>
            <div className="flex flex-col md:flex-row px-2 py-1 xl:items-center">
              <span className="w-70">Voucher Type</span>
              <select id="tax" className="w-48 md:flex-1 border px-2 py-1">
                <option value="">Select Voucher Type</option>
                <option value="Bill Of Supply">BILL OF SUPPLY</option>
                <option value="Contra">Contra</option>
                <option value="Credit Note">Credit note</option>
                <option value="Credit Note w/o Stock">Credit Note W/O Stock</option>
                <option value="Debit Note">Debit Note</option>
                <option value="Debit Note w/o Stock">Debit Note W/O Stock</option>
                <option value="GST Expense">GST Expense</option>
                <option value="Payment">Payment</option>
                <option value="Purchase Return">Purchase Return</option>
                <option value="Receipt">Receipt</option>
                <option value="Retail Purchase">Retail Purchase</option>
                <option value="Sales Return">Sales Return</option>
                <option value="Shortage">Shortage</option>
                <option value="Tax Invoice">Tax Invoice</option>
                <option value="Tax Purchase">Tax Purchase</option>
                <option value="Journal">Journal</option>
              </select>
            </div>

            <div className="flex justify-center items-center">
                <div className="flex flex-col items-start">
              <div className="flex gap-2">
                <input type="checkbox" name="g1" id="" />
                <span>Show For Due Date Range</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="g1" id="" />
                <span>Include All Adjustment</span>
              </div>
            </div>
            </div>
          </div>:
           <div className="border py-4 space-y-10">
            <div className="flex flex-col md:flex-row px-2 py-1 xl:items-center">
              <span className="w-70">Ledger Name</span>
              <input type="text" className=" px-2 py-2 border flex-1" />
            </div>

            <div className="flex flex-col md:flex-row px-2 py-1 xl:items-center">
              <span className="w-52 text-lg font-medium">Date Range</span>
              <div className="flex gap-4">
                <input type="date" className="flex-1 border px-2 py-1" />
                <span>TO</span>
                <input type="date" className="flex-1 border px-2 py-1" />
              </div>
            </div>
            
          </div>
          }
            

          <div className="flex justify-center lg:ml-40">
            <div className="flex flex-col px-2 py-1 xl:items-start ">
              <div className="flex gap-2">
                <input type="checkbox" name="g1" id="" />
                <span>Show Stock Detail in Print</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="g1" id="" />
                <span>Show Bill Adjustment In Detail</span>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex gap-2">
                  <input type="checkbox" name="g1" id="" />
                  <span>OverDue Bills Only</span>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="g1" id="" />
                  <span>Show Bank Info In Print</span>
                </div>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="g1" id="" />
                <span>Show On Account Diff</span>
              </div>
            </div>
          </div>

         

          <div className="flex flex-col md:flex-row gap-2 my-10 md:justify-center">
            <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              Show
            </button>
            <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceivablePayable;
