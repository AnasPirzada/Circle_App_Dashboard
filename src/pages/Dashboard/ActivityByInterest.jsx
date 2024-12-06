import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../apiClient.js';

const ActivityByInterest = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const rowsPerPage = 10; // Items per page for API request

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(
          `/api/admin/interest-stats?itemsPerPage=${rowsPerPage}&currentPage=${currentPage}`
        );

        const apiData = response?.data;

        // Validation for unexpected API responses
        if (apiData?.status !== 'success' || !apiData?.data) {
          throw new Error('Unexpected API response structure');
        }

        toast.success(apiData.message || 'Data fetched successfully!');

        const { interests = [], totalPages: total = 1 } = apiData.data;

        setData(interests);
        setTotalPages(total);
      } catch (err) {
        console.error('Error fetching data:', err);

        if (err.response) {
          toast.error(
            `Error: ${err.response.status} - ${
              err.response.data?.message || 'Server Error'
            }`
          );
        } else if (err.request) {
          toast.error('Network error: Please check your connection.');
        } else {
          toast.error('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const renderSkeletonRows = () =>
    Array.from({ length: rowsPerPage }).map((_, index) => (
      <tr key={index} className='animate-pulse'>
        {[...Array(5)].map((_, colIndex) => (
          <td key={colIndex} className='px-4 py-2 border border-gray-600'>
            <div className='h-4 bg-gray-300 rounded'></div>
          </td>
        ))}
      </tr>
    ));

  return (
    <div className='w-full mx-auto my-4 space-y-4'>
      <div className='flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0'>
        <p className='text-[#FFC491] text-lg font-normal'>
          Activity Dashboard by Interest Group Info
        </p>
        <button
          type='button'
          className='flex items-center justify-center text-[#000000] text-lg font-normal bg-[#FFC491] border rounded-full px-4 py-2'
        >
          All
          <img
            src='/icon-park-solid_down-one.svg'
            alt='dropdown'
            className='w-6 h-6 ms-3'
          />
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse border border-gray-600'>
          <thead>
            <tr className='bg-[#FFC491] text-black'>
              <th className='px-4 py-2 border border-gray-600'>Interest</th>
              <th className='px-4 py-2 border border-gray-600'>
                Num of Groups
              </th>
              <th className='px-4 py-2 border border-gray-600'>
                Num of Events
              </th>
              <th className='px-4 py-2 border border-gray-600'>
                Avg Group Size
              </th>
              <th className='px-4 py-2 border border-gray-600'>
                Num of Messages
              </th>
            </tr>
          </thead>
          <tbody className='bg-[#414141] text-white'>
            {loading
              ? renderSkeletonRows()
              : data.map((row, index) => (
                  <tr key={index} className='hover:bg-[#383838]'>
                    <td className='px-4 py-2 border border-gray-600'>
                      {row.interest}
                    </td>
                    <td className='px-4 py-2 border border-gray-600'>
                      {row.groupCount}
                    </td>
                    <td className='px-4 py-2 border border-gray-600'>
                      {row.eventCount}
                    </td>
                    <td className='px-4 py-2 border border-gray-600'>
                      {row.averageGroupSize}
                    </td>
                    <td className='px-4 py-2 border border-gray-600'>
                      {row.messageCount}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-center items-center mt-4'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <img src='/mingcute_down-line.svg' alt='Previous' />
        </button>
        {[...Array(totalPages)].map((_, page) => (
          <button
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === page + 1 ? 'text-[#FFC491]' : 'text-white'
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <img src='/mingcute_down-line_right.svg' alt='Next' />
        </button>
      </div>
    </div>
  );
};

export default ActivityByInterest;
