import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Portfolio from "./Portfolio/Portfolio";
// import Resume from "./Resume/Resume";

const AllComponent = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Features/>
      <Portfolio/>
      {/* <Resume/> */}
    </div>
  );
};

export default AllComponent;
