import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Services from "./Services/Services";
import PartyRentals from "./Services/party-rentals/PartyRentals";
import Gallery from "./Gallery/Gallery";
import SingleGallery from "./Gallery/SingleGallery";
import Collaboration from "./Collaboration/Colaboration";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route
          exact
          path="/services/party-rentals"
          element={<PartyRentals />}
        />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/gallery/:name" element={<SingleGallery />} />
        <Route exact path="/collaboration" element={<Collaboration />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
