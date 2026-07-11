import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import Impact from "@/components/sections/Impact";
import Portfolio from "@/components/sections/Portfolio";
import Methodology from "@/components/sections/Methodology";
import AboutMe from "@/components/sections/AboutMe";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full relative">
        {/* Background guiding thread vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-olive/[0.06] -translate-x-1/2 pointer-events-none -z-10" />
        <Hero />
        <ValueProp />
        <Impact />
        <Portfolio />
        <Methodology />
        <AboutMe />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
