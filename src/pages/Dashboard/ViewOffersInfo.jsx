import React, { useState } from 'react';

const ViewOffersInfo = () => {
  const data = [
    {
      typeGroup: 'Friend',
      NumGroup: 154,
      AvgSizeGroup: 34,
      avgSize: 5,
      messages: 447,
      activeUsers: 120,
      messageActivity: 'Daily',
      eventsPlanned: 15,
    },
    {
      typeGroup: 'Organization',
      NumGroup: 130,
      AvgSizeGroup: 44,
      avgSize: 3,
      messages: 877,
      activeUsers: 98,
      messageActivity: 'Weekly',
      eventsPlanned: 20,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    {
      typeGroup: 'Family',
      NumGroup: 185,
      AvgSizeGroup: 39,
      avgSize: 6,
      messages: 185,
      activeUsers: 75,
      messageActivity: 'Monthly',
      eventsPlanned: 10,
    },
    // Add more rows with updated data...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 14;

  // Calculate data for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

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
              {currentData.map((row, index) => (
                <tr key={index} className='hover:bg-[#383838]'>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.typeGroup}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.NumGroup}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.AvgSizeGroup}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.avgSize}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.messages}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.activeUsers}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.messageActivity}
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
