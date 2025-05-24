import React, { useState } from 'react';

const DropdownGroup = ({ dropdownData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleSelect = (dropdownName, option) => {
    console.log(`Selected from ${dropdownName}: ${option}`);
    setOpenDropdown(null);
  };

  return (
    <div className="flex flex-wrap gap-2 w-full justify-center sm:justify-start">
      {dropdownData.map((dropdown) => (
        <div key={dropdown.name} className="relative inline-block text-left w-full sm:w-auto  sm:mb-0">
          <button
            onClick={() => toggleDropdown(dropdown.name)}
            className="w-full sm:w-auto px-4 py-2 bg-white font-semibold  md:border md:rounded text-sm sm:text-base"
          >
            {dropdown.label} ▾
          </button>
          {openDropdown === dropdown.name && (
            <div className="absolute left-0 mt-2 w-full sm:w-40 bg-white border rounded shadow-lg z-50">
              {dropdown.options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(dropdown.name, option)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
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