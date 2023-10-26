import React from "react";
import "./Portfolio.css";
import Portfolio_data from "./Portfolio_data";
import PortFolioCard from "./PortFolioCard";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio top" id="portfolio">
        <div className="container">
          <div
            className="heading text-center"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <h4>My Portfolio and Keep Your Feedback</h4>
            <h1>Portfolio</h1>
          </div>
          <div
            className="content newFlex"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            {Portfolio_data.map((value, index) => {
              return (
                <PortFolioCard
                  key={index}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  image={value.image}
                  desc={value.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
