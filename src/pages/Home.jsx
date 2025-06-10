import React, { useEffect, useState } from "react";
import DropdownButton from "../components/DropdownButton";
import ButtonGroup from "../components/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { rows } from "../assets/Dummydata";
import {
  AccountReport,
  FavouriteShortCut1,
  FavouriteShortCut2,
  InventoryReport,
  Master,
  Transaction,
} from "../assets/DashBoard";
import { dropdownData } from "../assets/Dropdown";
import DropDowmForMobile from "../components/DropDowmForMobile";

const Home = () => {
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate();

  const sanitizeLabel = (label) => label.toLowerCase().replace(/[\s./\\]/g, "");

  const toNavObjArray = (arr) =>
    arr.map((name) => ({
      name,
      onClick: () => navigate(`/dashboard/${sanitizeLabel(name)}`),
    }));


  // function for logout functionality
  const handleLogOut = () => {
    localStorage.clear();
     navigate("/");
  };

  const TransactionObj = toNavObjArray(Transaction);
  const InventoryReportObj = toNavObjArray(InventoryReport);
  const AccountReportObj = toNavObjArray(AccountReport);
  const MasterObj = toNavObjArray(Master);
  const FavouriteShortCut1Obj = toNavObjArray(FavouriteShortCut1);
  const FavouriteShortCut2Obj = toNavObjArray(FavouriteShortCut2);

  return (
    <div className="p-0 md:px-10 xl:px-32 relative w-full">
      <div className="py-5 hidden md:flex justify-between md:w-auto">
        <DropdownButton dropdownData={dropdownData} />
        <button
          className="px-3 py-1 bg-white font-bold text-sm border rounded"
          onClick={() => {
            handleLogOut();
          }}
        >
          Logout<i className="ri-logout-circle-r-line"></i>
        </button>
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
            <i
              className={`${
                showMenu ? "ri-close-large-fill" : "ri-menu-line "
              }`}
            ></i>
          </button>
        </div>
        <div
          className={`w-full bg-gray-300 transform transition-all duration-200 z-10 ${
            showMenu ? "translate-x-[0%]" : " -translate-x-[200%]"
          }`}
        >
          <DropDowmForMobile handleLogOut={handleLogOut} />
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row gap-3 mt-16 xl:mt-0 relative z-0 justify-center">
        {/* ---------------- left side ------------------------ */}
        <div className="xl:w-xl p-2">
          <div className=" backdrop-blur-sm border flex flex-col  justify-center">
            <h1 className="text-center bg-red-600 uppercase text-white font-bold">
              Quick Aceess
            </h1>
            <div className="p-3 flex flex-col gap-4 md:flex-row ">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Transaction
                </h1>
                <div className="w-full gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-semibold px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={TransactionObj}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Account Report
                </h1>
                <div className="w-full gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-semibold px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={AccountReportObj}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col gap-4 md:flex-row">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Masters
                </h1>
                <div className="w-full  gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-semibold px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={MasterObj}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 ">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Inventory Report
                </h1>
                <div className="w-full  gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-semibold px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={InventoryReportObj}
                  />
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col gap-4 md:flex-row xl:mb-14">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl font-bold text-red-700 underline underline-offset-4">
                  Favourite Shortcuts
                </h1>
                <div className="w-full gap-0.5 flex flex-col mt-2">
                  <ButtonGroup
                    className="border text-lg font-semibold px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={FavouriteShortCut1Obj}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full gap-0.5 flex flex-col mt-9">
                  <ButtonGroup
                    className="border text-lg font-semibold px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
                    data={FavouriteShortCut2Obj}
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
              <h1 className="text-center bg-green-600 uppercase text-white font-bold">
                Todo List
              </h1>

              <div className="w-76">
                <div className="flex">
                  <button className="text-sm mt-3 font-medium px-5 py-2 mx-3 bg-white border rounded">
                    Add
                  </button>
                  <button className="text-sm mt-3 font-medium px-5 py-2 mx-3 bg-white border rounded">
                    Complete
                  </button>
                </div>
                <div className="w-full flex flex-col mt-2 p-4 h-52 overflow-y-auto">
                  <div className="border py-2 px-1.5 text-sm hover:bg-purple-900 hover:text-white">
                    <p>Add your todo here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------- reminder -------------------------- */}
            <div className=" backdrop-blur-sm border flex flex-col justify-center">
              <h1 className="text-center bg-blue-600 uppercase text-white font-semibold">
                Reminder
              </h1>

              <div className="w-76">
                <div className="flex">
                  <button className="text-sm mt-3 font-medium px-5 py-2 mx-3 bg-white border rounded">
                    Reminder
                  </button>
                </div>
                <div className="w-full flex flex-col mt-2 p-4 h-52 overflow-y-auto">
                  <div className="border py-2 px-1.5 text-sm hover:bg-purple-900 hover:text-white">
                    <p>Add your todo here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------- Dash Board ------------------------ */}
          <div className="border mt-3 xl:w-[38.7em]">
            <div className=" backdrop-blur-sm flex flex-col justify-center">
              <div className="w-full">
                <div className="flex bg-green-600 items-center justify-between">
                  <button className="text-sm font-medium px-5 py-0.5 bg-white border rounded">
                    Today's Profit
                  </button>
                  <h1 className="text-center text-white uppercase font-bold">
                    DashBoard
                  </h1>
                  <button className="text-sm font-medium px-5 py-0.5 bg-white border rounded">
                    Refresh
                  </button>
                </div>
                <div className="w-full flex flex-col h-76 overflow-y-auto table-data">
                  <div className="border text-xl">
                    {/* ----------- table ------------------ */}
                    <div className="overflow-x-auto p-1">
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
