"use client"

import React from 'react'
import Nav from '@/components/nav'
import ServiceBanner from "@/components/serviceBanner"
import Footer from '@/components/footer'
import FooterNote from "@/components/footerNote"
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

const page = () => {
  const router = useRouter();

  const handleSubmit = () => { 
    toast.success("Hold on!!")
      setTimeout(() => {
      router.push("/contact")
      }, 2000)
    };

  return (
    <div className='page bg-white h-auto w-screen'>
      <ToastContainer />
      
      <Nav />
      <ServiceBanner />

      {/*Services Bottom Banner*/}
      <div className='md:flex md:h-80 h-80 block md:mx-25 mx-6 md:px-10 px-10 p-10 md:w-300 w-auto bg-gray-100 gap-60 mb-20 rounded-xl'>
        <img src="/laptop.png" 
        className='md:flex hidden h-100 -mt-20'/>
        <div>
          <h4 className='font-bold text-black mt-10'>Not sure which service is right for you?</h4>
            <p>Book a free consultation and we'll recommend the best solutions for your business needs.</p>
      
            <button 
            type='button'
            onClick={handleSubmit}
            className="mt-6 text-white p-5 px-20 rounded-xl bg-amber-600 hover:bg-amber-400 cursor-pointer">
              Book a Free Consultation
            </button>
        </div>
      </div>
      <Footer />
      <FooterNote />
    </div>
  )
}

export default page
