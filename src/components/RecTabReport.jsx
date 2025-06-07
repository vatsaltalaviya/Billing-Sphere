import React from "react";

const data = [
  {
    party: "ABC Traders",
    rows: [
      {
        date: "01-06-25",
        voucher: "Tax INVOICE",
        no: "TI# 5 DC No (1...)",
        rcvd: false,
        dueAmount: "2,350.00",
        billAmount: "2,350.00",
        dc: "Dr",
        dueOn: "11-06-25",
        dueDays: -4,
        running: "2,350.00",
      },
      {
        date: "01-06-25",
        voucher: "BILL OF SUPPLY",
        no: "BS# 2 DC No (1...)",
        rcvd: false,
        dueAmount: "183.00",
        billAmount: "183.00",
        dc: "Dr",
        dueOn: "11-06-25",
        dueDays: -4,
        running: "2,533.00",
      },
    ],
    totalDueAmount: "2,533.00",
  },
  {
    party: "Vatsal | T:0000111101 M:9999999999",
    rows: [
      {
        date: "01-06-25",
        voucher: "",
        no: "",
        rcvd: false,
        dueAmount: "1,000.00",
        billAmount: "1,000.00",
        dc: "Dr",
        dueOn: "11-06-25",
        dueDays: -4,
        running: "1,000.00",
      },
    ],
    totalDueAmount: "1,000.00",
  },
];

const RecTabReport = () => {
  return (
    <div className="w-full">
      <div className="flex items-center ">
        <h1 className="w-2xl font-medium">01/04/2024 to 07/06/2025</h1>
        <div className="flex gap-2 items-center">
          <h2>0.00</h2>
          <button className="px-4 py-1 border border-amber-600 bg-amber-300">
            Select All
          </button>
        </div>
      </div>
      <div className="w-full h-[70vh] border overflow-auto">
        <div className="overflow-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-purple-100 text-purple-800">
              <tr>
                <th className="border px-2">Date</th>
                <th className="border px-2">Voucher</th>
                <th className="border px-2">No</th>
                <th className="border px-2">Rcvd</th>
                <th className="border px-2">Receipt</th>
                <th className="border px-2">Due Amount</th>
                <th className="border px-2">Bill.Amount</th>
                <th className="border px-2">DC</th>
                <th className="border px-2">Due On</th>
                <th className="border px-2">Due D...</th>
                <th className="border px-2">Running</th>
              </tr>
            </thead>
            <tbody>
              {data.map((party, i) => (
                <React.Fragment key={i}>
                  {/* Party Name Row */}
                  <tr className="bg-gray-100 font-semibold">
                    <td colSpan={5} className="border px-2">
                      {party.party}
                    </td>
                    <td className="border px-2 text-right">
                      {party.totalDueAmount}
                    </td>
                    <td colSpan={5} className="border px-2"></td>
                  </tr>

                  {/* Vouchers */}
                  {party.rows.map((row, j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-blue-100" : ""}>
                      <td className="border px-2">{row.date}</td>
                      <td className="border px-2">{row.voucher}</td>
                      <td className="border px-2">{row.no}</td>
                      <td className="border px-2 text-center">
                        <input type="checkbox" checked={row.rcvd} readOnly />
                      </td>
                      <td className="border px-2"></td>
                      <td className="border px-2 text-right">
                        {row.dueAmount}
                      </td>
                      <td className="border px-2 text-right">
                        {row.billAmount}
                      </td>
                      <td className="border px-2">{row.dc}</td>
                      <td className="border px-2">{row.dueOn}</td>
                      <td className="border px-2">{row.dueDays}</td>
                      <td className="border px-2 text-right">{row.running}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center ">
        <h1 className="w-2xl font-medium">Total 2</h1>
        <div className="flex gap-2 items-center">
          <h2>3000.00</h2>
        </div>
      </div>
    </div>
  );
};

export default RecTabReport;
