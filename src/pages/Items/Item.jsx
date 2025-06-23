import React, { useEffect, useMemo, useState } from "react";
import BasePage from "../../components/BasePage";
import OpItemBal from "./OpItemBal";
import MinMaxQty from "./MinMaxQty";
import CopyItem from "./CopyItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAlert,
  deleteItem,
  fetchitemGroup,
  fetchItems,
  fetchSerchItem,
} from "../../feature/itemSlice";
import DeleteAlert from "../../components/DeleteAlert";
import lodash from "lodash";
import useKeyCombo from "../../Hooks/UseKeyPress";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const [showopitemBal, setOpitemBal] = useState(false);
  const [itemUrl, setitemUrl] = useState(null);
  const [showMinMax, setMinMax] = useState(false);
  const [showCopyItem, setshowCopyItem] = useState(false);
  const { ShowDeleteAlert, searchingitems, searchquery } = useSelector(
    (state) => state.items
  );
  const navigate = useNavigate()
  const itemGroups = useSelector(
    (state) => state.items.dropdowns?.itemGroups || []
  );

  const dispatch = useDispatch();

  useKeyCombo("F2",{}, () => navigate(`/dashboard/items/new`));

  const ItemSidebarData = [
    {key:"F2", name: " New", navigate: "/dashboard/items/new" },
    {
      name: "Edit",
      navigate:
        itemUrl != null && searchingitems.length > 0
          ? `/dashboard/items/edit/${itemUrl}`
          : "/dashboard/items",
    },
    {
      name: "Delete",
      onClick: () => {
        itemUrl != null && dispatch(deleteAlert(true));
      },
    },
    { name: "Export to excel", onClick: () => {} },
    { name: "Bulk Upd", onClick: () => {}, navigate: `/dashboard/items/bu` },
    {
      name: "Op. Balance",
      onClick: () => {
        setOpitemBal(true);
      },
    },
    { name: "MultiEdit", onClick: () => {} },
    { name: "Filters", onClick: () => {}, navigate: `/dashboard/items/fi` },
    {
      name: "MinMax up",
      onClick: () => {
        setMinMax(true);
      },
    },
    {
      name: "Copy item",
      onClick: () => {
        setshowCopyItem(true);
      },
    },
    {
      name: "Img gallery",
      onClick: () => {},
      navigate: `/dashboard/items/gallery`,
    },
    { name: "Dup Items", onClick: () => {} },
    { name: "Non/Used", onClick: () => {} },
  ];

  useEffect(() => {
    dispatch(fetchitemGroup());
  }, []);


  const debouncedSearch = useMemo(
    () =>
      lodash.debounce((value) => {
        if (value.trim() === "") {
          dispatch(fetchItems());
        } else {
          dispatch(fetchSerchItem(value));
        }
      }, 500),
    [dispatch]
  );

  useEffect(() => {
    debouncedSearch(searchquery);
    return () => {
      debouncedSearch.cancel(); // Cleanup on unmount
    };
  }, [searchquery, debouncedSearch]);

  const getUrl = (url) => {
    setitemUrl(url);
  };

  const groupMap = useMemo(() => {
    const map = {};
    itemGroups.forEach((group) => {
      map[group._id] = group.name;
    });
    return map;
  }, [itemGroups]);

  

  const tableData = searchingitems.map((item, index) => ({
    Sr: index + 1,
    id: item._id,
    "Item Name": item.itemName,
    "Code No": item.codeNo,
    Group: groupMap[item.itemGroup] || "",
    Retail: item.retail,
    MRP: item.mrp,
    "Cl.Stk": item.maximumStock,
    Active: item.status,
  }));
  const handleDelete = async () => {
    itemUrl != null &&
      dispatch(deleteItem({ editId: itemUrl }))
        .unwrap()
        .then(() => {
          dispatch(fetchItems());
        });
  };

  return (
    <div className="w-full">
      <BasePage
        heading="Item Master"
        Sidebardata={ItemSidebarData}
        mode="item"
        getitemUrl={(e) => getUrl(e)}
        tableData={tableData}
      />

      {showopitemBal && <OpItemBal onClose={() => setOpitemBal(false)} />}
      {showMinMax && <MinMaxQty onClose={() => setMinMax(false)} />}
      {showCopyItem && <CopyItem onClose={() => setshowCopyItem(false)} />}
      {ShowDeleteAlert && searchingitems.length > 0 && (
        <DeleteAlert
          field="Item"
          onYes={async () => {
            await handleDelete();
            dispatch(deleteAlert(false));
          }}
          onClose={() => dispatch(deleteAlert(false))}
        />
      )}
    </div>
  );
};

export default Item;
