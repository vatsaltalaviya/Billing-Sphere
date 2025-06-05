import React from "react";

const ItemGroup = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">NEW Item Group</h1>
      </div>
      <div className="md:w-xl border-2 mx-auto mt-30 p-2">
        <form action="" className="space-y-3">
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Item Group name</span>
            <input type="text" className="border py-2 px-2 " />
          </div>
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Tax Category</span>
            <select id="tax" className="border py-2 px-2">
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
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44">Group Type</span>
            <select className="border py-2 px-2">
              <option value="Goods">Goods</option>
              <option value="Service">Service</option>
            </select>
          </div>
          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Images
              </button>
               <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Save
              </button>
              <button
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

export default ItemGroup;
