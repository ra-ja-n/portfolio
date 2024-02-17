import React from 'react'
import img from '../assets/picc.png'
import { HiFire } from "react-icons/hi";
import pdf from "../assets/rajan_resume.pdf"
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full justify-center px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I am a Full Stack Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-end">
                    I have 8 years of experience building and developing software applications.
                    Currently , I love to work o web application using technologies like React, tailwind...
                </p>

                <div className=''>
                    <button className='w-fit px-6 py-3 my-2 
                    text-black hover:text-black 
                    hover:font-bold 
                    hover:bg-gradient-to-r
                    hover:from-blue-200  hover:to-blue-500 
                    font-semibold flex items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-100 cursor-pointer'>
                        <a href={pdf} target='_blank'>My Resume</a>
                        <span>
                        <HiFire size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={img} alt="profile" className='rounded-full mx-auto h-1/2 w-1/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home