import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Projects from "@/components/sections/projects/myProjects";

export default function Services() {
  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}
