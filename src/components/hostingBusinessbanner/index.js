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
        <div className='w-full min-h-125 bg-linear-to-l from-white to-blue-50 relative overflow-hidden items-center justify-center md:pt-0 pt-30'> 
            
            {/* Main structural wrapper using a 2-column layout on desktop */}
            <div className='max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-10 h-full'>
                
                <div className='flex flex-col justify-center space-y-5 z-10'>
                    
                    <span className='text-amber-600 font-bold text-xs md:text-sm tracking-wider cursor-progress'>
                        HOSTING & MAINTENANCE
                    </span>

                    <h1 className='text-3xl md:text-4xl font-black text-black leading-tight -mt-3'>
                        Reliable Hosting and<br />Ongoing Support.
                    </h1>
                    
                    <p className='text-sm md:text-base text-gray-800 font-medium max-w-xl leading-relaxed'>
                        Keep your website fast, secure and always online with our
                        reliable hosting and maintenance services. We handle the
                        technical details so you can focus on running your business.
                    </p>

                    <div className='flex items-center gap-4 pt-2'>
                        <Link href="/quote">
                            <button className='bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full py-3 px-8 transition-all cursor-pointer shadow-md'>
                                Get a Quote
                            </button>
                        </Link>

                        <Link href="/contact">
                            <button className='border-amber-500 border-2 hover:bg-amber-500/10 text-black font-semibold rounded-full py-3 px-8 transition-all cursor-pointer'>
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>  

                {/* Right Side: Laptop Image (Moved to the far right side dynamically) */}
                <div className='hidden md:flex justify-end items-center h-full mt-15'>
                    <img 
                        src="/database-analysis-server-hosting-management_999616-861.avif" 
                        alt="Hosting DB image"
                        className="object-contain max-h-112.5 w-auto transform translate-x-10 dynamic-fade-in"
                    />
                </div>
               
            </div>
        </div>
    ) 
}

export default Index;