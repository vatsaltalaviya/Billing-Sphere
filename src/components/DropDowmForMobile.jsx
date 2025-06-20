import React from "react";
import { dropdownData } from "../assets/Dropdown";
import { useNavigate } from "react-router-dom";

const DropDowmForMobile = ({handleLogOut}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 fixed right-4 pt-20 z-50 h-screen w-full overflow-y-auto">
      {dropdownData.map((dropdown, idx) => (
        <details
          key={idx}
          className="list-none bg-gray-100 cursor-pointer font-medium text-lg"
        >
          <summary className="py-4 w-full bg-white font-semibold text-xl px-4 ">
            {dropdown.name}
          </summary>
          <ul className="list-none pl-5 m-0">
            {dropdown.options &&
              dropdown.options.map((option, index) =>
                option.submenu ? (
                  <details
                    key={index}
                    className="w-full list-none font-medium text-lgs"
                  >
                    <summary className="py-1 px-5 hover:bg-gray-200 cursor-pointer">
                      {option.name} <span className="pl-2">▸</span>
                    </summary>
                    <ul className="list-none pl-5 m-0">
                      {option.submenu.map((subOption, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-1 px-5 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {option.navigate && navigate(option.navigate)}}
                        >
                          {subOption.name}
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <li
                    key={index}
                    className="py-1 px-5 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {option.navigate && navigate(option.navigate)}}
                  >
                    {option.name}
                  </li>
                )
              )}
          </ul>
        </details>
      ))}
      <div className="px-4 my-10">
        <button
          className=" py-1 bg-white font-semibold text-xl rounded"
          onClick={() => {
           handleLogOut()
          }}
        >
          Logout<i className="ri-logout-circle-r-line"></i>
        </button>
      </div>
    </div>
  );
};

export default DropDowmForMobile;
