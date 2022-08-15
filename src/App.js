import React from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Hotel from "./components/hotel/Hotel";
import Hotels from "./components/Hotels";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hotels />} />
      <Route path="/hotels/:hotelName" element={<Hotel />} />
    </Routes>
  );
};

export default App;
