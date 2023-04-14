import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav >
            <ul className='text-richblack-100 text-lg flex gap-x-6' >
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact Us</Link>
                </li>
            </ul>
        </nav>


        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700'>
                        Log In
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700'
                     onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>
                        Log Out
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar