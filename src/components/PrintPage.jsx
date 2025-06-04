import React, { useRef } from "react";
import InvoicePage from "./InvoiceData";

const PrintPage = () => {

    const componentRef = useRef();


  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full fixed bottom-0 left-0 border p-2 flex gap-4 bg-white z-50 no-print">
        <button>
          <i className="ri-close-large-line"></i>
        </button>
        <button onClick={()=>window.print()}>
          <i className="ri-printer-fill"></i>
        </button>
        <button>
          <i className="ri-file-pdf-2-line"></i>
        </button>
      </div>
      <div className="w-full print-container" >
        <InvoicePage ref={componentRef}/>
      </div>
    </div>
  );
};

export default PrintPage;
