import React, { useState } from 'react';

const DropdownGroup = ({dropdownData}) => {
  const [openDropdown, setOpenDropdown] = useState(null); // tracks which dropdown is open

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleSelect = (dropdownName, option) => {
    console.log(`Selected from ${dropdownName}: ${option}`);
    setOpenDropdown(null); // close dropdown after selection
  };

 

  return (
    <div className="flex">
      {dropdownData.map((dropdown) => (
        <div key={dropdown.name} className="relative inline-block text-left">
          <button
            onClick={() => toggleDropdown(dropdown.name)}
            className="px-4 py-2 bg-white font-semibold rounded border"
          >
            {dropdown.label} ▾
          </button>

          
         {openDropdown === dropdown.name && (
            <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-50">
                {dropdown.options.map((option) => (
                <div
                    key={option}
                    onClick={() => handleSelect(dropdown.name, option)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    {option}
                </div>
                ))}
            </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default DropdownGroup;
