import React, { useEffect, useState } from 'react';
import { userApi } from '../../apis/index.jsx';

const Complete = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchActiveOffers = async () => {
    try {
      const response = await userApi.GetCompleteOffers();
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
    <div>
      <div className='w-full mx-auto my-4 space-y-4'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0'>
          <p className='text-[#FFC491] text-lg font-normal'>Offers Active</p>
          <button className='flex items-center justify-center text-[#FFC491] text-lg font-normal border-[#FFC491] border rounded-full px-4 py-2'>
            <img src='/plus.svg' alt='' className='w-4 h-4 mr-2' />
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
                        <div className='flex justify-between items-center'>
                          <div className='flex flex-col '>
                            <div className=''>
                              <p className='font-semibold mb-1 text-lg text-[#9C9C9C]'>
                                Images
                              </p>
                            </div>
                            <div className='flex mt-3 flex-wrap'>
                              {offer.imageUrls?.map((imageUrl, index) => (
                                <img
                                  key={index}
                                  src={imageUrl || '/default-placeholder.png'}
                                  alt={`Image ${index + 1}`}
                                  className='w-[60px] h-[60px] rounded-lg mx-1 object-cover bg-center'
                                />
                              ))}
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
                                    src={
                                      buyer.profilePicture ||
                                      '/default-avatar.png'
                                    } // Use profilePicture for avatar
                                    alt={buyer.name || 'Anonymous'}
                                    className='w-[60px] h-[60px] rounded-lg object-cover border-2 border-[#4F4F4F]'
                                  />
                                </div>
                              )) || <p>No buyers yet</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className='bg-[#414141] border-1' />
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
      </div>
    </div>
  );
};
export default Complete;
