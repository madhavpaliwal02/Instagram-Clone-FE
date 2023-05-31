import React from 'react'

const IssuedBookTotal = () => {
  return (
    <div>
      <div className='text-3xl italic text-center items-center'>Total Issued Books</div>

      <div className='w-[95%] flex items-center border ml-5 mt-5'>
        <table class="min-w-full leading-normal">
          <thead>
            <tr className=''>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Id</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Name</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Roll No</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Course</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Gender</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Title</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Author's Name</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Edition</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Librarian Name</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Gender</th>
              <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              [1, 1, 1, 1, 1].map((item) =>
                <tr>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Id</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Name</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Roll No</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Course</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Gender</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Title</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Author's Name</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Edition</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Librarian Name</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Gender</td>
                  <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Date</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IssuedBookTotal