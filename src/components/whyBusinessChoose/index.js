import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield,faBullseye,faHeadset, faBoltLightning } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const index = () => {
  return (
    <div className='md:flex flex-2 md:gap-10 gap-0 md:px-10 px-0 md:py-0 py-10 md:overflow-hidden'>
      
      {/* Box 1*/}
      <div className='md:px-5 px-12 rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faShield} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Professional & Reliable</h2>
        <p className='md:text-sm text-gray-600'>We deliver practical digital <br />solutions designed around<br /> your business needs.
        </p>
      </div>

      <div className='md:w-0.5 w-50 md:h-25 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3 md:ml-0 ml-12'></div>

      {/* Box 2*/}
      <div className='md:px-5 px-12  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faBullseye} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Business-Focused</h2>
        <p className='md:text-sm text-gray-600'>We don't just build websites.<br />We create tools that help your<br /> business attract customers <br /> and grow.
        </p>
      </div>
      
      <div className='md:w-0.5 w-50 md:h-25 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3 md:ml-0 ml-12'></div>

      {/* Box 3*/}
      <div className='md:px-5 px-12  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faHeadset} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Ongoing Support</h2>
        <p className='md:text-sm text-gray-600'>Our relationship doesn't end <br />when your website goes live.<br /> We're available to help keep <br /> everything running.
        </p>
      </div>

      <div className='md:w-0.5 w-50 md:h-25 h-0.5 bg-gray-300 md:mt-10 mt-3 md:gap-y-0 md:mb-3 mb-3 md:ml-0 ml-12'></div>

      {/* Box 4*/}
      <div className='md:px-5 px-12  rounded-xl max-w-100 md:max-w-auto '>
        <FontAwesomeIcon 
        icon={faBoltLightning} className='text-3xl text-amber-500 text-md mr-2 mb-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Simple Process</h2>
        <p className='md:text-sm text-gray-600'>From consultation to launch<br />and ongoing support, we keep<br /> things clear and easy to <br /> understand.
        </p>
      </div>
    </div>
  )
}

export default index
