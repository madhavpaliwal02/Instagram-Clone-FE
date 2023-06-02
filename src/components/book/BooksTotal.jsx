import React from 'react'
import { useLocation } from 'react-router-dom';

const BooksTotal = () => {

    // Use Location
    const { state } = useLocation();
    const { title } = state;
    return (
        <div>
            {/* Header */}
            <div className='text-3xl italic justify-center items-center'>
                <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>
                    {title === 'all' ? "Total Books Available" : "Total Books Issued"}
                </p>
            </div>

            {/* Table */}
            <div className='tableFixHead w-[95%]  ml-5 mt-5'>
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr className=''>
                            <th className='tHead tracking-wider'>Id</th>
                            <th className='tHead tracking-wider'>Title</th>
                            <th className='tHead tracking-wider'>Description</th>
                            <th className='tHead tracking-wider'>Author's Name</th>
                            <th className='tHead tracking-wider'>Genre</th>
                            <th className='tHead tracking-wider'>Edition</th>
                            <th className='tHead tracking-wider'>Publication Year</th>
                            <th className='tHead tracking-wider'>Pages</th>
                            <th className='tHead tracking-wider'>Copies</th>
                            <th className='tHead tracking-wider'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) =>
                                <tr>
                                    <td className='tBody'>Id</td>
                                    <td className='tBody'>Title</td>
                                    <td className='tBody'>Description</td>
                                    <td className='tBody'>Author's Name</td>
                                    <td className='tBody'>Genre</td>
                                    <td className='tBody'>Edition</td>
                                    <td className='tBody'>Publication Year</td>
                                    <td className='tBody'>Pages</td>
                                    <td className='tBody'>Copies</td>
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

export default BooksTotal