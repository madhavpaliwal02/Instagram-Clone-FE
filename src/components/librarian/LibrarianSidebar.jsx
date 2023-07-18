import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { menu } from './LibrarySidebarConfig'
import { IoMenu } from 'react-icons/io5'
import './Librarian.css'

const LibrarianSidebar = () => {

    // Use state
    const [activeTab, setActiveTab] = useState();

    // Navigation
    const nav = useNavigate();

    // Getting role
    const role = localStorage.getItem("role")

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("libId")
        if (role === "admin") {
            localStorage.removeItem("role")
        }
        nav("/librarian")
        toast.success("Successfully Log-out...")
    }

    // Handle onclick tab
    const handleTabClick = (title) => {
        setActiveTab(title);

        switch (title) {
            case "Personal Details":
                nav("/librarian/personal-details");
                break;

            case "Total Librarians":
                nav("/librarian/admin/total-librarians");
                break;

            case "Total Students Available":
                nav("/librarian/total-students", { state: { title: 'all' } });
                break;

            case "Total Students (Auth)":
                nav("/librarian/total-students-auth", { state: { title: 'auth' } });
                break;

            case "Add a Book":
                nav("/librarian/add-book");
                break;

            case "Total Books Available":
                nav("/librarian/total-books");
                break;

            case "Total Books Issued":
                nav("/librarian/total-books-issued");
                break;

            case "Total Books Return":
                nav("/librarian/total-books-return");
                break;


        }
    }

    return (
        <div className='sidebar-box fixed bottom-0 h-[78vh]'>
            <div id="menu-icon"> <IoMenu /> </div>
            < div className='sidebar px-10' >
                <div className=' py-8'>
                    {/* For admin only */}
                    {(role === 'admin') ?
                        < div onClick={() => handleTabClick("Total Librarians")} className='flex items-center mb-5 cursor-pointer text-lg'>
                            <p className={`${activeTab === "Total Librarians" ? "font-bold" : "font-semibold"}`}>
                                Total Librarians</p>
                        </div> :
                        < div onClick={() => handleTabClick("Personal Details")} className='flex items-center mb-5 cursor-pointer text-lg'>
                            <p className={`${activeTab === "Personal Details" ? "font-bold" : "font-semibold"}`}>
                                Personal Details</p>
                        </div>
                    }
                    {
                        menu.map((item) =>
                            <div onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>
                                    {item.title}</p>
                            </div>
                        )
                    }
                </div>
                {/* Logout */}
                <div onClick={handleLogout} className=''>
                    <button className='flex w-[70%] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-lg shadow-indigo-600/50 hover:shadow-indigo-600/40 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Logout</button>
                </div>
            </div >
        </div >
    )
}

export default LibrarianSidebar