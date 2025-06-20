import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";

const Hsn = () => {
  const [data, setdata] = useState(null);
  const [Url, setUrl] = useState(null);
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");

  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const [clickYes, setclickYes] = useState(false);
  const navigate = useNavigate();
  const hsnside = [
    { name: "New", navigate: `/dashboard/items/addhsn` },
    { name: "Edit", navigate: `/dashboard/items/edithsn/${Url}` },
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
        `${import.meta.env.VITE_BASE_URL}/hsnCode/fetchAllHsncode/${uid}`,
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
  useEffect(() => {
    fetchData();
  }, [clickYes]);

  const getUrl = (url) => {
    setUrl(url);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/hsnCode/delete/${Url}`,
        { headers: { Authorization: `${token}` } }
      );
      const data = res.data;
      if (data.success) {
        await fetchData();
        setShowDeleteAlert(false);
        // toast.success("Item deleted successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const tableData = data?.map((item, index) => ({
    sr: index + 1,
    id: item._id,
    name: item.hsn,
  }));

  return (
    <div>
      <BasePage
        heading="HSN Master"
        Sidebardata={hsnside}
        mode="hsn"
        getitemUrl={(e) => getUrl(e)}
        tableData={tableData}
      />

      {ShowDeleteAlert && (
        <DeleteAlert
          field="Item Group"
          onYes={async () => {
            setShowDeleteAlert(false); // Hide the alert
            await handleDelete(); // Wait for deletion
          }}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
       {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </div>
  );
};

export default Hsn;
