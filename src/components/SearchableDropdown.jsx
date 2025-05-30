import { useEffect, useRef, useState } from "react";

export default function SearchableDropdown({
  id,
  options,
  value,
  onChange,
  className,
}) {
 

  const dropdownOptions = options && Array.isArray(options) ? options : "";

  const [searchTerm, setSearchTerm] = useState(value || "");
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const label = typeof value === "string" ? value : value?.name || "";
  setSearchTerm(label);
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

  const filteredOptions = dropdownOptions?.filter((option) => {
    // check if option is a string or an object
    const label = typeof option === "string" ? option : option.name || "";
    return (
      typeof searchTerm === "string" &&
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSelect = (option) => {
    setShowOptions(false);
    const label = typeof option === "string" ? option : option.name || "";
    setSearchTerm(label); // update input value
    if (onChange) {
      // const label = typeof option === "string" ? option : option.name || "";
      onChange({
        target: {
          id: id,
          value: label,
        },
      }); // Pass only the label, not an event-like object
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
               // Pass only the value, not an event-like object
            }
          }}
          onClick={() => setShowOptions(true)}
        />
        {showOptions && (
          <ul
            className={`absolute w-full bg-white table-data z-10 max-h-40 overflow-y-auto rounded shadow`}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-2 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {typeof option === "string" ? option : option.name}
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
