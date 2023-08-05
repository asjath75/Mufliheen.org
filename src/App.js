import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import { Testimonials } from "./components/Testimonials";


function App() {
  return (
    <>
        <Navbar/>
        <Intro/>
        <Testimonials/>
        
    </>
  );
}

export default App;
