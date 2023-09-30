import Navbar from "@/components/Navbar/Navbar";
import Greetings from "./_Greetings/Grettings";
import Skills from "./_Skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-3">
      <div className="min-h-screen flex-col gap-3 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Navbar />
        <div className="bg-transparent h-[68px]" />
        <Greetings />
      </div>
      <Skills />
    </main>
  );
}
