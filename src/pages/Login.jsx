import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';


const Login = () => {



  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [Password, setPassword] = useState("")
  const [PasswordShow, setPasswordShow] = useState(false)
  const [IsLoading, setIsloading] = useState(null)
  // const [User, setUser] = useState(null)
  const [invalid, setInvalid] = useState(null)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const userData ={
      email,
      password:Password
    }

    try {
      setIsloading(true)
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signIn`,userData);
      const data = response.data;
      
      if(data.success == true){
       
        setInvalid(false)
        const token = data.token
        localStorage.setItem('token',token)
        localStorage.setItem('companies',data.data.companies[0])
        localStorage.setItem('uid',data.data._id)
        setIsloading(true)
        navigate('/dashboard')
        
      }
      else{
        setInvalid(true)
        setIsloading(false)
      }
    } catch (error) {
      console.error(error)
    }
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
              {/* <TextField id="outlined-basic" className=' rounded flex-1' type="email" name="email" label="Enter your Email" variant="outlined" value={email} onChange={(e)=>setemail(e.target.value)}/> */}
              <input className=' border rounded p-2 text-xl flex-1' type="email" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className='flex flex-col md:flex-row xl:items-center mt-1'>
              <label htmlFor="password" className='w-32 text-lg md:text-xl font-semibold'>Password </label>
              <div className='relative flex-1'>
                <input className='border rounded p-2 text-xl w-full' type={PasswordShow?"text":"password"} name="password" id="password" value={Password} onChange={(e)=>setPassword(e.target.value)} /><i onClick={()=>setPasswordShow((p)=>!p)
                } className={`${PasswordShow?"ri-eye-line":"ri-eye-off-line"} absolute right-2.5 top-3 text-lg cursor-pointer transform -translate-y[50%]`}/>
              </div>
            </div>
            {invalid &&
            (<div className='flex flex-col md:flex-row xl:items-center mt-1'>
              <p className='font-semibold text-red-700 text-xl'>Invalid Email or Password </p>
            </div>)}
            <div className='flex flex-col md:flex-row items-center mt-10 md:mt-3 gap-3'>
              <button  className='border flex gap-4 items-center justify-center text-lg font-medium px-4 bg-amber-300 w-full hover:bg-amber-500 rounded py-2'> {IsLoading &&  <BeatLoader size={5}  color='#fff'/>}Login</button>
              <button type='reset' className='border text-lg font-medium px-4 bg-amber-300 block w-full hover:bg-amber-500 rounded py-2'>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
