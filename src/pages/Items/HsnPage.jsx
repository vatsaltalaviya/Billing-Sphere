import React from "react";

const HsnPage = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-fuchsia-600 flex items-center justify-center">
        <h1 className="font-semibold text-xl text-white">NEW HSN Commodity</h1>
      </div>
      <div className="md:w-xl border-2 mx-auto mt-30 p-2">
        <form action="" className="space-y-3">
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">HSN Code</span>
            <input type="text" className="border py-2 px-2 " />
          </div>

          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44">Unit of Quantity</span>
            <select name="unit" id="unit" class="border px-2 py-2">
              <option value="">Select Unit</option>
              <option value="Kg">Kg - Kilogram</option>
              <option value="g">g - Gram</option>
              <option value="L">L - Liter</option>
              <option value="ml">ml - Milliliter</option>
              <option value="Pc">Pc - Piece</option>
              <option value="Box">Box - Box</option>
              <option value="Pkt">Pkt - Packet</option>
              <option value="Dz">Dz - Dozen</option>
              <option value="M">M - Meter</option>
              <option value="cm">cm - Centimeter</option>
              <option value="in">in - Inch</option>
              <option value="ft">ft - Feet</option>
              <option value="Pr">Pr - Pair</option>
              <option value="Roll">Roll - Roll</option>
              <option value="Btl">Btl - Bottle</option>
              <option value="Tin">Tin - Tin</option>
              <option value="Bndl">Bndl - Bundle</option>
              <option value="Ctn">Ctn - Carton</option>
              <option value="Set">Set - Set</option>
              <option value="Can">Can - Can</option>
              <option value="Tube">Tube - Tube</option>
              <option value="Brl">Brl - Barrel</option>
              <option value="Sch">Sch - Sachet</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row xl:items-center">
            <span className="w-44 font-medium">Description</span>
            <input type="text" className="border py-2 px-2 " />
          </div>
          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
            <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              Save
            </button>
            <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HsnPage;
