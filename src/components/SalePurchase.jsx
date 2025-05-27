import React, { useState } from "react";
import SearchableDropdown from "./SearchableDropdown";

const SalePurchase = () => {
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  // Dummy options for dropdowns
  const productOptions = ["Chocolate box", "Lays Chips", "Coke", "Fanta"];
  const sundryOptions = [
    "Packing Charges",
    "Freight",
    "Discount",
    "Other Sundry",
  ];
  const partyOptions = ["Cash in Hand", "ABC Traders", "XYZ Distributors"];

  // Controlled form state
  const [formFields, setFormFields] = useState({
    no: "",
    date: "",
    party: "",
    place: "",
    dcno: "",
    dcdate: "",
    type: "Cash",
    remark: "",
  });

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
  // Table state for 4 sundry rows
  const [sundryRows, setSundryRows] = useState(
    Array.from({ length: 4 }, () => ({
      sundry: "",
      amount: "",
    }))
  );

  // Handler for top form fields
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white overflow-y-auto">
      <div className="flex flex-col gap-4  mb-5 py-2">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="no" className="w-32 text-xl font-medium">
              NO
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
            <label htmlFor="Date" className="w-32 text-xl font-medium">
              Date
            </label>
            <input
              type="date"
              id="Date"
              name="date"
              className="flex-1 border px-2 py-2"
              value={formFields.date}
              onChange={handleFieldChange}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="Type" className="w-32 text-xl font-medium">
              Type
            </label>
            <select
              id="Type"
              name="type"
              className="flex-1 border px-2 py-2"
              value={formFields.type}
              onChange={handleFieldChange}
            >
              <option value="Cash">Cash</option>
              <option value="Debit">Debit</option>
              <option value="MultiMobile">MultiMobile</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row gap-4">
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="party" className="w-32 text-xl font-medium">
              Party
            </label>
            <select
              id="party"
              name="party"
              className="flex-1 min-w-0 lg:w-[822px] border px-2 py-2"
              value={formFields.party}
              onChange={handleFieldChange}
            >
              <option value=""></option>
              {partyOptions.map((party) => (
                <option key={party} value={party}>
                  {party}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="Place" className="w-32 text-xl font-medium">
              Place
            </label>
            <select
              id="state"
              name="place"
              className="w-full md:w-52 md:flex-1 border px-2 py-2"
              value={formFields.place}
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
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="dcno" className="w-32 text-xl font-medium">
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
          <div className="flex flex-col lg:flex-row gap-2">
            <label htmlFor="date" className="w-32 text-xl font-medium">
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
                    value={row.item}
                    options={productOptions}
                    onChange={(val) => {
                      const updated = [...productRows];
                      updated[idx].item = val;
                      setProductRows(updated);
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
          <label htmlFor="remark" className="w-32 text-xl font-medium">
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
                        options={sundryOptions}
                        onChange={(val) => {
                          const updated = [...sundryRows];
                          updated[idx].sundry = val;
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
              className="flex-1 text-right px-2 py-1"
              defaultValue="0"
            />
          </div>
          <div className="flex">
            <label htmlFor="netTotal" className="w-32 text-lg font-medium">
              Net Total
            </label>
            <input
              type="number"
              id="netTotal"
              className="flex-1 text-right px-2 py-1"
              defaultValue="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePurchase;
