import { Academics } from "@/components/sections/Academics";
import { About } from "@/components/sections/About";
import { Facilities } from "@/components/sections/Facilities";
import { Header } from "@/components/navigation/Header";
import { Hero } from "@/components/sections/Hero";
import { SchoolLife } from "@/components/sections/SchoolLife";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Academics />
        <WhyChooseUs />
        <Facilities />
        <SchoolLife />
      </main>
    </>
  );
}