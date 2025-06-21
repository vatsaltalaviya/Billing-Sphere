import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";

const Tax = () => {
   const [data, setdata] = useState(null);
  const [Url, setUrl] = useState(null);
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");

  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const navigate = useNavigate();
  const taxside = [
    { name: "New", navigate: `/dashboard/items/addtax` },
    { name: "Edit", navigate: `/dashboard/items/edittax/${Url}` },
    {
      name: "Delete",
      onClick: () => {
        Url!=null &&setShowDeleteAlert(true);
      },
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/tax/fetchAllTax/${uid}`,
        { headers: { Authorization: token } }
      );
      const data = response.data.data;
      
      setdata(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
;

  const getUrl = (url) => {
    setUrl(url);
  };

  const handleDelete = async () => {
    try {
      
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/tax/delete/${Url}`,
        { headers: { Authorization: `${token}` } }
      );
      const data = res.data;
      if (data.success) {
        await fetchData();
        setShowDeleteAlert(false);
        
      }
    } catch (err) {
      console.error(err);
    }
  };
  const tableData = data?.map((item, index) => ({
    sr: index + 1,
    id: item._id,
    "Tax category": item.rate,
  }));

  return (
    <div>
      <BasePage
        heading="Tax Category Master"
        Sidebardata={taxside}
        mode="tax"
        getitemUrl={(e) => getUrl(e)}
        tableData={tableData}
      />

      {ShowDeleteAlert && (
        <DeleteAlert
          field="Tax"
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

export default Tax
