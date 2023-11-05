import React from "react";
import "./Project.css";
import data from "./Project_data";
import Card from "./Project_Card";

const Project = () => {
  return (
    <>
      <div className="features top" id="projects">
        <div className="container">
          <div
            className="heading text-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h4>What I Done</h4>
            <h1>Project</h1>
          </div>
          <div
            className="content newFlex"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  link={val.link}
                  title={val.title}
                  image={val.image}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
