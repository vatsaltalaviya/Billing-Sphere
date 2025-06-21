import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDropdowns } from "../../../feature/itemSlice";

const Rack = () => {
  const [data, setdata] = useState(null);
   const [Url, setUrl] = useState(null);
   const uid = localStorage.getItem("uid");
   const token = localStorage.getItem("token");

   const {stores} = useSelector((state) => state.items.dropdowns)
   const dispatch = useDispatch()
 
   const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
   const navigate = useNavigate();
   const rackside = [
     { name: "New", navigate: `/dashboard/items/addrack` },
     { name: "Edit", navigate: `/dashboard/items/editrack/${Url}` },
     {
       name: "Delete",
       onClick: () => {
         Url!=null &&setShowDeleteAlert(true);
       },
     },
   ];
 
   
   useEffect(() => {
     dispatch(fetchDropdowns())
   }, []);
 ;
 
 console.log(stores);
 
   const getUrl = (url) => {
     setUrl(url);
   };
 
   const handleDelete = async () => {
     try {
       
       const res = await axios.delete(
         `${import.meta.env.VITE_BASE_URL}/store/delete/${Url}`,
         { headers: { Authorization: `${token}` } }
       );
       const data = res.data;
       if (data.success) {
        dispatch(fetchDropdowns())
         setShowDeleteAlert(false);
         
       }
     } catch (err) {
       console.error(err);
     }
   };
   const tableData = stores?.map((item, index) => ({
     sr: index + 1,
     id: item.id,
     "Store Location": item.name,
     isActive:item.isActive
   }));
 
   return (
     <div>
       <BasePage
         heading="Store location Master"
         Sidebardata={rackside}
         mode="store"
         getitemUrl={(e) => getUrl(e)}
         tableData={tableData}
       />
 
       {ShowDeleteAlert && (
         <DeleteAlert
           field="Store location"
           onYes={async () => {
             setShowDeleteAlert(false); // Hide the alert
             await handleDelete();
           }}
           onClose={() => setShowDeleteAlert(false)}
         />
       )}
        
     </div>
   );
 }

export default Rack
