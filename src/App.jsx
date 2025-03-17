import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Feature from "./components/Features/Feature";
import Experience from "./components/Experience/Experience";
import Testimonial from "./components/Testimonals/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Chevron from "./components/Chevron/Chevron";

const App = () => {
  return (
    <section>
      <Home />
      <About />
      <Services />
      <Feature />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
      <Chevron />
    </section>
  );
};

export default App;
