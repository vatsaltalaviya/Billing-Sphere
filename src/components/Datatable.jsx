import React, { useState } from 'react';

const Datatable = ({ data }) => {
  if (!data || data.length === 0) return <div>No data found</div>;

  const [selectedRow, setselectedRow] = useState(0);
  const columns = Object.keys(data[0]);

   const handleKeyDown = (e) =>{
    if(e.key === "ArrowDown"){
      setselectedRow((prev)=> Math.min(prev + 1 , data.length -1))
  }

      if(e.key === "ArrowUp"){
      setselectedRow((prev)=> Math.max(prev - 1 , 0 ))
    }
    console.log(selectedRow);
}

  return (
    <div className="overflow-x-auto"
    tabIndex={0}
    onKeyDown={handleKeyDown}
    >
      <table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px] ">
        <thead>
          <tr className="bg-white text-purple-900 font-bold text-left">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`border border-black px-3 py-1 ${(i === 0 || i === columns.length - 1) ? 'text-center' : ''}`}
              >
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
              className={`font-medium cursor-pointer ${selectedRow === rowIndex ?'bg-blue-500 text-white ':'bg-white text-black' }`}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-black px-3 py-1 ${(colIndex === 0 || colIndex === columns.length - 1) ? 'text-center' : ''}`}
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
