import React, { useState } from 'react';

const Datatable = ({ data }) => {
  if (!data || data.length === 0) return <div>No data found</div>;

  const [selectedRow, setselectedRow] = useState(null);
  console.log(selectedRow)

  const columns = Object.keys(data[0]);

  const handleKeyDown = (e) =>{
    if (selectedRow === null && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    setselectedRow(0);
    return;
  }
    if(e.key === "ArrowDown"){
      setselectedRow((perv)=>
      perv == null ? 0 : Math.min(perv +1 , data.length -1)
      )
      
  }
  console.log(e.key)
      if(e.key === "ArrowUp"){
      setselectedRow((perv)=>
      perv == null ? 0 : Math.max(perv - 1 , 0 )
      )
    }
}

  return (
    <div className="overflow-x-auto"
    tabIndex={0}
    onKeyDown={handleKeyDown}
    >
      <table className="table-auto w-full border border-black text-sm">
        <thead>
          <tr className="bg-white text-purple-900 font-bold text-left">
            {columns.map((col, i) => (
              <th key={i} className="border border-black px-3 py-1">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={()=>setselectedRow(rowIndex)}
              className={` font-medium cursor-pointer ${selectedRow === rowIndex ?'bg-blue-500 ':'bg-white text-black' }`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-black px-3 py-1 ${
                    col === 'Item Name' ? 'text-yellow-400' : ''
                  }`}
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
