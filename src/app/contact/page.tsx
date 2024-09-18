import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ContactForm from "@/components/sections/contact/contactForm";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function Contact() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}
