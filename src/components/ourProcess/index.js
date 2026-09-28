import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble,faBullseye,faHeadset, faCheckSquare, faRocket, faHammer, faBookBookmark } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const index = () => {
  return (
    <div className='md:flex flex-2 md:gap-10 gap-0 md:px-10 px-0 md:py-0 py-3 md:overflow-hidden'>
      
      {/* Box 1*/}
      <div className='rounded-xl max-w-100 md:max-w-200'>
        <FontAwesomeIcon 
        icon={faBookBookmark} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-sm leading-5 mb-2'>We Learn About Your Business.</h2>
        <p className='md:text-sm text-gray-600'>We start by understanding your business, goals audience, and what you need online.
        </p>
      </div>

      <div className='md:w-0.5 w-50 md:h-45 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3'></div>

      {/* Box 2*/}
      <div className='md:px-5 px-0  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faCheckDouble} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-sm leading-5 mb-2'>We Plan Your Solution</h2>
        <p className='md:text-sm text-gray-600'>We recommend the right combination of website, email, hosting and digital service.
        </p>
      </div>
      
      <div className='md:w-0.5 w-50 md:h-45 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3'></div>

      {/* Box 3*/}
      <div className='md:px-5 px-0  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faHammer} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-sm leading-5 mb-2'>We Design & Build</h2>
        <p className='md:text-sm text-gray-600'>We create your solution with a focus on usability performance and your brand.
        </p>
      </div>

      <div className='md:w-0.5 w-50 md:h-45 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3'></div>

      {/* Box 4*/}
      <div className='md:px-5 px-0  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faCheckSquare} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-sm leading-5 mb-2'>Your Review and Approve</h2>
        <p className='md:text-sm text-gray-600'>You get the opportunity to review the work and request adjustemnts before launch.
        </p>
      </div>
     
      <div className='md:w-0.5 w-50 md:h-45 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3'></div>

      {/* Box 5*/}
      <div className='md:px-5 px-0  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faRocket} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-sm leading-5 mb-2'>We Launch</h2>
        <p className='md:text-sm text-gray-600'>Once everything is approved, we get your website and digital services online.
        </p>
      </div>
      
      <div className='md:w-0.5 w-50 md:h-45 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3'></div>

      {/* Box 6*/}
      <div className='md:px-5 px-0 rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faHeadset} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-sm leading-5 mb-2'>We Keep Supporting You</h2>
        <p className='md:text-sm text-gray-600'>Need updates, maintennace, or technical help? We're here when you need us.
        </p>
      </div>
    </div>
  )
}

export default index
