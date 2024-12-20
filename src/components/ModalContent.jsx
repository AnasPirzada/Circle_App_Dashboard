import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import apiClient from '../apiClient'; // Import apiClient for API requests

const ModalContent = ({ isOpen, setIsOpen }) => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    offerFor: '',
    date: '',
    interest: '',
    totalPrice: '',
  });
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]); // Store image URLs after upload

  const handleImageUpload = async event => {
    const files = Array.from(event.target.files);

    // Show previews and append to existing images
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newPreviews]);

    const uploadedUrls = [...uploadedImageUrls];

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('images', file);

        const response = await apiClient.post('/api/upload/images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          uploadedUrls.push(response.data.imageUrls[0]); // Ensure it's appending only the URL string
        }
      }
      setUploadedImageUrls(uploadedUrls);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // image privew and remove
  const handleImageClick = index => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
    setUploadedImageUrls(prevUrls => prevUrls.filter((_, i) => i !== index));
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const offerData = {
      title: formData.title,
      description: formData.description,
      numberOfPeople: formData.offerFor,
      startingDate: new Date(formData.date).toISOString(),
      endingDate: new Date(formData.date).toISOString(),
      interest: formData.interest,
      price: parseFloat(formData.totalPrice),
      imageUrls: uploadedImageUrls,
    };

    try {
      const response = await apiClient.post(
        '/api/admin/create-offer',
        offerData
      );
      console.log(response);
      toast.success(response.data.message);
      if (response.status === 201) {
        console.log('Offer created successfully:', response.data);
        setIsOpen(false);
      } else {
        console.error('Error creating offer:', response.data.message);
      }
    } catch (error) {
      console.error('Error creating offer:', error);
      toast.error('Error creating offer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='bg-slate-900/20 backdrop-blur fixed inset-0 z-50 grid place-items-center cursor-pointer'
            >
              <motion.div
                initial={{ scale: 0, rotate: '12.5deg' }}
                animate={{ scale: 1, rotate: '0deg' }}
                exit={{ scale: 0, rotate: '0deg' }}
                onClick={e => e.stopPropagation()}
                className='bg-[#383838] text-white p-6 rounded-lg shadow-xl w-full md:w-[70%] mx-4 cursor-default relative max-h-screen overflow-y-auto'
              >
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='border-2 border-dashed h-[320px] bg-[#414141] border-[#FFC491] rounded-lg p-4 flex flex-col justify-center text-center'>
                    <input
                      type='file'
                      multiple
                      accept='image/*'
                      onChange={handleImageUpload}
                      className='hidden'
                      id='imageUpload'
                    />
                    <label htmlFor='imageUpload' className='cursor-pointer'>
                      <div className='text-[#FFC491]'>
                        <div className='flex justify-center items-center'>
                          <img src='/Picture.svg' alt='' />
                        </div>
                        Drop your image here, or{' '}
                        <span className='text-white underline'>browse</span>
                      </div>
                    </label>
                  </div>

                  <div className='flex space-x-2 mt-4'>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt='uploaded preview'
                        className='w-16 h-16 object-cover rounded-lg cursor-pointer'
                        onClick={() => handleImageClick(index)}
                      />
                    ))}
                  </div>

                  {/* Form Inputs */}
                  <div>
                    <label className='block text-sm font-semibold mb-1'>
                      Title
                    </label>
                    <input
                      type='text'
                      name='title'
                      value={formData.title}
                      onChange={handleChange}
                      className='w-full p-2 bg-[#414141] text-white rounded-md'
                      placeholder='Title'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-semibold mb-1'>
                      Description
                    </label>
                    <textarea
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      className='w-full p-2 bg-[#414141] text-white rounded-md'
                      placeholder='Description'
                    />
                  </div>

                  <div className='flex space-x-4'>
                    <div className='w-1/2'>
                      <label className='block text-sm font-semibold mb-1'>
                        Offer for
                      </label>
                      <input
                        type='text'
                        name='offerFor'
                        value={formData.offerFor}
                        onChange={handleChange}
                        className='w-full p-2 bg-[#414141] text-white rounded-md'
                        placeholder='Number of people'
                      />
                    </div>
                    <div className='w-1/2'>
                      <label className='block text-sm font-semibold mb-1'>
                        Date
                      </label>
                      <input
                        type='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                        className='w-full p-2 bg-[#414141] text-white rounded-md'
                      />
                    </div>
                  </div>

                  <div className='flex space-x-4'>
                    <div className='w-1/2'>
                      <label className='block text-sm font-semibold mb-1'>
                        Interest
                      </label>
                      <select
                        name='interest'
                        value={formData.interest}
                        onChange={handleChange}
                        className='w-full p-2 bg-[#414141] text-white rounded-md'
                      >
                        <option value=''>Select Interest</option>
                        <option value='Music'>Music</option>
                        <option value='Travel'>Travel</option>
                        <option value='Sports'>Sports</option>
                      </select>
                    </div>
                    <div className='w-1/2'>
                      <label className='block text-sm font-semibold mb-1'>
                        Total Price
                      </label>
                      <input
                        type='text'
                        name='totalPrice'
                        value={formData.totalPrice}
                        onChange={handleChange}
                        className='w-full p-2 bg-[#414141] text-white rounded-md'
                        placeholder='Total Price'
                      />
                    </div>
                  </div>

                  <div className='flex justify-between mt-6'>
                    <button
                      type='button'
                      className='px-10 rounded-full py-2 border border-[#FFC491] text-white hover:bg-gray-600'
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='px-10 py-2 bg-[#FFC491] text-black rounded-full'
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalContent;
