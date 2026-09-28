import React from 'react'
import Nav from "@/components/nav"
import Footer from '@/components/footer'
import FooterNote from "@/components/footerNote"
import { ToastContainer } from "react-toastify";
import {toast} from "react-toastify"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
    <div className='w-screen h-auto space-y-10'>
      <ToastContainer />
      <Nav />
        <h1 className='text-3xl md:text-4xl font-black text-black leading-tight mt-10 ml-15'>
            Portfolio
        </h1>
    
      <div className='md:flex row gap-8 md:ml-0 ml-15 justify-center items-center mb-15'>
          
        {/* Box 1*/}
        <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 md:mb-0 mb-10 shadow-lg animate-none hover:scale-105'>
              
          <img src="/ABF656FF-92F1-4C60-9502-BAD9A81219F4.jpeg" />
          <Link href='https://ejiroamostafiri.com/'>
            <span className='flex gap-2 text-black hover:text-amber-500 mt-3 items-center'>
              <p>View Live</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>

        {/* Box 2*/}
        <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 md:mb-0 mb-10 shadow-lg animate-none hover:scale-105'>
              
          <img className='w-100' 
          src="/04118A6B-1E99-43F0-AFA6-37541A729CBF.jpeg" />
          <Link href='https://okuper.com/'>
            <span className='flex gap-2 text-black hover:text-amber-500 mt-3 items-center'>
              <p>View Live</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>
            
        {/* Box 3*/}
        <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 md:mb-0 mb-10 shadow-lg animate-none hover:scale-105'>
              
         <img 
          className='mb-10'
          src="/89369868-AB20-4C60-BB17-BA019E857056_4_5005_c.jpeg" />
          <Link href='https://www.figma.com/proto/igfqTuaT2zMAlrTPVNtLZ6/Tisora-e-Commerce?page-id=0%3A1&node-id=2-2&p=f&viewport=287%2C102%2C0.26&t=6NJaP6CovMaXXjQY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2'>
            <span className='flex gap-2 text-black hover:text-amber-500 mt-3 items-center'>
              <p>View Prototype</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>    
      </div>

      <div className='md:flex row gap-8 md:ml-0 ml-15 justify-center items-center mb-15'>
        {/* Box 4*/}
        <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 md:mb-0 mb-10 shadow-lg animate-none hover:scale-105'>
              
          <img src="/BA67B8D5-1AD9-4D9B-8A42-80D3AE2F4FFF.jpeg" />
          <Link href='https://www.figma.com/design/KYJYmU6ZeIukg4jP95IDRK/Lillyluxxee?node-id=47-254&t=3l6qhj6r8EmPEqsk-1'>
            <span className='flex gap-2 text-black hover:text-amber-500 mt-3 items-center'>
              <p>View Prototype</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>

        {/* Box 5*/}
        <div className='border-2 border-gray-100 items-center justify-center flex gap-5 bg-white px-5 py-5 h-79 rounded-xl w-100 md:w-100 md:mb-0 mb-10 shadow-lg animate-none hover:scale-105'>
              
          <img 
          className='h-60'
          src="/0E4A68F1-DD80-4AD6-82F9-0F8D9D0B6416_4_5005_c.jpeg" />
          <Link href='https://www.figma.com/proto/6Tgsiy7ik4WztWGpEeLyU6/Ajo-Connect-UI?page-id=0%3A1&node-id=1306-274&viewport=6314%2C690%2C1.02&t=xldmMLbbExNFXImB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1306%3A262'>
            <span className='flex gap-2 text-black hover:text-amber-500 mt-3 items-center'>
              <p>View Prototype</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>

        {/* Box 6*/}
        {/* <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 md:mb-0 mb-10 shadow-lg animate-none hover:scale-105'>
              
          <img src="/ABF656FF-92F1-4C60-9502-BAD9A81219F4.jpeg" />
          <Link href='https://ejiroamostafiri.com/'>
            <span className='flex gap-2 text-black hover:text-gray-500 mt-3 items-center'>
              <p>View Prototype</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div> */}
      </div>
        
      <Footer />
      <FooterNote />
    </div>
  )
}

export default page
