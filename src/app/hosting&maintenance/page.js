"use client";

import React from "react";
import Nav from "@/components/nav";
import HostingBusinessbanner from "@/components/hostingBusinessbanner";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faBarsProgress,
  faShield,
  faEthernet,
  faStore,
  faHeadset,
  faSailboat,
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
      <HostingBusinessbanner />

      <div className="px-30 mt-30 mb-40">
        <h2 className="font-black text-2xl mb-8">What's Included</h2>
        <div className="row space-y-10 mb-20">
          
          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faDatabase}
                className=" md:text-xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-black mb-2">Secure & Reliable Hosting</p>
                <p className="w-60">
                  99% uptime with top tier security.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faStore}
                className=" md:text-xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-black mb-2">Regular Backups</p>
                <p className="w-60">
                  Protect your data content.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faShield}
                className=" md:text-xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-black mb-2">Malware Protection</p>
                <p className="w-60">
                  Keep your website safe from threats.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex row gap-45 space-y-10">
            <div className="flex">
              <FontAwesomeIcon
                icon={faEthernet}
                className=" md:text-xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-black mb-2">Software Updates</p>
                <p className="w-60">
                  Keep your site secure and running smoothly.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faSailboat}
                className=" md:text-xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-black mb-2">Software Updates</p>
                <p className="w-60">
                  Keep your site secure and running smoothly.
                </p>
              </div>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faHeadset}
                className=" md:text-xl text-amber-500 text-md mr-2"
              />
              <div>
                <p className="font-black mb-2">Technical Support</p>
                <p className="w-60">
                  Get help when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Services Bottom Banner*/}
      <div className='md:flex md:h-80 h-130 block md:mx-25 mx-6 md:px-10 px-10 p-10 md:w-300 w-auto bg-white gap-60 mb-50 rounded-xl'>
        <FontAwesomeIcon
          icon={faShield}
          className=" text-9xl text-amber-500 text-md flex justify-center items-center mt-15"
        />
        <div>
          <h4 className='font-bold text-black mt-10'>Peace of mind 24/7</h4>
            <p>We keep your website secure, fast and running smoothly.</p>
      
            <button 
            type='button'
            onClick={handleSubmit}
            className="mt-6 text-white p-5 px-20 rounded-4xl bg-amber-600 hover:bg-amber-400 cursor-pointer">
              Get a Quote
            </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default page;
