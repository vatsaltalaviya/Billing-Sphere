import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";

const ItemGroup = () => {
  const [data, setdata] = useState(null);
  const [Url, setUrl] = useState(null);
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const itemgroupside = [
    { name: "New", navigate: `/dashboard/items/additemgroup` },
    { name: "Edit", navigate: `/dashboard/items/edititemgroup/${Url}` },
    {
      name: "Delete",
      onClick: () => {
        setShowDeleteAlert(true);
      },
    },
  ];

  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const [clickYes, setclickYes] = useState(false);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/item-group/get/${uid}`
      );
      const data = response.data.data;
      setdata(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    fetchdata();
  }, [clickYes]);
  const getUrl = (url) => {
    setUrl(url);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/item-group/delete/${Url}`,
        { headers: { Authorization: `${token}` } }
      );
      const data = res.data;
      if (data.success) {
        navigate("/dashboard/items/itemgroup");
        setShowDeleteAlert(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const tableData = data?.map((item, index) => ({
    sr: index + 1,
    id: item._id,
    name: item.name,
  }));
  return (
    <div>
      <BasePage
        heading="Item Group Master"
        Sidebardata={itemgroupside}
        mode="itemGroup"
        getitemUrl={(e) => getUrl(e)}
        tableData={tableData}
      />

      {ShowDeleteAlert && (
        <DeleteAlert
          field="Item Group"
          onYes={async () => {
            await handleDelete()
            setShowDeleteAlert(false)
          }}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </div>
  );
};

export default ItemGroup;
