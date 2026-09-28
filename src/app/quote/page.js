"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/nav";
import { ToastContainer, toast } from "react-toastify";
import confetti from "canvas-confetti";
import Footer from "@/components/footer";
import FooterNote from "@/components/footerNote";

const Page = () => {
  const router = useRouter();

  const [isQuote, setIsQuote] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectService: "",
    comment: "",
    budget: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setIsQuote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fullName,
      email,
      phone,
      selectService,
      comment,
      budget,
    } = isQuote;

    // Validate form
    if (
      !fullName ||
      !email ||
      !phone ||
      !selectService ||
      !comment ||
      !budget
    ) {
      toast.error("Please fill all details in the form.");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isQuote),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Quote submission failed.");
        return;
      }

      // 🎉 Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: {
          y: 0.6,
        },
      });

      toast.success("Your quote request has been submitted!");

      // Clear form
      setIsQuote({
        fullName: "",
        email: "",
        phone: "",
        selectService: "",
        comment: "",
        budget: "",
      });

      // Redirect after 3 seconds
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Quote error:", error);
      toast.error("Quote sending failed.");
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gray-100">
      <ToastContainer />

      <Nav />

      {/* Page Heading */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-30">
        <h1 className="md:text-4xl text-3xl font-bold text-black my-10">
          Tell Us About Your Project
        </h1>
      </section>

      <section className="px-5 sm:px-8 md:px-12 lg:px-20 xl:px-30 pb-50">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 max-w-7xl mx-auto">          
          {/*Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="w-full">

              {/* Full Name */}
              <div className="mb-6">

                <p className="font-bold text-black">Full Name:</p>

                <input
                  type="text"
                  name="fullName"
                  value={isQuote.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <p className="font-bold text-black">Email:</p>

                <input
                  type="email"
                  name="email"
                  value={isQuote.email}
                  onChange={handleChange}
                  placeholder="email@gmail.com"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <p className="font-bold text black">Phone:</p>

                <input
                  type="tel"
                  name="phone"
                  value={isQuote.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Select Service */}
              <div className="mb-6">
                <p className="font-bold w-100 text-black">Select service:</p>

                <select
                  name="selectService"
                  value={isQuote.selectService}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                >
                  <option value="">
                    Select a Service you're interested in
                  </option>

                  <option value="Web Design & Development">
                    Web Design & Development
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Web Support & Maintenance">
                    Web Support & Maintenance
                  </option>

                  <option value="Business Email">
                    Business Email
                  </option>

                  <option value="Hosting & Domain">
                    Hosting & Domain
                  </option>

                  <option value="Google Business Profile">
                    Google Business Profile
                  </option>
                </select>
              </div>

              {/* Comment */}
              <div className="mb-6">
                <p className="font-bold text-black">Comment:</p>

                <textarea
                  name="comment"
                  value={isQuote.comment}
                  onChange={handleChange}
                  placeholder="Describe what you need. Your goals and specific requirements."
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Budget */}
              <div className="mb-6">
                <p className="font-bold text-black">Budget:</p>

                <input
                  type="text"
                  name="budget"
                  value={isQuote.budget}
                  onChange={handleChange}
                  placeholder="Estimated budget"
                  className="w-full border-2 border-gray-400 text-gray-500 px-4 py-3 rounded-lg outline-none focus:border-purple-600 transition"
                />
              </div>

              {/* Submit */}
              <div className="mb-6">
                <button
                  type="submit"
                  className="mt-10 mb-30 cursor-pointer text-white p-5 px-10 md:w-100 w-85 text-xl font-black rounded-full bg-amber-600"
                >
                  Submit your quote request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <FooterNote />
    </div>
  );
};

export default Page;
