import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { base_url_book } from '../../api/BootAPI'
import '../css/Update.css'

const BookUpdate = () => {

    // Use state
    const [book, setBook] = useState('')

    // use navigation
    const nav = useNavigate()

    // use location
    const { state } = useLocation();
    const { bId } = state;

    // Getting bookId
    // const bookId = localStorage.getItem("bookId")

    // Fetch book data from server
    const fetchBookFromServer = () => {
        axios.get(`${base_url_book}/${bId}`).then(
            (response) => {
                setBook(response.data)
            }, (error) => { }
        )
    }

    // Use effect
    useEffect(() => {
        fetchBookFromServer()
    }, [])

    // Handle book
    const handleBack = () => {
        nav("/librarian/total-books")
        setBook('')
    }

    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target
        setBook({ ...book, [name]: value })
    }

    // Handle update form
    const handleUpdate = (e) => {
        // console.log("Handle update")
        putDataToServer(book, bId)
        e.preventDefault()
    }

    // Update a book
    const putDataToServer = (data, id) => {
        console.log("Data: ", data, " Id: ", id)
        axios.put(`${base_url_book}/${id}`, data).then(
            (response) => {
                // console.log(response.data);
                toast.success("Book Updated Successfully...", { position: "top-right" })
                nav("/librarian/total-books")
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong...", { position: "top-right" })
            }
        )
    }


    return (
        <div>
            <div className='w-[100%]'>
                <div className="flex min-h-full flex-col px-6 py-8 lg:px-8 mt-4">

                    {/* Header */}
                    <div className='text-3xl italic justify-center items-center'>
                        <p className='w-[60%] m-auto shadow-md shadow-black-500/30 py-2'>Book Update</p>
                    </div>

                    {/* Login Form */}
                    <div className='w-full flex justify-center'>
                        <form className="shadow-lg space-y-6 mt-2 py-4" onSubmit={handleUpdate} method="PUT">

                            {/* All credentials */}
                            <div className='w-full flex flex-col items-center space-y-6 py-4'>

                                {/* Layer-1 */}
                                <div className='w-full flex justify-around items-center'>
                                    {/* Title */}
                                    <div className='flex'>
                                        <input value={book.title} name="title" type="text" placeholder='Title' required className="form-input"
                                            onChange={handleChange} />
                                    </div>
                                    {/* Author Name */}
                                    <div className='flex'>
                                        <input name="authorName" type="text" placeholder='Author Name' required className="form-input" onChange={handleChange}
                                            value={book.authorName} />
                                    </div>
                                </div>

                                {/* Layer-2 */}
                                <div>
                                    {/* Description */}
                                    <div>
                                        <textarea name="description" type="text" placeholder='Description' required className="form-input" onChange={handleChange} rows={2} cols={50} value={book.description} />
                                    </div>
                                </div>

                                {/* Layer-3 */}
                                <div className='w-full flex justify-around items-center'>
                                    {/* Genre */}
                                    <div>
                                        <input name="genre" type="text" placeholder='Genre' required className="form-input" onChange={handleChange}
                                            value={book.genre} />
                                    </div>
                                    {/* Publication */}
                                    <div>
                                        <input name="publicationYear" type="text" required placeholder='Publication Year' className="form-input" onChange={handleChange}
                                            value={book.publicationYear} />
                                    </div>
                                </div>

                                {/* Layer-4 */}
                                <div>
                                    {/* Edition */}
                                    <div>
                                        <input name="edition" type="text" placeholder='Edition' required className="form-input" onChange={handleChange}
                                            value={book.edition} />
                                    </div>
                                </div>

                                {/* Layer-5 */}
                                <div className='w-full flex justify-between px-5 space-x-5'>
                                    {/* Count */}
                                    <div>
                                        <input name="count" type="text" placeholder='Count' required className="form-input" onChange={handleChange}
                                            value={book.count} />
                                    </div>

                                    {/* Pages */}
                                    <div>
                                        <input name="pages" type="text" placeholder='Pages' required className="form-input" onChange={handleChange}
                                            value={book.pages} />
                                    </div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className='flex w-full justify-around'>
                                <div className='w-[25%]'>
                                    <button onClick={handleBack} className="form-button">Back</button>
                                </div>
                                <div className='w-[25%]'>
                                    <button type='submit' className="form-button">Update</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookUpdate