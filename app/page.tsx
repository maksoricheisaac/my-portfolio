"use client"
import About from "@/components/layouts/About";
import Contact from "@/components/layouts/Contact";
import { Education } from "@/components/layouts/Education";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import Projects from "@/components/layouts/Projects";
import Skills from "@/components/layouts/Skills";






export default function Home() {
  return (
    <Main>
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Main>
    
  )
};
