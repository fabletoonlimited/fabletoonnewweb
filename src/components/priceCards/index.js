import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTable, faCloud } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const index = () => {
  return (
    <div className='md:flex justify-items-center items-center row py-3 md:gap-20 gap-0 md:space-y-0 space-y-10 md:overflow-hidden ml-35'>
      
      {/* Box 1*/}
      <div className='border-2 bg-white border-gray-100 px-7 py-10 rounded-xl max-w-100 md:max-w-auto shadow-xl animate-none hover:scale-105'>
        
        <FontAwesomeIcon 
        icon={faTable} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Starter Website</h2>
        <p className='md:text-sm text-gray-600 mb-5'>Perfect for small businesses and statups.</p>
        
        <h2 className='text-black font-black text-lg leading-5 mb-6'>N750,000 - N1,000,000</h2>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>5-page website</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Whatsapp button</p>
        </div>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Contact form</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>SSL certificate</p>
        </div>

        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Basic SEO</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Hosting setup</p>
        </div>

        <Link href='/contact'>
          <button className='border-black border-2 hover:border-0 text-black md:ml-0 ml-5 hover:bg-amber-600 hover:scale-105 hover:text-white px-10 py-2 rounded-lg mt-5 md:w-60 w-60 cursor-pointer'>
            Get Started
          </button>
        </Link>
      </div>

      {/* Box 2*/}
      <div className='border-2 bg-white border-gray-100 px-7 py-10 rounded-xl max-w-100 md:max-w-auto shadow-xl animate-none hover:scale-105'>
        
        <FontAwesomeIcon 
        icon={faTable} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Business Website</h2>
        <p className='md:text-sm text-gray-600 mb-5'>For growing businesses that need more.</p>
        
        <h2 className='text-black font-black text-lg leading-5 mb-6'>N1,200,000 - N15,000,000</h2>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>8-12 pages</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Professional copy assistant</p>
        </div>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Google Business Profile setup</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>SSL certificate</p>
        </div>

        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p> Multiple business emails</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Hosting setup</p>
        </div>

        <Link href='/contact'>
          <button className='bg-amber-600 hover:bg-background md:border-0 border-0 text-white hover:text-black md:ml-0 ml-5 hover:border-black hover:border-2 hover:scale-105 px-10 py-2 rounded-lg mt-5 md:w-60 w-60 cursor-pointer'>
            Get Started
          </button>
        </Link>
      </div>

      {/* Box 3*/}
      <div className='border-2 bg-white border-gray-100 px-7 py-10 rounded-xl max-w-100 md:max-w-auto shadow-xl animate-none hover:scale-105'>
        
        <FontAwesomeIcon 
        icon={faCloud} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Business care</h2>
        <p className='md:text-sm text-gray-600 mb-5'>Ongoing support for peace of mind.</p>
        
        <h2 className='text-black font-black text-lg leading-5 mb-6'>N200,000 - N1,000,000 / month</h2>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Hosting & Domain Management</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Website updates</p>
        </div>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Backup & security monitoring</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Business emaail support</p>
        </div>

        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Technical support</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p>Monthly reports</p>
        </div>

        <Link href='/contact'>
          <button className='border-black border-2 hover:border-0 text-black md:ml-0 ml-5 hover:bg-amber-600 hover:scale-105 hover:text-white px-10 py-2 rounded-lg mt-5 md:w-60 w-60 cursor-pointer'>
            Get Started
          </button>
        </Link>
      </div>

    </div>
  )
}

export default index
