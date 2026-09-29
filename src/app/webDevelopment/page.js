"use client";

import React from "react";
import Nav from "@/components/nav";
import WebDesignDevelopmentBanner from "@/components/webDesignDevelopmentBanner";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCartShopping,
  faMobileAndroid,
  faCalendarDays,
  faHeadset,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const router = useRouter();
  
  const handleSubmit = () => { 
      toast.success("Hold on!!")
        setTimeout(() => {
        router.push("/quote")
        }, 2000)
      };

  return (
    <div className="bg-gray-100">
      <Nav />
      <WebDesignDevelopmentBanner />

      <div className="md:px-30 px-10 mt-20 mb-40">
        <h2 className="font-bold text-black text-2xl mb-8">What's Included</h2>
        <div className="row space-y-10 mb-20">
          
          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faDesktop}
                className=" md:text-xl text-blue-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Custom Website Design</p>
                <p className="w-60 text-black">
                  Unique design tailored to your brand and business goals.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faMobileAndroid}
                className=" md:text-xl text-blue-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Responsive & Mobile-Friendly</p>
                <p className="w-60 text-black">
                  Looks great on all devices, phones, tablets and desktops.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className=" md:text-xl text-blue-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Content Management System</p>
                <p className="w-60 text-black">
                  Easy to update your content anytime, no technical skills needed.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faCartShopping}
                className=" md:text-xl text-blue-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">E-commerce Solutions</p>
                <p className="w-60 text-black">
                  Sell your products or services online with ease.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faTruckFast}
                className=" md:text-xl text-blue-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Speed & Performance</p>
                <p className="w-60 text-black">
                  Fast loading times and better user experience, and improved search visibility.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faHeadset}
                className=" md:text-xl text-blue-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Ongoing Support</p>
                <p className="w-60 text-black">
                  We are here to help, even after your site goes live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*WebDesign Bottom Banner*/}
      <div className='md:flex md:h-80 h-130 block md:mx-25 mx-6 md:px-10 px-10 p-10 md:w-300 w-auto bg-white gap-60 mb-50 rounded-xl'>
        <img src="/laptop.png" 
        className='md:flex row md:h-100 md:-mt-20 -mt-20'/>
        <div>
          <h4 className='font-bold text-black text-xl md:mt-10 -mt-15'>Your website should work as hard as you do.</h4>
            <p className="text-black">Let's give it a fresh new look and better results.</p>
      
            <button 
              type='button'
              onClick={handleSubmit}
              className="mt-6 text-white p-5 font-black px-20 rounded-4xl bg-blue-600 hover:bg-amber-400 cursor-pointer">
              Get a Quote
            </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default page;
