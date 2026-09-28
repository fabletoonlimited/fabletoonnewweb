import React from "react";
import Nav from "@/components/nav";
import Banner from "@/components/indexBanner";
import Footer from "@/components/footer";
import ServicesCards from "@/components/servicesCards";
import FeaturedWork from "@/components/featuredWork";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import FooterNote from "@/components/footerNote"
import Link from "next/link"

const page = () => {

  return (
    <div className="page bg-gray-100 overflow-hidden">
      <Nav />
      <Banner />

      {/* Services */}
      <div className="p-10">
        <h1 className="text-black font-bold text-3xl mt-5">Our Services</h1>
        <p className="text-black mb-5">
          Everything your business needs to build and grow online.
        </p>
        <ServicesCards />
      </div>

      {/* Featured Work */}
      <div className="p-10 mb-20">
        <h1 className="text-black font-bold text-3xl mt-5">Featured Work</h1>
        <p className="text-black mb-5">
          A few of the websites we've built for amazing businesses.
        </p>
        <FeaturedWork />
      </div>

      {/* How it Works */}
      <div className="p-15 w-auto bg-gray-200 h-90 ">
        <h1 className="text-black font-bold text-3xl mt-5">How It Works</h1>
        <p className="text-gray-700 mb-5">
          Getting your website online is simple.
        </p>

        {/*Steps Desktop*/}
        <div className="steps flex md:ml-20 ml-0 md:gap-0 gap-10 md:overflow-hidden overflow-x-scroll p-4">
          <div className="hover:scale-105 md:block hidden one">
            <div className="rounded-full bg-amber-500  hover:bg-amber-700/75 flex items-center justify-center h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">1</p>
            </div>
            <p className="text-xs text-black text-center">
              Tell us about<br /> your business
            </p>
          </div>

          {/*Mobile */}
          <div className="hover:scale-105 md:hidden block">
            <div className="rounded-full bg-amber-500  hover:bg-amber-700/75 flex items-center justify-center h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">1</p>
            </div>
            <p className="text-xs text-black text-center mt-2">
              Tell us about your business
            </p>
          </div>
          <hr className="text-gray-300 md:w-40 w-5 mt-8 -mx-3.5" />

          {/*Desktop*/}
          <div className="hover:scale-105 md:block hidden">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">2</p>
            </div>
            <p className="text-xs text-black text-center">
              We plan your<br /> website
            </p>
          </div>

          {/*Mobile */}
          <div className="hover:scale-105 md:hidden block">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">2</p>
            </div>
            <p className="text-xs text-black text-center mt-2">
              We plan your website
            </p>
          </div>
          <hr className="text-gray-300 md:w-40 w-5 mt-8 -mx-3" />

          {/*Desktop*/}
          <div className="hover:scale-105 md:block hidden">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">3</p>
            </div>
            <p className="text-xs text-black text-center">
              We design &<br /> build
            </p>
          </div>

          {/*Mobile*/}
          <div className="hover:scale-105 md:hidden block">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">3</p>
            </div>
            <p className="text-xs text-black text-center mt-2">
              We design & build
            </p>
          </div>
          <hr className="text-gray-300 md:w-40 w-5 mt-8 -mx-2" />

          {/*Desktop*/}
          <div className="hover:scale-105 md:block hidden">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">4</p>
            </div>
            <p className="text-xs text-black text-center">You approve</p>
          </div>

          {/*Mobile */}
          <div className="hover:scale-105 md:hidden block">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">4</p>
            </div>
            <p className="text-xs text-black text-center mt-2">You approve</p>
          </div>
          <hr className="text-gray-300 md:w-40 w-5 mt-8 -mx-2" />

          {/*Desktop*/}
          <div className="hover:scale-105 md:block hidden">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">5</p>
            </div>
            <p className="text-xs text-black text-center">We launch</p>
          </div>

          {/*Mobile */}
          <div className="hover:scale-105 md:hidden block">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">5</p>
            </div>
            <p className="text-xs text-black text-center mt-2">We launch</p>
          </div>
          <hr className="text-gray-300 md:w-40 w-5 mt-8" />

          {/*Desktop*/}
          <div className="hover:scale-105 md:block hidden">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">6</p>
            </div>
            <p className="text-xs text-black text-center">
              We maintain <br /> & support
            </p>
          </div>

          {/*Mobile */}
          <div className="hover:scale-105 md:hidden block">
            <div className="rounded-full bg-amber-500 hover:bg-amber-700/75 flex items-center justify-center  h-15 w-15">
              <p className="text-3xl font-bold items-center text-white">6</p>
            </div>
            <p className="text-xs text-black text-center mt-2">
              We maintain & support
            </p>
          </div>
        </div>
      </div>

      {/*Testimonials*/}
      <div className="md:flex col mb-30 w-screen gap-10 md:px-25 px-5 items-center justify-items-center">
        <div className="QuoteBox md:w-130 w-80 md:h-65 bg-gray-900 rounded-2xl items-center p-10 pt-15 mt-15">
          <p className="text-white mb-8">Working with Fabletoon was a great experience. They understood our vision and delivered a website that perfectly represent our brand. The support has been incredible.
          </p>

          <div className="flex gap-3">
          
              <img className="rounded-full w-10" src="/images(3).jpeg" />
       
            <div>
              <p className="font-bold text-sm text-white">Ejiro Amos Tafiri</p>
              <p className="font-normal text-sm text-white">CEO, Ejiro Amos Tafiri</p>
        
            </div>
          </div>
        </div> 

        <div className="w-auto h-auto md:px-6 px-12 py-10 border-gray-300 border-2 bg-white rounded-2xl md:mt-30 mt-10 md:flex col gap-10">
          <span className="items-center md:mt-0 mt-0 py-10">
            <p className="font-bold text-black text-md mb-3">Don't just build your website.<br />Let us take care of it.</p>
              <p className="text-black">Take the stress out of your project <br />while our experts handle everything you need:</p>
                
              <div className="flex mt-3">
                <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                  <p className="text-black">Hosting & domain management</p>
              </div>
              <div className="flex mt-3">
                <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                  <p className="text-black">Security & Backups</p>
              </div>
              <div className="flex mt-3">
                <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                <p className="text-black">Software updates</p>
              </div>
              <div className="flex mt-3">
                <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                <p className="text-black">Ongoing support</p>
              </div>
              <div className="flex mt-3">
                <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                <p className="text-black">Google Business Profile</p>
              </div>
              <div className="flex mt-3">
                <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                <p className="text-black">SEO & Digital Marketing</p>
              </div>
          </span> 

          <hr className="md:w-0.5 w-90 md:h-90 h-0.5 mb-10 bg-gray-300 border-0 justify-items-center items-center mt-10">
          </hr>
          
          <span className="items-center md:mt-0 mt-0 py-10 w-auto">
            <p className="font-bold text-black text-md mb-3">Don't just build your website.<br />Let us take care of it.</p>
            <p className="text-black">Take the stress out of your project <br />while our experts handle everything you need:</p>
                
            <div className="flex mt-3">
              <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                <p className="text-black">Website Design to advanced services</p>
            </div>
            <div className="flex mt-3">
              <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
                <p className="text-black">Strategic solutions to increased sales mobile and user experience</p>
            </div>
            <div className="flex mt-3">
              <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
              <p className="text-black">Ongoing updates & Development</p>
            </div>
            <div className="flex mt-3">
              <FontAwesomeIcon icon={faCheck} className='text-emerald-500 w-5 md:text-lg text-md mr-2' />
              <p className="text-black">Ongoing support</p>
            </div>

            <Link href="/pricing">
              <button className="mt-6 text-white p-5 px-20 rounded-full cursor-pointer bg-amber-600">
                Starting at N800,0000/month
              </button>
            </Link>
          </span> 
        </div>
      </div>
      <Footer />
      <FooterNote />
    </div>
  );
};

export default page;
