import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#050505] w-full min-h-screen">
      <Hero />
      <About />
    </div>
  );
}
