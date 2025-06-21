import React, { useEffect, useState } from "react";
import BasePage from "../../../components/BasePage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DeleteAlert from "../../../components/DeleteAlert";
import { useNavigate } from "react-router-dom";
import { deleteItemGroup, fetchDropdowns } from "../../../feature/itemSlice";

const ItemGroup = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [Url, setUrl] = useState(null);
  const uid = localStorage.getItem("uid");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemGroups } = useSelector((state) =>state.items.dropdowns)

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
  
  useEffect(() => {
    dispatch(fetchDropdowns())
  }, []);
  

  const getUrl = (url) => {
    setUrl(url);
  };

 const handleDelete = async () => {
  try {
    setloading(true);
    await dispatch(deleteItemGroup(Url));
    setloading(false);
  } catch (err) {
    setloading(false);
    console.error(err);
  }
};

  

  const tableData = itemGroups?.map((item, index) => ({
    sr: index + 1,
    id: item.id,
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
        isloading={loading}
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
