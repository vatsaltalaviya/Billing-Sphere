import React, { useEffect, useRef, useState } from "react";
import SearchableDropdown from "./SearchableDropdown";
import {
  items,
  party,
  saletype,
  Sundry,
  salesData
} from "../assets/Dummydata";
import SystemErrorMessage from "./SystemErrorMessage";
import { indianStates } from "../assets/IndianStates";

const SalePurchase = ({
  mode,
  onDropdownRef,
  onRowsChange,
  createNewRow,
  triggerNew,
  triggerPrevious
}) => {
  const [showSystemError, setShowSystemError] = useState(false);

  // Table state for 15 product rows
  const [productRows, setProductRows] = useState(
    Array.from({ length: 15 }, () => ({
      item: "",
      qty: "",
      unit: "",
      rate: "",
      amount: "",
      disc: "",
      d1: "",
      netAmt: "",
    }))
  );

  if (createNewRow) {
    setProductRows((prevRows) => [...prevRows, createNewRow()]);
  }

  // Ref for searchable dropdowns
  const dropdownRefs = useRef([]);

  // Notify parent when rows change
  useEffect(() => {
    if (onRowsChange) {
      onRowsChange(productRows);
    }
  }, [productRows]);

  // Pass refs up to parent
  useEffect(() => {
    if (onDropdownRef) {
      onDropdownRef(dropdownRefs.current);
    }
  }, [dropdownRefs.current]);

  // Controlled form state
  const [formFields, setFormFields] = useState({
    no: "",
    date: "",
    party: "",
    place: "",
    dcno: "",
    billno: "",
    dcdate: "",
    type: "Cash",
    remark: "",
  });


  // for privious and next voucher
  useEffect(() => {
  if (triggerPrevious !== undefined && triggerPrevious !== null) {
    setFormFields(prev => ({
      ...prev,
      no: triggerPrevious.toString()
    }));
  }
}, [triggerPrevious]);

  // Table state for 4 sundry rows
  const [sundryRows, setSundryRows] = useState(
    Array.from({ length: 4 }, () => ({
      sundry: "",
      amount: "",
    }))
  );

  // Handler for top form fields
  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setFormFields((prev) => ({ ...prev, [id]: value }));
  };




  // check if any product row or form field has data
  const hasData = () => {
    // Check if any product row has data
    const productHasData = productRows.some((row) =>
      Object.values(row).some(
        (val) => val !== "" && val !== null && val !== undefined
      )
    );
    // Check if any form field (except 'no' and 'type') has data
    const formHasData = Object.entries(formFields).some(
      ([key, val]) =>
        key !== "no" &&
        key !== "type" &&
        val !== "" &&
        val !== null &&
        val !== undefined
    );
    return productHasData || formHasData;
  };

  const handleNewVoucher = () => {
    if (hasData()) {
      setShowSystemError(true);
    } else {
      setProductRows(
        Array.from({ length: 15 }, () => ({
          item: "",
          qty: "",
          unit: "",
          rate: "",
          amount: "",
          disc: "",
          d1: "",
          netAmt: "",
        }))
      );
      setSundryRows(
        Array.from({ length: 4 }, () => ({
          sundry: "",
          amount: "",
        }))
      );
      setFormFields((prev) => ({
        ...prev,
        no:  (parseInt(prev.no) + 1).toString()  ,
        date: "",
        party: "",
        place: "",
        dcno: "",
        billno: "",
        dcdate: "",
        type: "Cash",
        remark: "",
      }));
    }
  };

  // Listen for triggerNew changes
  useEffect(() => {
    if (triggerNew) {
      handleNewVoucher();
    }
  }, [triggerNew]);

  // console.log(productRows);
  // console.log(formFields);
  

  return (
    <div className="w-full bg-white overflow-y-auto">
      <div className="flex flex-col gap-4  mb-5 py-2">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="no" className="w-32 text-lg font-medium">
              No
            </label>
            <input
              type="text"
              id="no"
              name="no"
              className="flex-1 border px-2 py-2"
              value={formFields.no}
              onChange={handleFieldChange}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="date" className="w-28 text-lg font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="flex-1 border px-2 py-2"
              value={formFields.date}
              onChange={handleFieldChange}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="type" className="w-32 text-lg font-medium">
              Type
            </label>
            <SearchableDropdown
              options={saletype}
              id="type"
              name="type"
              className="flex-1 lg:w-36 border px-2 py-2"
              value={formFields.type}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="party" className="w-32 text-lg font-medium">
              Party
            </label>
            <SearchableDropdown
              options={party}
              id="party"
              name="party"
              className="flex-1 min-w-full lg:w-[795px] lg:ml-4 border px-2 py-2"
              value={formFields.party}
              onChange={handleFieldChange}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="place" className="w-32 xl:pl-4 text-lg font-medium">
              Place
            </label>
            <select
              id="place"
              name="place"
              className="w-full md:w-52 md:flex-1 border px-2 py-2"
              value={formFields.place || ""}
              onChange={handleFieldChange}
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {mode === "Sales" ? (
            <div className="flex flex-col lg:flex-row gap-2">
              <label htmlFor="dcno" className="w-32 text-lg font-medium">
                DC NO
              </label>
              <input
                type="number"
                id="dcno"
                name="dcno"
                className="flex-1 lg:w-[535px] border px-2 py-2"
                value={formFields.dcno}
                onChange={handleFieldChange}
              />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-2">
              <label htmlFor="billno" className="w-32 text-lg font-medium">
                Bill NO
              </label>
              <input
                type="number"
                id="billno"
                name="billno"
                className="flex-1 lg:w-[535px] border px-2 py-2"
                value={formFields.billno}
                onChange={handleFieldChange}
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="date" className="w-24 text-lg font-medium">
              Date
            </label>
            <input
              type="date"
              id="dcdate"
              name="dcdate"
              className="flex-1 border px-2 py-2"
              value={formFields.dcdate}
              onChange={handleFieldChange}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto table-data border h-[35vh] mt-6 relative">
        <table className="min-w-full text-center table-fixed">
          <colgroup>
            <col className="w-10 min-w-[40px] max-w-[40px]" />
            <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-20 min-w-[80px] max-w-[80px]" />
            <col className="w-24 min-w-[100px] max-w-[100px]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-24 min-w-[100px] max-w-[100px]" />
          </colgroup>
          <thead className="bg-blue-800 text-white border">
            <tr>
              <th className="border px-2 py-1">Sr</th>
              <th className="border px-2 py-1">Item Name</th>
              <th className="border px-2 py-1">Qty</th>
              <th className="border px-2 py-1">Unit</th>
              <th className="border px-2 py-1">Rate</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Disc</th>
              <th className="border px-2 py-1">D1%</th>
              <th className="border px-2 py-1">Net Amt</th>
            </tr>
          </thead>
          <tbody>
            {productRows.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{idx + 1}</td>
                <td className="border p-0 col-span-3">
                  <SearchableDropdown
                    ref={(el) => (dropdownRefs.current[idx] = el)}
                    value={row.item}
                    options={items}
                    className="w-full h-full px-2"
                    onChange={(val) => {
                      const updated = [...productRows];
                      updated[idx].item = val.target.value;
                      setProductRows(updated);

                      // Check if current row is filled
                      if (val.target.value) {
                        const isCurrentRowFilled =
                          updated[idx].item !== "" &&
                          updated[idx].qty !== "" &&
                          updated[idx].rate !== "";

                        if (
                          isCurrentRowFilled &&
                          idx === productRows.length - 1 &&
                          productRows.length < 15
                        ) {
                          // Add new row automatically
                          const newRow = {
                            item: "",
                            qty: "",
                            unit: "",
                            rate: "",
                            amount: "",
                            disc: "",
                            d1: "",
                            netAmt: "",
                          };
                          setProductRows([...updated, newRow]);
                        }
                      }
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="number"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.qty}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].qty = e.target.value;
                      setProductRows(updated);

                      // Check if current row is filled
                      if (e.target.value) {
                        const isCurrentRowFilled =
                          updated[idx].item !== "" &&
                          updated[idx].qty !== "" &&
                          updated[idx].rate !== "";

                        if (
                          isCurrentRowFilled &&
                          idx === productRows.length - 1 &&
                          productRows.length < 15
                        ) {
                          // Add new row automatically
                          const newRow = {
                            item: "",
                            qty: "",
                            unit: "",
                            rate: "",
                            amount: "",
                            disc: "",
                            d1: "",
                            netAmt: "",
                          };
                          setProductRows([...updated, newRow]);
                        }
                      }
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="text"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.unit}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].unit = e.target.value;
                      setProductRows(updated);
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="number"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.rate}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].rate = e.target.value;
                      setProductRows(updated);
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="number"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.amount}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].amount = e.target.value;
                      setProductRows(updated);
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="number"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.disc}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].disc = e.target.value;
                      setProductRows(updated);
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="number"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.d1}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].d1 = e.target.value;
                      setProductRows(updated);
                    }}
                  />
                </td>
                <td className="border p-0">
                  <input
                    type="number"
                    className="w-full h-full outline-none px-2 py-1"
                    value={row.netAmt}
                    onChange={(e) => {
                      const updated = [...productRows];
                      updated[idx].netAmt = e.target.value;
                      setProductRows(updated);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto relative">
        <table className="min-w-full border text-center table-fixed">
          <colgroup>
            <col className="w-10 min-w-[40px] max-w-[40px]" />
            <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-20 min-w-[80px] max-w-[80px]" />
            <col className="w-24 min-w-[100px] max-w-[100px]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-16 min-w-[60px] max-w-[60px]" />
            <col className="w-24 min-w-[100px] max-w-[100px]" />
          </colgroup>
          <tbody>
            <tr className="bg-gray-100 font-semibold">
              <td className=" p-0 text-center">Total</td>
              <td className=" p-0"></td>
              <td className=" p-0 text-center">0</td>
              <td className=" p-0"></td>
              <td className=" p-0"></td>
              <td className=" p-0 text-center">0</td>
              <td className=" p-0 text-center">0</td>
              <td className=" p-0"></td>
              <td className=" p-0 text-center">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-start gap-4 justify-between mt-4">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <label htmlFor="remark" className="w-32 text-lg font-medium">
            Remark
          </label>
          <input
            type="text"
            id="remark"
            name="remark"
            className="flex-1 w-full h-10 md:w-xl lg:w-[50vw] border px-2 py-2"
            value={formFields.remark}
            onChange={handleFieldChange}
          />
        </div>
        <div className="flex flex-col xl:flex-row overflow-auto w-full justify-end gap-4">
          <div className="overflow-auto border relative">
            <table className="min-w-full overflow-x-auto text-center table-fixed">
              <colgroup>
                <col className="w-10 min-w-[40px] max-w-[40px]" />
                <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
                <col className="w-16 min-w-[60px] max-w-[60px]" />
              </colgroup>
              <thead className="bg-blue-800 text-white border">
                <tr>
                  <th className="border px-2 py-1">Sr</th>
                  <th className="border px-2 py-1">Sundry Name</th>
                  <th className="border px-2 py-1">Amount</th>
                </tr>
              </thead>
              <tbody>
                {sundryRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="border px-2 py-1">{idx + 1}</td>
                    <td className="border p-0 col-span-3">
                      <SearchableDropdown
                        value={row.sundry}
                        options={Sundry}
                        onChange={(val) => {
                          const updated = [...sundryRows];
                          updated[idx].sundry = val.target.value;
                          setSundryRows(updated);
                        }}
                      />
                    </td>
                    <td className="border p-0">
                      <input
                        type="text"
                        className="w-full h-full px-2 py-1"
                        value={row.amount}
                        onChange={(e) => {
                          const updated = [...sundryRows];
                          updated[idx].amount = e.target.value;
                          setSundryRows(updated);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row justify-between p-2 mb-10">
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-2 my-2 px-1 py-0.5"></div>
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
        <div className="flex flex-col">
          <div className="flex mt-5 lg:mt-0">
            <label htmlFor="roundof" className="w-32 text-lg font-medium">
              Round Of
            </label>
            <input
              type="number"
              id="roundof"
              className="w-32 xl:flex-1 text-right px-2 py-1"
              value="100000"
              readOnly
            />
          </div>
          <div className="flex">
            <label htmlFor="netTotal" className="w-32 text-lg font-medium">
              Net Total
            </label>
            <input
              type="number"
              id="netTotal"
              className="w-32 xl:flex-1 text-right px-2 py-1"
              value="100000"
              readOnly
            />
          </div>
        </div>
      </div>
      {showSystemError && (
        <SystemErrorMessage
          message="Please save or cancel the current voucher before creating a new one."
          onClose={() => setShowSystemError(false)}
        />
      )}
    </div>
  );
};

export default SalePurchase;
