import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Homepage from "./Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
