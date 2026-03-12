import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/ui/Cursor";
import AmbientOrbs from "@/components/ui/AmbientOrbs";

export default function Home() {
  return (
    <>
      <Cursor />
      <AmbientOrbs />
      <Navbar />
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
