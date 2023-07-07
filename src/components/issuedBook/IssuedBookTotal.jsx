import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url_issuedbook, base_url_librarian } from '../../api/BootAPI'
import '../css/Table.css'
import { RiBook2Fill } from 'react-icons/ri'
import { MdDeleteSweep } from 'react-icons/md'
import { useDisclosure } from '@chakra-ui/react';
import IssuedBookView from './IssuedBookView'
import { toast } from 'react-toastify'
import IssuedBookDelete from './IssuedBookDelete'

const IssuedBookTotal = () => {

  // Use state
  const [issuedBooks, setIssuedBooks] = useState([])
  const [issuedBook, setIssuedBook] = useState('')
  const [ibookId, setIbookId] = useState('')

  // Use disclosure
  const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

  // Getting form local storage
  const role = localStorage.getItem("role")
  const libId = localStorage.getItem("libId")

  // Fetch the data from server
  const fetchIssuedBooksFromServer = () => {
    axios.get(`${base_url_issuedbook}`).then(
      (response) => {
        console.log(response.data)
        setIssuedBooks(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  // Fetch data for librarian
  const fetchIssedBookLibrarian = (id) => {
    axios.get(`${base_url_librarian}/issuedbook/` + id).then(
      (response) => {
        setIssuedBooks(response.data)
      },
      (error) => { }
    )
  }

  // Handle IssuedBook View Modal
  const handleView = (data) => {
    setIssuedBook(data)
    onOpenView()
  }

  // handle close view
  const handleCloseView = () => {
    setIssuedBook('')
    onCloseView()
  }

  // Handle IssuedBook Delete Modal
  const handleDelete = (id) => {
    setIbookId(id)
    onOpenDelete()
  }

  // Delete the data from server
  const deleteIssuedBook = () => {
    axios.delete(`${base_url_issuedbook}/${ibookId}`).then(
      (response) => {
        console.log(response.data)
        window.location.reload()
        toast.success("Successfully Deleted the IssuedBook...", { position: "top-right" })
      },
      (error) => {
        console.log(error)
        toast.error("Something went wrong...", { position: "top-right" })
        onCloseDelete()
      }
    )
  }

  // UseEffect
  useEffect(() => {
    if (role === "admin") {
      fetchIssuedBooksFromServer()
    } else {
      fetchIssedBookLibrarian(libId)
    }
  }, [])


  return (
    <div>
      <div className='text-3xl italic flex justify-center items-center'>
        <p className='w-[30%] m-auto shadow-md shadow-black-500/30 py-2'>Total Issued Books</p>
      </div>

      <div className='tableFixHead w-[95%] border ml-5 mt-5'>
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th className='tHead tracking-wider'>Student's Name</th>
              <th className='tHead tracking-wider'>Roll No</th>
              <th className='tHead tracking-wider'>Book's Title</th>
              <th className='tHead tracking-wider'>Author's Name</th>
              {(role === "admin") ?
                <th className='tHead tracking-wider'>Librarian Name</th> : <div></div>
              }
              <th className='tHead tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody >
            {
              issuedBooks.map((ib) =>
                <tr>
                  <td className='tBody'>{ib.sname}</td>
                  <td className='tBody'>{ib.rollNo}</td>
                  <td className='tBody'>{ib.title}</td>
                  <td className='tBody'>{ib.authorName}</td>
                  {(role === "admin") ?
                    <td className='tBody'>{ib.lname}</td> : <div></div>
                  }
                  <td className='tBody'>
                    <div className='flex justify-center items-center space-x-4'>
                      {/* View IssuedBook Modal */}
                      <div className='text-2xl cursor-pointer'>
                        <RiBook2Fill onClick={() => handleView(ib)} />
                        <IssuedBookView isOpen={isOpenView} onClose={handleCloseView} issuedBook={issuedBook} />
                      </div>
                      {/* Delete IssuedBook */}
                      {(role === "admin") ?
                        < div className='text-2xl cursor-pointer'>
                          <MdDeleteSweep className='text-2xl' onClick={() => handleDelete(ib.ibookId)} />
                          <IssuedBookDelete isOpen={isOpenDelete} onClose={onCloseDelete} deleteIssuedBook={deleteIssuedBook} />
                        </div> : <div></div>
                      }

                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default IssuedBookTotal