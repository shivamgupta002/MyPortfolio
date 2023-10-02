import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";

const AllComponent = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Features/>
      <Portfolio/>
      <Project/>
      <Resume/>
    </div>
  );
};

export default AllComponent;
