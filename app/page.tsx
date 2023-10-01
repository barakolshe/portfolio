import Navbar from "@/components/shared/Navbar/Navbar";
import Greetings from "./_Greetings/Grettings";
import Skills from "./_Skills/Skills";
import Education from "./_Education/Education";
import Experience from "./_Experience/Experience";
import Projects from "./Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-3">
      <div className="gradient-background angled-bottom min-h-screen flex-col gap-3">
        <Navbar />
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
