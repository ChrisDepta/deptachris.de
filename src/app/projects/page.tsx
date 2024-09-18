import Image from "next/image";
import { Inter } from "next/font/google";
import Calculator from "@/components/sections/calc/calc";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Calculator />
      <Footer />
    </>
  );
}
