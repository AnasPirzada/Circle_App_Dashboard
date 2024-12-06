import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../apiClient.js';

const ViewOffersInfo = () => {
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
          `/api/admin/offer-stats?itemsPerPage=${rowsPerPage}&currentPage=${currentPage}`
        );

        const apiData = response?.data; // Data is in the 'data' field of the response

        // Adjust the validation to check for success based on response status, not inside 'data'
        if (response.status !== 200 || !apiData) {
          throw new Error('Unexpected API response structure');
        }

        toast.success(apiData.message || 'Data fetched successfully!');

        const { data = [], totalPages: total = 1 } = apiData; // Destructure data and totalPages

        setData(data);
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
        {[...Array(7)].map((_, colIndex) => (
          <td key={colIndex} className='px-4 py-2 border border-gray-600'>
            <div className='h-4 bg-gray-300 rounded'></div>
          </td>
        ))}
      </tr>
    ));

  return (
    <div>
      <div className='w-full mx-auto my-4 space-y-4'>
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0'>
          <p className='text-[#FFC491] text-lg font-normal'>
            Dashboard View - Offers{' '}
          </p>
        </div>

        {/* Table */}
        <div className='overflow-x-auto pt-20'>
          <table className='min-w-full border-collapse border border-gray-600'>
            <thead>
              <tr className='bg-[#FFC491] text-black text-nowrap'>
                <th className='px-4 py-2 border border-gray-600'>
                  Offer Number{' '}
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Interest Targeted{' '}
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Groups Reached{' '}
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Group Purchased{' '}
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Total Revenue{' '}
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Days between Purchase{' '}
                </th>
                <th className='px-4 py-2 border border-gray-600'>Event Size</th>
              </tr>
            </thead>
            <tbody className='bg-[#414141] text-white'>
              {loading
                ? renderSkeletonRows()
                : data.map((row, index) => (
                    <tr key={index} className='hover:bg-[#383838]'>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.totalOffers}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.interest}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.groupsReach}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.purchasedCircles}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.totalRevenue}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.avgDaysBetweenPurchases}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.eventsCount}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className='flex justify-center items-center mt-4'>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <img src='/mingcute_down-line.svg' alt='' />
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
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <img src='/mingcute_down-line_right.svg' alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOffersInfo;
