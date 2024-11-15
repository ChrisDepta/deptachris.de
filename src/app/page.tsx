import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import HomeComponent from "@/components/sections/homeComponent/homeComponent";
import ThemeToggle from "@/components/elements/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <Footer />
    </>
  );
}
