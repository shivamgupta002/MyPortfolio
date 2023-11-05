import React from "react";
import "./Contact.css";
const contact = () => {
  return (
    <>
      <div className="top" id="contact">
        <h2>Feel free to Contact Me</h2>
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
            <a
              href="https://www.linkedin.com/in/shivam-gupta-4b62a0206"
              className="icon"
            >
              <i class="fa-brands fa-linkedin"></i>
              <p>Linkedin</p>
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
              <p>Github</p>
            </a>
            <a
              href="https://github.com/shivamgupta002"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <i class="fa-brands fa-hackerrank"></i>
              <p>HackerRank</p>
            </a>
          </div>
        </div>
        <div className="endLine">@ All Rights Reversed BY Shivam Gupta</div>
      </div>
    </>
  );
};

export default contact;
