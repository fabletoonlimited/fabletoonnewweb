import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop,faEnvelope,faCloudArrowUp, faLocationPin, faBullhorn,faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const index = () => {
  return (
    <div className='md:flex row py-3 md:gap-8 gap-0 md:space-y-0 space-y-10 md:overflow-hidden'>
      
      {/* Box 1*/}
      <div className='md:border-2 bg-white border-gray-100 px-5 py-5 rounded-xl w-80 md:w-100 ml-0 shadow-lg animate-none hover:scale-105'>
        
        <FontAwesomeIcon 
        icon={faDesktop} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Website Design & <br />Development
        </h2>
        <p className='md:text-sm text-gray-600'>Modern, responsive websites <br />that look great and perform<br /> well on all devices.
        </p>
        <Link href='/webDevelopment'>
          <span className='flex gap-2 text-amber-500 hover:text-gray-500 mt-3 items-center'>
            <p>Learn more </p>
            <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
          </span>
        </Link>
      </div>

      {/* Box 2*/}
      <div className='border-2 bg-white border-gray-100 px-5 py-5 rounded-xl w-80 md:w-100 shadow-lg animate-none hover:scale-105'>
        
        <FontAwesomeIcon icon={faEnvelope} className=' md:text-xl text-md text-amber-500 mr-2' />
        <h2 className='text-black font-black text-xl leading-5 mb-6'>Business Email
        </h2>
      <p className='text-sm text-gray-600 mb-5'>Professional email addresses <br />using your company domain<br /> (eg. you@yourcompany.com).
        </p>
        <Link href='/businessEmail'>
          <span className='flex gap-2 text-amber-500 hover:text-gray-500 mt-3 items-center'>
            <p>Learn more </p>
            <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
          </span>
        </Link>
      </div>
      
      {/* Box 3*/}
      <div className='border-2 bg-white border-gray-100 px-5 py-5 rounded-xl w-80 md:w-100 shadow-lg animate-none hover:scale-105'>
        
        <FontAwesomeIcon icon={faCloudArrowUp} className=' md:text-xl text-md text-amber-500 mr-2' />
        <h2 className='text-black font-black text-xl leading-6 mb-1'>Hosting & <br /> Maintenance
        </h2>
        <p className='text-sm text-gray-600 mb-2'>Keep your website secure, <br />updated and running<br /> smoothly.
        </p>
        <Link href='/hosting&maintenance'>
          <span className='flex gap-2 text-amber-500 hover:text-gray-500 mt-3 items-center'>
            <p>Learn more </p>
            <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
          </span>
        </Link>
      </div>
      
      {/* Box 4*/}
      <div className='border-2 bg-white border-gray-100 px-5 py-5 rounded-xl w-80 md:w-100 shadow-lg animate-none hover:scale-105'>
        
        <FontAwesomeIcon icon={faLocationPin} className=' md:text-xl text-md text-amber-500 mr-2' /> 
        <h2 className='text-black font-black text-xl leading-6 mb-1'>Google Business <br />Profile
        </h2>
        <p className='text-sm text-gray-600 mb-2'>Help customers find your <br />business on Google Search<br /> and Maps.
        </p>
        <Link href='/googleBusiness'>
          <span className='flex gap-2 text-amber-500 hover:text-gray-500 mt-3 items-center'>
            <p>Learn more </p>
            <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
          </span>
        </Link>
      </div>
      
      {/* Box 5*/}
      <div className='border-2 bg-white border-gray-100 px-5 py-5 rounded-xl w-80 md:w-100 md:max-w-auto shadow-lg animate-none hover:scale-105'>
        
        <FontAwesomeIcon icon={faBullhorn} className=' md:text-xl text-md text-amber-500 mr-2' />
        <h2 className='text-black font-black text-xl leading-5 mb-6'>Digital Marketing
        </h2>
        <p className='text-sm text-gray-600 mb-5'>Grow your reach with SEO <br />social media and online<br /> advertising.
        </p>
        <Link href='/digitalMarketing'>
          <span className='flex gap-2 text-amber-500 hover:text-gray-500 mt-3 items-center'>
            <p>Learn more </p>
            <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default index
