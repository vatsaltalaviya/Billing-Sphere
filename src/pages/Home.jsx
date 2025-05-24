import React, { useState } from "react";
import DropdownButton from "../components/DropdownButton";
import ButtonGroup from "../components/ButtonGroup";

const Home = () => {
  const [showMenu, setshowMenu] = useState(false);

  const dropdownData = [
    {
      name: "dropdown1",
      label: "Account",
      options: ["Profile", "Settings", "Logout"],
    },
    {
      name: "dropdown2",
      label: "Inventory",
      options: ["Option A", "Option B", "Option C"],
    },
    {
      name: "dropdown3",
      label: "Admin",
      options: ["Option A", "Option B", "Option C"],
    },
    {
      name: "dropdown4",
      label: "Utility",
      options: ["Option A", "Option B", "Option C"],
    },
  ];

  const Transaction = [
    "Sales",
    "Receipt",
    "purchase",
    "Payment",
    "Receivable",
    "Payable",
  ];
  const InventoryReport = ["Stock Status", "Stock Vouchers", "Sales Register"];
  const AccountReport = [
    "Trial Balance",
    "Leadger Stmnt",
    "Voucher Regi",
    "Busi. View",
  ];
  const Master = ["Ledger", "Items"];
  const FavouriteShortCut1 = ["Quick Voucher", "Pur/Return", "purchase Regis"];
  const FavouriteShortCut2 = ["Movment Summ", "GST Report"];

  const rows = [
    { description: "SALES", may1: "1,230.00", may25: "1,230.00", year: "0.01" },
    { description: "PURCHASE", may1: "0", may25: "0", year: "0" },
    {
      description: "RECEIPT",
      may1: "1,000.00",
      may25: "1,000.00",
      year: "0.01",
    },
    { description: "PAYMENT", may1: "0", may25: "500.00", year: "0" },
    {
      description: "EXPENSE",
      may1: "1,000.00",
      may25: "1,500.00",
      year: "0.02",
    },
    { description: "CASH BALANCE -F2", may1: "230.00", may25: "", year: "" },
    { description: "BANK BALANCE -F3", may1: "0", may25: "", year: "" },
    { description: "STOCK VALUE -F4", may1: "0", may25: "", year: "" },
    { description: "CUSTOMER BALANCE -F5", may1: "0", may25: "", year: "" },
    { description: "VENDOR BALANCE -F6", may1: "0", may25: "", year: "" },
  ];

  return (
    <div className="p-0 md:px-10 xl:px-32 relative w-full">
      <div className="py-5 hidden md:block md:w-auto ">
        <DropdownButton dropdownData={dropdownData} />
      </div>
      <div
        className={`w-full h-16 bg-white fixed top-0 left-0 flex flex-col z-50 md:hidden`}
      >
        <div className="flex justify-between w-full mt-2 z-30">
          <h1 className="text-xl font-bold p-2">Billing Sphere</h1>
          <button
            className="text-xl px-5"
            onClick={() => setshowMenu(!showMenu)}
          >
            <i className="ri-menu-line "></i>
          </button>
        </div>
        <div
          className={`py-5 bg-white w-full transform transition-all duration-200 z-10 ${
            showMenu ? "translate-y-[0%]" : " -translate-y-[200%]"
          }`}
        >
          <DropdownButton dropdownData={dropdownData} />
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row gap-3 mt-16 relative z-0 justify-center">
        {/* ---------------- left side ------------------------ */}
        <div className="xl:w-xl p-2">
          <div className=" backdrop-blur-sm border flex flex-col  justify-center">
            <h1 className="text-center bg-red-600 uppercase text-white font-medium">
              Quick Aceess
            </h1>
            <div className="p-3 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Transaction
                </h1>
                <div className="w-full md:w-52 gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={Transaction}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Account Report
                </h1>
                <div className="w-full md:w-52 gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={AccountReport}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Masters
                </h1>
                <div className="w-full md:w-52 gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={Master}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 ">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Inventory Report
                </h1>
                <div className="w-full md:w-52 gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={InventoryReport}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Favourite Shortcuts
                </h1>
                <div className="w-full md:w-52 gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={FavouriteShortCut1}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full md:w-52 gap-0.5 flex flex-col mt-10">
                  <ButtonGroup
                    className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={FavouriteShortCut2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- right side ----------------------- */}
        <div className="xl:w-xl p-2">
          <div className="flex flex-col xl:flex-row gap-2">
            {/* ------------ todo list ---------------------------- */}
            <div className=" backdrop-blur-sm border flex flex-col justify-center">
              <h1 className="text-center bg-green-600 uppercase text-white font-medium">
                Todo List
              </h1>

              <div className="w-76">
                <div className="flex">
                  <button className="text-sm mt-3 font-medium px-5 py-2 mx-3 bg-white border rounded">
                    Add Todo
                  </button>
                  <button className="text-sm mt-3 font-medium px-5 py-2 mx-3 bg-white border rounded">
                    Complete Todo
                  </button>
                </div>
                <div className="w-full flex flex-col mt-2 p-4 h-52 overflow-y-auto">
                  <div className="border py-2 px-1.5 text-xl hover:bg-purple-900 hover:text-white">
                    <p>Add your todo here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------- reminder -------------------------- */}
            <div className=" backdrop-blur-sm border flex flex-col justify-center">
              <h1 className="text-center bg-blue-600 uppercase text-white font-medium">
                Reminder
              </h1>

              <div className="w-76">
                <div className="flex">
                  <button className="text-sm mt-3 font-medium px-5 py-2 mx-3 bg-white border rounded">
                    New Reminder
                  </button>
                </div>
                <div className="w-full flex flex-col mt-2 p-4 h-52 overflow-y-auto">
                  <div className="border py-2 px-1.5 text-xl">
                    <p>Add your reminder here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------- Dash Board ------------------------ */}
          <div className="border mt-3">
            <div className=" backdrop-blur-sm flex flex-col justify-center">
              <div className="w-full">
                <div className="flex bg-green-600 items-center justify-between">
                  <button className="text-sm font-medium px-5 py-0.5 bg-white border rounded">
                    Today's Profit
                  </button>
                  <h1 className="text-center text-white uppercase font-medium">
                    DashBoard
                  </h1>
                  <button className="text-sm font-medium px-5 py-0.5 bg-white border rounded">
                    Refresh
                  </button>
                </div>
                <div className="w-full flex flex-col h-76 overflow-y-auto table-data">
                  <div className="border text-xl">
                    {/* ----------- table ------------------ */}
                    <div className="overflow-x-auto p-4">
                      <table className="table-auto  border-collapse border border-black w-full text-sm">
                        <thead>
                          <tr className="bg-white text-purple-900 font-bold">
                            <th className="border border-black px-3 py-1 text-left">
                              Description
                            </th>
                            <th className="border border-black px-3 py-1">
                              1-May
                            </th>
                            <th className="border border-black px-3 py-1">
                              May-25
                            </th>
                            <th className="border border-black px-3 py-1">
                              25–26 (Lacs)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="border border-black px-3 py-1 font-semibold">
                                {row.description}
                              </td>
                              <td className="border border-black px-3 py-1 text-right">
                                {row.may1}
                              </td>
                              <td className="border border-black px-3 py-1 text-right">
                                {row.may25}
                              </td>
                              <td className="border border-black px-3 py-1 text-right">
                                {row.year}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
