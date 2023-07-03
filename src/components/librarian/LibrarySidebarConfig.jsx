import { AiFillHeart, AiFillMessage, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai';
import { RiVideoFill, RiVideoLine } from 'react-icons/ri';

export const menu = [
    // { title: "Personal Details", icon: <AiOutlineHome className='text-2xl mr-5' />, activeIcon: <AiOutlineHome /> },
    { title: "Total Students Available", icon: <AiOutlineCompass className='text-2xl mr-5' />, activeIcon: <AiOutlineCompass /> },
    { title: "Total Students (Auth)", icon: <RiVideoLine className='text-2xl mr-5' />, activeIcon: <RiVideoFill /> },
    { title: "Add a Book", icon: <AiOutlinePlusCircle className='text-2xl mr-5' />, activeIcon: <AiOutlinePlusCircle /> },
    { title: "Total Books Available", icon: <AiOutlineSearch className='text-2xl mr-5' />, activeIcon: <AiOutlineSearch /> },
    { title: "Total Books Issued", icon: <AiOutlineMessage className='text-2xl mr-5' />, activeIcon: <AiFillMessage /> },
    // { title: "Total Student Issued Books", icon: <AiOutlineHeart className='text-2xl mr-5' />, activeIcon: <AiFillHeart /> }

]