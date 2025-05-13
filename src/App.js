import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Footer from "./components/footer";
import './App.css'; // 
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Hobbies />
      <Skills />
      <Background />
      <Footer />
    </div>
  );
}

export default App;
