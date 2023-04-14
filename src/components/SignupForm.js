import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFromData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFromData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Do not match...!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType
    }
    console.log(finalData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 gap-x-1 my-1 rounded-full max-w-max p-1">
        <button 
        className={`${accountType === "student" 
        ?
        "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-1 px-3 rounded-full 
        transition-all duration-200`}
        onClick={() => setAccountType("student")}>
            Student
        </button>
        <button
        className={`${accountType === "instructor" 
        ?
        "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-1 px-3 rounded-full 
        transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>
            Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-[10px]">
          <label className="w-full">
            <p className="text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
            />
          </label>

          <label className="w-full">
            <p className="text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px]"
            />
          </label>
        </div>

        <div className="mt-[10px]">
            <label >
            <p className="text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                className="bg-richblack-800 rounded-[8px] text-richblack-5 w-full p-[8px]"
            />
            </label>
        </div>

        <div className="flex gap-x-4 mt-[10px]">
          <label className="w-full relative">
            <p className="text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[8px] text-richblack-5 w-full p-[8px]"
            />
            <span
              className="absolute right-3 cursor-pointer top-[35px]"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0-875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPasswordC ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[8px] text-richblack-5 w-full p-[8px]"
            />
            <span
              className="absolute right-3 cursor-pointer top-[35px]"
              onClick={() => setShowPasswordC((prev) => !prev)}
            >
              {showPasswordC ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className='bg-yellow-50 text-richblack-900 font-medium
             rounded-[8px] px-[12px] py-[5px] mt-6 w-full'>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
