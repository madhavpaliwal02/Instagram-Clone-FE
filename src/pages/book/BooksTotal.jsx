import React from 'react'

const BooksTotal = () => {
    return (
        <div>
            <div className='text-3xl italic text-center items-center'>Total Books Available</div>

            <div className='w-[95%] flex items-center border ml-5 mt-5'>
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr className=''>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Id</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Title</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Description</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Author's Name</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Genre</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Edition</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Publication Year</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Pages</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Copies</th>
                            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 1, 1, 1, 1].map((item) =>
                                <tr>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Id</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Title</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Description</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Author's Name</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Genre</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Edition</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Publication Year</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Pages</td>
                                    <td className='px-5 py-2 border-b border-gray-200 bg-white text-sm border'>Copies</td>
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

export default BooksTotal