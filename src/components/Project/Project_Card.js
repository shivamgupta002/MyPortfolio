import React from "react";

const Project_Card = (props) => {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer" className="box btn_shadow">
          <h2>{props.title}</h2>
          <p className="features_card_p">{props.desc}</p>
          <a href={props.link}>
            <i className="fas fa-arrow-right"></i>
          </a>
      </a>
    </>
  );
};

export default Project_Card;
