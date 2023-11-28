import ContactForm from "@/components/sections/contact/contactForm"
import React from "react"
import { Toaster } from 'react-hot-toast';



export default function Contact() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
    <Toaster position="top-right"/>
    <ContactForm/>
    </main>
    
  )
}
