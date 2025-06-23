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
            if (btn.navigate) navigate(btn.navigate , {state:{source:"button"}});
            if (setshowSidebar) setshowSidebar(false);
          }}
          className={className}
        >
          <span className='text-red-500 mr-1'>{btn.key || ""}</span><span>{btn.name}</span>
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
