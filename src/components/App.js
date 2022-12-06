import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGalleries } from "../redux-store/galleries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import SingleGallery from "./Gallery/SingleGallery";
import Collaboration from "./Collaboration/Colaboration";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGalleries());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/gallery/:id" element={<SingleGallery />} />
        <Route exact path="/collaboration" element={<Collaboration />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
