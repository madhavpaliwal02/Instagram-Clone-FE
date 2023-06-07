import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { menu } from './LibrarySidebarConfig'

const LibrarianSidebar = () => {

    // Use state
    const [activeTab, setActiveTab] = useState();

    // Navigation
    const nav = useNavigate();

    // Handle Logout
    const handleLogout = () => {
        nav("/librarian")
    }

    // Handle onclick tab
    const handleTabClick = (title) => {
        setActiveTab(title);

        switch (title) {
            case "Personal Details":
                nav("/librarian/personal-details");
                break;

            case "Total Students Available":
                nav("/librarian/total-students", { state: { title: 'all' } });
                break;

            case "Total Students (Auth)":
                nav("/librarian/total-students-auth", { state: { title: 'auth' } });
                break;

            case "Total Books Available":
                nav("/librarian/total-books", { state: { title: 'all' } });
                break;

            case "Total Books Issued":
                nav("/librarian/total-books-issued", { state: { title: 'issued' } });
                break;

            case "Total Student Issued Books":
                nav("/librarian/total-students-book-issued");
                break;
        }
    }

    return (
        <div className='fixed bottom-0 h-[78vh]'>
            < div className='px-10' >
                <div className='py-8'>
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