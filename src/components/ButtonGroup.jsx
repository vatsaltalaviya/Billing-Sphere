import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = ({ data, className }) => {
  const navigate = useNavigate();

  return (
    <>
      {data.map((btn) => (
        <button
          key={btn.name}
          onClick={() => {btn.onClick ? btn.onClick() : handleClick(btn.name); {btn.navigate&&navigate(btn.navigate)}}}
        
          className={className}
        >
          <span>{btn.name}</span>
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
