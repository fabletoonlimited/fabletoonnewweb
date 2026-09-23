"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import {Lottie} from "lottie-react";
import "./banner.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserClock, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';


const index = () => {
    const router = useRouter();

    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("/bar-code.json")
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

return (
    <div className='banner w-full md:overflow-hidden h-screen relative'> 
        {/* Man Model */}    
        <div className="absolute right-20 md:block hidden z-50 animate-manEntrance">
            <img 
                className='w-140'
                src="/vecteezy_an-african-american-man-in-a-suit-and-tie_57783893-removebg-preview.png" 
                alt="ManModel" 
            />
        </div>

        <div className='banner-img&Text items-center md:items-center md:justify-center justify-center md:flex pt-20 md:pt-20 w-screen h-screen bg-linear-to-r from-blue-500 to-purple-600'>
            <div className='banner-text gap-5 md:pl-30 pl-5 md:px-0 px-10 h-screen'>
                <span className='text-white md:pl-0 pl-5 md:px-0 px-2 font-bold md:text-lg text-xs flex gap-2 mb-5 cursor-progress'>
                    <p>WEB DESIGN</p><p>.</p><p>BUSINESS EMAIL</p><p>.</p><p>HOSTING</p><p>.</p><p>SEO</p><p>.</p><p>SUPPORT</p>
                </span>

                <h1 className='md:text-7xl text-xl md:mr-150 mr-0 pl-5 md:px-0 px-5 md:justify-left justify-full font-bold text-black absolute z-60'>Websites That Help Your Business </h1>
                <span className='animate-growEntrance relative right-0 md:text-8xl md:flex hidden text-white font-black leading-55 mt-40' style={{fontSize: 255}}>Grow</span>
                <span className='animate-growEntrance md:text-2xl md:hidden flex text-white font-black leading-30 mt-12 indent-3' style={{fontSize: 130}}>Grow</span>
                
                {/*Body */}
                <p className='md:text-md text-md pl-5 md:px-0 px-0 text-black font-medium md:justify-full justify-full md:mr-180 mr-0 mb-0 md:mt-0 mt-2'>We design and build professional websites, set up businesses email, provide secure hosting, SEO, and offer ongoing technical support so you can focus on what matters - your business.</p>
                
                {/*Button*/}
                <div className='space-x-10 absolute z-60'>
                    <Link href="/quote">
                        <button className='bg-amber-600 md:ml-0 ml-5 hover:bg-black hover:scale-105 text-white px-10 py-2 rounded-lg mt-5 md:w-75 w-80 cursor-pointer'>Get a quote</button>
                    </Link>
                    
                    <Link href="/portfolio">
                        <button className='border-white hover:border-amber-300 md:ml-0 ml-5 border-2  hover:scale-105 text-white  px-10 py-2 rounded-lg mt-5 md:w-75 w-80 cursor-pointer'>View our work
                        </button>
                    </Link>

                </div>    

                {/* Payoff */}
                <div className='flex mt-40 md:mt-25 md:gap-31 gap-2 absolute z-60'>
                    <div className='flex justify-items-start text-white'>
                        <FontAwesomeIcon icon={faClock} className='text-white w-10 md:text-2xl text-lg mr-2' />
                        <p>Professional<br />& Reliable</p>
                    </div>
                    <div className='flex justify-items-start text-white'>
                        <FontAwesomeIcon icon={faLocationPin} className='text-white w-10 md:text-2xl text-lg mr-2' />
                        <p>Lagos Based<br />(Nigeria)</p>
                    </div>
                    <div className='flex justify-items-start text-white'>
                        <FontAwesomeIcon icon={faUserClock} className='text-white w-10 md:text-2xl text-lg mr-2' />
                        <p>Ongoing<br />Support</p>
                    </div>
                </div>
            </div>  
        </div>
        {/* BG Animation*/}
         <div>
            <Lottie
                className="bottom-10 md:block hidden opacity-20 relative z-10 w-1/2 md:w-1/3 -mt-235 -md:mt-235 md:ml-90 ml-20"
                src="/bar-chart.json"
                autoplay
                loop
            />
             <Lottie
                className="bottom-0 md:hidden block opacity-20 relative z-10 w-1/2 md:w-1/3 -mt-158 md:ml-90 ml-20"
                src="/bar-chart.json"
                autoplay
                loop
            />
        </div>
    </div>
  )
}

export default index
