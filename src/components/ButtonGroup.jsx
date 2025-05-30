import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = ({ data, className }) => {

  return (
    <>
      {data.map((btn) => (
        <button
          key={btn.name}
          onClick={() => btn.onClick ? btn.onClick() : handleClick(btn.name)}
          // className="border text-lg font-medium px-4 bg-amber-300 block w-full text-left hover:bg-amber-500"
          className={className}
        >
          <span>{btn.name}</span>
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
