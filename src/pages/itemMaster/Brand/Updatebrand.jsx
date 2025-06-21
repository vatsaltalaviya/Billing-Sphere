import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BeatLoader, ScaleLoader } from 'react-spinners';

const Updatebrand = () => {
 const token = localStorage.getItem("token");
   const companyCode = localStorage.getItem("companies");
   const ownerId = localStorage.getItem("uid");
   const [BrandName, setBrandName] = useState("");
   const [isloading, setisLoading] = useState(null);
   const [issaveloading, setissaveLoading] = useState(null);
   const {id} = useParams();
      const navigate = useNavigate();

   const fetchData = async()=>{
    setisLoading(true)
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/item-brand/getById/${id}`,{headers:{Authorization:token}})
        const data = await res.data;
        if(data.success){
            setBrandName(data.data.name);
            setisLoading(false)
        }
    } catch (error) {
        console.error(error)
    }
   }
 
useEffect(()=>{
    fetchData()
},[])
 
   const handleSubmit = async (e) => {
     setissaveLoading(true);
     e.preventDefault();
     try {
       const BrandData = {
         name: BrandName,
         companyCode,
         images: [],
         ownerId,
       };
 
       const res = await axios.put(
         `${import.meta.env.VITE_BASE_URL}/item-brand/update/${id}`,
         BrandData,
         {
           headers: {
             Authorization: `${token}`,
           },
         }
       );
 
       const data = res.data;
       if (data.success) {
         setissaveLoading(false)
         navigate('/dashboard/items/brand');
         
       }
     } catch (error) {
       console.log(error);
     }
   };
   return (
     <div className="w-full h-full">
        {isloading ?<div className="w-full h-screen flex items-center justify-center">
          <ScaleLoader height="30px" color="blue" />
        </div>:<>
        <div className="w-full bg-orange-600 flex items-center justify-center">
         <h1 className="font-semibold text-xl text-white">Edit Brand</h1>
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
               {issaveloading&&<BeatLoader size={5}  color='#fff'/>}
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
       </div></>}
         
       
     </div>
   );
}

export default Updatebrand
