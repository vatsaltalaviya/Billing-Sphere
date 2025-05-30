import React, { useEffect, useRef, useState } from 'react';

const DropdownGroup = ({ dropdownData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => (prev === name ? null : name));
    setOpenSubmenu(null);
  };

  const handleSelect = (group, option) => {
    console.log(`Selected from ${group}: ${option}`);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-wrap w-full justify-center sm:justify-start">
      {dropdownData.map((dropdown) => (
        <div key={dropdown.name} className="relative inline-block text-left w-full sm:w-auto  sm:mb-0">
          <button
            onClick={() => toggleDropdown(dropdown.name)}
            className="px-4 py-2 bg-white border w-full text-sm font-semibold"
          >
            {dropdown.name} ▾
          </button>

          {openDropdown === dropdown.name && (
            <div className='flex'>
            <div className="absolute text-sm tracking-tighter left-0 mt-2 bg-white border rounded shadow z-50 w-60 table-data">
              {/* Check for groups (nested) or flat options */}
              {dropdown.options ? (
                dropdown.options.map((option, gIdx) => (
                  <div key={gIdx} className="relative group">
                    <div
                      onMouseEnter={() => setOpenSubmenu(option.name)  }
                      // onClick={() => setOpenDropdown(option.name)}
                    
                      className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-sm font-medium flex justify-between items-center"
                    >
                      {option.name} 
                      {option.submenu && (
                        <span className="text-xs text-gray-500">▸</span>
                      )}
                    </div>
                    {openSubmenu === option.name && option.submenu && (
                      <div className="absolute left-full top-0 mt-0 bg-white border rounded shadow z-50 max-h-[30vh] overflow-y-auto table-data w-60">
                        {option.submenu.map((subOpt, sIdx) => (
                          <div
                            key={subOpt.name}
                            onClick={() => handleSelect(dropdown.name, subOpt)}
                            className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                          >
                            {subOpt.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  
                ))
              ) : (
                dropdown.options.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelect(dropdown.name, opt)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {opt}
                  </div>
                ))
              )}
            </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownGroup;
