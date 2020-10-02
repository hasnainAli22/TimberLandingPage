import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "./App.css";
import Cta1 from "./components/Cta1";
import Feature from "./components/Feature";
import Packages from "./components/Packages";
import Cta2 from "./components/Cta2";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Cta1 />
      <Feature />
      <Packages />
      <Cta2 />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
