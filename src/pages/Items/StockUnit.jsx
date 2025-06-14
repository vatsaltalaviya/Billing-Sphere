import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const StockUnit = () => {
  const [UnitName, setUnitName] = useState("");
  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const unitData = {
        measurement: UnitName,
        companyCode,
        ownerId,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/measurementLimit/createmeasurement`,
        unitData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      if (data.success) {
        navigate("/dashboard/items/new");
        setisLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">NEW Item Unit</h1>
      </div>
      <div className="md:w-xl border-2 mx-auto mt-30 p-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Unit name</span>
            <input
              type="text"
              className="border py-2 px-2 "
              value={UnitName}
              onChange={(e) => setUnitName(e.target.value)}
            />
          </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              {isLoading && <BeatLoader size={5} color="#fff" />}
              Save
            </button>
            <button
              onClick={() => navigate("/dashboard/items/new")}
              className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockUnit;
