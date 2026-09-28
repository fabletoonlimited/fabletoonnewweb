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
import WhyBusinessesChoose from"@/components/whyBusinessChoose"
import OurProcess from"@/components/ourProcess"


const page = () => {
    const router = useRouter();
  
    const handleSubmit = () => { 
      toast.success("Hold on!!")
        setTimeout(() => {
        router.push("/contact")
        }, 2000)
      };
  return (
    <div className='w-screen h-auto bg-gray-100'>
      <ToastContainer />
      <Nav />
      <AboutBanner />

        {/*Body*/}
        <div className='md:-mt-20 mt-5 md:text-left text-justify p-10 mb-10'>
          <p className='text-black'>We help businesses build online presence with
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
        <div className='p-10 md:-mt-10 -mt-15 mb-20'>
          <p className='font-black text-amber-600 text-sm'>WHAT WE DO</p>
            <h2 className='font-black text-black text-2xl'>What We Do</h2>
              <p className='mb-4 text-black'>We offer a range of digital services to help your businesses look professional,
                get found online, and stay secure.
              </p>

          <ServicesCards />
        </div>

        {/*Why Businesses choose Us*/}
        <div className='md:pt-12 pt-15 md:pl-8 pl-0 justify-around md:w-7xl w-80 md:ml-20 ml-10 bg-amber-50 rounded-3xl md:h-80 mb-25'>
          <p className='font-black text-amber-600 md:pl-15 pl-5 text-sm justify-left'>WHY BUSINESSES CHOOSE FABLETOON</p>
          <h2 className='font-black text-black md:pl-15 pl-5 text-3xl md:mb-5 mb-0'>Why Businesses Choose Fabletoon</h2>  
          <WhyBusinessesChoose />
        </div>

        {/*Our Process*/}
        <div className='p-20 md:-mt-25 -mt-25 mb-10'>
            <p className='font-black text-amber-600 text-sm'>OUR PROCESS</p>
            <h2 className='font-black text-black text-3xl'>Our Process</h2>
            <p className='mb-6 text-black'>A simple clear process to get your business online and growing.</p>
          
          <OurProcess />
        </div>

      {/*Services Bottom Banner*/}
      <div className='md:flex md:h-80 h-100 shadow-2xl block md:mx-25 mx-6 md:px-10 px-10 p-10 md:w-300 w-auto bg-white gap-60 mb-20 rounded-xl'>
        <img src="/laptop.png" 
        className='md:flex hidden h-100 -mt-20'
      />
        <div>
          <h4 className='font-bold text-xl text-black mt-10 mb-4'>Not sure which service is right for you?</h4>
            <p className='text-black'>Book a free consultation and we'll recommend the best solutions for your business needs.</p>
      
            <button 
              type='button'
              onClick={handleSubmit}
              className="mt-6 text-white text-xl font-black p-5 px-10 rounded-full bg-amber-600 hover:bg-amber-400 cursor-pointer">
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