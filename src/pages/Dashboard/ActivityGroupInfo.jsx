import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../apiClient.js';

const ActivityGroupInfo = () => {
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
          `/api/admin/type-stats?activeDays=3&dayRange=7&minMessages=5&itemsPerPage=${rowsPerPage}&currentPage=${currentPage}`
        );

        console.log(response);

        if (response?.data?.status !== 'success' || !response?.data?.data) {
          throw new Error('Unexpected API response structure');
        }

        toast.success(response.data.message || 'Data fetched successfully!');

        const apiData = response?.data.data;
        setData(apiData.types || []);
        setTotalPages(apiData.totalPages || 1);
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
        {[...Array(8)].map((_, colIndex) => (
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
            Activity Dashboard Group Info
          </p>
        </div>

        {/* Table */}
        <div className='overflow-x-auto pt-20'>
          <table className='min-w-full border-collapse border border-gray-600'>
            <thead>
              <tr className='bg-[#FFC491] text-black text-nowrap'>
                <th className='px-4 py-2 border border-gray-600'>
                  Type of Group
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Num of Group
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Avg Size of Group
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Avg Group Size
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Num of Messages
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Active Users
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Message Activity <br />
                  (Daily / Weekly / Monthly)
                </th>
                <th className='px-4 py-2 border border-gray-600'>
                  Events Planned
                </th>
              </tr>
            </thead>
            <tbody className='bg-[#414141] text-white'>
              {loading
                ? renderSkeletonRows()
                : data.map((row, index) => (
                    <tr key={index} className='hover:bg-[#383838]'>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.type}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.groupCount}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.averageGroupSize}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.averageGroupSize}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.messageCount}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.activeUsers}
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        <div className='flex justify-around'>
                          <span>
                            {row.messageActivity?.daily || 0}D / &nbsp;
                            {row.messageActivity?.weekly || 0}W /
                            {row.messageActivity?.monthly || 0}M
                          </span>
                        </div>
                      </td>
                      <td className='px-4 py-2 border border-gray-600'>
                        {row.eventCount}
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

export default ActivityGroupInfo;
