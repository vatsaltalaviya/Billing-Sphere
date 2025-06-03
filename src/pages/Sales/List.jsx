import React, { useState } from "react";
import Datatable from "../../components/Datatable";
import { lists } from "../../assets/Dummydata";
import { useNavigate } from "react-router-dom";
import Range from "../../components/Range";
import { transactions } from "../../assets/Dummydata";

const List = ({mode}) => {

  const navigate = useNavigate();

  const [lstPrnPopup, setlstPrnPopup] = useState(false)
  const [PrnPopup, setPrnPopup] = useState(false)
  const [DeletePopup, setDeletePopup] = useState(false)

  return (
    <div className="w-full h-screen flex flex-col">
      <div className={`flex justify-center w-full ${mode == "sales"&& 'bg-green-600'} ${mode == "purchase" && 'bg-orange-400'} ${mode == "receipt" && 'bg-emerald-400'} ${mode == 'payment' && 'bg-orange-300'} text-xl font-bold text-white`}>
        <h1 className="text-xl font-bold text-white">
          List of Tax INVOICE Voucher
        </h1>
      </div>
      <div className=" h-[80vh] overflow-auto relative p-4 xl:p-10 table-data border-b">
        {mode == "sales" &&<Datatable data={lists}/>}
        {mode == "purchase" &&<Datatable data={lists}/>}
        {mode == "receipt" &&<Datatable data={transactions}/>}
        {mode == "payment" &&<Datatable data={transactions}/>}
      </div>
      <div className="w-full border flex flex-col xl:flex-row justify-center px-2 mt-3 mb-10">
          <div className="flex flex-col xl:flex-row w-full">
            <button onClick={()=>setlstPrnPopup(true)} className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              List Prn
            </button>
            <button onClick={()=>{
              navigate('/dashboard/sales',{state: { triggerNew: true }})
              
            }} className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              New
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Edit
            </button>
            <button className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              XLS
            </button>
            <button  className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Print
            </button>
            <button onClick={()=>setPrnPopup(true)} className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
             Prn
            </button>
            <button onClick={()=>setDeletePopup(true)} className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Delete(Range)
            </button>
           {mode === "sales" && (
            <button onClick={()=>navigate('/dashboard/sales',{state: { triggerNew: true }})} className="px-3 border-y py-2 h-10 w-full lg:border-x font-medium hover:bg-gray-200">
              Email/SMS
            </button>
           )}
           
          </div>
        </div>

        {lstPrnPopup && <Range mode="listPrint" heading="Print Rangewise" onClose={()=>setlstPrnPopup(false)}/>}
        {PrnPopup && <Range mode="print"  heading="Print Rangewise"  onClose={()=>setPrnPopup(false)}/>}
        {DeletePopup && <Range mode="delete" heading="Delete Rangewise" onClose={()=>setDeletePopup(false)}/>}
    </div>
  );
};

export default List;
