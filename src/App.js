import Intro from "./components/NavBar/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/NavBar/Skills/skills";

import React from "react";
import Works from "./components/NavBar/works/works";
import Contact from "./components/NavBar/Contact/contact";
import Footer from "./components/NavBar/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
