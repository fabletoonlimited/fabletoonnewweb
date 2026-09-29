"use client";

import React from "react";
import Nav from "@/components/nav";
import GoogleBusinessBanner from "@/components/googleBusinessbanner";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPhotoFilm,
  faCloudUploadAlt,
  faInfoCircle,
  faStreetView,
  faUserCheck,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const handleSubmit = () => { 
      toast.success("Hold on!!")
        setTimeout(() => {
        router.push("/quote")
        }, 2000)
      };

  return (
    <div className="bg-gray-100">
      <Nav />
      <GoogleBusinessBanner />

      <div className="md:px-30 px-10 md:mt-30 mt-20 mb-40">
        <h2 className="font-bold text-black text-2xl mb-8">Our Service Includes</h2>
        <div className="row space-y-10 mb-20">
          
          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faUserCheck}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Profile Setup & Verification</p>
                <p className="w-60 text-black">
                  Get your business verified on Google.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faStreetView}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Reviews Management Guidance</p>
                <p className="w-60 text-black">
                  Get positive reviews.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Business Information Optimization</p>
                <p className="w-60 text-black">
                  Add the right details and categories.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Regular Updates</p>
                <p className="w-60 text-black">
                  Keep your information current.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faPhotoFilm}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Photos & Media</p>
                <p className="w-60 text-black">
                  Showcase your products, services and location.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faStar}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Local SEO Support</p>
                <p className="w-60 text-black">
                  Improve your local search ranking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Services Bottom Banner*/}
      <div className='md:flex md:h-80 shadow-2xl h-130 block md:mx-25 mx-6 md:px-10 px-10 p-10 md:w-300 w-auto bg-white gap-60 mb-50 rounded-xl'>
        <FontAwesomeIcon
          icon={faLocationPinLock}
          className=" text-9xl text-amber-500 text-md flex justify-center items-center mt-15"
        />
        <div>
          <h4 className='font-bold text-black mt-10'>Be visible. Be trusted. Get more customers.</h4>
            <p className="text-black">Let's set up and optimize your Google Business Profile today.</p>
      
             <button 
            type='button'
            onClick={handleSubmit}
            className="mt-6 text-white font-bold p-5 px-20 rounded-4xl bg-amber-600 hover:bg-amber-400 cursor-pointer">
              Get a Quote
            </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default page;
