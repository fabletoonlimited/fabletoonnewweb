import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop,faEnvelope,faCloudArrowUp, faLocationPin, faBullhorn,faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const index = () => {
  return (
    <div className='row'>
      <div className='md:flex flex-2 py-3 md:gap-15 gap-0 md:space-y-0 space-y-10 md:overflow-hidden mb-5'>
        
        {/* Box 1*/}
        <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100  shadow-lg animate-none hover:scale-105'>
          
          <img src="/ABF656FF-92F1-4C60-9502-BAD9A81219F4.jpeg" />
          <Link href='https://ejiroamostafiri.com/'>
            <span className='flex gap-2 text-black hover:text-gray-500 mt-3 items-center'>
              <p>View Live</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>

        {/* Box 2*/}
        <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 shadow-lg animate-none hover:scale-105'>
          
          <img className='w-100' 
          src="/04118A6B-1E99-43F0-AFA6-37541A729CBF.jpeg" />
          <Link href='https://okuper.com/'>
            <span className='flex gap-2 text-black hover:text-gray-500 mt-3 items-center'>
              <p>View Live</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>
        
        {/* Box 3*/}
            <div className='border-2 border-gray-100 bg-white px-5 py-5 rounded-xl w-100 md:w-100 shadow-lg animate-none hover:scale-105'>
          
          <img 
          className='mb-10'
          src="/89369868-AB20-4C60-BB17-BA019E857056_4_5005_c.jpeg" />
          <Link href='https://www.figma.com/proto/igfqTuaT2zMAlrTPVNtLZ6/Tisora-e-Commerce?page-id=0%3A1&node-id=2-2&p=f&viewport=287%2C102%2C0.26&t=6NJaP6CovMaXXjQY-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2'>
            <span className='flex gap-2 text-black hover:text-gray-500 mt-3 items-center'>
              <p>View Prototype</p>
              <FontAwesomeIcon icon={faArrowRight} className=' md:text-md text-md mr-2' />
            </span>
          </Link>
        </div>
      </div>


      <Link href="/portfolio">
        <p className='text-amber-600 hover:text-black flex justify-end '>View all</p>
      </Link>
    </div>
  )
}

export default index
