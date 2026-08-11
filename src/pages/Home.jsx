import Hero from "../components/Hero";
import Services from "./servicos/Services";
import WhyUs from "../components/WhyUs";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <div className="font-body bg-paper">
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
