import ComponanyLogos from "@/components/ComponanyLogos";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Main/>
      <Services/>
      <Projects/>
      <Footer/>
    </main>
  );
}
