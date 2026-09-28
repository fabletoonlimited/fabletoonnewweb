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
    <div className="w-screen h-auto bg-gray-100">
      <ToastContainer />

      <Nav />

      <h1 className="md:px-30 px-10 md:text-4xl text-3xl font-bold my-10">
        Tell Us About Your Project
      </h1>

      <div className="md:w-88 w-50 md:px-30 px-10">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <p className="font-bold">Full Name:</p>

          <input
            type="text"
            name="fullName"
            value={isQuote.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border-2 border-gray-400 px-4 py-2 md:w-150 w-88 mb-7"
          />

          {/* Email */}
          <p className="font-bold">Email:</p>

          <input
            type="email"
            name="email"
            value={isQuote.email}
            onChange={handleChange}
            placeholder="email@gmail.com"
            className="border-2 border-gray-400 px-4 py-2 md:w-150 w-88 mb-7"
          />

          {/* Phone */}
          <p className="font-bold">Phone:</p>

          <input
            type="tel"
            name="phone"
            value={isQuote.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border-2 border-gray-400 px-4 py-2 md:w-150 w-88 mb-7"
          />

          {/* Select Service */}
          <p className="font-bold w-100">Select service:</p>

          <select
            name="selectService"
            value={isQuote.selectService}
            onChange={handleChange}
            className="border-2 border-gray-400 px-3 text-gray-500 md:w-150 w-88 py-2 mb-10"
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

          {/* Comment */}
          <p className="font-bold">Comment:</p>

          <textarea
            name="comment"
            value={isQuote.comment}
            onChange={handleChange}
            placeholder="Describe what you need. Your goals and specific requirements."
            className="border-2 rounded-2xl h-30 border-gray-400 px-4 py-2 md:w-150 w-88 mb-7"
          />

          {/* Budget */}
          <p className="font-bold">Budget:</p>

          <input
            type="text"
            name="budget"
            value={isQuote.budget}
            onChange={handleChange}
            placeholder="Estimated budget"
            className="border-2 border-gray-400 px-4 py-2 md:w-150 w-88 mb-7"
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-10 mb-30 cursor-pointer text-white p-5 px-20 md:w-150 w-90 rounded-full bg-amber-600"
          >
            Submit your quote request
          </button>
        </form>
      </div>

      <Footer />
      <FooterNote />
    </div>
  );
};

export default Page;
