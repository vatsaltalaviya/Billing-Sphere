import { useEffect, useRef, useState } from "react";

export default function SearchableDropdown({id, options, value, onChange ,className}) {
  // Use dummy data if options prop is not provide
  // console.log(options);
  
  const dropdownOptions = options && Array.isArray(options) ? options : '';

  

  const [searchTerm, setSearchTerm] = useState(value || "");
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSearchTerm(value || "");
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = dropdownOptions?.filter((option) =>
  {
    const label = typeof option === "string" ? option : option.name || "";
    return label.toLowerCase().includes(searchTerm.toLowerCase());
  }
  );

  const handleSelect = (option) => {
    setShowOptions(false);
    const label = typeof option === "string" ? option : option.name || "";
    if (onChange){
       onChange({
      target: {
        id: id,
        value: label
      }
    });
    }
  };

  return (
   <>
    <div ref={dropdownRef} className="w-full relative">
      <input
      id={id}
        type="text"
        value={searchTerm}
        className={className}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowOptions(true);
          if (onChange) {
      onChange({
        target: {
          id: id,
          value: e.target.value,
        },
      });
    }
        }}
        onClick={() => setShowOptions(true)}
        // className="w-full p-2 border  focus:outline-none focus:ring focus:border-blue-400"
      />
      {showOptions && (
        <ul className={`absolute w-full bg-white table-data z-10 max-h-40 overflow-y-auto rounded shadow`}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option.name)}
                className="px-2 py-2 cursor-pointer hover:bg-blue-100"
              >
                {option.name}
              </li>
            ))
          ) : (
            <li className="px-2 py-2 text-gray-400">No results</li>
          )}
        </ul>
      )}
    </div>
   </>
  );
}
