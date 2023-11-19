import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavbarComp/NavbarComp";
import Home from "./Screens/Home/Home";
import Publications from "./Screens/Publications/Publications";
import Projects from "./Screens/Projects/Projects";
import Interests from "./Screens/Interests/Interests";

const App = () => {
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay of 2-4 seconds for the loader
  //   const loaderTimeout = setTimeout(() => {
  //     setShowLoader(false);
  //   }, Math.random() * 1000 + 1000); // Random duration between 2 and 4 seconds

  //   return () => {
  //     clearTimeout(loaderTimeout);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
