import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Datatable = ({ data, list, getitemUrl, mode }) => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(0);
  const [RowData, setRowData] = useState({});

  const rows = data && data.length > 0 ? data : list;
  const columns =
    rows && rows.length > 0
      ? Object.keys(rows[0]).filter((col) => col !== "id")
      : [];
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedRow((prev) => Math.min(prev + 1, rows.length - 1));
      setRowData(rows[Math.min(selectedRow + 1, rows.length - 1)]);
    }

    if (e.key === "ArrowUp") {
      setSelectedRow((prev) => Math.max(prev - 1, 0));
      setRowData(rows[Math.max(selectedRow - 1, 0)]);
    }
  };

  const handleDoubleClick = (route) => {
    navigate(`${route}/${RowData.id}`);
  };

  useEffect(() => {
    if (RowData.id) {
      getitemUrl(RowData.id);
    }
  }, [RowData.id]);
  
  useEffect(() => {
  if (rows && rows.length > 0 && selectedRow === 0) {
    setRowData(rows[0]);
  }
}, [selectedRow, rows]);

  return (
    <div
      className="overflow-x-auto w-full"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px]">
        <thead>
          <tr className="bg-white text-purple-900 font-bold text-left">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`border border-black px-3 py-1 ${
                  i === 0 || i === columns.length - 1 ? "text-center" : ""
                }`}
              >
                {col}
              </th>
            ))}
          </tr>

          {/* Search row */}
          {data && (
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="border">
                  <input
                    type="text"
                    id={col}
                    placeholder="Search here"
                    className="w-full px-2 py-1 md:text-sm xl:text-[16.5px] placeholder:font-medium"
                  />
                </th>
              ))}
            </tr>
          )}
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
            
              onClick={() => {
                setSelectedRow(rowIndex);
                setRowData(row);
              }}
              onDoubleClick={() => {
                {mode == "item" && handleDoubleClick("/dashboard/items/edit");}
                {mode == "itemGroup" && handleDoubleClick("/dashboard/items/edititemgroup");}
                {mode == "hsn" && handleDoubleClick("/dashboard/items/edithsn");}
                {mode == "tax" && handleDoubleClick("/dashboard/items/edittax");}
                {mode == "brand" && handleDoubleClick("/dashboard/items/editbrand");}
                {mode == "unit" && handleDoubleClick("/dashboard/items/editunit");}
                {mode == "store" && handleDoubleClick("/dashboard/items/editrack");}
                {mode == "ledgers" && handleDoubleClick("/dashboard/ledger/edit");}
              }}
              className={`font-medium cursor-pointer ${
                selectedRow === rowIndex
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-black px-3 py-1 ${
                    colIndex === 0 || colIndex === columns.length - 1
                      ? "text-center"
                      : ""
                  }`}
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* RowData preview */}
    </div>
  );
};

export default Datatable;
