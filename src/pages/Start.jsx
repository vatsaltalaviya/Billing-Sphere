import React, { useState } from 'react';
import Login from './Login';
import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import '../components/Drop.css'

const Start = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    // <div className="flex items-center h-screen justify-center relative">
    //   <div className="border">
    //     <h1 className="bg-blue-600 text-white font-semibold py-1 text-center">Select Company</h1>
    //     <div className="w-full border h-[45vh]">
    //       <div
    //         className="grid grid-cols-4 items-center justify-between px-2 py-1.5 font-bold cursor-pointer select-none hover:bg-gray-100"
    //         onClick={() => setShowLogin(true)}
    //       >
    //         <span>0001</span>
    //         <span className="col-span-2">Shree ji Agro Traders</span>
    //         <span>20/10/2000</span>
    //       </div>
    //     </div>
    //     <div className="w-full font-semibold p-0.5">
    //       <div className="flex justify-center">
    //         <button className="px-3 py-1 border-2 border-amber-500 bg-amber-200">
    //           DownLoad Sample Data
    //         </button>
    //       </div>
    //       <div className="mt-2 ">
    //         {/* {['Open', 'New', 'Copy', 'Restore', 'Remote Access', 'Exit'].map((label) => (
    //           <button
    //             key={label}
    //             className="px-6 py-1 border-2 border-amber-500 bg-amber-200 w-auto"
    //           >
    //             {label}
    //           </button>
    //         ))} */}
    //         <button className="px-10 py-1 border-2 border-amber-500 bg-amber-200 w-auto">Open</button>
    //         <button className="px-10 py-1 border-2 border-amber-500 bg-amber-200 w-auto">New</button>
    //         <button className="px-10 py-1 border-2 border-amber-500 bg-amber-200 w-auto">Copy</button>
    //         <button className="px-10 py-1 border-2 border-amber-500 bg-amber-200 w-auto">Restore</button>
    //         <button className="px-10 py-1 border-2 border-amber-500 bg-amber-200 w-auto">Remote Access</button>
    //         <button className="px-10 py-1 border-2 border-amber-500 bg-amber-200 w-auto">Exit</button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Modal Overlay */}
    //   {showLogin && (
    //     <div
    //       className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50"
    //       onClick={() => setShowLogin(false)}
    //     >
    //       <div onClick={(e) => e.stopPropagation()}>
    //         <Login onClose={() => setShowLogin(false)} />
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="flex items-center h-screen justify-center relative">
      <Navbar />
    </div>
  );
};

export default Start;
