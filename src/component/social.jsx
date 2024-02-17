import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiFire } from "react-icons/hi";


function Social() {

    const links =[
        {
            id:1,
            child:(
                <>
                LinkedIn<FaLinkedin color='#0076b2' size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/rajan-gupta-926784232/',
            style:'rounded-tr-md'
            },
        {
            id:2,
            child:(
                <>
                Github<FaGithub color='purple' size={30}/>
                </>
            ),
            href:'https://github.com/saksh7792',
            style:'rounded-tr-md'
        },
        {
            id:3,
            child:(
                <>
                Mail Me<HiOutlineMail color='green' size={30}/>
                </>
            ),
            href:'rajan779292@gmail.com',
            style:'rounded-tr-md'
        },
        {
            id:4,
            child:(
                <>
                Resume<HiFire color='red' size={30}/>
                </>
            ),
            href:'/rajan resume.pdf',
            style:'rounded-tr-md',
            download:true,
        },
    ];
    return (
        <div className='hidden lg:flex flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id,child,href,style,download})=>(

                    <li key={id}className={"fontsemibold flex rounded-md justify-between items-center w-40 h-14 px-4 bg-gray-200 hover:ml-[-10px] hover:rounded-md duration-300 ml-[-100px]" + " " + style}>
                        <a href={href} className='flex justify-between items-center w-full text-black'
                            download = {download}
                            target='_blank'
                            >
                            <>
                                {child}
                            </>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Social