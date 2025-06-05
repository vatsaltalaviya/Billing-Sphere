import React from "react";
import PopUp from "../../components/PopUp";

const BulkItemUpd = ({ onClose }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className=" border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">Bulk Update</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col px-2 py-2 space-y-3">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-32">Item Group</span>
                <input type="text" className="border px-2 py-2" />
              </div>
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-32">Item Brand</span>
                <input type="text" className="border px-2 py-2" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-32">HSN Code</span>
                <input type="text" className="border px-2 py-2" />
              </div>
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-32">Item Type</span>
                <input type="text" className="border px-2 py-2" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                <span className="w-32">Tax Category</span>
                <input type="text" className="border px-2 py-2" />
              </div>
            </div>

            <h1>updates</h1>
            <div className="flex flex-col space-y-1 justify-center">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-32">Batch Reqd</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-14">Brand</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-20">Size</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-10">Mfg</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-32">Design No</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-14">MRP</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-20">Color</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-10">Expire</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-32">Retail</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-14">Unique</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-20">Remark</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                
              </div>


              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-32">B/Ex1</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-14">B/Ex2</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-20">B/Ex3</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-32">B/Ex4</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-14">B/Ex5</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <select className=" px-2 py-2 border w-20">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-32">Item Group</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <input type="text" className="border px-2 py-2 flex-1"/>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row xl:items-center">
                  <span className="w-26">item Brand</span>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <input type="text" className="border px-2 py-2 flex-1"/>
                  </div>
                </div>
              </div>

             


            </div>

            <div className="flex flex-col md:flex-row gap-2 xl:ml-5 items-center ">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Save
              </button>
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BulkItemUpd;
