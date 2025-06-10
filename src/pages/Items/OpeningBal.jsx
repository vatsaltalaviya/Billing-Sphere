import React, { useState } from 'react';
import PopUp from '../../components/PopUp';
import SearchableDropdown from '../../components/SearchableDropdown';

const OpeningBal = ({ onClose ,onSave}) => {
  const [OpeningBalance, setOpeningBalance] = useState([
    { qty: '', unit1: '', rate: '', unit2: '', total: '' }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...OpeningBalance];
    updated[index][field] = value;

    if (field === 'qty' || field === 'rate') {
    const qty = parseFloat(updated[index].qty) || 0;
    const rate = parseFloat(updated[index].rate) || 0;
    updated[index].total = (qty * rate).toFixed(2); // 2 decimal places
  }

    setOpeningBalance(updated);

    // Add new row only when the last column 'total' of the last row is filled
    const isLastRow = index === OpeningBalance.length - 1;
    if (isLastRow && updated[index].total !== '') {
      setOpeningBalance([...updated, { sr: '', qty: '', unit1: '', rate: '', unit2: '', total: '' }]);
    }
  };


  const handleSave=(e)=>{
    e.preventDefault();
    const Data = OpeningBalance.filter(row => row.unit1 || row.qty || row.rate || row.total)
    onSave(Data)
    
  }
  const unitOptions = ["Kg", "Box", "Ltr", "Piece"];
  
  return (
    <PopUp onClose={onClose}>
      <div className="border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="text-white font-semibold">Opening Stock Quantity</h1>
        </div>
        <form encType='multipart/form-data' onSubmit={handleSave}>
          <div className="flex flex-col px-2">
            <div className="border min-h-[40vh] overflow-auto teble-data">
              <table className="table-auto w-full border border-b-0 border-black text-xs md:text-sm xl:text-[16.5px]">
                <thead>
                  <tr>
                    <th className="text-purple-600 font-medium text-xl px-2 py-1 border border-black text-center">Sr</th>
                    <th className="text-purple-600 font-medium text-xl px-2 py-1 border border-black text-center w-52">Qty</th>
                    <th className="text-purple-600 font-medium text-xl px-2 py-1 border border-black text-center w-32">Unit</th>
                    <th className="text-purple-600 font-medium text-xl px-2 py-1 border border-black text-right w-52">Rate</th>
                    <th className="text-purple-600 font-medium text-xl px-2 py-1 border border-black text-center w-32">Unit</th>
                    <th className="text-purple-600 font-medium text-xl px-2 py-1 border border-black text-right w-52">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {OpeningBalance.map((row, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1 text-center">
                        {index + 1}
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          value={row.qty}
                          onChange={(e) => handleChange(index, 'qty', e.target.value)}
                          className="px-2 py-1 w-full h-full"
                        />
                      </td>
                      <td className="border">
                        <SearchableDropdown
                          className="px-2 py-1 w-full h-full"
                          options={unitOptions}
                          value={row.unit1}
                          onChange={(e) => handleChange(index, 'unit1', e.target.value)}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          value={row.rate}
                          onChange={(e) => handleChange(index, 'rate', e.target.value)}
                          className="px-2 py-1 w-full h-full text-right"
                        />
                      </td>
                      <td className="border">
                        <SearchableDropdown
                          className="px-2 py-1 w-full h-full"
                          options={unitOptions}
                          value={row.unit2}
                          onChange={(e) => handleChange(index, 'unit2', e.target.value)}
                        />
                      </td>
                      <td className="border">
                        <input
                          type="text"
                          value={row.total}
                          onChange={(e) => handleChange(index, 'total', e.target.value)}
                          className="px-2 py-1 w-full h-full text-right"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col px-2 py-3 md:flex-row gap-2 items-center">
              <button type="submit" className="px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </PopUp>
  );
};

export default OpeningBal;
