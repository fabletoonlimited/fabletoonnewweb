"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Index = () => {
    const router = useRouter();
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("/bar-code.json")
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

    return (
        <div className='w-full min-h-125 bg-linear-to-r from-white to-cyan-800 relative overflow-hidden items-center justify-center md:pt-0 pt-30'> 
            
            {/* Main structural wrapper using a 2-column layout on desktop */}
            <div className='max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-10 h-full'>
                
                <div className='flex flex-col justify-center space-y-5 z-10'>
                    
                    <span className='text-amber-600 font-bold text-xs md:text-sm tracking-wider cursor-progress'>
                        GOOGLE BUSINESS PROFILE
                    </span>

                    <h1 className='text-3xl md:text-4xl font-black text-black leading-tight -mt-3'>
                        Get Found on Google<br /> Search and Maps.
                    </h1>
                    
                    <p className='text-sm md:text-base text-gray-800 font-medium max-w-xl leading-relaxed'>
                        Help more customers find your business with a fully optimised Google Business Profile.
                        We set it up, verify it, and optimise it so you can get more visibility, more calls,
                        and more customers.
                    </p>

                    <div className='flex items-center gap-4 pt-2'>
                        <Link href="/quote">
                            <button className='bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full py-3 px-8 transition-all cursor-pointer shadow-md'>
                                Get a Quote
                            </button>
                        </Link>

                        <Link href="/contact">
                            <button className='border-white border-2 hover:bg-amber-500/20 text-black font-semibold rounded-full py-3 px-8 transition-all cursor-pointer'>
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>  

                {/* Right Side: Laptop Image (Moved to the far right side dynamically) */}
                <div className='hidden md:flex justify-end items-center relative h-full'>
                    <img 
                        src="/googleBus.png" 
                        alt="Laptop Showcase"
                        className="object-contain max-h-112.5 w-auto transform translate-x-10 dynamic-fade-in"
                    />
                </div>
               
            </div>
        </div>
    ) 
}

export default Index;