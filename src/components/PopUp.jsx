import React from 'react';

const PopUp = ({ show, onClose, children, title }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] max-w-[90vw] relative">
        {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
