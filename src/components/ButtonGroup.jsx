import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = ({ data, className , setshowSidebar}) => {
  const navigate = useNavigate();

  return (
    <>
      {data.map((btn) => (
        <button
          key={btn.name}
          onClick={() => {
            if (btn.onClick) btn.onClick();
            if (btn.navigate) navigate(btn.navigate);
            if (setshowSidebar) setshowSidebar(false);
          }}
          className={className}
        >
          <span>{btn.name}</span>
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
