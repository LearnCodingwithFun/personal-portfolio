"use client"
import { useEffect, useState } from "react";
import { About, Company, Contact, Footer, Hero, Information, Projects, Services } from "./_sections";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div className="wrapper">
        <Hero />
         <About />
        <Information />
        <Company />
        <Services />
        <Projects />
        <Contact />
        <Footer /> 

      </div>
    </>
  )
}
