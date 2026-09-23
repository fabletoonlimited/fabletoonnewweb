"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import {Lottie} from "lottie-react";
import "./banner.scss"
import PriceCards from "@/components/priceCards"


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
        <div className="absolute md:right-20 right-57 z-50 md:-mt-4 mt-0">         
            <span className='relative right-0 md:text-8xl md:flex block text-black font-black leading-6 md:mt-55 mt-75' style={{fontSize: 20}}>
                Quality websites.<br />Real business results.
            </span>
                
          <hr className="text-amber-600  md:w-40 w-50 border-2 rounded-2xl mt-2 -mx-0.5" />
        </div>

        <div className='banner-img&Text items-center md:items-center md:justify-center justify-center md:flex pt-12 md:pt-80 w-screen md:h-50 h-100 bg-linear-to-r from-white to-amber-100'>
            <div className='banner-text gap-5 md:pl-30 pl-5 md:px-0 px-10 -mt-90'>
                
                <span className='text-amber-600 md:mt-0 mt-100 md:pl-0 pl-10 md:px-0 px-2 font-bold md:text-lg text-xs flex gap-2 md:mb-0 cursor-progress'>
                    <p>OUR PRICING</p>
                </span>

                <h1 className='md:text-3xl text-2xl md:mr-150 mr-0 md:pl-0 pl-10 mt-0  md:px-0 px-5 md:justify-left justify-full font-bold text-black absolute md:mb-5 z-60'>Simple, Transparent Pricing</h1>
                
                {/*Body */}
                <p className='md:text-md text-md -mx-10 md:px-10 px-20 text-black font-medium md:justify-full justify-full md:mr-180 mr-0 mb-0 md:mt-12 mt-15'>Choose the right plan for your business. <br />All plans include responsive design, clean code and dedicated support.
                </p>
            </div>  
        </div>
        
        {/* prices */}
        <div className='md:p-25 md:pr-75 pr-30 md:-mt-35 mt-10 items-center justify-items-center mb-20'>
            <PriceCards />
        </div>
    </div>
  ) 
}

export default index
