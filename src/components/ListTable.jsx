import React, { useState } from 'react'

const ListTable = ({data}) => {
    if(!data || data.length === 0)
        return <div>No data found</div>;
    
      const [selectedRow, setSelectedRow] = useState(0);
      const [RowData, setRowData] = useState({});
    
      const rows = data && data.length > 0 ? data : list;
      const columns = rows && rows.length > 0 ? Object.keys(rows[0]) : [];
    
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
          setSelectedRow((prev) => Math.min(prev + 1, rows.length - 1));
          setRowData(rows[Math.min(selectedRow + 1, rows.length - 1)]);
        }
    
        if (e.key === 'ArrowUp') {
          setSelectedRow((prev) => Math.max(prev - 1, 0));
          setRowData(rows[Math.max(selectedRow - 1, 0)]);
        }
      };
    
    
  return (
    <div
      className="overflow-x-auto"
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
                  i === 0 || i === columns.length - 1 ? 'text-center' : ''
                }`}
              >
                {col}
              </th>
            ))}
          </tr>

          {/* Search row */}
          {data && (<tr>
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
          </tr>)}
        </thead>

        <tbody className='border-b'>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => {
                setSelectedRow(rowIndex);
                setRowData(row);
              }}
              className={`font-medium cursor-pointer ${
                selectedRow === rowIndex
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-black px-3 py-1 ${
                    colIndex === 0 || colIndex === columns.length - 1
                      ? 'text-center'
                      : ''
                  }`}
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
          {
            Array.from({ length: 45 - data.length }).map((_,i)=>(
                <tr
              key={i}
              className={`font-medium cursor-pointer`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`border-x border-black px-3 py-1 }`}
                >
                 
                </td>
              ))}
            </tr>
            ))
          }
        </tbody>
      </table>      
    </div>
  );
};


export default ListTable
