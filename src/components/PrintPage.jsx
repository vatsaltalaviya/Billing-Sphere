import React from "react";
import InvoicePage from "./InvoiceData";

const PrintPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full fixed top-0 left-0 border p-2 flex gap-4 invoice-print">
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
      <div className="w-full my-20 h-screen overflow-y-auto sm:p-2 table-data invoice-data">
        <InvoicePage />
      </div>
    </div>
  );
};

export default PrintPage;
