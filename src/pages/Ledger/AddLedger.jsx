import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchableDropdown from "../../components/SearchableDropdown";
import { ledgergroup } from "../../assets/LedgerGroup";
import { indianStates } from "../../assets/Dummydata";

const AddLedger = () => {
  // Default form state for AddLedger
  const defaultForm = {
    // Basic Details
    ledgerName: "", // Ledger Name
    printName: "", // Print Name
    alias: "", // Alias
    LedgerGroup: "", // Ledger Group
    opBalance: "", // Opening Balance (01/04/2025)
    opBalanceType: "CR", // CR/DR for Opening Balance
    billwise:'no',
    creditDays:'',
    creditLimit:'',
    remarks: "", // Remarks
    alertOn: false, // Alert on checkbox
    isActive: "NO", // Is Active

    // Mailing Details
    ledgercode: "", // Ledger code
    MailingName: "", // Mailing Name
    address: "", // Address
    city: "", // City/Place
    state: "", // State
    Pincode: "", // Pincode
    teleno: "", // Tele. NO.
    fax: "", // Fax No
    mobile: "", // Mobile No
    sms: "", // SMS NO.
    email: "", // Email Address
    contactPerson: "", // Contact Person
    bank: "", // Bank A/C Detail

    // Tax Information
    panNO: "", // Pan No
    gst: "", // GSTIN No
    gstDate: "", // GSTIN Date
    regtype: "", // Registration Type
    type: "", // Type
    cst: "", // CST
    cstDate: "", // CST Date
    LST: "", // LST
    lstDate: "", // LST Date
    Adhar: "", // Aadhar NO
  };


  const [formData, setformData] = useState(defaultForm);
  const { editid } = useParams();
  const { deleteid } = useParams();


  const handleChangeData = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setformData((prev) => {
      const updatedForm = {
        ...prev,
        [id]: newValue,
      };
      console.log(updatedForm); // Move console.log inside the setState callback
      
      return updatedForm;
    });
  };

     const SelectedLedgerGroup = ledgergroup.find(
        (group) => group.name === formData.LedgerGroup
      )
  console.log(SelectedLedgerGroup);

  return (
    <div className="h-screen w-full bg-white">
      <div
        className={`${
          editid ? "bg-amber-500" : deleteid ?"bg-red-500": "bg-blue-800"
        } font-bold text-xl`}
      >
        <h1 className="text-center text-white">
          {editid ? "Edit Ledger" : deleteid ? "Delete Ledger" : "Add Ledger"}
        </h1>
      </div>
      {/* ------------------------------- body ----------------------------------- */}
      <form className="p-2">
        <div className="flex flex-col xl:flex-row">
          {/* ----------------- left part --------------- */}
          <div className="w-full xl:w-1/2 border py-5">
            <div className="bg-blue-800 font-bold my-3 text-xl w-52">
              <h1 className="text-center text-white">Basic Details</h1>
            </div>
            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* Ledger Name */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 ">
                  <label
                    htmlFor="ledgerName"
                    className="w-32 md:w-44 test-sm md:text-lg font-medium"
                  >
                    Ledger Name
                  </label>
                  <input
                    type="text"
                    id="ledgerName"
                    className="flex-1 border px-2 py-1"
                    value={formData.ledgerName}
                    onChange={handleChangeData}
                  />
                </div>

                {/* Print Name */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                  <label
                    htmlFor="printName"
                    className="w-32 md:w-44 test-sm md:text-lg font-medium"
                  >
                    Print Name
                  </label>
                  <input
                    type="text"
                    id="printName"
                    className="flex-1 border px-2 py-1"
                    value={formData.printName}
                    onChange={handleChangeData}
                  />
                </div>
                {/*  alias */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                  <label
                    htmlFor="alias"
                    className="w-32 md:w-44 test-sm md:text-lg font-medium"
                  >
                    Alias
                  </label>
                  <input
                    type="text"
                    id="alias"
                    className="flex-1 border px-2 py-1"
                    value={formData.alias}
                    onChange={handleChangeData}
                  />
                </div>

                {/* Ledger Group*/}

                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                  <label
                    htmlFor="LedgerGroup"
                    className="w-36 md:w-44 test-sm md:text-lg font-medium"
                  >
                    Ledger Group
                  </label>
                  
                  <SearchableDropdown className="flex-1 border px-2 py-1 xl:ml-9" id="LedgerGroup" options={ledgergroup}  value={formData.LedgerGroup}
                    onChange={handleChangeData}/>
                </div>



                <div className="flex flex-col md:flex-row flex-wrap xl:items-center xl:justify-between gap-1 lg:gap-4 mt-3">
                    <div className="flex flex-col lg:flex-row lg:items-center ">
                      <label
                        htmlFor="billwise"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Billwise Accounting
                      </label>
                      <select
                        id="billwise"
                        className="flex-1 md:w-32 border px-2 py-1"
                        value={formData.billwise}
                        onChange={handleChangeData}
                        min="0"
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    
                    {formData.billwise == 'yes' &&(
                      <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="creditDays"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Credit Days
                      </label>
                      <input
                        type="number"
                        id="creditDays"
                        className="flex-1 md:w-36 border px-2 py-1"
                        value={formData.creditDays}
                        onChange={handleChangeData}
                        min="0"
                      />
                    </div>
                    )}
                  </div>

                {/* OP Balance */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 my-10">
                  <label
                    htmlFor="opBalance"
                    className="w-32 md:w-44 test-sm md:text-lg font-medium"
                  >
                    Op. Balance (01/04/2025)
                  </label>
                  <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
                    <input
                      type="number"
                      id="opBalance"
                      value={formData.opBalance}
                      onChange={handleChangeData}
                      className="flex-1 border px-2 py-1"
                      min="0"
                    />

                    <select
                      id="opBalanceType"
                      className="w-20 md:flex-1 border px-2 py-1"
                      value={formData.opBalanceType}
                      onChange={handleChangeData}
                    >
                      <option value="CR">CR</option>
                      <option value="DR">DR</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="creditLimit"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Credit Limit
                      </label>
                      <input
                        type="number"
                        id="creditLimit"
                        className="w-32 md:w-36 border px-2 py-1"
                        value={formData.creditLimit}
                        onChange={handleChangeData}
                        min="0"
                      />
                    </div>

                {/* Remarks */}
                <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-1 lg:gap-4 mt-24">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                    <label
                      htmlFor="remarks"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Remarks
                    </label>
                    <input
                      type="text"
                      id="remarks"
                      className="flex-1 border px-2 py-1"
                      value={formData.remarks}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:flex-wrap justify-evenly lg:items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      id="alertOn"
                      checked={formData.alertOn}
                      onChange={handleChangeData}
                    />
                    <span className="text-sm md:text-lg">Alert on</span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                  <label
                    htmlFor="isActive"
                    className="font-medium test-sm md:text-lg w-32 md:w-44"
                  >
                    Is Active
                  </label>
                  <select
                    id="IsActive"
                    className="border px-2 py-1 w-36 md:w-48"
                    value={formData.isActive}
                    onChange={handleChangeData}
                  >
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* ---- right part ------- */}
          <div className="w-full xl:w-1/2 border py-5">
            {SelectedLedgerGroup && SelectedLedgerGroup.mailingDetails &&(
              <>
              <div>
              <div className="bg-blue-800 font-bold my-3 text-xl w-52">
                <h1 className="text-white text-center">Mailing Details</h1>
              </div>
              <div className="space-y-4">
                <div className="py-5 px-4">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="ledgercode"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Ledger code
                    </label>
                    <input
                      type="number"
                      id="ledgercode"
                      className="flex-1 border px-2 py-1"
                      value={formData.ledgercode}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="MailingName"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Mailing Name
                    </label>
                    <input
                      type="text"
                      id="MailingName"
                      className="flex-1 border px-2 py-1"
                      value={formData.MailingName}
                      onChange={handleChangeData}
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="address"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="flex-1 border px-2 py-1"
                      value={formData.address}
                      onChange={handleChangeData}
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="city"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      City/Place
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="flex-1 border px-2 py-1"
                      value={formData.city}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4 ">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="state"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        State
                      </label>
                      <select
                        id="state"
                        className="w-36 md:w-52 md:flex-1 border px-2 py-1"
                        value={formData.state}
                        onChange={handleChangeData}
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

                  <div className="flex flex-col md:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-3">
                    <div className="flex flex-col lg:flex-row lg:items-center ">
                      <label
                        htmlFor="Pincode"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Pincode
                      </label>
                      <input
                        type="number"
                        id="Pincode"
                        className="flex-1 md:w-32 border px-2 py-1"
                        value={formData.Pincode}
                        onChange={handleChangeData}
                        min="0"
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="teleno"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Tele. No.
                      </label>
                      <input
                        type="number"
                        id="teleno"
                        className="flex-1 md:w-36 border px-2 py-1"
                        value={formData.teleno}
                        onChange={handleChangeData}
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="fax"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Fax No
                    </label>
                    <input
                      type="number"
                      id="fax"
                      className="flex-1 border px-2 py-1"
                      value={formData.fax}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="mobile"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Mobile No
                      </label>
                      <input
                        type="number"
                        id="mobile"
                        className="flex-1 border px-2 py-1"
                        value={formData.mobile}
                        onChange={handleChangeData}
                        min="0"
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="sms"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        SMS Msg.
                      </label>
                      <select
                        type="number"
                        id="sms"
                        value={formData.sms}
                        onChange={handleChangeData}
                        className="flex-1 border px-2 py-1"
                        min="0"
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="email"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChangeData}
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="contactPerson"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      className="flex-1 border px-2 py-1"
                      value={formData.contactPerson}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                    <label
                      htmlFor="bank"
                      className="w-32 md:w-44 test-sm md:text-lg font-medium"
                    >
                      Bank A/C Detail
                    </label>
                    <input
                      type="number"
                      id="bank"
                      className="flex-1 border px-2 py-1"
                      value={formData.bank}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-800 font-bold my-3 text-xl w-52">
                <h1 className="text-white text-center">Tax Information</h1>
              </div>
              <div className="space-y-4">
                <div className="py-5 px-4">
                  <div className="flex flex-col lg:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="panNO"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Pan No
                      </label>
                      <input
                        type="text"
                        id="panNO"
                        className="flex-1 border px-2 py-1"
                        value={formData.panNO}
                        onChange={handleChangeData}
                      />
                    </div>
                    <div className="flex flex-1"></div>
                  </div>
                  <div className="flex flex-col lg:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="gst"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        GSTIN No
                      </label>
                      <input
                        type="text"
                        id="gst"
                        className="flex-1 lg:w-44 border px-2 py-1"
                        value={formData.gst}
                        onChange={handleChangeData}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="gstDate"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                       GST Dated
                      </label>
                      <input
                        type="date"
                        id="gstDate"
                        className="flex-1 lg:w-32 border px-2 py-1"
                        value={formData.gstDate}
                        onChange={handleChangeData}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="regtype"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Registration Type
                      </label>
                      <select
                        id="regtype"
                        className="xl:w-[178px] flex-1 border px-2 py-1"
                        value={formData.regtype}
                        onChange={handleChangeData}
                      >
                        <option value="">Select Registration</option>
                        <option value="Composition">Composition</option>
                        <option value="Customer">Customer</option>
                        <option value="Regular">Regular</option>
                        <option value="Unknown">Unknown</option>
                        <option value="UnRegister">UnRegister</option>
                      </select>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="type"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Type
                      </label>
                      <select
                        id="type"
                        className="flex-1 lg:w-32 border px-2 py-1"
                        value={formData.type}
                        onChange={handleChangeData}
                      >
                        <option value="">Select Type</option>
                        <option value="Deemed Export">Deemed Export</option>
                        <option value="Deemed Export(Sec48)">
                          Deemed Export(Sec48)
                        </option>
                        <option value="Regular">Regular</option>
                        <option value="SEZ">SEZ</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="cst"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        CST
                      </label>
                      <input
                        type="text"
                        id="cst"
                        className="flex-1 lg:w-44 border px-2 py-1"
                        value={formData.cst}
                        onChange={handleChangeData}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="cstDate"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        CST Dated
                      </label>
                      <input
                        type="date"
                        id="cstDate"
                        className="flex-1 lg:w-32 border px-2 py-1"
                        value={formData.cstDate}
                        onChange={handleChangeData}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="LST"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        LST
                      </label>
                      <input
                        type="text"
                        id="LST"
                        className="flex-1 lg:w-44 border px-2 py-1"
                        value={formData.LST}
                        onChange={handleChangeData}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="lstDate"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                       LST Dated
                      </label>
                      <input
                        type="date"
                        id="lstDate"
                        className="flex-1 lg:w-32 border px-2 py-1"
                        value={formData.lstDate}
                        onChange={handleChangeData}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row flex-wrap xl:items-center gap-1 lg:gap-4 mt-4">
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="Adhar"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Aadhar NO
                      </label>
                      <input
                        type="number"
                        id="Adhar"
                        className="flex-1 border px-2 py-1"
                        value={formData.Adhar}
                        onChange={handleChangeData}
                        min="0"
                      />
                    </div>
                    <div className="flex flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
              </>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between border p-2">
          <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-2 my-2 px-1 py-0.5"></div>
          <div className="flex flex-col xl:flex-row gap-3 mb-3 md:mb-0">
            {deleteid ? (
              ""
            ) : (
              <button className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
                Save
              </button>
            )}

            <button className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
              Cancel
            </button>
            {editid || deleteid ? (
              <button className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
                Delete
              </button>
            ) : (
              ""
            )}

            {/*<button className="px-3 py-2 rounded border ml-1">Previous</button> */}
          </div>
          <button className="px-3 py-2 h-10 mt-3 xl:mt-0 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
            Copy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLedger;
