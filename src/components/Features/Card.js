import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt="img" className="features_card_img"/>
        <h2>{props.title}</h2>
        <p className="features_card_p">{props.desc}</p>

        <a href="/">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Card;
