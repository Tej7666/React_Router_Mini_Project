import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {Link, useNavigate} from "react-router-dom"

const LoginForm = ({setIsLoggedIn}) => {

    const [formData, setFromData] = useState({
        email:"", password:""
    })

const[showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

function changeHandler (event) {
    setFromData ((prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}
    function submitHandler (event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log(formData)
        navigate("/dashboard")
    }

  return (
    <div>
        <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input
                required
                type='text'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input
                required
                type={showPassword ? ("text"):("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]'
                />

                <span
                className='absolute right-3 cursor-pointer top-[38px]'
                onClick={() => setShowPassword ((prev) => !prev)}>
                    {showPassword ?

                     (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                      (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to='#'>
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto '>Forgot Password</p>
                </Link>
            </label>
            <button className='bg-yellow-50 text-richblack-900 font-medium
             rounded-[8px] px-[12px] py-[5px] mt-6'>
                Sign In
            </button>
        </form>
    </div>
  )
}

export default LoginForm