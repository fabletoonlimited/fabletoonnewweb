"use client";

import React from "react";
import Nav from "@/components/nav";
import BusinessEmail from "@/components/businessEmail";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faEnvelope,
  faEnvelopeCircleCheck,
  faCheckSquare,
  faInbox,
  faShield,
  faHeadphones
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
      <BusinessEmail />

      <div className="md:px-20 px-10 md:mt-30 mt-15 mb-20">
        <h2 className="font-bold text-black text-2xl mb-8">Key Benefits</h2>
        <div className="row space-y-10 mb-20">
          
          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faEnvelopeCircleCheck}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2 text-xl">Custom Domain Email</p>
                <p className="md:w-60 text-black">
                  Use your own domain (e.g. info@yourbusiness.com)
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faDesktop}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Works on any device</p>
                <p className="w-60 text-black">
                  Access your email from anywhere.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Increased Credibility</p>
                <p className="w-60 text-black">
                  Look more professional and trustworthy.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faInbox}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Better Deliverability</p>
                <p className="w-60 text-black">
                  Get your emails to the right inbox.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faHeadphones}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Easy Management</p>
                <p className="w-60 text-black">
                  Simple setup and ongoing support.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faShield}
                className=" md:text-xl text-2xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-bold text-black mb-2">Spam & Virus Protection</p>
                <p className="w-60 text-black">
                  Keep your data safe and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Services Bottom Banner*/}
      <div className='md:flex md:h-80 h-130 md:pt-12 pt-0 shadow-2xl block md:mx-17 mx-6 md:px-10 px-10 md:w-300 w-auto bg-white gap-60 mb-50 rounded-xl'>
        <FontAwesomeIcon
          icon={faEnvelope}
          className=" text-9xl text-amber-500 text-md flex justify-center items-center mt-15"
      />
        <div>
          <h4 className='font-bold text-black text-2xl mt-10'>Not sure which service is right for you?</h4>
            <p>Book a free consultation and we'll recommend the best solutions for your business needs.</p>
      
            <button 
            type='button'
            onClick={handleSubmit}
            className="mt-6 text-white p-5 px-20 font-bold rounded-4xl bg-amber-600 hover:bg-amber-400 cursor-pointer">
              Get a Quote
            </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default page;
