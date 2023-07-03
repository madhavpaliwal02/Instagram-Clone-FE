import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { menu } from './StudentSidebarConfig'

const StudentSidebar = () => {

    // Use state
    const [activeTab, setActiveTab] = useState();

    // Navigation
    const nav = useNavigate();

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem("stuId")
        nav("/student")
        toast.success("Successfully Log-out...")
    }

    // Handle onclick tab
    const handleTabClick = (title) => {
        setActiveTab(title);

        switch (title) {
            case "Personal Details":
                nav("/student/personal-details");
                break;

            case "My Issued Books":
                nav("/student/issued-books", { state: { title: "student-issued" } });
                break;

            case "Search Books":
                nav("/student/total-books", { state: { title: "student-all" } });
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

export default StudentSidebar