import React, { useState } from "react";

const PortFolioCard = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="box btn_shadow">
        <div className="portfolio_card_img">
          <img src={props.image} alt="img" onClick={toggleModal} />
        </div>

        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          <label htmlFor="">
            <i className="far fa-heart"></i>
            {props.totalLike}
          </label>
        </div>

        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
        </div>
        <a href="#popup" className="arrow" onClick={toggleModal}>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      {/* ----------------------------- POPUP-Modal ----------------------------------- */}
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content d_flex">
              <div className="modal-img left">
                <img src={props.image} alt="" />
              </div>
              <div className="modal-text right">
                <span>Featured -Design</span>
                <h1>{props.title}</h1>
                <p>
                 {props.desc}
                </p>
                <div className="button d_flex mtop">
                  <button className="btn_shadow">
                    Like this <i className="far fa-thumbs-up"></i>
                  </button>
                  <button className="btn_shadow">
                    View Project <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
                <button
                  className="close-modal btn_shadow"
                  onClick={toggleModal}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortFolioCard;
