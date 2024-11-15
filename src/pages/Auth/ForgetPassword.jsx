import React from 'react'
import { Link } from 'react-router-dom';
function ForgetPassword() {
  return (
    <>
      <section className="bg-[#2C2C2C] flex flex-col h-screen w-full overflow-hidden -z-50">
        <div className="flex h-full w-screen flex-col md:flex-row">
          <div className="w-full   md:w-13/6 lg:w-3/6 h-full bg-no-repeat bg-contain bg-center -z-0">
            <img
              src="/image.png"
              alt="Login Image"
              className="h-full w-full object-contain md:object-cover"
            />
          </div>

          <div className="hidden md:block w-full md:w-1/2 h-full bg-no-repeat bg-cover -z-50 bg-center">
            {/* Background image or content for larger screens */}
          </div>
        </div>

        <div
          className=" absolute 
    top-1/2 
    left-1/2 
    transform 
    -translate-x-1/2 
    -translate-y-1/2 
    flex 
    z-50 
    p-4 
    bg-[#444444] 
    rounded-3xl 
    shadow-lg 
    space-x-0 
    max-h-[90vh] 
    w-11/12 
    sm:w-11/12 
    md:w-10/12 
    lg:w-9/12 
    xl:w-8/12 
    "
        >
          <div className="flex justify-center bg-cover overflow-hidden md:block hidden ">
            <img
              src="/Group 1171275606.svg"
              alt="Logo"
              className=" w-full h-full"
            />
          </div>

          <div className="flex flex-col  items-center justify-center p-8 w-[100%]">
            <Link to="/">
              <div className=" flex gap-2 justify-center items-center m-4 cursor-pointer">
                <img src="/Vector.svg" alt="icon" className=" h-4 w-4" />
                <p className="text-[#FFC491] font-normal text-base">
                  Back to login
                </p>
              </div>
            </Link>
            <h2 className="text-white font-semibold text-3xl">
              Reset Your Password
            </h2>
            <p className="text-white text-center  text-md">
              Enter your email and we'll send you a link to reset your password.
            </p>
            <form className="flex flex-col w-full max-w-xs mt-4">
              <label className="text-[#BBBBBB] mb-2" htmlFor="username">
                Email
              </label>
              <div className="flex items-center space-x-3 bg-[#414141] p-3 rounded-full">
                <img
                  src="/ic_round-email.svg"
                  alt="Email Icon"
                  className="w-6 h-6"
                />
                <input
                  type="text"
                  id="username"
                  className="flex-1 bg-transparent text-white bg-[#414141] focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <Link to="/otp">
                <button
                  type="submit"
                  className="p-2 mt-5 bg-[#FFC491] flex justify-center items-center w-full rounded-full hover:bg-[#FFC494]"
                >
                  Next
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword
