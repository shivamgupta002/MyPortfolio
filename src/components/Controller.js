import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
// import About from "./utils/About";
import AllComponent from "./AllComponent";

const Controller = () => {
  return (
    <>
      <BrowserRouter>
      <AllComponent/>
        <Routes>
          {/* <Route path="/" element={Controller} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Controller;
