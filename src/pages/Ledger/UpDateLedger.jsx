import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchableDropdown from "../../components/SearchableDropdown";
import { indianStates } from "../../assets/IndianStates";
import { useDispatch, useSelector } from "react-redux";
import { fetchLedgerGroup, updateLedger } from "../../feature/ledgerSlice";
import { createLedger } from "../../feature/ledgerSlice";
import { generateLedgerCode } from "../../Utils/LedgerCode";
import { BeatLoader, ScaleLoader } from "react-spinners";
import axios from "axios";
const UpDateLedger = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const token = localStorage.getItem("token");

  const ledgergroupArr = [
    "Bank Accounts",
    "Bank OD A/C",
    "Branch/Division",
    "Customers",
    "Loans (Liability)",
    "Sundry Debtors",
    "Sundry Credit",
    "Unsecured Loan",
    "VENDOR",
  ];

  // Default form state for AddLedger
  const defaultForm = {
    // Basic Details
    ledgerName: "", // Ledger Name
    printName: "", // Print Name
    alias: "", // Alias
    LedgerGroup: "", // Ledger Group
    opBalance: "0", // Opening Balance (01/04/2025)
    opBalanceType: "CR", // CR/DR for Opening Balance
    billwise: "no",
    creditDays: "",
    debitBalance: "0",
    priceList: "",
    remarks: "", // Remarks
    status: "NO", // Is Active

    // Mailing Details
    ledgercode: generateLedgerCode(), // Ledger code
    MailingName: "", // Mailing Name
    address: "", // Address
    city: "", // City/Place
    state: "", // State
    Pincode: "", // Pincode
    teleno: "", // Tele. NO.
    fax: "", // Fax No
    mobile: "", // Mobile No
    mobile2: "", // Mobile 2
    email: "", // Email Address
    contactPerson: "", // Contact Person
    bankName: "", // Bank A/C Detail
    branchName: "", // Bank A/C Detail
    ifsc: "", // Bank A/C Detail
    ACname: "", //  A/C Detail
    ACNo: "", // A/C Detail

    // Tax Information
    panNO: "", // Pan No
    gst: "", // GSTIN No
    gstDate: "", // GSTIN Date
    regtype: "", // Registration Type
    cst: "", // CST
    cstDate: "", // CST Date
    LST: "", // LST
    lstDate: "", // LST Date
    serviceTaxNo: "", // Aadhar NO
  };
  const didInitRef = useRef(false);
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const dispatch = useDispatch();
  const { ledgerGroup, loading , error} = useSelector((state) => state.ledgers);

 
  

  useEffect(() => {
    dispatch(fetchLedgerGroup());
  }, [dispatch]);

  const [formData, setformData] = useState(defaultForm);
  const [isLoading, setisLoading] = useState(null);
  const [AllData, setAllData] = useState({});
  const { editid } = useParams();


  const handleChangeData = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setformData((prev) => {
      const updatedForm = {
        ...prev,
        [id]: newValue,
      };
      return updatedForm;
    });
  };

  const fetchLedgerById = async () => {
    setisLoading(true);

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/ledger/get-single-ledger/${editid}`,
        {
          headers: { Authorization: `${token}` },
        }
      );

      if (res.data.success) {
        const data = res.data.data;
        setAllData(data);
        setisLoading(false);
      }
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  const ledgerGroupOp = ledgerGroup?.find((i) => i._id == AllData.ledgerGroup);

  const handleData = () => {
    const updatedForm = {
      ledgerName: AllData.name || "",
      printName: AllData.printName || "",
      alias: AllData.aliasName || "",
      LedgerGroup: ledgerGroupOp?.name || "",
      opBalance: AllData.openingBalance || 0,
      opBalanceType: AllData.ledgerType === "Dr" ? "DR" : "CR",
      billwise: AllData.bilwiseAccounting || "no",
      creditDays: AllData.creditDays || "",
      debitBalance: AllData.debitBalance || 0,
      priceList: AllData.priceListCategory || "",
      remarks: AllData.remarks || "",
      status: AllData.status || "NO",
      ledgercode: AllData.ledgerCode,
      MailingName: AllData.mailingName || "",
      address: AllData.address || "",
      city: AllData.city || "",
      state: AllData.state || "",
      Pincode: AllData.pincode || "",
      teleno: AllData.tel || "",
      fax: AllData.fax || "",
      mobile: AllData.mobile || "",
      mobile2: AllData.sms || "",
      email: AllData.email || "",
      contactPerson: AllData.contactPerson || "",
      bankName: AllData.bankName || "",
      branchName: AllData.branchName || "",
      ifsc: AllData.ifsc || "",
      ACname: AllData.accName || "",
      ACNo: AllData.accNo || "",
      panNO: AllData.panNo || "",
      gst: AllData.gst || "",
      gstDate: AllData.gstDated || "",
      regtype: AllData.registrationType || "",
      cst: AllData.cstNo || "",
      cstDate: AllData.cstDated || "",
      LST: AllData.lstNo || "",
      lstDate: AllData.lstDated || "",
      serviceTaxNo: AllData.serviceTaxNo || "",
    };

    setformData(updatedForm);
  };
  useEffect(() => {
    if (!didInitRef.current && editid) {
      didInitRef.current = true;
      fetchLedgerById();
    }
  }, [editid]);

  useEffect(() => {
    if (AllData && ledgerGroupOp) {
      handleData();
    }
  }, [AllData, ledgerGroupOp]);

  const isLedgerGroupMatched = ledgergroupArr.includes(ledgerGroupOp?.name);
  const isLedgerGroupMatched2 = ledgergroupArr.includes(
    formData.LedgerGroup.name
  );

   const getId = (value, options) => {
    if (!value) return undefined;
    if (typeof value === "object" && value.id) return value.id;
    const found = options.find((opt) => opt.name === value);
    return found ? found.id : undefined;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = {
      name: formData.ledgerName || "",
      printName: formData.printName || "",
      aliasName: formData.alias || "",
      companyCode: companyId || "",
      ownerId: ownerId || "",
      ledgerGroup: getId(formData.LedgerGroup , ledgerGroup),
      date: formattedDate || "",
      bilwiseAccounting: formData.billwise || "",
      creditDays: Number(formData.creditDays) ?? 0,
      openingBalance: Number(formData.opBalance) ?? 0,
      debitBalance: Number(formData.debitBalance) ?? 0,
      ledgerType: formData.opBalanceType || "",
      priceListCategory: formData.priceList || "",
      remarks: formData.remarks || "",
      status: formData.status || "",
      ledgerCode: formData.ledgercode || "",
      mailingName: formData.MailingName || "",
      address: formData.address || "",
      city: formData.city || "",
      state: formData.state || "Gujrat",
      region: "India",
      pincode: formData.Pincode || 0,
      tel: formData.teleno || 0,
      fax: formData.fax || 0,
      mobile: formData.mobile || 0,
      sms: formData.mobile2 || 0,
      email: formData.email || "",
      contactPerson: formData.contactPerson || "",
      bankName: formData.bankName || "",
      branchName: formData.branchName || "",
      ifsc: formData.ifsc || "",
      accName: formData.ACname || "",
      accNo: formData.ACNo || "",
      panNo: formData.panNO || "",
      gst: formData.gst || "",
      gstDated: formData.gstDate || "",
      cstNo: formData.cst || "",
      cstDated: formData.cstDate || "",
      lstNo: formData.LST || "",
      lstDated: formData.lstDate || "",
      serviceTaxNo: formData.serviceTaxNo || "",
      registrationType: formData.regtype || "",
      serviceTaxDated: "",
      registrationTypeDated: "",
    };

    dispatch(updateLedger({ itemData, editId: editid }))
      .unwrap()
      .then(() => navigate("/dashboard/ledger"));
  };

  console.log(error);

  return (
    <div className="flex h-[100vh] items-center justify-center">
      {isLoading ? (
        <ScaleLoader height="30px" color="blue" />
      ) : (
        <div className="h-screen w-full bg-white">
          <div
            className={`
              bg-amber-500 
             font-bold text-xl`}
          >
            <h1 className="text-center text-white">Edit Ledger</h1>
          </div>
          {/* ------------------------------- body ----------------------------------- */}
          <form onSubmit={handleSubmit} className="p-2">
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
                        autoComplete="off"
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
                        autoComplete="off"
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
                        autoComplete="off"
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

                      <SearchableDropdown
                        className="flex-1 border relative"
                        id="LedgerGroup"
                        options={ledgerGroup}
                        autoComplete="off"
                        value={formData.LedgerGroup}
                        onChange={handleChangeData}
                      />
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
                          autoComplete="off"
                          value={formData.billwise}
                          onChange={handleChangeData}
                          min="0"
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>

                      {formData.billwise == "yes" && (
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
                            autoComplete="off"
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
                        Op. Balance ({formattedDate})
                      </label>
                      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2">
                        <input
                          type="number"
                          id="opBalance"
                          value={formData.opBalance}
                          autoComplete="off"
                          onChange={handleChangeData}
                          className="flex-1 border px-2 py-1"
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
                        Debit Balance
                      </label>
                      <input
                        type="number"
                        id="debitBalance"
                        className="w-32 md:w-36 border px-2 py-1"
                        autoComplete="off"
                        value={formData.debitBalance}
                        onChange={handleChangeData}
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                      <label
                        htmlFor="creditLimit"
                        className="w-36 md:w-48 test-sm md:text-lg font-medium"
                      >
                        Price List Category
                      </label>
                      <select
                        id="priceList"
                        className="w-32 md:w-36 border px-2 py-1"
                        value={formData.priceList}
                        onChange={handleChangeData}
                        min="0"
                      >
                        <option value="RETAIL">Retail</option>
                        <option value="MRP">Mrp</option>
                      </select>
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
                          autoComplete="off"
                          id="remarks"
                          className="flex-1 border px-2 py-1"
                          value={formData.remarks}
                          onChange={handleChangeData}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
                      <label
                        htmlFor="status"
                        className="font-medium test-sm md:text-lg w-32 md:w-44"
                      >
                        Is Active
                      </label>
                      <select
                        id="status"
                        className="border px-2 py-1 w-36 md:w-48"
                        value={formData.status}
                        onChange={handleChangeData}
                      >
                        <option value="No">NO</option>
                        <option value="Yes">YES</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---- right part ------- */}
              <div className="w-full xl:w-1/2 border py-5">
                {(isLedgerGroupMatched || isLedgerGroupMatched2) && (
                  <>
                    <div>
                      <div className="bg-blue-800 font-bold my-3 text-xl w-52">
                        <h1 className="text-white text-center">
                          Mailing Details
                        </h1>
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
                              autoComplete="off"
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
                              autoComplete="off"
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
                              autoComplete="off"
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
                                className="flex-1 md:w-52 border px-2 py-1"
                                autoComplete="off"
                                value={formData.Pincode}
                                onChange={handleChangeData}
                                min="0"
                              />
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center">
                              <label
                                htmlFor="teleno"
                                className="w-36 md:w-32 test-sm md:text-lg font-medium"
                              >
                                Tele. No.
                              </label>
                              <input
                                type="number"
                                id="teleno"
                                className="flex-1 md:w-36 border px-2 py-1"
                                autoComplete="off"
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
                              autoComplete="off"
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
                                className="flex-1 md:w-52 border px-2 py-1"
                                autoComplete="off"
                                value={formData.mobile}
                                onChange={handleChangeData}
                                min="0"
                              />
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center">
                              <label
                                htmlFor="mobile"
                                className="w-24 test-sm md:text-lg font-medium"
                              >
                                Mobile 2
                              </label>
                              <input
                                type="number"
                                id="mobile2"
                                className="flex-1 md:w-40 border px-2 py-1"
                                autoComplete="off"
                                value={formData.mobile2}
                                onChange={handleChangeData}
                                min="0"
                              />
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
                              autoComplete="off"
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
                              autoComplete="off"
                              value={formData.contactPerson}
                              onChange={handleChangeData}
                            />
                          </div>
                          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                            <label
                              htmlFor="bank"
                              className="w-32 md:w-44 test-sm md:text-lg font-medium"
                            >
                              Bank Name
                            </label>
                            <input
                              type="text"
                              id="bankName"
                              className="flex-1 border px-2 py-1"
                              autoComplete="off"
                              value={formData.bankName}
                              onChange={handleChangeData}
                              min="0"
                            />
                          </div>
                          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                            <label
                              htmlFor="bank"
                              className="w-32 md:w-44 test-sm md:text-lg font-medium"
                            >
                              Branch Name
                            </label>
                            <input
                              type="text"
                              id="branchName"
                              className="flex-1 border px-2 py-1"
                              autoComplete="off"
                              value={formData.branchName}
                              onChange={handleChangeData}
                              min="0"
                            />
                          </div>
                          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                            <label
                              htmlFor="bank"
                              className="w-32 md:w-44 test-sm md:text-lg font-medium"
                            >
                              IFSC Code
                            </label>
                            <input
                              type="text"
                              id="ifsc"
                              autoComplete="off"
                              className="flex-1 border px-2 py-1"
                              value={formData.ifsc}
                              onChange={handleChangeData}
                              min="0"
                            />
                          </div>
                          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                            <label
                              htmlFor="bank"
                              className="w-32 md:w-44 test-sm md:text-lg font-medium"
                            >
                              A/C Name
                            </label>
                            <input
                              type="text"
                              id="ACname"
                              autoComplete="off"
                              className="flex-1 border px-2 py-1"
                              value={formData.ACname}
                              onChange={handleChangeData}
                              min="0"
                            />
                          </div>
                          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 mt-4">
                            <label
                              htmlFor="bank"
                              className="w-32 md:w-44 test-sm md:text-lg font-medium"
                            >
                              A/C No
                            </label>
                            <input
                              type="number"
                              id="ACNo"
                              autoComplete="off"
                              className="flex-1 border px-2 py-1"
                              value={formData.ACNo}
                              onChange={handleChangeData}
                              min="0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-800 font-bold my-3 text-xl w-52">
                        <h1 className="text-white text-center">
                          Tax Information
                        </h1>
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
                                autoComplete="off"
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
                                autoComplete="off"
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
                                autoComplete="off"
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
                                className="xl:w-full flex-1 border px-2 py-1"
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
                                autoComplete="off"
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
                                autoComplete="off"
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
                                autoComplete="off"
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
                                Service Tax No
                              </label>
                              <input
                                type="number"
                                autoComplete="off"
                                id="serviceTaxNo"
                                className="flex-1 border px-2 py-1"
                                value={formData.serviceTaxNo}
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
                <button className="flex items-center gap-2 justify-center px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
                  {loading && <BeatLoader size={5} color="#fff" />}
                  Save
                </button>

                <button
                  onClick={() => navigate("/dashboard/ledger")}
                  className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500"
                >
                  Cancel
                </button>
              </div>
              <button className="px-3 py-2 h-10 mt-3 xl:mt-0 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
                Copy
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpDateLedger;
