import Calculator from "@/components/sections/calculator/calculator";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Projects from "@/components/sections/projects/myProjects";

export default function About() {
  return (
    <>
      <Navbar />
      <Calculator />
      <Projects />
      <Footer />
    </>
  );
}
