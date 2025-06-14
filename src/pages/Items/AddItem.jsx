import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OpeningBal from "./OpeningBal";
import axios from "axios";
import SearchableDropdown from "../../components/SearchableDropdown";
import { useDispatch, useSelector } from "react-redux";
import { createItem, fetchDropdowns, fetchItems } from "../../feature/itemSlice";
import { BeatLoader } from "react-spinners";

const AddItem = () => {
  const defaultForm = {
    itemGroup: "",
    brand: "",
    codeNo: "",
    itemName: "",
    printName: "",
    remarks: "",
    hsn: "",
    tax: "",
    retail: "",
    mrp: "",
    barcode: "",
    rack: "",
    stockunit: "",
    minStock: "",
    maxStock: "",
    updateImage: "NO",
    images: [],
    openstock: "NO",
    isActive: "NO", // Only use lowercase 'isActive'
  };

  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [formData, setformData] = useState(defaultForm);
  const [OpeningBalanceData, setOpeningBalanceData] = useState([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showOpeningBal, setShowOpeningBal] = useState(false);
  const [isLoading, setisLoading] = useState(null);
  const navigate = useNavigate();

  const [itemGroupOption, setitemGroupOption] = useState([]);
  const [BrandOption, setBrandOption] = useState([]);
  const [HsnOption, setHsnOption] = useState([]);
  const [StockUnitOption, setStockUnitOption] = useState([]);
  const [RackOption, setRackOption] = useState([]);
  const [TaxOption, setTaxOption] = useState([]);

  const companyCode = localStorage.getItem("companies");

  const dispatch = useDispatch();
  const { dropdowns, loading } = useSelector((state) => state.items);

  // ✅ Sync Redux dropdowns to local state
 
  const generateNumericBarcode = () => {
    const now = new Date();

    const yyyy = now.getFullYear(); // 2025
    const mm = String(now.getMonth() + 1).padStart(2, "0"); // 06
    const dd = String(now.getDate()).padStart(2, "0"); // 11
    const hh = String(now.getHours()).padStart(2, "0"); // 14
    const min = String(now.getMinutes()).padStart(2, "0"); // 38
    const ss = String(now.getSeconds()).padStart(2, "0"); // 52
    const ms = String(now.getMilliseconds()).padStart(3, "0"); // 123

    const update = { ...formData };
    update.barcode = `${dd}${mm}${yyyy}${hh}${min}${ss}${ms}`;
    setformData(update);
  };

  useEffect(() => {
    generateNumericBarcode();
  }, []);

   useEffect(() => {
    setitemGroupOption(dropdowns.itemGroups || []);
    setBrandOption(dropdowns.brands || []);
    setHsnOption(dropdowns.hsns || []);
    setStockUnitOption(dropdowns.units || []);
    setRackOption(dropdowns.stores || []);
    setTaxOption(dropdowns.taxes || []);
  }, [dropdowns]);

  useEffect(() => {
    dispatch(fetchDropdowns());
  }, [dispatch]);


  const handleChangeData = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setformData((prev) => {
      const updatedForm = {
        ...prev,
        [id]: newValue,
      };
      return updatedForm;
    });
  };

  // get data form opening Balance
  const handleOpeningBalSave = (data) => {
    setOpeningBalanceData(data);
    setShowOpeningBal(false); // Optionally close the popup
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click(); //  opens file explorer
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl); //  preview image
    }
    if (file && file.type.startsWith("image/")) {
      const update = { ...formData };
      const fileData = new FormData();
      fileData.append("file", file);
      fileData.append("upload_preset", "AccountsPro");
      fileData.append("cloud_name", "dbpleky0i");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dbpleky0i/image/upload",
        fileData
      );
      const fileurl = res.data.url;

      update.images.push(fileurl);
      setformData(update);
    }
  };

  

  const handleDeleteClick = () => {
    if (!formData.images || formData.images.length === 0) return;
    const newImages = formData.images.filter(
      (_, idx) => idx !== currentImgIndex
    );
    setformData({ ...formData, images: newImages });
    setCurrentImgIndex((prev) =>
      prev >= newImages.length ? newImages.length - 1 : prev
    );
  };

  useEffect(() => {
    if (formData.openstock == "YES") {
      setShowOpeningBal(true);
    }
  }, [formData.openstock]);

  //Show current image
  const currentImg =
    formData.images && formData.images.length > 0
      ? formData.images[currentImgIndex]
      : null;

  // Next image
  const handleNextImg = () => {
    if (!formData.images || formData.images.length === 0) return;
    setCurrentImgIndex((prev) =>
      prev < formData.images.length - 1 ? prev + 1 : 0
    );
  };

  // Previous image
  const handlePrevImg = () => {
    if (!formData.images || formData.images.length === 0) return;
    setCurrentImgIndex((prev) =>
      prev > 0 ? prev - 1 : formData.images.length - 1
    );
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const itemdata = {
      itemGroup: formData.itemGroup.id, // should be the _id from your group master
      companyCode, // set this as needed
      itemBrand: formData.brand.id, // should be the _id from your brand master
      itemName: formData.itemName,
      printName: formData.printName,
      codeNo: formData.codeNo,
      barcode: formData.barcode,
      taxCategory: formData.tax.id, // should be the _id from your tax master
      hsnCode: formData.hsn.id, // should be the _id from your hsn master
      storeLocation: formData.rack.id, // should be the _id from your location master
      measurementUnit: formData.stockunit.id, // should be the _id from your unit master
      minimumStock: Number(formData.minStock),
      maximumStock: Number(formData.maxStock),
      retail: Number(formData.retail),
      monthlySalesQty:0,
      dealer:0,
      subDealer:0,
      mrp: Number(formData.mrp),
      openingStock: formData.openstock,
      status: formData.isActive,
      images: formData.images,
      openingBalance: OpeningBalanceData.map((row) => ({
        unit: row.unit1.id, // should be the _id from your unit master
        qty: Number(row.qty), 
        rate: Number(row.rate),
        total: Number(row.total),
      })),
    };
    dispatch(createItem(itemdata)).unwrap().then(()=> navigate('/dashboard/items'))
  };

  return (
    <div className="h-screen w-full  bg-white">
      <div className={`bg-blue-600 font-bold text-lg`}>
        <h1 className="text-center text-white">Add Item</h1>
      </div>
      {/* ------------------------------- body ----------------------------------- */}
      <form className="p-2 " onSubmit={HandleSubmit}>
        <div className="flex flex-col xl:flex-row">
          {/* ----------------- left part --------------- */}
          <div className="w-full xl:w-1/2 addtop py-5">
            <div className="bg-blue-800 font-bold my-3 text-lg w-52">
              <h1 className="text-center text-white">Basic Details</h1>
            </div>
            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* Item Group */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="itemGroup"
                    className="lg:w-32 lg:text-lg text-lg font-medium"
                  >
                    Item Group
                  </label>
                  <SearchableDropdown
                    type="text"
                    id="itemGroup"
                    options={itemGroupOption}
                    addlink="/dashboard/items/itemgroup"
                    value={formData.itemGroup}
                    onChange={handleChangeData}
                    className="w-full border flex-1 relative"
                  />
                </div>

                {/* Brand + Code No */}
                <div className="flex flex-col md:flex-row flex-wrap  xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="brand"
                      className="lg:w-36 text-lg lg:text-lg font-medium"
                    >
                      Brand
                    </label>
                    <SearchableDropdown
                      type="text"
                      id="brand"
                      addlink="/dashboard/items/brand"
                      options={BrandOption}
                      className="flex-1 border relative"
                      value={formData.brand}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="codeNo"
                      className="lg:w-36 text-lg lg:text-lg font-medium"
                    >
                      Code No
                    </label>
                    <input
                      type="number"
                      id="codeNo"
                      className="flex-1 lg:w-48 border px-2 py-1"
                      value={formData.codeNo}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                </div>

                {/* Item Name */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="itemName"
                    className="lg:w-32 lg:text-lg text-lg font-medium"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    className="flex-1 border px-2 py-1"
                    value={formData.itemName}
                    onChange={handleChangeData}
                  />
                </div>

                {/* Print Name */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="printName"
                    className="lg:w-32 lg:text-lg text-lg font-medium"
                  >
                    Print Name
                  </label>
                  <input
                    type="text"
                    id="printName"
                    className="flex-1 border px-2 py-1"
                    value={formData.printName}
                    onChange={handleChangeData}
                  />
                </div>

                {/* Remarks */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="remarks"
                    className="lg:w-32 lg:text-lg text-lg font-medium"
                  >
                    Remarks
                  </label>
                  <input
                    type="text"
                    id="remarks"
                    className="flex-1 border px-2 py-1"
                    value={formData.remarks}
                    onChange={handleChangeData}
                  />
                </div>

                {/* HSN Code + Tax Category */}
                <div className=" flex flex-col md:flex-row flex-wrap xl:justify-between  xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="hsn"
                      className="lg:w-36 text-lg lg:text-lg font-medium"
                    >
                      HSN Code
                    </label>
                    <SearchableDropdown
                      type="text"
                      id="hsn"
                      className="flex-1 lg:w-42 border relative"
                      addlink="/dashboard/items/hsn"
                      options={HsnOption}
                      value={formData.hsn}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="tax"
                      className="lg:w-36 text-lg lg:text-lg font-medium"
                    >
                      Tax Category
                    </label>
                    <SearchableDropdown
                      type="text"
                      id="tax"
                      className="flex-1 border relative"
                      addlink="/dashboard/items/taxCategory"
                      options={TaxOption}
                      value={formData.tax}
                      onChange={handleChangeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---- right part ------- */}
          <div className="w-full xl:w-1/2 addtop py-5">
            <div className="bg-blue-800 font-bold my-3 text-lg w-52">
              <h1 className="text-white text-center">Price Details</h1>
            </div>
            <div className="space-x-4">
              <div className="py-5 px-4">
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="retail"
                      className="lg:w-32 lg:text-lg text-lg font-medium"
                    >
                      Retail
                    </label>
                    <input
                      type="number"
                      id="retail"
                      className="flex-1 border px-2 py-1"
                      value={formData.retail}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="mrp"
                      className="lg:w-32 lg:text-lg text-lg font-medium"
                    >
                      MRP
                    </label>
                    <input
                      type="number"
                      id="mrp"
                      className="flex-1 border px-2 py-1"
                      value={formData.mrp}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row ">
          {/* ----------------- left part --------------- */}
          <div className="w-full xl:w-1/2 addbottom py-5">
            <div className="bg-blue-800 font-bold my-3 text-lg w-52">
              <h1 className="text-center text-white">Stock Option</h1>
            </div>

            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* Barcode + rack/bin */}
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="barcode"
                      className="lg:w-32 lg:text-lg text-lg font-medium"
                    >
                      Barcode SR
                    </label>
                    <input
                      type="text"
                      id="barcode"
                      className="flex-1 border px-2 py-1"
                      value={formData.barcode || ""}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="rack"
                      className="lg:w-32 lg:text-lg text-lg font-medium"
                    >
                      Rack/Bin
                    </label>
                    <SearchableDropdown
                      type="text"
                      id="rack"
                      options={RackOption}
                      addlink="/dashboard/items/rack"
                      className="flex-1 border relative"
                      value={formData.rack}
                      onChange={handleChangeData}
                    />
                  </div>
                </div>

                {/* stock unit */}
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <label
                    htmlFor="stockunit"
                    className="lg:w-32 lg:text-lg text-lg font-medium"
                  >
                    Stock Unit
                  </label>
                  <SearchableDropdown
                    type="text"
                    id="stockunit"
                    options={StockUnitOption}
                    addlink="/dashboard/items/stockUnit"
                    className="w-52 border relative"
                    value={formData.stockunit}
                    onChange={handleChangeData}
                  />
                </div>

                {/* min stock + max stock */}
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="minStock"
                      className="lg:w-32 lg:text-lg text-lg font-medium"
                    >
                      Minimun Stock
                    </label>
                    <input
                      type="number"
                      id="minStock"
                      className="flex-1 border px-2 py-1"
                      value={formData.minStock}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="maxStock"
                      className="lg:w-32 lg:text-lg text-lg font-medium"
                    >
                      Maximum Stock
                    </label>
                    <input
                      type="number"
                      id="maxStock"
                      className="flex-1 border px-2 py-1"
                      value={formData.maxStock}
                      onChange={handleChangeData}
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---- right part ------- */}
          <div className="w-full xl:w-1/2 addbottom py-5">
            <div className="bg-blue-800 font-bold my-3 text-lg w-52">
              <h1 className="text-white text-center">Item Images</h1>
            </div>
            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* update images  */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="remarkstockunit"
                    className="lg:w-32 lg:text-lg text-lg font-medium"
                  >
                    Update Images ??
                  </label>
                  <select
                    id="updateImage"
                    className="border px-2 py-1 w-32"
                    value={formData.updateImage}
                    onChange={handleChangeData}
                  >
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                  </select>
                </div>

                {/* HSN Code + Tax Category */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="h-52 w-52">
                    <img
                      src={currentImg ? currentImg : preview}
                      alt=""
                      className="h-full w-full max-w-52 object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-42 font-medium text-sm">
                      <button
                        type="button"
                        onClick={handleButtonClick}
                        className="w-full py-0.5 rounded border border-amber-500 bg-amber-300"
                      >
                        Add
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button
                        type="button"
                        onClick={() => handleDeleteClick()}
                        className="w-full py-0.5 rounded border border-amber-500 bg-amber-300"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button
                        onClick={handleNextImg}
                        type="button"
                        className="w-full py-0.5 rounded border border-amber-500 bg-amber-300"
                      >
                        Next
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button
                        onClick={handlePrevImg}
                        type="button"
                        className="w-full py-0.5 rounded border border-amber-500 bg-amber-300"
                      >
                        Previous
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button
                        type="button"
                        className="w-full py-0.5 rounded border border-amber-500 bg-amber-300"
                      >
                        Zoom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between xl:items-center border p-2">
          <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-2 my-2 px-1 py-0.5">
            <div className="grid grid-cols-2 py-1 gap-3">
              <label
                htmlFor="openstock"
                className="font-medium lg:text-lg text-lg"
              >
                Opening Stock
              </label>
              <select
                id="openstock"
                className="border px-2 py-1 w-36"
                value={formData.openstock}
                onChange={handleChangeData}
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>
            <div className="grid grid-cols-2 xl:ml-3 gap-3">
              <label
                htmlFor="isActive"
                className="font-medium lg:text-lg text-lg"
              >
                Is Active
              </label>
              <select
                id="isActive"
                className="border px-2 py-1 w-36"
                value={formData.isActive}
                onChange={handleChangeData}
              >
                <option value="No">NO</option>
                <option value="Yes">YES</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-3 mb-3 xl:mb-0">
            <button className="flex items-center justify-center gap-4 px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
              {loading && (
                 <BeatLoader size={5}  color='#fff'/>
              )}
              Save
            </button>
              
            <button
              type="reset"
              onClick={() => navigate("/dashboard/items")}
              className="px-3 py-2 h-10 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500"
            >
              Cancel
            </button>
          </div>
          <button className="px-3 py-2 h-10 mt-3 xl:mt-0 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
            Copy
          </button>
        </div>
      </form>

      {showOpeningBal && (
        <OpeningBal
          onClose={() => setShowOpeningBal(false)}
          onSave={handleOpeningBalSave}
          unitdata={StockUnitOption}
        />
      )}
    </div>
  );
};

export default AddItem;
