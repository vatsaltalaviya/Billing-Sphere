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
    isActive: "NO",
  };
  const [formData, setformData] = useState(defaultForm);
  const { editid } = useParams();
  const { deleteid } = useParams();

  const handleChangeData = (e) => {
    const { id, value } = e.target;
    setformData((perv) => ({
      ...perv,
      [id]: value,
    }));
    console.log(formData);
  };

  return (
    <div className="h-screen w-full bg-white">
      <div
        className={`${
          editid ? "bg-amber-500" : "bg-blue-800"
        } font-bold text-xl`}
      >
        <h1 className="text-center text-white">
          {editid ? "Edit Item" : "Add Item"}
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
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="itemGroup"
                    className="w-32 text-sm font-medium"
                  >
                    Item Group
                  </label>
                  <input
                    type="text"
                    id="itemGroup"
                    className="flex-1 border px-2 py-1"
                  />
                </div>

                {/* Brand + Code No */}
                <div className="flex flex-col md:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex">
                    <label htmlFor="brand" className="w-36 text-sm font-medium">
                      Brand
                    </label>
                    <input
                      type="text"
                      id="brand"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                  <div className="flex">
                    <label
                      htmlFor="codeNo"
                      className="w-36 text-sm font-medium"
                    >
                      Code No
                    </label>
                    <input
                      type="text"
                      id="codeNo"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                </div>

                {/* Item Name */}
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="itemName"
                    className="w-32 text-sm font-medium"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    className="flex-1 border px-2 py-1"
                  />
                </div>

                {/* Print Name */}
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="printName"
                    className="w-32 text-sm font-medium"
                  >
                    Print Name
                  </label>
                  <input
                    type="text"
                    id="printName"
                    className="flex-1 border px-2 py-1"
                  />
                </div>

                {/* Remarks */}
                <div className="flex items-center gap-4">
                  <label htmlFor="remarks" className="w-32 text-sm font-medium">
                    Remarks
                  </label>
                  <input
                    type="text"
                    id="remarks"
                    className="flex-1 border px-2 py-1"
                  />
                </div>

                {/* HSN Code + Tax Category */}
                <div className=" flex flex-col md:flex-row flex-wrap  xl:items-center gap-4">
                  <div className="flex">
                    <label htmlFor="hsn" className="w-36 text-sm font-medium">
                      HSN Code
                    </label>
                    <input
                      type="text"
                      id="hsn"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                  <div className="flex">
                    <label htmlFor="tax" className="w-36 text-sm font-medium">
                      Tax Category
                    </label>
                    <select
                      id="tax"
                      className="w-48 md:flex-1 border px-2 py-1"
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
                  <div className="flex">
                    <label
                      htmlFor="retail"
                      className="w-32 text-sm font-medium"
                    >
                      Retail
                    </label>
                    <input
                      type="text"
                      id="retail"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                  <div className="flex">
                    <label htmlFor="mrp" className="w-32 text-sm font-medium">
                      MRP
                    </label>
                    <input
                      type="text"
                      id="mrp"
                      className="flex-1 border px-2 py-1"
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
                  <div className="flex">
                    <label
                      htmlFor="barcode"
                      className="w-32 text-sm font-medium"
                    >
                      Barcode SR
                    </label>
                    <input
                      type="text"
                      id="barcode"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                  <div className="flex">
                    <label htmlFor="rack" className="w-32 text-sm font-medium">
                      Rack/Bin
                    </label>
                    <input
                      type="text"
                      id="rack"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                </div>

                {/* stock unit */}
                 <div className="flex">
                    <label
                      htmlFor="stockUnit"
                      className="w-32 text-sm font-medium"
                    >
                      Stock Unit
                    </label>
                    <input
                      type="text"
                      id="stockUnit"
                      className="w-32 border px-2 py-1"
                    />
                  </div>

                {/* min stock + max stock */}
                <div className="flex flex-col xl:flex-row flex-wrap xl:items-center gap-4">
                  <div className="flex">
                    <label
                      htmlFor="minStock"
                      className="w-32 text-sm font-medium"
                    >
                      Minimun Stock
                    </label>
                    <input
                      type="text"
                      id="minStock"
                      className="flex-1 border px-2 py-1"
                    />
                  </div>
                  <div className="flex">
                    <label
                      htmlFor="maxStock"
                      className="w-32 text-sm font-medium"
                    >
                      Maximum Stock
                    </label>
                    <input
                      type="text"
                      id="maxStock"
                      className="flex-1 border px-2 py-1"
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
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="remarkstockunit"
                    className="w-32 text-sm font-medium"
                  >
                    Update Images ??
                  </label>
                  <select id="updateImage" className="border px-2 py-1 w-32">
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
              <label htmlFor="openstock" className="font-medium text-sm">
                Opening Stock
              </label>
              <input
                type="text"
                id="openstock"
                className="border px-2 py-1 w-36"
              />
            </div>
            <div className="grid grid-cols-2 xl:ml-3 gap-3">
              <label htmlFor="isActive" className="font-medium text-sm">
                Is Active
              </label>
              <select id="IsActive" className="border px-2 py-1 w-36">
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
