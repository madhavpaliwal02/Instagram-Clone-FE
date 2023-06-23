import React, { useState } from 'react'
import axios from 'axios'
import { base_url_book } from '../../api/BootAPI'
import '../css/Update.css'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

    // Use state
    const [book, setBook] = useState({

    })

    // use navigate
    const nav = useNavigate()

    // handle Form
    const handleForm = (e) => {
        console.log(book)
        postDataToServer(book)
        e.preventDefault();
    }

    const postDataToServer = (data) => {
        axios.post(`${base_url_book}`, data).then(
            (response) => {
                nav("/librarian/personal-details")
                console.log(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }




    return (
        <div>
            <div className='w-[100%]'>
                <div className="flex min-h-full flex-col px-6 py-8 lg:px-8 mt-4">

                    {/* Header */}
                    <div className='text-3xl italic justify-center items-center'>
                        <p className='w-[60%] m-auto shadow-md shadow-black-500/30 py-2'>Add a Book</p>
                    </div>

                    {/* Login Form */}
                    <div className='w-full flex justify-center'>
                        <form className="shadow-lg space-y-6 mt-8 py-4" onSubmit={handleForm} method="POST">

                            {/* All credentials */}
                            <div className='w-full flex flex-col items-center space-y-6 py-4'>

                                {/* Layer-1 */}
                                <div className='w-full flex justify-around items-center'>
                                    {/* Title */}
                                    <div className='flex'>
                                        <input name="title" type="text" placeholder='Title' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, title: e.target.value });
                                        }}
                                        />
                                    </div>
                                    {/* Author Name */}
                                    <div className='flex'>
                                        <input name="authorName" type="text" placeholder='Author Name' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, authorName: e.target.value });
                                        }} />
                                    </div>
                                </div>

                                {/* Layer-2 */}
                                <div>
                                    {/* Description */}
                                    <div>
                                        <textarea name="description" type="text" placeholder='Description' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, description: e.target.value });
                                        }} rows={2} cols={50} />
                                    </div>
                                </div>

                                {/* Layer-3 */}
                                <div className='w-full flex justify-around items-center'>
                                    {/* Genre */}
                                    <div>
                                        <input name="genre" type="text" placeholder='Genre' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, genre: e.target.value });
                                        }} />
                                    </div>
                                    {/* Publication */}
                                    <div>
                                        <input name="publicationYear" type="text" required placeholder='Publication Year' className="form-input" onChange={(e) => {
                                            setBook({ ...book, publicationYear: e.target.value });
                                        }} />
                                    </div>
                                </div>

                                {/* Layer-4 */}
                                <div>
                                    {/* Edition */}
                                    <div>
                                        <input name="edition" type="text" placeholder='Edition' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, edition: e.target.value });
                                        }} />
                                    </div>
                                </div>

                                {/* Layer-5 */}
                                <div className='w-full flex justify-between px-5 space-x-5'>
                                    {/* Count */}
                                    <div>
                                        <input name="count" type="text" placeholder='Count' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, count: e.target.value });
                                        }} />
                                    </div>

                                    {/* Pages */}
                                    <div>
                                        <input name="pages" type="text" placeholder='Pages' required className="form-input" onChange={(e) => {
                                            setBook({ ...book, pages: e.target.value });
                                        }} />
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className='flex w-full justify-around'>
                                <div className='w-[25%]'>
                                    <button type="reset" className=" form-button">Reset</button>
                                </div>
                                <div className='w-[25%]'>
                                    <button type="submit" className="form-button">Add</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook