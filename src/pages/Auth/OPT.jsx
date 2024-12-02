import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';
function OPT() {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();
  console.log('otp', otp, email);

  const handleVerifyOtp = async e => {
    e.preventDefault();
    try {
      const response = await userApi.OtpverifyApi({ email, otp });
      console.log('Login response:', response);
      if (response.status === true) {
        navigate('/createpassword', { state: { email } });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <section className='bg-[#2C2C2C] flex flex-col h-screen w-full overflow-hidden -z-50'>
        <div className='flex h-full w-screen flex-col md:flex-row'>
          <div className='w-full   md:w-13/6 lg:w-3/6 h-full bg-no-repeat bg-contain bg-center -z-0'>
            <img
              src='/image.png'
              alt='Login Image'
              className='h-full w-full object-contain md:object-cover'
            />
          </div>

          <div className='hidden md:block w-full md:w-1/2 h-full bg-no-repeat bg-cover -z-50 bg-center'>
            {/* Background image or content for larger screens */}
          </div>
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
              src='/Group 1171275607.svg'
              alt='Logo'
              className=' w-full h-full'
            />
          </div>

          <div className='flex flex-col  items-center justify-center p-8 w-[100%]'>
            <Link to='/'>
              <div className=' flex gap-2 justify-center items-center m-4 cursor-pointer'>
                <img src='/Vector.svg' alt='icon' className=' h-4 w-4' />
                <p className='text-[#FFC491] font-normal text-base'>
                  Back to login
                </p>
              </div>
            </Link>
            <h2 className='text-white font-semibold text-3xl'>Enter OTP</h2>
            <p className='text-white text-center  text-md'>
              Enter 4 digit code that has been sent to your mobile Number.
            </p>
            <form className='flex flex-col w-full max-w-xs mt-4'>
              <div className='w-full flex justify-center'>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  containerStyle='flex justify-center space-x-4 mb-8 w-full'
                  renderInput={props => (
                    <input
                      {...props}
                      style={{
                        backgroundColor: '#414141',
                        borderRadius: '8px',
                        border: '1px solid #828387',
                        width: '50px',
                        height: '50px',
                        fontWeight: '600',
                        textAlign: 'center',
                        fontSize: '18px',
                        color: '#FFFFFF',

                        margin: '6px',
                        boxShadow: '0px 4px 12px 0px #0000001A',
                      }}
                    />
                  )}
                />
              </div>

              <button
                type='submit'
                onClick={handleVerifyOtp}
                className='p-2 mt-5 bg-[#FFC491] flex justify-center items-center w-full rounded-full hover:bg-[#FFC494]'
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default OPT;
