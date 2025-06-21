import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, fetchDropdowns } from "../../../feature/itemSlice";

const Brand = () => {
  const [Url, setUrl] = useState(null);
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.items.dropdowns);

  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
 

  const brandside = [
    { name: "New", navigate: `/dashboard/items/addbrand` },
    { name: "Edit", navigate: `/dashboard/items/editbrand/${Url}` },
    {
      name: "Delete",
      onClick: () => {
        Url != null && setShowDeleteAlert(true);
      },
    },
  ];

  const handleDelete = async () => {
    try {
      await dispatch(deleteBrand(Url));
    } catch (err) {
      console.error(err);
    }
  };

  const getUrl = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    dispatch(fetchDropdowns());
  }, []);

  const tableData = brands?.map((item, index) => ({
    sr: index + 1,
    id: item.id,
    "Brand category": item.name,
  }));

  return (
    <div>
      <BasePage
        heading="Item Brand Master"
        Sidebardata={brandside}
        mode="brand"
        getitemUrl={(e) => getUrl(e)}
        tableData={tableData}
       
      />

      {ShowDeleteAlert && (
        <DeleteAlert
          field="Item Brand"
          onYes={async () => {
            setShowDeleteAlert(false); // Hide the alert
            await handleDelete();
          }}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </div>
  );
};

export default Brand;
