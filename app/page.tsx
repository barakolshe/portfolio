import Navbar from "@/components/shared/Navbar/Navbar";
import Greetings from "./_Greetings/Grettings";
import Skills from "./_Skills/Skills";
import Education from "./_Education/Education";
import Experience from "./_Experience/Experience";
import Projects from "./_Projects/Projects";
import React from "react";
import ScrollToTop from "@/components/shared/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-3">
      <ScrollToTop />
      <Navbar />
      <div className="gradient-background-primary angled-bottom min-h-screen flex-col gap-3">
        <div className="h-[68px] bg-transparent" />
        <Greetings />
      </div>
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}
