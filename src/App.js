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
      <div>
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(81, 96, 174, .5 ),rgba(81, 96, 174, .5)),url(https://pix10.agoda.net/hotelImages/110648/-1/2835bd843f58e3c99f9404f277183338.jpg?s=1024x768)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="heroBackground"
        >
          <Navigation />
          <Hero />
        </div>
        <Cta1 />
        <Feature />
        <Packages />
        <Cta2 />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
