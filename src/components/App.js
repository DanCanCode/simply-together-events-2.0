import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Homepage from "./Homepage/Homepage";
import Services from "./Services/Services";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
