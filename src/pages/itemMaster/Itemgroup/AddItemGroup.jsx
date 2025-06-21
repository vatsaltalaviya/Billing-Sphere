import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const AddItemGroup = () => {
  const [ItemGroupName, setItemGroupName] = useState("");
  const [desc, setdesc] = useState("");
  const [isLoading, setisLoading] = useState(null);

  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");

   const location = useLocation();
   const source = location.state?.source;

  const navigate = useNavigate();

  const validateForm = () => {
      if (!ItemGroupName || ItemGroupName=="") {
        toast.error("Item Group is required!");
        return false;
      }
      return true; // All good
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setisLoading(true)

    const itemGroupData = {
      name: ItemGroupName,
      desc,
      companyCode,
      images: [],
      ownerId,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/item-group/create`,
        itemGroupData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      if (data.success) {
        {(source == "itemsPage")?navigate("/dashboard/items/new"):navigate("/dashboard/items/itemgroup")}
        setisLoading(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">NEW Item Group</h1>
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
            {/* <button onClick={()=>setshowImages(true)} type="button" className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Images
              </button> */}
            <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              {isLoading&&<BeatLoader size={5}  color='#fff'/>}
              Save
            </button>
            <button
            type="button"
              onClick={()=>navigate(-1)}
              className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      {/* {showimages && <AttachImage onClose={()=>setshowImages(false)} onsetImage={getImages}/>} */}
    </div>
  );
};

export default AddItemGroup;
