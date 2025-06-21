import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BeatLoader, ScaleLoader } from "react-spinners";


const Updaterack = () => {
  const [location, setLocation] = useState("");
  const [isActive, setIsActive] = useState("Yes");
  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(null);
  const [issaveLoading, setissaveLoading] = useState(null);
  const {id} = useParams()

   const fetchdata = async()=>{
    setisLoading(true)
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/store/${id}`,{headers:{Authorization:token}})
        const data = res.data    
        if(data.success){
            setLocation(data.data.location)
            setIsActive(data.data.isActive)
            // setUnitName(data.data.measurement);
            setisLoading(false)
        }
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setissaveLoading(true);
    try {
      const storageData = {
        location,
        companyCode,
        ownerId,
        isActive,
      };

      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/store/updateStoreLocation/${id}`,
        storageData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      if (data.success) {
        navigate("/dashboard/items/rack")
        setissaveLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full">
        <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">
          Edit Store locations
        </h1>
      </div>
        {isLoading?<div className="w-full h-screen flex items-center justify-center">
          <ScaleLoader height="30px" color="blue" />
        </div>:<div className="md:w-xl border-2 mx-auto mt-30 p-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Item Location</span>
            <input
              type="text"
              className="border py-2 px-2 "
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Is Active</span>
            <select
              className="border py-2 px-2"
              value={isActive}
              onChange={(e) => setIsActive(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              {issaveLoading&&<BeatLoader size={5}  color='#fff'/>}
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
      </div>}

    </div>
  );
};

export default Updaterack
