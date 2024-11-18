import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OfferDetails = () => {
  const { id } = useParams(); // Retrieve the offer id from the URL
  const offers = [
    {
      id: 1,
      title: 'Early Bird Offer',
      description:
        'Lorem ipsum dolor sit amet consectetur. Eget aliquam suspendisse ultrices a mattis vitae. Adipiscing id vestibulum ultrices lorem. Nibh dignissim bibendum aAdipi.',
      offerFor: '10 People',
      interest: 'Music',
      images: [
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // Add additional image URLs here
      ],
      totalPrice: '2500$',
      date: '23/12/2024',
      peopleBuying: [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
        'https://randomuser.me/api/portraits/women/3.jpg',
        'https://randomuser.me/api/portraits/men/4.jpg',
        'https://randomuser.me/api/portraits/women/5.jpg',
      ],
    },
    {
      id: 2,
      title: 'Early Bird Offer',
      description:
        'Lorem ipsum dolor sit amet consectetur. Eget aliquam suspendisse ultrices a mattis vitae. Adipiscing id vestibulum ultrices lorem. Nibh dignissim bibendum aAdipi.',
      offerFor: '10 People',
      interest: 'Music',
      images: [
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // Add additional image URLs here
      ],
      totalPrice: '2500$',
      date: '23/12/2024',
      peopleBuying: [
        {
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          name: 'Alice',
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          name: 'Bob',
        },
        {
          avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
          name: 'Charlie',
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
          name: 'David',
        },
        {
          avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
          name: 'Eve',
        },
      ],
    },
    // Add more offers as needed
  ];

  // Find the offer that matches the `id` from the URL
  const offer = offers.find(offer => offer.id === parseInt(id));

  if (!offer) {
    return <p>Offer not found!</p>; // Handle the case where the offer doesn't exist
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
          src={offer.images[0]}
          alt='Main'
          className='w-full h-[520px] bg-center object-cover rounded-lg mb-4'
        />
      </div>
      <div className='mx-auto gap-3 flex justify-center items-center'>
        {offer.images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Additional ${index + 1}`}
            className='w-[158px] h-[158px] object-cover rounded-lg'
          />
        ))}
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
          <p className='text-lg font-semibold'>{offer.offerFor}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Date</p>
          <p className='text-lg font-semibold'>{offer.date}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Interest</p>
          <p className='text-lg font-semibold'>{offer.interest}</p>
        </div>

        <div className='border-b border-[#4F4F4F] py-3'>
          <p className='text-sm text-[#BBBBBB]'>Total Price</p>
          <p className='text-lg font-semibold'>{offer.totalPrice}</p>
        </div>
      </div>

      <div className='mt-6'>
        <p className='text-[#FFFFFF] text-lg font-bold'>
          Peoples buy ({offer.peopleBuying.length})
        </p>
        <div className='flex flex-wrap gap-4 mt-2 md:space-x-4'>
          {offer.peopleBuying.map((person, index) => (
            <div
              key={index}
              className='flex flex-col md:flex-row items-center justify-center md:justify-normal'
            >
              <img
                src={person.avatar}
                alt={person.name}
                className='w-12 h-12 rounded-full object-cover border-2 border-[#4F4F4F]'
              />
              <p className='text-sm mt-2 md:mt-0 mx-2 text-[#FFFFFF]'>
                {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
