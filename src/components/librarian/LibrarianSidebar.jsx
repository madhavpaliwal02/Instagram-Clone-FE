import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { menu } from './LibrarySidebarConfig'

const LibrarianSidebar = () => {

    // Use state
    const [activeTab, setActiveTab] = useState();

    // Navigation
    const nav = useNavigate();

    // Handle onclick tab
    const handleTabClick = (title) => {
        setActiveTab(title);

        switch (title) {
            case "Personal Details":
                nav("/librarian/personal-details");
                break;

            case "Total Students Available":
                nav("/librarian/total-students");
                break;

            case "Total Students (Auth)":
                nav("/librarian/total-students-auth");
                break;

            case "Total Books Available":
                nav("/librarian/total-books");
                break;

            case "Total Books Issued":
                nav("/librarian/total-books-issued");
                break;

            case "Total Students Issued Books":
                nav("/librarian/total-students-book-issued");
                break;
        }
    }

    return (
        <div className='sticky top-0 h-[100vh]'>
            < div className='mt-10 h-full flex justify-between px-10' >
                <div>
                    {
                        menu.map((item) =>
                            <div onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"}`}>
                                    {item.title}</p>
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    )
}

export default LibrarianSidebar