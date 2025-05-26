import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
    openstock: "",
    isActive: "NO", // Only use lowercase 'isActive'
  };
  const [formData, setformData] = useState(defaultForm);
  const { editid } = useParams();
  const { deleteid } = useParams();

  const handleChangeData = (e) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setformData((prev) => {
      const updatedForm = {
        ...prev,
        [id]: newValue,
      };
      console.log(updatedForm); // Move console.log inside the setState callback
      return updatedForm;
    });
  };

  return (
    <div className="h-screen w-full bg-white">
      <div
        className={`${
          editid ? "bg-amber-500" : deleteid ?"bg-red-500": "bg-blue-800"
        } font-bold text-xl`}
      >
        <h1 className="text-center text-white">
          {editid ? "Edit Item" : deleteid ? "Delete Item" : "Add Item"}
        </h1>
      </div>
      {/* ------------------------------- body ----------------------------------- */}
      <form className="p-2 xl:p-10">
        <div className="flex flex-col xl:flex-row">
          {/* ----------------- left part --------------- */}
          <div className="w-full xl:w-1/2 border py-5">
            <div className="bg-blue-800 font-bold my-3 text-xl w-52">
              <h1 className="text-center text-white">Basic Details</h1>
            </div>
            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* Item Group */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="itemGroup"
                    className="lg:w-32 lg:text-lg text-xl font-medium"
                  >
                    Item Group
                  </label>
                  <input
                    type="text"
                    id="itemGroup"
                    value={formData.itemGroup}
                    onChange={handleChangeData}
                    className="flex-1 border px-2 py-1"
                  />
                </div>

                {/* Brand + Code No */}
                <div className="flex flex-col md:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label htmlFor="brand" className="lg:w-36 text-xl lg:text-lg font-medium">
                      Brand
                    </label>
                    <input
                      type="text"
                      id="brand"
                      className="flex-1 border px-2 py-1"
                      value={formData.brand}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="codeNo"
                      className="lg:w-36 text-xl lg:text-lg font-medium"
                    >
                      Code No
                    </label>
                    <input
                      type="text"
                      id="codeNo"
                      className="flex-1 border px-2 py-1"
                      value={formData.codeNo}
                      onChange={handleChangeData}
                    />
                  </div>
                </div>

                {/* Item Name */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="itemName"
                    className="lg:w-32 lg:text-lg text-xl font-medium"
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
                    className="lg:w-32 lg:text-lg text-xl font-medium"
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
                  <label htmlFor="remarks" className="lg:w-32 lg:text-lg text-xl font-medium">
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
                <div className=" flex flex-col md:flex-row flex-wrap  xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label htmlFor="hsn" className="lg:w-36 text-xl lg:text-lg font-medium">
                      HSN Code
                    </label>
                    <input
                      type="text"
                      id="hsn"
                      className="flex-1 border px-2 py-1"
                      value={formData.hsn}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label htmlFor="tax" className="lg:w-36 text-xl lg:text-lg font-medium">
                      Tax Category
                    </label>
                    <select
                      id="tax"
                      className="w-48 md:flex-1 border px-2 py-1"
                      value={formData.tax}
                      onChange={handleChangeData}
                    >
                      <option value="">Select Tax Category</option>
                      <option value="0%">0% (Exempted/Nil Rated)</option>
                      <option value="0.25%">0.25% GST</option>
                      <option value="3%">3% GST</option>
                      <option value="5%">5% GST</option>
                      <option value="12%">12% GST</option>
                      <option value="18%">18% GST</option>
                      <option value="28%">28% GST</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---- right part ------- */}
          <div className="w-full xl:w-1/2 border py-5">
            <div className="bg-blue-800 font-bold my-3 text-xl w-52">
              <h1 className="text-white text-center">Price Details</h1>
            </div>
            <div className="space-x-4">
              <div className="py-5 px-4">
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="retail"
                      className="lg:w-32 lg:text-lg text-xl font-medium"
                    >
                      Retail
                    </label>
                    <input
                      type="text"
                      id="retail"
                      className="flex-1 border px-2 py-1"
                      value={formData.retail}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label htmlFor="mrp" className="lg:w-32 lg:text-lg text-xl font-medium">
                      MRP
                    </label>
                    <input
                      type="text"
                      id="mrp"
                      className="flex-1 border px-2 py-1"
                      value={formData.mrp}
                      onChange={handleChangeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row ">
          {/* ----------------- left part --------------- */}
          <div className="w-full xl:w-1/2 border py-5">
            <div className="bg-blue-800 font-bold my-3 text-xl w-52">
              <h1 className="text-center text-white">Stock Option</h1>
            </div>

            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* Barcode + rack/bin */}
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="barcode"
                      className="lg:w-32 lg:text-lg text-xl font-medium"
                  
                    >
                      Barcode SR
                    </label>
                    <input
                      type="text"
                      id="barcode"
                      className="flex-1 border px-2 py-1"
                          value={formData.barcode}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label htmlFor="rack" className="lg:w-32 lg:text-lg text-xl font-medium">
                      Rack/Bin
                    </label>
                    <input
                      type="text"
                      id="rack"
                      className="flex-1 border px-2 py-1"
                      value={formData.rack}
                      onChange={handleChangeData}

                    />
                  </div>
                </div>

                {/* stock unit */}
                 <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="stockunit"
                      className="lg:w-32 lg:text-lg text-xl font-medium"
                    >
                      Stock Unit
                    </label>
                    <input
                      type="text"
                      id="stockunit"
                      className="w-32 border px-2 py-1"
                      value={formData.stockunit}
                      onChange={handleChangeData}
                    />
                  </div>

                {/* min stock + max stock */}
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="minStock"
                      className="lg:w-32 lg:text-lg text-xl font-medium"
                    >
                      Minimun Stock
                    </label>
                    <input
                      type="text"
                      id="minStock"
                      className="flex-1 border px-2 py-1"
                      value={formData.minStock}
                      onChange={handleChangeData}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center">
                    <label
                      htmlFor="maxStock"
                      className="lg:w-32 lg:text-lg text-xl font-medium"
                    >
                      Maximum Stock
                    </label>
                    <input
                      type="text"
                      id="maxStock"
                      className="flex-1 border px-2 py-1"
                      value={formData.maxStock}
                      onChange={handleChangeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---- right part ------- */}
          <div className="w-full xl:w-1/2 border py-5">
            <div className="bg-blue-800 font-bold my-3 text-xl w-52">
              <h1 className="text-white text-center">Item Images</h1>
            </div>
            <div className="py-5 px-4">
              <div className="space-y-4">
                {/* update images  */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <label
                    htmlFor="remarkstockunit"
                    className="lg:w-32 lg:text-lg text-xl font-medium"
                  >
                    Update Images ??
                  </label>
                  <select id="updateImage" className="border px-2 py-1 w-32" value={formData.updateImage} onChange={handleChangeData}>
                    <option value="NO">NO</option>
                    <option value="YES">YES</option>
                  </select>
                </div>

                {/* HSN Code + Tax Category */}
                <div className="flex items-center gap-4">
                  <div className="h-52 w-52">
                    <img
                      src="#"
                      alt=""
                      className="h-full w-full object-cover"

                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Add
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Delete
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Next
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Previous
                      </button>
                    </div>
                    <div className="w-42 font-medium text-sm">
                      <button className="w-full py-0.5 rounded border border-amber-500 bg-amber-300">
                        Zoom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col xl:flex-row justify-between border p-2">
          <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-2 my-2 px-1 py-0.5">
            <div className="grid grid-cols-2 py-1 gap-3">
              <label htmlFor="openstock" className="font-medium lg:text-lg text-xl" >
                Opening Stock
              </label>
              <input
                type="text"
                id="openstock"
                className="border px-2 py-1 w-36"
                value={formData.openstock} onChange={handleChangeData}
              />
            </div>
            <div className="grid grid-cols-2 xl:ml-3 gap-3">
              <label htmlFor="isActive" className="font-medium lg:text-lg text-xl">
                Is Active
              </label>
              <select id="isActive" className="border px-2 py-1 w-36" value={formData.isActive} onChange={handleChangeData}>
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-3">
            {
              deleteid ? '':<button className="px-3 py-2 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
                Save
              </button>
            }
               
            <button className="px-3 py-2 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
              Cancel
            </button>
            {editid || deleteid ? (
              <button className="px-3 py-2 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
                Delete
              </button>
            ) : (
              ''
            )}

            {/*<button className="px-3 py-2 rounded border ml-1">Previous</button> */}
          </div>
          <button className="px-3 py-2 mt-2 rounded border ml-1 bg-amber-200 border-amber-500 font-medium hover:bg-amber-500">
            Copy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
