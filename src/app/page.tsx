import { AcademicJourney } from "@/components/sections/AcademicJourney";
import { Hero } from "@/components/sections/Hero";
import { JourneyCTA } from "@/components/sections/JourneyCTA";
import { ParentTestimonials } from "@/components/sections/ParentTestimonials";
import { SchoolHighlights } from "@/components/sections/SchoolHighlights";
import { StudentExperience } from "@/components/sections/StudentExperience";
import { UpcomingEvents } from "@/components/sections/UpcomingEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <AcademicJourney />
      <StudentExperience />
      <UpcomingEvents />
      <ParentTestimonials />
      <SchoolHighlights />
      <JourneyCTA />
    </>
  );
}