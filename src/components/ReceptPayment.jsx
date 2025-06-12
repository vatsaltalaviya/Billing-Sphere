import React, { useEffect, useRef, useState } from "react";
import SearchableDropdown from "./SearchableDropdown";
import { items } from "../assets/Dummydata";

const ReceptPayment = ({ mode ,triggerPrevious ,focusDateTrigger}) => {
  // Each row: { entryType, debit, credit, remark, ledger }
  const [rows, setRows] = useState([
    { entryType: "Cr", debit: "", credit: "", remark: "", ledger: "" }
  ]);
  const [No, setNo] = useState(1)
  const [date, setDate] = useState('')
  const [narration, setNarration] = useState('')
  const dateRef = useRef();
  
  useEffect(() => {
    if (focusDateTrigger) {
      dateRef.current.focus();
    }
  }, [focusDateTrigger]);


  // Handler for changing a field in a row
  const handleRowChange = (idx, field, value) => {
    const updated = [...rows];
    // If entryType changes, clear the other cell
    if (field === "entryType") {
      updated[idx].entryType = value;
      if (value === "Cr") {
        updated[idx].debit = "";
      } else {
        updated[idx].credit = "";
      }
    } else {
      updated[idx][field] = value;
    }
    setRows(updated);
    // If editing the last row and an amount is entered, add a new row
    const last = updated[updated.length - 1];
    const amountEntered = (last.entryType === "Cr" && last.credit) || (last.entryType === "Dr" && last.debit);
    if (idx === rows.length - 1 && amountEntered && rows.length < 100) {
      setRows([...updated, { entryType: "Cr", debit: "", credit: "", remark: "", ledger: "" }]);
    }
  };


  // Effect to set the initial value of No when triggerPrevious changes
useEffect(() => {
  if (triggerPrevious !== undefined && triggerPrevious !== null) {
    setNo(triggerPrevious);
  }
}, [triggerPrevious]);
  

  return (
    <div className="w-full bg-white overflow-y-auto">
      <div className="flex flex-col lg:flex-row justify-between border-b gap-4">
        <div className="flex flex-col lg:flex-row py-1 gap-2">
          <label htmlFor="no" className="w-20 text-lg font-medium">
            No
          </label>
          <input type="text" id="no" value={No} onChange={(e)=>setNo(e.target.value)} className="flex-1 h-10 border px-2 py-2" />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 pb-2 lg:pb-0">
          <label htmlFor="Date" className="w-20 text-lg font-medium">
            Date
          </label>
          <input
            type="date"
            id="Date"
            className="flex-1 h-10 border px-2 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            ref={dateRef}
          />
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="overflow-x-auto h-[60vh] table-data border-b mt-1 relative">
          <table className="min-w-full text-center table-fixed">
            <colgroup>
              <col className="w-5 min-w-[20px] max-w-[20px]" />
              <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
              <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
              <col className="w-16 min-w-[60px] max-w-[60px]" />
              <col className="w-20 min-w-[80px] max-w-[80px]" />
            </colgroup>
            <thead className="bg-blue-800  border">
              <tr>
                <th className="border border-black px-2 py-1 text-white">Cr/Dr</th>
                <th className="border border-black px-2 py-1 text-white">Ledger Name</th>
                <th className="border border-black px-2 py-1 text-white">Remark</th>
                <th className="border border-black px-2 py-1 text-white">Debit</th>
                <th className="border border-black px-2 py-1 text-white">Credit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="border px-2">
                    <select
                      className="w-full h-full px-2 py-1 "
                      value={row.entryType}
                      onChange={e => handleRowChange(idx, "entryType", e.target.value)}
                    >
                      <option value="Cr">Cr</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </td>
                  <td className="border p-0 col-span-3">
                    <SearchableDropdown
                    options={items}
                      value={row.ledger}
                      className="w-full h-full relative outline-none"
                      onChange={(val) => {
                        const updated = [...rows];
                        console.log(updated);
                        updated[idx].ledger = val.target.value // Use the selected item's name
                        setRows(updated);
                      }}
                    />
                  </td>
                  <td className="border p-0">
                    <input
                      type="text"
                      className="w-full outline-none h-full px-2 py-1"
                      value={row.remark}
                      onChange={e => handleRowChange(idx, "remark", e.target.value)}
                    />
                  </td>
                  <td className="border p-0">
                    <input
                      type="number"
                      className="w-full outline-none h-full px-2 py-1"
                      value={row.debit}
                      onChange={e => handleRowChange(idx, "debit", e.target.value)}
                      disabled={row.entryType === "Cr"}
                    />
                  </td>
                  <td className="border p-0">
                    <input
                      type="number"
                      className="w-full outline-none h-full px-2 py-1"
                      value={row.credit}
                      onChange={e => handleRowChange(idx, "credit", e.target.value)}
                      disabled={row.entryType === "Dr"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex pt-2 flex-col lg:flex-row justify-between flex-wrap gap-4 mb-20 lg:mb-0">
          <div className="flex flex-col lg:flex-row">
            <label htmlFor="narration" className="w-32 text-lg font-medium">
              Narration
            </label>
            <input
              type="text"
              id="narration"
              className="w-full lg:w-sm h-10 px-2 py-2 border"
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
            />
          </div>

          <div className="border h-32 ">
            <div className="flex flex-col lg:flex-row border-b w-full ">
              <div className="flex lg:w-1/2 px-2 items-center lg:mb-0 mb-2 ">
                <p className="text-lg font-medium w-38 lg:w-20">Limit</p>
                <span className="px-4 py-2 w-full text-center font-medium bg-zinc-400">
                  00.00
                </span>
              </div>
              <div className="flex px-2 lg:w-1/2 items-center gap-4">
                <p className="text-lg font-medium w-32 lg:w-20">Bal</p>
                <span className="px-4 w-full py-2 text-center font-medium bg-zinc-400">
                  00.00
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start w-full lg:w-sm ">
            <div className="w-1/2 flex flex-col items-center justify-center px-2 py-2">
              <span>1000.00</span>
              <hr className="border w-full" />
              <hr className="border w-full mt-[1px]" />
              <div className="flex gap-1">
                <span>[3]</span>
                <span>CR</span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center px-2 py-2">
              <span>1000.00</span>
              <hr className="border w-full" />
              <hr className="border w-full mt-[1px]" />
              <div className="flex gap-1">
                <span>[3]</span>
                <span>DR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-center p-2 mt-3 mb-10">
          <div className="flex flex-col xl:flex-row gap-3">
            <button className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
              Save
            </button>
            <button className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
              Cancel
            </button>
            <button className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceptPayment;
