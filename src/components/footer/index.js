import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebookSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const index = () => {
  return (
    <div className='w-full h-auto bg-gray-600 md:flex block md:space-x-40 space-x-0 md:py-20 py-20 md:space-y-0 space-y-10 md:pl-0 pl-20'>
      
      <Link href='/'>
        <img 
          className='footer-logo md:w-85 w-65 md:-mt-10 -mt-10 md:mb-2 mb-0 md:pl-8 pl-0 md:ml-1 -ml-18'
          src="/FL_Logo_white.png"  
          alt="logo" 
        />
        <p className='md:pl-5 pl-10 md:mt-2 mt-2 md:ml-15 -ml-18 text-white mb-10'>Lagos-based digital solutions <br />for businesses across Nigeria. </p>
      </Link>

      <div className='Quick Links md:ml-0 -ml-8'>
        <h6 className='text-white font-black mb-2'>Quick Links</h6>
        <ul>
          <span className='text-white hover:text-blue-300 cursor-pointer'>
            <li ><Link href= '/'>Home</Link></li>
          </span>
          <span className='text-white hover:text-blue-300 cursor-pointer'>
            <li><Link href='/services'>Services</Link></li>
          </span>
          <span className='text-white hover:text-blue-300 cursor-pointer'>
            <li><Link href='/portfolio'>Portfolio</Link></li>
          </span>
          <span className='text-white hover:text-blue-300 cursor-pointer'>
            <li><Link href='/pricing'>Pricing</Link></li>
          </span>
          <span className='text-white hover:text-blue-300 cursor-pointer'>
            <li><Link href='/about'>About</Link></li>
          </span>
          <span className='text-white hover:text-blue-300 cursor-pointer'>
            <li><Link href='/contact'>Contact</Link></li>
          </span>
        </ul>
      </div>

      <div className='Services md:ml-0 -ml-8'>
        <h6 className='text-white font-black mb-2'>Our Services</h6>
        <ul>
          <span className='text-white cursor-pointer'><li>Website Design & Development</li></span>
          <span className='text-white cursor-pointer'><li>Business Email</li></span>
          <span className='text-white cursor-pointer'><li>Hosting & Maintenance</li></span>
          <span className='text-white cursor-pointer'><li>Google Business Profile</li></span>
          <span className='text-white cursor-pointer'><li>About</li></span>
          <span className='text-white cursor-pointer'><li>Digital Marketing</li></span>
        </ul>
      </div>

      <div className='Contact md:ml-0 -ml-8'>
        <h6 className='text-white font-black mb-2'>Contact Us</h6>
        <ul>
          <span className='text-white cursor-pointer'><li>+234 703 733 0597</li></span>
          <span className='text-white cursor-pointer'><li>contact@fabletoon.com</li></span>
          <span className='text-white cursor-pointer'><li>Surulere, Lagos, Nigeria.</li></span>
          <span className='text-white cursor-pointer flex mt-5'>
            <Link href="https://www.linkedin.com/company/fabletoonlimited/"><FontAwesomeIcon icon={faLinkedin} className='text-white w-10 md:text-2xl text-lg mr-2' /></Link>
            <Link href="https://www.instagram.com/fabletoon_limited/"><FontAwesomeIcon icon={faInstagram} className='text-white w-10 md:text-2xl text-lg mr-2' /></Link>
            <Link href="https://web.facebook.com/people/Fabletoon-Limited/61581137965939/?rdid=RYAfVUfLzjiZ3fiD&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F14nP5c3oBjW%2F%3F_rdc%3D1%26_rdr">
            <FontAwesomeIcon icon={faFacebookSquare} className='text-white w-10 md:text-2xl text-lg mr-2' />
            </Link>
            <Link href="https://x.com/FabletoonA"><FontAwesomeIcon icon={faXTwitter} className='text-white w-10 md:text-2xl text-lg mr-2' />
            </Link>
          </span>
        </ul>
      </div>
    </div>
  )
}

export default index
