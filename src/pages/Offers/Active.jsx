import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userApi } from '../../apis/index.jsx';
import ModalContent from '../../components/ModalContent.jsx'; // Import the new modal content component

const Active = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchActiveOffers = async () => {
    try {
      const response = await userApi.GetActiveOffers();
      console.log(response);

      setOffers(response.offers || []);
    } catch (error) {
      console.error('Error fetching active offers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveOffers();
  }, []);
  const formatDate = dateString => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(
      new Date(dateString)
    );
  };

  return (
    <div className='w-full mx-auto my-4 space-y-4'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <p className='text-[#FFC491] text-lg font-normal'>Offers Active</p>
        <button
          onClick={() => setIsOpen(true)}
          className='flex items-center text-[#FFC491] border-[#FFC491] border rounded-full px-4 py-2'
        >
          <img src='/plus.svg' alt='Create' className='w-4 h-4 mr-2' />
          Create new Offers
        </button>
      </div>

      <div>
        {isLoading ? (
          // Skeleton loading placeholder
          Array.from({ length: 6 }).map((_, index) => (
            <>
              <div key={index} className='p-4 border rounded shadow'>
                {/* Image Skeleton */}
                <div className='w-full h-48 bg-gray-200 rounded animate-pulse'></div>

                {/* Title Skeleton */}
                <div className='h-4 bg-gray-200 rounded mt-4 w-3/4 animate-pulse'></div>

                {/* Description Skeleton */}
                <div className='h-3 bg-gray-200 rounded mt-2 w-full animate-pulse'></div>

                {/* Price Skeleton */}
                <div className='h-4 bg-gray-200 rounded mt-4 w-1/2 animate-pulse'></div>

                {/* Interest Skeleton */}
                <div className='h-3 bg-gray-200 rounded mt-2 w-1/3 animate-pulse'></div>

                {/* Date Range Skeleton */}
                <div className='h-3 bg-gray-200 rounded mt-2 w-3/5 animate-pulse'></div>
              </div>
            </>
          ))
        ) : offers.length > 0 ? (
          <>
            {offers.map(offer => (
              <>
                <div key={offer.id} className='my-10'>
                  <Link to={`/dashboard/offers/${offer._id}`} state={{ offer }}>
                    <div className='bg-[#414141] mb-3 text-[#FFFFFF] p-6 rounded-lg shadow-lg space-y-4 md:flex md:justify-between md:items-start'>
                      <div className='w-full'>
                        <div className='flex justify-between items-center'>
                          <div>
                            <h2 className='text-xl font-semibold mb-2'>
                              {offer.title}
                            </h2>
                          </div>
                          <div className='text-end'>
                            <p className='text-lg font-bold text-[#9C9C9C]'>
                              Total Price:{' '}
                              <span className='text-[#FFFFFF]'>
                                $ {offer.price}
                              </span>
                            </p>
                            <p className='text-lg text-[#FFFFFF]'>
                              {formatDate(offer.startingDate)}
                            </p>
                          </div>
                        </div>
                        <p className='text-sm mb-4'>
                          <span className='font-semibold text-lg'>
                            Description
                          </span>
                          <br />
                          <span className='text-[#9C9C9C] text-sm'>
                            {offer.description}
                          </span>
                        </p>
                        <div className='flex items-center text-sm mb-2'>
                          <span className='mr-2 text-sm text-[#9C9C9C]'>
                            Offer for{' '}
                            <span className='font-bold text-[#FFFFFF]'>
                              {offer.numberOfPeople}
                            </span>
                          </span>
                          <span className='text-[#9C9C9C]'>
                            Interest{' '}
                            <span className='font-bold text-[#FFFFFF]'>
                              {offer.interest}
                            </span>
                          </span>
                        </div>
                        <div className='mt-2'>
                          <p className='font-semibold mb-1 text-lg text-[#9C9C9C]'>
                            Images
                          </p>
                        </div>
                        <div className='flex flex-wrap '>
                          {offer.imageUrls?.map((imageUrl, index) => (
                            <img
                              key={index}
                              src={imageUrl || '/default-placeholder.png'}
                              alt={`Image ${index + 1}`}
                              className='w-[60px] h-[60px] mx-1 rounded-lg object-cover bg-center'
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <hr className='bg-[#414141] border-1' />
                  </Link>
                </div>
              </>
            ))}
          </>
        ) : (
          // Show no offers available message
          <p className='text-center text-gray-500'>
            No active offers available
          </p>
        )}
      </div>

      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Active;
