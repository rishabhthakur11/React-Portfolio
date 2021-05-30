import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
