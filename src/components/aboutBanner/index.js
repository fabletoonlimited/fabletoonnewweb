"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import "./banner.scss"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebookSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons'



const index = () => {
    const router = useRouter();
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("/bar-code.json")
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

return (
    <div className='banner w-full md:overflow-hidden relative md:h-150 h-auto'>
        
        {/* Your Digital Partner*/}    
        <div className="absolute md:right-20 right-57 pointer-events-none z-50 md:-mt-4 mt-0">   
            <div className='-mt-40 md:ml-0 ml-15 md:pt-60 pt-55 md:mr-0 -mr-60 md:pr-240 w-100'>
                <p className='md:text-md mb-2 text-sm md:ml-0 ml-10 md:px-0 md:justify-left font-bold text-white z-60'>
                    About
                </p>
                <h1 className='md:text-2xl text-xl md:w-100 w-60 text-md md:ml-0 ml-10 md:justify-left font-bold text-white z-60'>
                    Digital Solutions That Help Businessses Grow
                </h1>
            </div>

            <div className='md:pl-270 pl-10 md:-mt-15 mt-15 relative md:left-10 left-50'>
                <span className=' md:text-8xl md:flex block text-white font-black leading-6 md:mt-80 mt-40' style={{fontSize: 20}}>
                    We are always.<br />available to serve you.
                </span>      
            
                <hr className="text-fuchsia-700  md:w-40 w-40 border-2 rounded-2xl mt-2 -mx-0.5" />
            </div>
        </div>

        <div className='relative banner-img&Text items-center md:items-center md:justify-center justify-center md:flex w-screen md:h-50 h-100'>
            <img src="/aboutBanner.jpeg"
                className='object-cover w-screen md:h-202 h-100'    
            />
        
            <div className="absolute inset-0 pointer-events-none bg-black/50 md:h-126 h-100"></div>
        </div>


    </div>
  ) 
}

export default index
