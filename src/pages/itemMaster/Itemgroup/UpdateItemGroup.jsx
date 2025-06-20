import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BeatLoader, ScaleLoader } from "react-spinners";

const UpdateItemGroup = () => {
  const [ItemGroupName, setItemGroupName] = useState("");
  const [desc, setdesc] = useState("");
  const [isLoading, setisLoading] = useState(null);
  const [issaveLoading, setissaveLoading] = useState(null);
  const [data, setdata] = useState({});



  const token = localStorage.getItem("token");
  const ownerId = localStorage.getItem("uid");
  const companyCode = localStorage.getItem("companies");

  const { id } = useParams();
  const location = useLocation();
  const source = location.state?.source;

  const navigate = useNavigate();

  const fetchdata = async () => {
    setisLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/item-group/getById/${id}`,
        { headers: { Authorization: `${token}` } }
      );
      const data = response.data.data;
      if (response.data.success) {
        setisLoading(false);
        setdata(data);
      }
    } catch (error) {
      setisLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const handleData = () => {
    setItemGroupName(data.name || "");
    setdesc(data.desc || "");
  };

  useEffect(() => {
    if (data.name) {
      handleData();
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setissaveLoading(true);
    

    const itemGroupData = {
      name: ItemGroupName,
      desc,
      companyCode,
      images: [],
      ownerId,
    };

    console.log(itemGroupData);
    
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/item-group/update/${id}`,
        itemGroupData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      console.log(data);
      
      if (data.success) {
        navigate("/dashboard/items/itemgroup");
        setissaveLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-[100vh]">
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <ScaleLoader height="30px" color="blue" />
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full bg-orange-600 flex items-center justify-center">
            <h1 className="font-semibold text-xl text-white">
              Edit Item Group
            </h1>
          </div>
          <div className="md:w-xl border-2 mx-auto mt-30 p-2">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col md:flex-row xl:items-center">
                <span className="w-44 font-medium">Item Group name</span>
                <input
                  type="text"
                  className="border py-2 px-2 "
                  value={ItemGroupName}
                  onChange={(e) => setItemGroupName(e.target.value)}
                />
              </div>
              <div className="flex flex-col md:flex-row xl:items-center">
                <span className="w-44 font-medium">Description</span>
                <input
                  type="text"
                  className="border py-2 px-2 "
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                />
              </div>
              <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
                <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                  {issaveLoading && <BeatLoader size={5} color="#fff" />}
                  Save
                </button>
                <button
                  type="reset"
                  className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateItemGroup;
