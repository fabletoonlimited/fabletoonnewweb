"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import {Lottie} from "lottie-react";
import "./banner.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserClock, faLocationPin } from "@fortawesome/free-solid-svg-icons"
import ServiceCards from "@/components/servicesCards"


const index = () => {
    const router = useRouter();
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("/bar-code.json")
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

return (
    <div className='banner w-full md:overflow-hidden h-auto relative'> 
        {/* Your Digital Partner*/}    
        <div className="absolute md:right-20 right-10 z-50 md:mt-3 mt-4">
            <span className='relative right-0 md:text-8xl md:flex block text-black font-black leading-8 mt-115' style={{fontSize: 30}}>Your<br />Digital Partner<br /> in Lagos.</span>
                
          <hr className="md:text-amber-600 text-white md:w-40 w-50 border-2 rounded-2xl mt-2 -mx-0.5" />
        </div>

        <div className='banner-img&Text items-center md:items-center md:justify-center justify-center md:flex pt-12 md:pt-5 w-screen h-160 bg-linear-to-r from-amber-400 to-white'>
            <div className='banner-text gap-5 md:pl-30 pl-5 md:px-0 px-10 '>
                <span className='text-white md:pl-0 pl-5 md:px-0 px-2 font-bold md:text-lg text-xs flex gap-2 md:mb-0 cursor-progress'>
                    <p>OUR SERVICES</p>
                </span>

                <h1 className='md:text-5xl text-2xl md:mr-150 mr-0 pl-5 md:px-0 px-5 md:justify-left justify-full font-bold text-black absolute z-60'>Everything Your Business </h1>
                
                <span className='animate-growEntrance relative right-0 md:text-8xl md:flex hidden text-black font-black md:leading-40 mt-20 mb-2' style={{fontSize: 200}}>Needs <br />Online</span>
                
                <span className='animate-growEntrance md:text-2xl md:hidden flex text-black font-black md:leading-20 leading-20 mt-15 ml-3 mb-2' style={{fontSize: 100}}>Needs <br /> Online</span>
                
                {/*Body */}
                <p className='md:text-md text-md md:pl-0 pl-4 text-black font-medium justify-full md:mr-175 mr-0 mb-0 md:mt-0 mt-2'>From professional websites to business emails and ongions support, we provide the digital solutions that help your business look credible, reach more customers and grow.
                </p>
            </div>  
        </div>
        
        {/* Services */}
        <div className='p-25'>
            <ServiceCards />
        </div>
    </div>
  )
}

export default index
