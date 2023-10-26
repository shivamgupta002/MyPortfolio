import React from "react";
import "./Contact.css";
const contact = () => {
  return (
    <>
      <div className="top" id="contact">
        <h2>Feel free to contact Me Contact Me</h2>
        <div className="contact">
          <div className="social">
            <a href="/" className="icon">
              <i class="fa-solid fa-phone"></i>
              <p>+91 9929090937</p>
            </a>
            <a
              href="https://www.instagram.com/shivamgupta9876/"
              rel="noreferrer"
              className="icon"
            >
              <i class="fa-brands fa-instagram"></i>
              <p>shivamgupta9876</p>
            </a>
          </div>
          <div className="social">
            <a href="/" className="icon">
              <i class="fa-solid fa-envelope"></i>
              <p>20shivamgupta02@gmail.com</p>
            </a>

            <a
              href="https://github.com/shivamgupta002"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <i class="fa-brands fa-github"></i>
              <p>shivamgupta002</p>
            </a>
          </div>
        </div>
        <div className="endLine">@ All Rights Reversed BY Shivam Gupta</div>
      </div>
    </>
  );
};

export default contact;
