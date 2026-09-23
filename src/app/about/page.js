"use client"
import React from 'react'
import Nav from "@/components/nav"
import Footer from '@/components/footer'
import FooterNote from "@/components/footerNote"
import { ToastContainer } from "react-toastify";
import {toast} from "react-toastify"
import { useRouter } from 'next/navigation'
import AboutBanner from "@/components/aboutBanner"
import ServicesCards from "@/components/servicesCards"

const page = () => {
    const router = useRouter();
  
    const handleSubmit = () => { 
      toast.success("Hold on!!")
        setTimeout(() => {
        router.push("/contact")
        }, 2000)
      };
  return (
    <div className='w-screen h-auto'>
        <ToastContainer />
        <Nav />
        <AboutBanner />

        {/*Body*/}
        <div className='md:-mt-30 -mt-80 md:text-left text-justify p-20'>
            <p>We help businesses build online presence with
            professional websites, business email, reliable hosting,
            and ongoing support.
            
            Fabletoon is a Lagos based digital solutions company focused
            on helping businesses across Nigeria establish, improve, and 
            maintain their online presence.

            Whether you're starting a new business, upgrading an existing
            website, or simply need reliable technical support, we make the
            process simple and straightforward.
            </p>
        </div>

        {/*What We Do*/}
        <div className='p-20 md:-mt-25 -mt-25'>
          <p className='font-black text-amber-600 text-sm'>WHAT WE DO</p>
            <h2 className='font-black text-black text-2xl'>What We Do</h2>
            <p className='mb-4'>We offer a range of digital services to help your businesses look professional,
                get found online, and stay secure.
            </p>
            
            <ServicesCards />
        </div>

        {/*Why Businesses choose Us*/}
        <div className='p-20 md:-mt-25 -mt-25'>
            <p className='font-black text-amber-600 text-sm'>WHAT WE DO</p>
            <h2 className='font-black text-black text-2xl'>Why Businesses Choose Fabletoon</h2>
        
            <ServicesCards />
        </div>

        {/*Our Processes*/}
        <div className='p-20 md:-mt-25 -mt-25'>
            <p className='font-black text-amber-600 text-sm'>OUR PROCESS</p>
            <h2 className='font-black text-black text-2xl'>Our Process</h2>
            <p className='mb-4'>A simple clear process to get your business online and growing.
            </p>
            
            <ServicesCards />
        </div>

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