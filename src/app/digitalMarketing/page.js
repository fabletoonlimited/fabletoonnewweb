"use client";

import React from "react";
import Nav from "@/components/nav";
import DigitalMarketing from "@/components/digitalMarketing";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChartLine,
  faNoteSticky,
  faBullhorn,
  faMessage,
  faNotesMedical,
  faLineChart,
  faMailBulk
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const handleSubmit = () => { 
      toast.success("Hold on!!")
        setTimeout(() => {
        router.push("/contact")
        }, 2000)
      };

  return (
    <div>
      <Nav />
      <DigitalMarketing />

      <div className="px-30 mt-30 mb-40">
        <h2 className="font-black text-2xl mb-8">Our Services Include</h2>
        <div className="row space-y-2 mb-20">
          
            <div className="md:flex row gap-45 space-y-8">
                <div className="flex">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className=" md:text-2xl text-amber-500 text-md mr-2"
                />
                <div>
                    <p className="font-black mb-2">Search Engine Optimisation (SEO)</p>
                    <p className="w-120">
                        Improve your ranking on on Google and other search engines.
                    </p>
                </div>
                </div>

                <div className="flex">
                <FontAwesomeIcon
                    icon={faBullhorn}
                    className=" md:text-2xl text-amber-500 text-md mr-2"
                />
                <div>
                    <p className="font-black mb-2">Paid Advertising (Google Ads & Social Ads)</p>
                    <p className="w-120">
                        Get fast, targeted results.
                    </p>
                </div>
                </div>
            </div>

            <div className="md:flex row gap-45 space-y-8">
                <div className="flex">
                <FontAwesomeIcon
                    icon={faNoteSticky}
                    className=" md:text-2xl text-amber-500 text-md mr-2"
                />
                <div>
                    <p className="font-black mb-2">Social Media Marketing</p>
                    <p className="w-120">
                        Build your brand and engage with your audience.
                    </p>
                </div>
                </div>

                <div className="flex">
                <FontAwesomeIcon
                    icon={faMailBulk}
                    className=" md:text-2xl text-amber-500 text-md mr-2"
                />
                <div>
                    <p className="font-black mb-2">Email Marketing</p>
                    <p className="w-120">
                        Stay connected with your customers.
                    </p>
                </div>
                </div>
            </div>

            <div className="md:flex row gap-45 space-y-10">
                <div className="flex">
                <FontAwesomeIcon
                    icon={faNotesMedical}
                    className="md:text-2xl text-amber-500 text-md mr-2"
                />
                <div>
                    <p className="font-black mb-2">Content Creation</p>
                    <p className="w-120">
                        High-quality content that attracts and converts.
                    </p>
                </div>
                </div>

                <div className="flex">
                <FontAwesomeIcon
                    icon={faLineChart}
                    className=" md:text-xl text-amber-500 text-md mr-2"
                />
                <div>
                    <p className="font-black mb-2">Analytics & Reporting</p>
                    <p className="w-120">
                        Track performance and measure growth.
                    </p>
                </div>
                </div>
            </div>
        </div>
      </div>

      {/*Services Bottom Banner*/}
      <div className='md:flex md:h-80 h-130 block md:mx-25 mx-6 md:px-10 px-10 p-10 md:w-300 w-auto bg-gray-100 gap-60 mb-50 rounded-xl'>
        <FontAwesomeIcon
        icon={faChartLine}
        className=" text-9xl text-amber-500 text-md flex justify-center items-center mt-15"
        />
        <div>
          <h4 className='font-bold text-black mt-10 text-2xl'>Grow your online Presence</h4>
            <p>Let's create a digital marketing strategy that works for your business.</p>
      
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
