import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Leetcode from "@/components/leetcode";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#050505] w-full min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Leetcode />
    </div>
  );
}
