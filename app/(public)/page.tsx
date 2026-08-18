// import Image from "next/image";
import Hero from "./landing-sections/Hero";
import About from "./landing-sections/About";
import Skills from "./landing-sections/Skills";
import Experience from "./landing-sections/Experience";
import Projects from "./landing-sections/Projects";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}
