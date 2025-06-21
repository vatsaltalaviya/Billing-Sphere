import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const Addtax = () => {
  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const [isLoading, setisLoading] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const source = location.state?.source;
  const [texCategory, settexCategory] = useState({
    TaxCategoryName: "",
    taxType: "",
    isActive: "Yes",
    IGST: "",
    Cess1: "",
    SGST: "",
    CGST: "",
    Cess2: "",
    additonalCess: "",
    taxOnMrp: "No",
    Exempted: "No",
  });

  const validateForm = (texCategory) => {
    if (!texCategory.TaxCategoryName.trim()) {
      toast.error("Tax Category Name is required!");
      return false;
    }
    if (!texCategory.taxType.trim()) {
      toast.error("Tax Type is required!");
      return false;
    }
    if (!texCategory.IGST.trim()) {
      toast.error("IGST is required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    if (!validateForm(texCategory)) {
      return;
    }
    const texData = {
      rate: texCategory.TaxCategoryName,
      companyCode,
      ownerId,
      taxType: texCategory.taxType,
      isActive: texCategory.isActive,
      IGST: texCategory.IGST,
      Cess1: texCategory.Cess1,
      SGST: texCategory.SGST,
      CGST: texCategory.CGST,
      Cess2: texCategory.Cess2,
      AdditionCess: texCategory.additonalCess,
      taxonMrp: texCategory.taxOnMrp,
      Exempted: texCategory.Exempted,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/tax/createTax`,
        texData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      if (data.success) {
        setisLoading(false);
        {
          source == "itemsPage"
            ? navigate("/dashboard/items/new")
            : navigate("/dashboard/items/tax");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSGSTAndCGST = () => {
    const update = { ...texCategory };
    if (update.IGST != "" && !isNaN(Number(update.IGST))) {
      update.SGST = update.IGST / 2;
      update.CGST = update.IGST / 2;
    }
    settexCategory(update);
  };

  useEffect(() => {
    getSGSTAndCGST();
  }, [texCategory.IGST]);

  return (
    <div className="w-full h-full">
      <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">NEW Tax Category</h1>
      </div>
      <div className="md:w-3xl border-2 mx-auto mt-30 p-2">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Tax Category Name</span>
            <input
              type="text"
              className="flex-1 border py-2 px-2 "
              value={texCategory.TaxCategoryName}
              onChange={(e) => {
                const update = { ...texCategory };
                update.TaxCategoryName = e.target.value;
                settexCategory(update);
              }}
            />
          </div>

          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44 font-medium">Tax Type</span>
              <select
                className="flex-1 md:w-32 border py-2 px-2"
                value={texCategory.taxType}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.taxType = e.target.value;
                  settexCategory(update);
                }}
              >
                <option value=""></option>
                <option value="GST">GST</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-22 font-medium">Is Active</span>
              <select
                className="flex-1 md:w-32 border py-2 px-2"
                value={texCategory.isActive}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.isActive = e.target.value;
                  settexCategory(update);
                }}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44 font-medium">IGST%</span>
              <input
                type="number"
                className="flex-1 md:w-32 border py-2 px-2"
                value={texCategory.SGST || ""}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.IGST = e.target.value;
                  settexCategory(update);
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-22 font-medium">Cess%</span>
              <input
                type="number"
                className="w-32 border py-2 px-2"
                value={texCategory.SGST || ""}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.Cess1 = e.target.value;
                  settexCategory(update);
                }}
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44 font-medium">SGST%</span>
              <input
                type="number"
                className="w-32 border py-2 px-2"
                value={texCategory.SGST || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-22 font-medium">CGST%</span>
              <input
                type="number"
                className="w-32 border py-2 px-2"
                value={texCategory.CGST || ""}
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-20 font-medium">Cess%</span>
              <input
                type="number"
                className="w-32 border py-2 px-2"
                value={texCategory.Cess2}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.Cess2 = e.target.value;
                  settexCategory(update);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Aditional Cess</span>
            <input
              type="number"
              className="flex-1 border py-2 px-2 "
              value={texCategory.additonalCess}
              onChange={(e) => {
                const update = { ...texCategory };
                update.additonalCess = e.target.value;
                settexCategory(update);
              }}
            />
          </div>

          <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-44 font-medium">Tax On MRP</span>
              <select
                className="w-32 border py-2 px-2"
                value={texCategory.taxOnMrp}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.TaxCategoryName = e.target.value;
                  settexCategory(update);
                }}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row xl:items-center">
              <span className="w-22 font-medium">Exempted</span>
              <select
                className="w-32 border py-2 px-2"
                value={texCategory.Exempted}
                onChange={(e) => {
                  const update = { ...texCategory };
                  update.Exempted = e.target.value;
                  settexCategory(update);
                }}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button className="flex items-center gap-2 justify-center px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              {isLoading && <BeatLoader size={5} color="#fff" />} save
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
      </div>
    </div>
  );
};

export default Addtax;
