import AnimatedNavbar from "@/components/layout/AnimatedNavbar/AnimatedNavbar";
import Greetings from "./_Greetings/Grettings";
import Skills from "./_Skills/Skills";
import Education from "./_Education/Education";
import Experience from "./_Experience/Experience";
import Projects from "./_Projects/Projects";
import React from "react";
import ScrollToTop from "@/components/shared/ScrollToTop/ScrollToTop";
import Footer from "./_Footer/Footer";
import StaticNavbar from "@/components/layout/StaticNavbar/StaticNavbar";

export default function Home() {
  return (
    <main className="flex w-full flex-col justify-between gap-main-layout overflow-x-hidden">
      <ScrollToTop />
      <AnimatedNavbar className="hidden lg:block" />
      <div className="gradient-background-primary angled-bottom flex min-h-screen flex-col gap-3">
        <StaticNavbar className="lg:hidden" />
        <div className="hidden h-[68px] bg-transparent lg:block" />
        <Greetings />
      </div>
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
