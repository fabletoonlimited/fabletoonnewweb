"use client";

import React, { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";
import ContactBanner from "@/components/contactBanner";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

const Page = () => {
  const router = useRouter();

  const [isContact, setIsContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setIsContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, phone, comment } = isContact;

    if (!fullName || !email || !phone || !comment) {
      toast.error("Please fill all details in the form.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isContact),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Contact submission failed.");
        return;
      }

      confetti({
        particleCount: 150,
        spread: 80,
        origin: {
          y: 0.6,
        },
      });

      toast.success("Your message has been sent successfully!");

      setIsContact({
        fullName: "",
        email: "",
        phone: "",
        comment: "",
      });

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Contact error:", error);
      toast.error("Contact sending failed.");
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-100">
      <ToastContainer />

      <Nav />
      <ContactBanner />

      {/* Page Heading */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-30">
        <h1 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold my-8 md:my-0">
          Tell Us About Your Request
        </h1>
      </section>

      {/* Contact Section */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-30 pb-50">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 max-w-7xl mx-auto">

          {/* FORM */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="w-full">

              {/* Full Name */}
              <div className="mb-6">
                <p className="font-bold mb-2 text-black">
                  Full Name:
                </p>

                <input
                  type="text"
                  name="fullName"
                  value={isContact.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <p className="font-bold mb-2 text-black">
                  Email:
                </p>

                <input
                  type="email"
                  name="email"
                  value={isContact.email}
                  onChange={handleChange}
                  placeholder="email@gmail.com"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <p className="font-bold mb-2 text-black">
                  Phone:
                </p>

                <input
                  type="tel"
                  name="phone"
                  value={isContact.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Comment */}
              <div className="mb-6">
                <p className="font-bold mb-2 text-black">
                  Comment:
                </p>

                <textarea
                  name="comment"
                  value={isContact.comment}
                  onChange={handleChange}
                  placeholder="Send our support team a message."
                  rows={6}
                  className="w-full border-2 border-gray-400 text-gray-500 rounded-2xl px-4 py-3 outline-none resize-none focus:border-purple-600 transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto mt-4 cursor-pointer text-white py-4 px-12 rounded-full bg-amber-600 hover:bg-purple-900 transition duration-300"
              >
                Submit
              </button>

            </form>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 md:flex hidden items-center justify-center">
            <div className="relative w-full max-w-xl h-80 sm:h-96 lg:h-120 rounded-2xl bg-gray-200 overflow-visible flex items-center justify-center">

              <img
                src="/cs.png"
                alt="Customer support"
                className="absolute w-125 sm:w-150 lg:w-198 max-w-none -top-10 sm:-top-16 lg:-top-12 left-1/2 -translate-x-1/2"
              />

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterNote />
    </div>
  );
};

export default Page;

