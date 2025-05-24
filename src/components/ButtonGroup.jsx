import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = ({ data, className }) => {
  const navigate = useNavigate();

  const sanitizeLabel = (label) =>
    label.toLowerCase().replace(/[\s./\\]/g, '');

  const handleClick = (label) => {
    const path = `${sanitizeLabel(label)}`;
    navigate(path);
  };

  return (
    <>
      {data.map((btn) => (
        <button
          key={btn}
          onClick={() => handleClick(btn)}
          // className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
          className={className}
        >
          
          <span>{btn}</span>
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
