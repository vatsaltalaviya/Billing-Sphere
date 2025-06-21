import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BeatLoader, ScaleLoader } from "react-spinners";

const Updatetax = () => {
  const token = localStorage.getItem("token");
  const companyCode = localStorage.getItem("companies");
  const ownerId = localStorage.getItem("uid");
  const [Data, setData] = useState({});
  const [isLoading, setisLoading] = useState(null);
  const [issaveLoading, setissaveLoading] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
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

  const fetchDatabyID = async () => {
    setisLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/tax/fetchTaxById/${id}`,
        { headers: { Authorization: token } }
      );
      
      const data = res.data;
      if (data.success) {
        setData(data.data);
        setisLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDatabyID();
  }, []);

 const handleData = ()=>{
  const updateData = {
    TaxCategoryName: Data.rate||"",
    taxType: Data.taxType||"",
    isActive: Data.isActive ||"Yes",
    IGST: Data.IGST||"",
    Cess1: Data.Cess1||"",
    SGST: Data.SGST||"",
    CGST: Data.CGST ||"",
    Cess2: Data.Cess2||"",
    additonalCess: Data.AdditionCess||"",
    taxOnMrp: Data.taxOnMrp||"No",
    Exempted: Data.Exempted||"No",
  }
  settexCategory(updateData);
 }

 useEffect(()=>{
  if(Data){
    handleData()
  }
 },[Data])
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setissaveLoading(true);

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
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/tax/update/${id}`,
        texData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const data = res.data;
      if (data.success) {
        setissaveLoading(false);
        navigate("/dashboard/items/tax");
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
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <ScaleLoader height="30px" color="blue" />
        </div>
      ) : (
        <>
          <div className="w-full bg-orange-600 flex items-center justify-center">
            <h1 className="font-semibold text-xl text-white">
              Edit Tax Category
            </h1>
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
                     value={texCategory.IGST || ""}
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
                     value={texCategory.Cess1 || ""}
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
                  {issaveLoading && <BeatLoader size={5} color="#fff" />} save
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
        </>
      )}
    </div>
  );
};

export default Updatetax;
