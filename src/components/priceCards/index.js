import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTable, faCloud } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const index = () => {
  return (
    <div className='md:flex justify-items-center items-center row py-3 md:gap-20 gap-0 md:space-y-0 space-y-10 md:overflow-hidden ml-35'>
      
      {/* Box 1*/}
      <div className='border-2 bg-white border-gray-100 px-7 py-10 rounded-xl w-80 md:w-100 shadow-xl animate-none hover:scale-105'>
        
        <FontAwesomeIcon 
        icon={faTable} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Starter Website</h2>
        <p className='md:text-sm text-gray-600 mb-5'>Perfect for small businesses and startups.</p>
        
        <h2 className='text-black font-black text-lg leading-5 mb-6'>N800,000 - N2,000,000</h2>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>5-page website</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Whatsapp button</p>
        </div>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Contact form</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>SSL certificate</p>
        </div>

        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Basic SEO</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Hosting setup</p>
        </div>

        <Link href='/contact'>
          <button className='border-black border-2 hover:border-0 text-black md:ml-0 ml-5 hover:bg-amber-600 hover:scale-105 hover:text-white px-10 py-2 rounded-lg mt-5 md:w-60 w-60 cursor-pointer'>
            Get Started
          </button>
        </Link>
      </div>

      {/* Box 2*/}
      <div className='relative border-2 bg-white border-gray-100 px-7 py-10 rounded-xl w-80 md:w-100 shadow-xl animate-none hover:scale-105'>
          
        {/* Using negative positioning to break past padding and cover the 2px border */}
        <span className='absolute -top-0.5 -right-0.5 bg-amber-500 w-24 h-10 flex justify-center items-center rounded-bl-lg rounded-tr-xl font-black'>
          <p className='text-white'>Best Seller</p>
        </span>
               
        <FontAwesomeIcon 
        icon={faTable} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Business Website</h2>
        <p className='md:text-sm text-gray-600 mb-5'>For growing businesses that need more.</p>
        
        <h2 className='text-black font-black text-lg leading-5 mb-6'>N2,000,000 - N10,000,000</h2>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>8-12 pages</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Professional copy assistant</p>
        </div>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Google Business Profile setup</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>SSL certificate</p>
        </div>

        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'> Multiple business emails</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Hosting setup</p>
        </div>

        <Link href='/contact'>
          <button className='bg-amber-600 hover:bg-background md:border-0 border-0 text-white hover:text-black md:ml-0 ml-5 hover:border-black hover:border-2 hover:scale-105 px-10 py-2 rounded-lg mt-5 md:w-60 w-60 cursor-pointer'>
            Get Started
          </button>
        </Link>
      </div>

      {/* Box 3*/}
      <div className='border-2 bg-white border-gray-100 px-7 py-10 rounded-xl w-80 md:w-100 shadow-xl animate-none hover:scale-105'>
        
        <FontAwesomeIcon 
        icon={faCloud} className=' md:text-xl text-amber-500 text-md mr-2' />
        <h2 className='text-black font-black text-lg leading-5 mb-2'>Business care</h2>
        <p className='md:text-sm text-gray-600 mb-5'>Ongoing support for peace of mind.</p>
        
        <h2 className='text-black font-black text-lg leading-5 mb-6'>N200,000 - N10,000,000 / month</h2>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Hosting & Domain Management</p>
        </div>
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Website updates</p>
        </div>
        
        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Backup & security monitoring</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Business email support</p>
        </div>

        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Technical support</p>
        </div>


        <div className='flex'>
          <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
          <p className='text-black'>Monthly reports</p>
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
