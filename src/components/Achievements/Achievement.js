import React from "react";
import "./Achievement.css";
import AchivementData from "./AchivementData";
import Card from "./AchiCard";

const Achievement = () => {
  return (
    <>
      <section className="achievement" id="achievement">
        <div className="container top">
          <div
            className="heading text-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4>What I Earn</h4>
            <h1>Achievements</h1>
          </div>
        </div>
        <div className="container">
          <div className="content-section mtop d_flex">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="heading">
                <h4>2007-2010</h4>
                <h1>Coding Achievement</h1>
              </div>

              <div className="content">
                {AchivementData.map((val, id) => {
                  if (val.category === "coding") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div
              className="left"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="heading">
                <h4>2007-2010</h4>
                <h1>Web Achievements</h1>
              </div>

              <div className="content">
                {AchivementData.map((val, index) => {
                  if (val.category === "web") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
