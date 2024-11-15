import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalContent from '../../components/ModalContent.jsx'; // Import the new modal content component

const Active = () => {
  const [isOpen, setIsOpen] = useState(false);

  const offers = [
    {
      id: 1,
      title: 'Early Bird Offer',
      description:
        'Lorem ipsum dolor sit amet consectetur. Eget aliquam suspendisse ultrices a mattis vitae. Adipiscing id vestibulum ultrices lorem. Nibh dignissim bibendum aAdipi.',
      offerFor: '5 People',
      interest: 'Music',
      images: [
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      totalPrice: '$2500',
      date: '10/07/2024',
    },
    {
      id: 2,
      title: 'Weekend Special',
      description:
        'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
      offerFor: '3 People',
      interest: 'Adventure',
      images: [
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      totalPrice: '$1800',
      date: '15/08/2024',
    },
    // Add more offers as needed
  ];

  return (
    <div className='w-full mx-auto my-4 space-y-4'>
      <div className='flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0'>
        <p className='text-[#FFC491] text-lg font-normal'>Offers Active</p>
        <button
          onClick={() => setIsOpen(true)}
          type='button'
          className='flex items-center justify-center text-[#FFC491] text-lg font-normal border-[#FFC491] border rounded-full px-4 py-2'
        >
          <img src='/plus.svg' alt='' className='w-4 h-4 mr-2' />
          Create new Offers
        </button>
      </div>

      {offers.map(offer => (
        <div key={offer.id}>
          <Link to={`/dashboard/Offers/${offer.id}`}>
            <div className='bg-[#414141] text-[#FFFFFF] p-6 rounded-lg shadow-lg space-y-4 md:flex md:justify-between md:items-start'>
              <div className='md:w-2/3'>
                <h2 className='text-xl font-semibold mb-2'>{offer.title}</h2>
                <p className='text-sm mb-4'>
                  <span className='font-semibold text-lg'>Description</span>
                  <br />
                  <span className='text-[#9C9C9C] text-sm'>
                    {offer.description}
                  </span>
                </p>
                <div className='flex items-center text-sm mb-2'>
                  <span className='mr-2 text-sm text-[#9C9C9C]'>
                    Offer for{' '}
                    <span className='font-bold text-[#FFFFFF]'>
                      {offer.offerFor}
                    </span>
                  </span>
                  <span>
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
                  <div className='flex flex-wrap gap-2'>
                    {offer.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`img${imgIndex + 1}`}
                        className='w-10 h-10 rounded-full object-cover bg-center'
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-4 md:mt-0 md:w-1/3 text-right'>
                <p className='text-lg font-bold text-[#9C9C9C]'>
                  Total Price: {offer.totalPrice}
                </p>
                <p className='text-sm text-[#FFFFFF]'>{offer.date}</p>
              </div>
            </div>
          </Link>
          <hr className='bg-[#414141] border-1' />
        </div>
      ))}
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Active;
