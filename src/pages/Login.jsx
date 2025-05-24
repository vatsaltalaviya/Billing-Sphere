import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-screen justify-center relative">
    <div className="border bg-white">
      <h1 className="bg-blue-600 text-white font-semibold py-1 text-center">
        Billing Sphere Login
      </h1>
      <div className="flex border">
        <div className="w-1/3 p-5">
          <img
            src="https://cdn-icons-png.freepik.com/256/1073/1073162.png?ga=GA1.1.182845382.1747206352&semt=ais_hybrid"
            alt=""
            className="w-32"
          />
        </div>
        <form className="w-2/3 flex flex-col px-2 py-1.5 font-bold select-none">
          <div className="w-full flex justify-between px-3 py-3">
            <label>UserName</label>
            <input type="text" className="outline border w-52 px-2 py-1.5" />
          </div>
          <div className="w-full flex justify-between px-3 py-3">
            <label>Password</label>
            <input type="password" className="outline border w-52 px-2 py-1.5" />
          </div>
          <div className="flex gap-3 px-3 py-2">
            <button
              onClick={()=>navigate('/dashboard')}
              type="button"
              className="px-6 py-1 border-2 border-amber-500 bg-amber-200 w-auto"
            >
              Login
            </button>
            <button
              type="button"
              // onClick={onClose}
              className="px-6 py-1 border-2 border-amber-500 bg-amber-200 w-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
