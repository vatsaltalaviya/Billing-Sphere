import React from "react";

const ImgGallery = () => {
  return (
    <div className="flex py-10 justify-center w-full ">
      <div className=" border bg-white flex flex-col md:max-w-[65vw]">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">Image Gallery</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col px-2 py-0.5 space-y-3">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-32">Item Name or Retail Rate</span>
                <input type="text" className="border px-2 py-0.5" />
              </div>
              <div className="flex flex-wrap gap-2 flex-col md:flex-row">
                <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                  Search
                </button>
                <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                  Cancel
                </button>
                <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                  Download
                </button>
                <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                  Email
                </button>
              </div>
            </div>

            <div className="flex flex-wrap space-x-1 border justify-center md:justify-start h-[60vh] md:max-h-[70vh] max-w-[70vw] p-1 overflow-auto">

                <div className="h-44 w-36 border my-1">
                    <img src="#" alt="" className="h-full w-full object-cover"/>
                </div>
                <div className="h-44 w-36 border my-1">
                    <img src="#" alt="" className="h-full w-full object-cover"/>
                </div>
            
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImgGallery;
