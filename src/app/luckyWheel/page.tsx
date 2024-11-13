import LuckyWheel from "@/components/sections/luckyWheelComponent/luckyWheelComponent";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Projects from "@/components/sections/projects/myProjects";

export default function About() {
  return (
    <>
      <Navbar />
      <LuckyWheel />
      <Projects />
      <Footer />
    </>
  );
}
