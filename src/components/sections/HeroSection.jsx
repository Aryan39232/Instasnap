import React, { useState, useEffect } from "react";
import "./HeroSection.css";

// Import images from Home folder - each folder has 2 images for swapping
// ThreeLine folder
import threeLine_1 from "../../Image/Home/ThreeLine/Property 1=shout-1.png";
import threeLine_2 from "../../Image/Home/ThreeLine/Property 1=shout.png";

// XOXO folder
import xoxo_1 from "../../Image/Home/XOXO/Property 1=Group 39927.png";
import xoxo_2 from "../../Image/Home/XOXO/Property 1=xoxo.png";

// heart folder
import heart_1 from "../../Image/Home/heart/Property 1=heart.png";
import heart_2 from "../../Image/Home/heart/Property 1=Highlight 12.png";

// fourSide folder (Memory)
import fourSide_1 from "../../Image/Home/fourSide/Property 1=Group 39926.png";
import fourSide_2 from "../../Image/Home/fourSide/Property 1=sparkels.png";

import StoreImage from "../../Image/StoreImage.png";

const ArrowUpRight = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow_icon"
  >
    <path
      d="M5 15L15 5M15 5H7M15 5V13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection = () => {
  const [current_frame, set_current_frame] = useState(0);

  useEffect(() => {
    // Swap images every 500ms like loading page
    const imageInterval = setInterval(() => {
      set_current_frame((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(imageInterval);
  }, []);

  // Image swap functions
  const get_threeLine_image = () => current_frame === 0 ? threeLine_1 : threeLine_2;
  const get_xoxo_image = () => current_frame === 0 ? xoxo_1 : xoxo_2;
  const get_heart_image = () => current_frame === 0 ? heart_1 : heart_2;
  const get_fourSide_image = () => current_frame === 0 ? fourSide_1 : fourSide_2;

  return (
    <section className="hero_section">
      {/* Header Navigation */}
      <header className="hero_header">
        <div className="hero_logo">
          <span className="logo_insta">Insta</span>
          <span className="logo_snap">Snap</span>
        </div>
        <nav className="hero_nav">
          <a href="#about" className="nav_link">
            ABOUT US
          </a>
        </nav>
      </header>

      <div className="hero_overlay">
        {/* Decorative elements */}

        <div className="hero_content_wrapper">
          {/* Left Content */}
          <div className="hero_left_content">
            <h1 className="hero_main_title">
              <span className="title_black">Turn Every</span>
              <span className="title_red">Moments</span>
              <span className="title_black">Into A</span>
              <span className="title_red memory_wrapper">
                Memory
                {/* Memory (fourSide) - Top Right of Title */}
                <img src={get_fourSide_image()} alt="memory" className="hero_memory_title image_swap" />
              </span>
            </h1>

            {/* XOXO and Contact - Left side for desktop */}
            <div className="hero_bottom_left">
              <div className="xoxo_wrapper">
                <img src={get_xoxo_image()} alt="XOXO" className="xoxo_image image_swap" />
                <p className="contact_text">
                  contact us <ArrowUpRight />
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero_right_content">
            <div className="hero_tagline_box">
              <p className="hero_tagline_subtext">
                Snap it, print it,
                <br />
                flex it instead memory, zero
                <br />
                drama.
              </p>
            </div>

            <div className="hero_cta_box">
              <h2 className="hero_cta_title">
                What Are <span className="you_with_icon">You<img src={get_threeLine_image()} alt="threeLine" className="threeLine_icon image_swap" /></span>
                <br />
                <span className="cta_waiting">Waiting For?!</span>
              </h2>

              <div className="booth_wrapper">
                <div className="hero_booth_image_wrapper">
                  <img
                    src={StoreImage}
                    alt="Photo Booth"
                    className="hero_booth_image"
                  />
                </div>

                {/* Decorative heart OUTSIDE the image wrapper */}
                <div className="booth_heart_decoration">
                  <img src={get_heart_image()} alt="" className="booth_heart image_swap" />
                </div>
              </div>

              {/* XOXO and Contact - After Store Image */}
              <div className="hero_bottom_right">
                <div className="xoxo_wrapper">
                  <img src={get_xoxo_image()} alt="XOXO" className="xoxo_image image_swap" />
                  <p className="contact_text">
                    contact us <ArrowUpRight />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
