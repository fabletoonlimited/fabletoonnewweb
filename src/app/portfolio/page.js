import React from 'react'
import Nav from "@/components/nav"
import Footer from '@/components/footer'
import FooterNote from "@/components/footerNote"
import { ToastContainer } from "react-toastify";
import {toast} from "react-toastify"

const page = () => {
  return (
    <div className='w-screen h-auto'>
        <ToastContainer />
        <Nav />
        <Footer />
        <FooterNote />
    </div>
  )
}

export default page
