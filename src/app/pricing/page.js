"use client"
import React from 'react'
import Nav from "@/components/nav"
import Footer from '@/components/footer'
import FooterNote from "@/components/footerNote"
import { ToastContainer } from "react-toastify";
import {toast} from "react-toastify"
import PricingBanner from "@/components/pricingBanner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';
import PriceCards from "@/components/priceCards"
import { useRouter } from "next/navigation";


const page = () => {
      const router = useRouter();
  
  return (
    
    <div className='w-screen h-auto bg-gray-100'>
        <ToastContainer />
        <Nav />
        <PricingBanner />
    
        {/* prices */}
        <div className='p-10 md:px-10 px-8'>
            <PriceCards />
        </div>

        <div className='bg-amber-50 md:gap-10 gap-5 md:flex row h-auto md:p-20 p-10 shadow-2xl md:w-250 w-80 md:ml-45 ml-10 mb-40 rounded-xl items-center justify-items-center'>
          <FontAwesomeIcon icon={faBuilding} className='text-amber-600 w-5 md:text-2xl text-md mr-2' />
          <div>
            <p className='font-bold text-black '>Need a custom solution?</p>
            <p className='text-black'>Have a unique project or need additional services? Let's talk about 
            what you need and create a plan that works for you.
            </p>
          </div>
          
          <Link href='/contact'>
            <button className='bg-amber-600 text-white ml-0  hover:bg-black hover:scale-105 hover:text-white px-10 py-2 rounded-lg mt-5 md:w-60 w-60 cursor-pointer'>
              Get Started
            </button>
          </Link>
        </div>

        <Footer />
        <FooterNote />
    </div>
  )
}

export default page
