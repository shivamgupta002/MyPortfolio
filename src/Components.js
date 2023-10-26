import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Project from "./components/Project/Project";
import Achievement from "./components/Achievements/Achievement";
import Contact from "./components/Contact/Contact";
const AllComponent = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Features/>
      <Achievement/>
      <Portfolio/>
      <Project/>
      <Resume/>
      <Contact/>
    </div>
  );
};

export default AllComponent;
