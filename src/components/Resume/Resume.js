import React from "react";
import "./Resume.css";
import ResumeData from "./ResumeData";
import Card from "./ResumeCard";

const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>What I Done</h4>
            <h1>Resumes</h1>
          </div>
        </div>
        <div className="container">
          <div className="content-section mtop d_flex">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <div className="heading">
                <h4>2018-2024</h4>
                <h1>Education Quality</h1>
              </div>

              <div className="content">
                {ResumeData.map((val, id) => {
                  if (val.category === "education") {
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
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              <div className="heading">
                <h4>2022-2023</h4>
                <h1>Job Experience</h1>
              </div>

              <div className="content">
                {ResumeData.map((val, index) => {
                  if (val.category === "experience") {
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

export default Resume;
