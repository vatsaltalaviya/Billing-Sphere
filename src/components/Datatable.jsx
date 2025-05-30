import React, { useState } from 'react';

const Datatable = ({ data , list }) => {
  
  if ((!data || data.length === 0 ) && (!list || list.length === 0) ) return <div>No data found</div>;
 

  const [selectedRow, setselectedRow] = useState(0);

  const rows = (data && data.length > 0) ? data : list;
  const columns = rows && rows.length > 0 ? Object.keys(rows[0]) : [];

   const handleKeyDown = (e) =>{
    if(e.key === "ArrowDown"){
      setselectedRow((prev)=> Math.min(prev + 1 , data.length -1))
  }

      if(e.key === "ArrowUp"){
      setselectedRow((prev)=> Math.max(prev - 1 , 0 ))
    }
    
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
          {/* Search row */}
          <tr>
            {data &&columns.map((col, i) => (
              <th key={i} className="border ">
                <input
                  type="text"
                  id={col}
                  placeholder={`Search here`}
                  className="w-full px-2 py-1  md:text-sm xl:text-[16.5px] placeholder:font-medium"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data&& data.map((row, rowIndex) => (
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

          {list && list.map((item, index) => (
            <tr
              key={index}
              className={`font-medium cursor-pointer ${selectedRow === index ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            >
              
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-black px-3 py-1 ${(colIndex === 0 || colIndex === columns.length - 1) ? 'text-center' : ''}`}
                >
                  {item[col]}
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

export default Datatable;
