import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <section className='bg-[#2C2C2C] flex flex-col h-screen w-full overflow-hidden -z-50'>
      <div className='flex h-full w-screen flex-col md:flex-row'>
        <div className='w-full md:w-13/6 lg:w-3/6 h-full bg-no-repeat bg-contain bg-center -z-0'>
          <img
            src='/image.png'
            alt='Login Image'
            className='h-full w-full object-contain md:object-cover'
          />
        </div>

        <div className='hidden md:block w-full md:w-1/2 h-full bg-no-repeat bg-cover -z-50 bg-center'></div>
      </div>

      <div
        className=' absolute 
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
    '
      >
        <div className='flex justify-center bg-cover overflow-hidden md:block hidden '>
          <img
            src='/Group 1171275604.svg'
            alt='Logo'
            className=' w-full h-full'
          />
        </div>

        <div className='flex flex-col  items-center justify-center p-8 w-[100%]'>
          <h2 className='text-white font-semibold text-3xl'>Hi Admin</h2>
          <p className='text-white  text-md'>
            Welcom to circle app admin panel
          </p>
          <form className='flex flex-col w-full max-w-xs mt-4'>
            <label className='text-[#BBBBBB] mb-2' htmlFor='username'>
              Email
            </label>
            <div className='flex items-center space-x-3 mb-4 bg-[#414141] p-3 rounded-full'>
              <img
                src='/ic_round-email.svg'
                alt='Email Icon'
                className='w-6 h-6'
              />
              <input
                type='text'
                id='username'
                className='flex-1 bg-transparent text-white bg-[#414141] focus:outline-none'
                placeholder='Email'
              />
            </div>

            <label className='text-[#BBBBBB] mb-2' htmlFor='password'>
              Password
            </label>

            <div className='flex items-center space-x-3 mb-4 bg-[#414141] p-3 rounded-full'>
              <img src='/solar_lock-password-bold.svg' alt='' />
              <input
                type='password'
                id='password'
                className='flex-1 bg-transparent text-white bg-[#414141] focus:outline-none'
                placeholder='Enter your password'
              />
            </div>
            <Link to='/forgotpassword'>
              <h2 className=' text-end text-white  cursor-pointer'>
                Forgot Password
              </h2>
            </Link>
            <Link to='/dashboard'>
              <button className='p-2 mt-5 w-full bg-[#FFC491] rounded-full hover:bg-[#FFC494]'>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
