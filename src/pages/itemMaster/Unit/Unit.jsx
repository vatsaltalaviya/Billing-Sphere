import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDropdowns } from "../../../feature/itemSlice";

const Unit = () => {
   const [Url, setUrl] = useState(null);
   const uid = localStorage.getItem("uid");
   const token = localStorage.getItem("token");
   const dispatch = useDispatch()
   const {units} = useSelector((state)=>state.items.dropdowns)
 
   const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
   const navigate = useNavigate();
   const unitside = [
     { name: "New", navigate: `/dashboard/items/addunit` },
     { name: "Edit", navigate: `/dashboard/items/edittax/${Url}` },
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
  
   const getUrl = (url) => {
     setUrl(url);
   };
 
   const handleDelete = async () => {
     try {
       
       const res = await axios.delete(
         `${import.meta.env.VITE_BASE_URL}/measurementLimit/delete/${Url}`,
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
   const tableData = units?.map((item, index) => ({
     sr: index + 1,
     id: item.id,
     "Stock Unit category": item.name,
   }));
 
   return (
     <div>
       <BasePage
         heading="Stock Unit Master"
         Sidebardata={unitside}
         mode="unit"
         getitemUrl={(e) => getUrl(e)}
         tableData={tableData}
       />
 
       {ShowDeleteAlert && (
         <DeleteAlert
           field="Stock Unit"
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

export default Unit
