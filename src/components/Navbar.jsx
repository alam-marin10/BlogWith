import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoSearchCircleOutline } from "react-icons/io5";
import profile from '../assets/picture/profile.png'


const Navbar = () => {
  return (
    <div>
      <nav className='grid grid-cols-2 bg-[#FFFFFF] shadow-2xs  p-4 rounded-2xl'>
        <div className='text-left px-2'> 
          <h1 style={{ fontFamily: "'Moon Dance', cursive" }} className='text-[#3E3E3E]  text-lg'> Talking </h1> 
          <span className='text-[#8A53FF] text-2xl font-bold'>Travel</span>
        </div>
        <div className='flex justify-end items-end gap-4 p-4'>
            <div className='px-6 border-r-1 border-gray-300'>
            <ul className='flex space-x-8 text-[#495367]  '>
               <Link>
               <li className='hover:text-[#8A53FF]'>Home</li>
               </Link> 
               <Link>
               <li className='hover:text-[#8A53FF]' >Story</li>
               </Link>
               <Link>
               <li className='hover:text-[#8A53FF]'>Gallery</li>
               </Link>
               <Link>
               <li className='hover:text-[#8A53FF]'>Contact Us</li>
               </Link> 
            </ul>
                
            </div>
            
            <div className='flex space-x-4'>
                <IoSearchCircleOutline className='w-8 h-8 text-gray-400' />
                <img src={profile} alt="" className='w-8 h-8 rounded-full' />

            </div>


        </div>
      </nav>
    </div>
  )
}

export default Navbar
