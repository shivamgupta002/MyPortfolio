import React from "react";
import "./Hero.css";
import MyImage from "../Image/Shivam__1_-removebg.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <>
      <div
        className="container d_flex hero"
        id="home"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="hero_content">
          <div className="heading">
            <p className="hero_p">Welcome to my world</p>
            <h1>
              Hi,I'm <span className="name"> Shivam Gupta </span> a
              <TypeAnimation
                sequence={[
                  "Frontend Developer.",
                  900,
                  " Backend Developer.",
                  900,
                  " Full-Stack Engineer.",
                  1200,
                  "Freelancer.",
                  900,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p>
              I'm a passionate software engineer who loves turning complex
              problems into elegant solutions. With a strong coding background,
              I enjoy crafting software that makes a real difference. Let's
              build together!
            </p>
          </div>
          <div className="hero_contact">
            {/* Social Media */}
            <div className="hero_social_media">
              <p>Find with me</p>
              <div className="icon">
                <button>
                  <a
                    href="https://www.linkedin.com/in/shivam-gupta-4b62a0206"
                    className="btn_shadow"
                    target="_blank"
                    rel="noReferrer"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/shivamgupta002?tab=repositories"
                    target="_blank"
                    className="btn_shadow"
                    rel="noReferrer"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </button>
                <button>
                  <a
                    href="https://www.hackerrank.com/profile/20shivamgupta02"
                    target="_blank"
                    className="btn_shadow"
                    rel="noReferrer"
                  >
                    <i class="fa-brands fa-hackerrank"></i>
                  </a>
                </button>
                {/* <button>
                  <a
                    href="https://www.instagram.com/shivamgupta9876/"
                    target="_blank"
                    className="btn_shadow"
                    rel="noReferrer"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </button> */}
              </div>
            </div>
            {/* language */}
            <div className="hero_social_media">
              <p>Major Language </p>
              <div className="icon">
                <button>
                  <a href="/" className="btn_shadow">
                    <i class="fa-brands fa-css3-alt"></i>
                  </a>
                </button>
                <button>
                  <a href="/" className="btn_shadow">
                    <i class="fa-brands fa-react"></i>
                  </a>
                </button>

                <button>
                  <a href="/" className="btn_shadow">
                    <i class="fa-brands fa-node"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_img">
          <img src={MyImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
