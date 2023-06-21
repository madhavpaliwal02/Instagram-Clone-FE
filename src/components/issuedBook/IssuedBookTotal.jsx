import React from 'react'
import '../../components/css/Table.css'

const IssuedBookTotal = () => {
  return (
    <div>
      <div className='text-3xl italic flex justify-center items-center'>
        <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Total Issued Books</p>
      </div>

      <div className='tableFixHead w-[95%] border ml-5 mt-5'>
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th className='tHead tracking-wider'>Id</th>
              <th className='tHead tracking-wider'>Name</th>
              <th className='tHead tracking-wider'>Roll No</th>
              <th className='tHead tracking-wider'>Course</th>
              <th className='tHead tracking-wider'>Gender</th>
              <th className='tHead tracking-wider'>Title</th>
              <th className='tHead tracking-wider'>Author's Name</th>
              <th className='tHead tracking-wider'>Edition</th>
              <th className='tHead tracking-wider'>Librarian Name</th>
              <th className='tHead tracking-wider'>Gender</th>
              <th className='tHead tracking-wider'>Date</th>
            </tr>
          </thead>
          <tbody >
            {
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) =>
                <tr>
                  <td className='tBody'>Id</td>
                  <td className='tBody'>Name</td>
                  <td className='tBody'>Roll No</td>
                  <td className='tBody'>Course</td>
                  <td className='tBody'>Gender</td>
                  <td className='tBody'>Title</td>
                  <td className='tBody'>Author's Name</td>
                  <td className='tBody'>Edition</td>
                  <td className='tBody'>Librarian Name</td>
                  <td className='tBody'>Gender</td>
                  <td className='tBody'>Date</td>
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