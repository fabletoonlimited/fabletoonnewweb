"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import confetti from "canvas-confetti";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Link from "next/link";

const Index = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const closeMenu = () => {
  setIsMenuOpen(false);
};

  const handleConfetti = (e) => { 
    e.preventDefault(); 
    // 🎉 Fire confetti 
    confetti({ 
      particleCount: 150, 
      spread: 80, 
      origin: { y: 0.6, }, 
    });
    router.push("/quote")
    }; 

  return (
    <nav className="relative z-100 flex justify-between w-full bg-white items-center px-10 py-5">
      {/* Logo */}
      
      <Link href="/" onClick={closeMenu}>
        <div className="nav-logo w-60 h-30 flex items-center justify-center md:ml-0 -ml-20">
          <ToastContainer />
          <img
            src="/fabletoonlogo.png"
            alt="Fabletoon Logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="nav-links font-medium text-md text-black hidden md:block">
        <ul className="flex gap-10 cursor-pointer">
          <li className="hover:text-amber-500">
            <Link href="/services">Services</Link>
          </li>

          <li className="hover:text-amber-500">
            <Link href="/portfolio">Portfolio</Link>
          </li>

          <li className="hover:text-amber-500">
            <Link href="/pricing">Pricing</Link>
          </li>

          <li className="hover:text-amber-500">
            <Link href="/about">About</Link>
          </li>

          <li className="hover:text-amber-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Get a Quote */}
        <button 
        onClick={handleConfetti}
        className="bg-amber-600 hover:bg-purple-900 hidden md:block hover:scale-105 transition text-white px-5 py-2 rounded-lg cursor-pointer">
          Get a Quote
        </button>


      {/* Mobile Get a Quote + Hamburger */}
      <div className="flex items-center gap-4 md:hidden">
        <button 
        onClick={handleConfetti}
        className="bg-amber-600 hover:bg-purple-900 hover:scale-105 transition text-white px-5 py-2 rounded-lg cursor-pointer">
            Get a Quote
        </button>
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black cursor-pointer hover:text-amber-500"
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            size="lg"
          />
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute z-80 top-full left-50 rounded-b-xl w-1/2 bg-gray-100/90 shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 font-medium text-black">

          <li className="hover:text-amber-500">
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>

          <li className="hover:text-amber-500">
              <Link href="/portfolio" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>

          <li className="hover:text-amber-500">
              <Link href="/pricing" onClick={closeMenu}>
                Pricing
              </Link>
            </li>

          <li className="hover:text-amber-500">
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>

          <li className="hover:text-amber-500">
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}

    </nav>
    
  );
};

export default Index;

