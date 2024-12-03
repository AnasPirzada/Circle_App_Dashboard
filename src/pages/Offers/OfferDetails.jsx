import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const OfferDetails = () => {
  const { id } = useParams(); // Retrieve the offer id from the URL
  const location = useLocation(); // Use location to access state
  const offer = location.state?.offer; // Access the passed offer from state

  console.log(offer); // Log the offer data to verify

  // If the offer is not found in state, show a fallback
  if (!offer) {
    return <p>Offer not found!</p>;
  }

  return (
    <div className='w-full mx-auto my-4 p-2 md:p-6 bg-[#2E2E2E] text-[#FFFFFF] rounded-lg shadow-lg '>
      <Link
        to='/dashboard/Offers/Active'
        className='text-[#FFC491] flex items-center mb-4'
      >
        <span className='text-4xl flex items-center'>
          <img src='/back_arrow.svg' className='me-3' alt='' />
          Back to Offers
        </span>
      </Link>

      <div className='text-center mt-4'>
        <img
          src={offer.imageUrls[0] || 'default-placeholder.png'}
          alt='Main'
          className='w-full h-[520px] bg-center object-cover rounded-lg mb-4'
        />
      </div>
      <div className='mx-auto gap-3 flex justify-center items-center'>
        {offer.imageUrls
          ?.slice(1)
          .map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Additional ${index + 1}`}
              className='w-[158px] h-[158px] object-cover rounded-lg'
            />
          )) || <p>No additional images available</p>}{' '}
        {/* Fallback */}
      </div>

      <div className=' pt-4'>
        <p className='text-[#FFFFFF] text-lg font-bold'>Details</p>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Title</p>
          <p className='text-lg font-semibold'>{offer.title}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Description</p>
          <p className='text-lg'>{offer.description}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Offer for</p>
          <p className='text-lg font-semibold'>{offer.numberOfPeople}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Date</p>
          <p className='text-lg font-semibold'>{offer.startingDate}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Interest</p>
          <p className='text-lg font-semibold'>{offer.interest}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Total Price</p>
          <p className='text-lg font-semibold'>{offer.price}</p>
        </div>
      </div>

      <div className='mt-6'>
        <p className='text-[#FFFFFF] text-lg font-bold'>
          People Buying ({offer.buyers?.length || 0})
        </p>
        <div className='flex flex-wrap gap-4 mt-2 md:space-x-4'>
          {offer.buyers?.map((buyer, index) => (
            <div
              key={buyer.id || index}
              className='flex flex-col md:flex-row items-center justify-center md:justify-normal'
            >
              <img
                src={buyer.profilePicture || '/default-avatar.png'} // Use profilePicture for avatar
                alt={buyer.name || 'Anonymous'}
                className='w-12 h-12 rounded-full object-cover border-2 border-[#4F4F4F]'
              />
              <p className='text-sm mt-2 md:mt-0 mx-2 text-[#FFFFFF]'>
                {buyer.name || 'Anonymous'} {/* Display the name */}
              </p>
            </div>
          )) || <p>No buyers yet</p>}
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
