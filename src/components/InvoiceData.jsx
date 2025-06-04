import React, { forwardRef } from "react";

const InvoicePage = forwardRef((props,ref) => {
  const invoice = {
    invoiceNo: "TI/1",
    invoiceDate: "01/05/2025",
    dcNo: "654561",
    partyName: "Cash In Hand",
    items: [
      { name: "Chocolate Box", qty: 2, pack: "Kg", rate: 125, amount: 250 },
    ],
    totalAmount: 250,
    remarks: "Ok.",
  };

  return (
   <div ref={ref} className="bg-white w-[210mm]  mx-auto pt-6 border-2 border-black text-xs">
      {/* Header */}
      <div className="text-center text-xl font-bold mb-2">DemoAccount</div>

      {/* Invoice Type */}
      <div className="grid grid-cols-3 border border-black text-center font-semibold">
        <div className="border-r border-black py-1">Cash Memo</div>
        <div className="border-r border-black py-1">Tax INVOICE</div>
        <div className="py-1">Original</div>
      </div>

      {/* Party and Invoice Info */}
      <div className="flex border-b border-black text-sm">
        <div className=" w-[780px] border">
          <div className="font-semibold">
            To, <span className="font-normal">{invoice.partyName}</span>
          </div>
        </div>
        <div className="text-right space-y-1 text-sm w-full border">
          <div className="flex justify-between p-2 border-b border-dashed">
            <div>Invoice No.: {invoice.invoiceNo}</div>
            <div>Date: {invoice.invoiceDate}</div>
          </div>
          <div className="flex justify-between p-2">
            <div>DC No.: {invoice.dcNo}</div>
            <div>Date: {invoice.invoiceDate}</div>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="w-full table-fixed border border-black mt-1 ">
        <thead className="bg-gray-200 border-b border-black">
          <tr>
            <th className="border-r border-black w-[5%]">Sr</th>
            <th className="border-r border-black w-[45%]">Name of Item</th>
            <th className="border-r border-black w-[10%]">Qty</th>
            <th className="border-r border-black w-[10%]">Pack</th>
            <th className="border-r border-black w-[15%]">Rate</th>
            <th className="w-[15%]">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, i) => (
            <tr key={i} className="text-center">
              <td className="border-x border-black">{i + 1}</td>
              <td className="border-x border-black text-left px-2">
                {item.name}
              </td>
              <td className="border-x border-black">{item.qty}</td>
              <td className="border-x border-black">{item.pack}</td>
              <td className="border-x border-black">{item.rate.toFixed(2)}</td>
              <td className="border-x border-black">
                {item.amount.toFixed(2)}
              </td>
            </tr>
          ))}

          {/* Empty rows to fill height */}
          {Array.from({ length: 25 - invoice.items.length }).map((_, i) => (
            <tr key={i} className="h-6">
              <td className="border-x border-black">&nbsp;</td>
              <td className="border-x border-black"></td>
              <td className="border-x border-black"></td>
              <td className="border-x border-black"></td>
              <td className="border-x border-black"></td>
              <td className="border-x border-black"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="flex justify-between border border-black pt-1">
        <div className="font-semibold">Total</div>
        <div className="font-semibold">{invoice.totalAmount.toFixed(2)}</div>
      </div>

      {/* Amount in Words */}
      <div className="border font-semibold border-black border-t-0 text-center p-1 italic">
        Rupees Two Hundred Fifty Only
      </div>

      {/* Terms & Footer */}
      <div className="grid grid-cols-3 border border-black mt-2 text-[10px]">
        <div className="border-r border-black p-1">
          <p className="font-bold underline">Terms And Condition :</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>
              24% Interest will be charged on all amounts remaining unpaid.
            </li>
            <li>Goods once sold cannot be accepted back or exchanged.</li>
            <li>E & O.E.</li>
          </ul>
          <p className="mt-1">
            <span className="font-semibold">Remarks:</span> {invoice.remarks}
          </p>
        </div>
        <div className="border-r border-black p-1 text-center">
          Customer's Sign
        </div>
        <div className="p-1 text-center">
          For, <strong>DemoAccount</strong>
        </div>
      </div>

      <div className="border border-t-0 border-black text-[9px] text-center p-1 mt-0 italic">
        1/We declare that this invoice shows that actual price of the goods
        described and that all particulars are true and correct.
      </div>
    </div>
  );
});

export default InvoicePage;
