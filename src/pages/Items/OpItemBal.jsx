import React from 'react'
import PopUp from '../../components/PopUp';

const OpItemBal = ({onClose}) => {
    const tableData = [
    {
      Sr: 1,
      itemName: "Chocolate Box",
      "Code No": "1212",
      Group: "General",
      Retail: 125,
      opBal:0,
      MRP: 150,
      "Cl.Stk": "0 Kg",
      Active: "Yes",
    },
    {
      Sr: 2,
      itemName: "Maggie box",
      "Code No": "121212",
      Group: "General",
      Retail: 130,
      MRP: 170,
      opBal:1000,
      "Cl.Stk": "0 Kg",
      Active: "Yes",
    },
    {
      Sr: 3,
      itemName: "pasta Box",
      "Code No": "721641",
      Group: "General",
      Retail: 105,
      MRP: 130,
      opBal:1000,
      "Cl.Stk": "0 Kg",
      Active: "Yes",
    },
   
  ];
  return (
    <PopUp onClose={onClose}>
      <div className="w-full md:w-[1000px] border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-xl font-semibold text-white">
            Item Master Opening Balanace Editor
          </h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
         <div className="max-h-[500px] w-[380px] md:w-full  table-data overflow-auto">
             <table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px]">
            <colgroup>
              <col className="w-10 min-w-[40px] max-w-[40px]" />
              <col className="w-48 min-w-[20em] sm:w-sm sm:min-w-[300px] lg:w-[16em] lg:min-w-[10em]" />
              <col className="w-16 min-w-[60px] max-w-[60px]" />
              <col className="w-16 min-w-[60px] max-w-[60px]" />
              <col className="w-8 min-w-[40px] max-w-[80px]" />
              
            </colgroup>
            <thead>
              <tr className="bg-white text-purple-900 font-bold">
                <th className="border text-sm text-center">Sr</th>
                <th className="border text-sm text-left">Group Name</th>
                <th className="border text-sm text-left">Item Name</th>
                <th className="border text-sm text-right">Op Bal</th>
                <th className="border text-sm text-left">Edit</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, idx) => (
                <tr key={idx} className="font-medium">
                  <td className="border text-sm py-1 px-1 text-center">{item.Sr}</td>
                  <td className="border text-sm py-1 px-1 text-left">{item.Group}</td>
                  <td className="border text-sm py-1 px-1 text-left">{item.itemName}</td>
                  <td className="border text-sm py-1 px-1 text-right"><input type="number" className="w-full h-full text-right" value={item.opBal} /></td>
                  <td className="border text-sm px-1 py-1 text-left"><select className="w-full" name="" >
                        <option value="No">No</option>
                        <option value="yes">Yes</option>
                        </select></td>
                </tr>
              ))}
            </tbody>
          </table>
         </div>

          <div className="flex md:flex-row gap-2 xl:ml-5 py-4 xl:py-10 items-center ">
             
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
        </form>
      </div>
    </PopUp>
  )
}

export default OpItemBal
