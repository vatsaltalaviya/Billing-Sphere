import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BeatLoader, ScaleLoader } from "react-spinners";

const Updatehsn = () => {
  const [HsnCode, setHsnCode] = useState("");
  const [Desc, setDesc] = useState("");
  const [Data, setData] = useState({});
  const [isLoading, setisLoading] = useState(null);
  const [issaveLoading, setissaveLoading] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const location = useLocation();
  const source = location.state?.source;
  const { id } = useParams();

  const fetchData = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/hsnCode/get/${id}`,
        { headers: { Authorization: token } }
      );
      const data = res.data;
      if (data.success) {
        setisLoading(false);
        setData(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleData =()=>{
    setHsnCode(Data.hsn||"");
    setDesc(Data.description||"")
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    if(Data.hsn){
        handleData()
    }
  },[Data])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setissaveLoading(true);
    const hsnData = {
      hsn: HsnCode,
      description: Desc,
      companyCode,
      ownerId,
    };
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/hsnCode/update/${id}`,
        hsnData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data = res.data;
      if (data.success) {
        navigate("/dashboard/items/hsn");
        setissaveLoading(false);
        }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="w-full h-full">
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <ScaleLoader height="30px" color="blue" />
        </div>
      ) : (
        <>
          {" "}
          <div className="w-full bg-orange-600 flex items-center justify-center">
            <h1 className="font-semibold text-xl text-white">
              Edit HSN Commodity
            </h1>
          </div>
          <div className="md:w-xl border-2 mx-auto mt-30 p-2">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col md:flex-row xl:items-center">
                <span className="w-44 font-medium">HSN Code</span>
                <input
                  type="text"
                  className="border py-2 px-2 "
                  value={HsnCode}
                  onChange={(e) => setHsnCode(e.target.value)}
                />
              </div>

              <div className="flex flex-col md:flex-row xl:items-center">
                <span className="w-44 font-medium">Description</span>
                <input
                  type="text"
                  className="border py-2 px-2 "
                  value={Desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
                <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                  {issaveLoading && <BeatLoader size={5} color="#fff" />}
                  Save
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Updatehsn;
