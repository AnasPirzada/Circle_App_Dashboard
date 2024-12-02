import React, { useState } from 'react';

const ActivityByInterest = () => {
  const data = [
    { interest: 'Friend', groups: 154, events: 34, avgSize: 5, messages: 447 },
    {
      interest: 'Organization',
      groups: 130,
      events: 44,
      avgSize: 3,
      messages: 877,
    },
    { interest: 'Family', groups: 185, events: 39, avgSize: 6, messages: 185 },
    { interest: 'Friend', groups: 196, events: 36, avgSize: 7, messages: 492 },
    { interest: 'Family', groups: 274, events: 44, avgSize: 4, messages: 429 },
    { interest: 'Mix', groups: 826, events: 40, avgSize: 5, messages: 177 },
    { interest: 'Family', groups: 647, events: 38, avgSize: 6, messages: 423 },
    { interest: 'Friend', groups: 447, events: 41, avgSize: 5, messages: 561 },
    {
      interest: 'Organization',
      groups: 740,
      events: 43,
      avgSize: 4,
      messages: 357,
    },
    { interest: 'Mix', groups: 583, events: 36, avgSize: 1, messages: 130 },
    { interest: 'Friend', groups: 453, events: 45, avgSize: 1, messages: 600 },
    { interest: 'Mix', groups: 816, events: 37, avgSize: 4, messages: 922 },
    { interest: 'Family', groups: 177, events: 43, avgSize: 5, messages: 826 },
    { interest: 'Friend', groups: 994, events: 42, avgSize: 7, messages: 994 },
    {
      interest: 'Organization',
      groups: 561,
      events: 34,
      avgSize: 6,
      messages: 540,
    },
    // Add more rows as needed...
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
            Activity Dashboard by Interest Group info
          </p>
          <button
            type='button'
            className='flex items-center justify-center text-[#000000] text-lg font-normal bg-[#FFC491] border rounded-full px-4 py-2'
          >
            All{' '}
            <img
              src='/icon-park-solid_down-one.svg'
              alt=''
              className='w-6 h-6 ms-3'
            />
          </button>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='min-w-full border-collapse border border-gray-600'>
            <thead>
              <tr className='bg-[#FFC491] text-black text-nowrapss'>
                <th className='px-4 py-2 border border-gray-600'>Interest</th>
                <th className='px-4 py-2 border border-gray-600'>
                  Num of Group
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
              {currentData.map((row, index) => (
                <tr key={index} className='hover:bg-[#383838]'>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.interest}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.groups}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.events}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.avgSize}
                  </td>
                  <td className='px-4 py-2 border border-gray-600'>
                    {row.messages}
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
              className={`px-3 py-1 mx-1  ${
                currentPage === page + 1 ? 'text-[#FFC491]' : ' text-white '
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <img src='/mingcute_down-line_right.svg' alt='' />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ActivityByInterest;
