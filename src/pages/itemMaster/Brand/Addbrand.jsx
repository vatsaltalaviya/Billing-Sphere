import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const AddBrand = () => {
  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const [BrandName, setBrandName] = useState("");
  const [isloading, setisLoading] = useState(null);
    const location = useLocation();
   const source = location.state?.source;

  const navigate = useNavigate();

    const validateForm = () => {
      if (!BrandName||BrandName=="") {
        toast.error("Item Brand is required!");
        return false;
      }
      return true; 
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
        if (!validateForm()) {
      return;
    }
    try {
      const BrandData = {
        name: BrandName,
        companyCode,
        images: [],
        ownerId,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/item-brand/create`,
        BrandData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      if (data.success) {
        setisLoading(false)
         {(source == "itemsPage")?navigate("/dashboard/items/new"):navigate("/dashboard/items/brand")}
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full">
      <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">NEW Brand</h1>
      </div>
      <div className="md:w-xl border-2 mx-auto mt-30 p-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Brand Name</span>
            <input
              type="text"
              className="border py-2 px-2 "
              value={BrandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              {isloading&&<BeatLoader size={5}  color='#fff'/>}
              Save
            </button>
            <button
            type="button"
              onClick={() => navigate(-1)}
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

export default AddBrand;
