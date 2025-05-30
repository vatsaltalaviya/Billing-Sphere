import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/dashboard')
  }
  return (
    <div className="flex md:items-center h-screen md:justify-center relative">
      <div className="md:rounded w-full md:w-xl overflow-hidden bg-white md:border">
        <div className="bg-blue-700 flex items-center justify-center py-1">
          <h1 className='text-xl font-semibold text-white'>Billing Sphere</h1>
        </div>
        <form method='post' onSubmit={handleSubmit} className='flex gap-3'>
          <div className='hidden md:block'>
            <img src="https://img.freepik.com/free-vector/locker_53876-25496.jpg?ga=GA1.1.182845382.1747206352&semt=ais_hybrid&w=740" alt="" className='w-46'/>
          </div>
          <div className='px-2 py-2 w-full'>
            <div className='flex flex-col md:flex-row xl:items-center mt-1'>
              <label htmlFor="email" className='w-32 text-lg md:text-xl font-semibold'>Email </label>
              <input className=' border rounded p-2 text-xl flex-1' type="email" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className='flex flex-col md:flex-row xl:items-center mt-1'>
              <label htmlFor="password" className='w-32 text-lg md:text-xl font-semibold'>Password </label>
              <input className='border rounded p-2 text-xl flex-1' type="password" name="password" id="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='flex flex-col md:flex-row items-center mt-10 md:mt-3 gap-3'>
              <button  className='border text-lg font-medium px-4 bg-amber-300 block w-full hover:bg-amber-500 rounded py-2'>Login</button>
              <button type='reset' className='border text-lg font-medium px-4 bg-amber-300 block w-full hover:bg-amber-500 rounded py-2'>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
