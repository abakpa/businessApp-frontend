import { useState } from "react";

const Select = ({ options, value, onChange, label, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    onChange({
      target: {
        name: name,
        value: selectedValue
      }
    });
    setIsOpen(false);
  };

  return (
    <div className="relative mb-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {label.includes('Industry') && <span className="text-red-500">*</span>}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 flex justify-between items-center w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left text-sm"
      >
        <span>{value || "Select an option"}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20 mt-1 max-h-48 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;