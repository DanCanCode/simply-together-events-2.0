import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Services from "./Services/Services";
import Collaboration from "./Collaboration/Colaboration";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/collaboration" element={<Collaboration />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
