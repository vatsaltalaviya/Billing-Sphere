import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchableDropdown({
  id,
  options = [], // Default to empty array
  value,
  onChange,
  className,
  ref,
  disabled,
  addlink,
  mode,
}) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current && inputRef.current.focus();
    },
  }));

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

  const filteredOptions = Array.isArray(options)
    ? options.filter((option) => {
        const label = typeof option === "string" ? option : option?.name || "";
        return (
          typeof searchTerm === "string" &&
          label.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    : [];

  const handleSelect = (option) => {
    setShowOptions(false);
    const label = typeof option === "string" ? option : option?.name || "";
    setSearchTerm(label);
    if (onChange) {
      onChange({
        target: {
          id: id,
          value: option,
        },
      });
    }
  };

  return (
    <div ref={dropdownRef} className={className}>
      <input
        id={id}
        disabled={disabled}
        type="text"
        ref={inputRef}
        value={searchTerm}
        autoComplete="off"
        className="w-full px-2 py-1"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowOptions(true);
          onChange({
            target: {
              id: id,
              value: e.target.value,
            },
          });
        }}
        onClick={() => setShowOptions(true)}
      />
      {showOptions && (
        <ul className="absolute w-full bg-blue-50 z-50 max-h-40 overflow-y-auto">
          {Array.isArray(options) && options.length > 0 ? (
            filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="px-2 py-2 cursor-pointer hover:bg-blue-200"
                >
                  {typeof option === "string"
                    ? option
                    : mode === "sales" && option.qty
                    ? `${option.name}  Qty${option.qty}`
                    : option.name || ""}
                </li>
              ))
            ) : (
              <li className="px-2 py-2 text-gray-400">
                No match found{" "}
                {mode && mode == "item" && (
                  <Link
                    // state={{ source: "itemsPage" }}
                    className="text-blue-900 underline"
                    to={addlink}
                  >
                    click here to create
                  </Link>
                )}{" "}
              </li>
            )
          ) : (
            // <li className="px-2 py-2 border w-52 text-gray-400">No options available</li>
            ""
          )}
        </ul>
      )}
    </div>
  );
}
