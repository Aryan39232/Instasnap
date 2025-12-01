import React from 'react';
import './FoundersSection.css';
import nitishFounder from '../../Image/Founder/01.jpg';
import secondFounder from '../../Image/Founder/02.jpg';
import thirdFounder from '../../Image/Founder/03.jpg';

// Import decorations
import star_svg from '../../Image/Star01.svg';
import sparkles_svg from '../../Image/sparkels.svg';

// Import social icons
import mail from '../../Image/Founder/mail.svg';
import linked from '../../Image/Founder/linked.svg';

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
      stroke="#F2E8D8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FoundersSection = () => {
  return (
    <section className="founders_section">
      <div className="founders_container">
        <div className="founders_content_grid">
          {/* Images Column */}
          <div className="founders_images_column">
            <div className="founder_image_card founder_top">
              <img src={nitishFounder} alt="Founder" className="founder_image" />
            </div>
            <div className="founder_image_card founder_middle">
              <img src={secondFounder} alt="Founder" className="founder_image" />
            </div>
            <div className="founder_image_card founder_bottom">
              <img src={thirdFounder} alt="Founder" className="founder_image" />
            </div>
          </div>

          {/* Info Column */}
          <div className="founders_info_column">
            <div className="founders_info">
              <h2 className="founders_title">Founders Of<br />Insta<span className="founders_title_highlight">Snap</span></h2>
              <p className="founders_tagline">Instant memories,<br />zero drama.</p>
              
              <div className="founder_profile">
                <div className="founder_arrow_section">
                  <p className="about_text">About <ArrowUpRight /></p>
                </div>
                
                <h3 className="founder_name">Nitish Ravella</h3>
                <p className="founder_description">
                  Lorem ipsum dolor sit amet consectetur. At sapien ac amet ultrices arcu nunc in vel sed urna platea in facilisi sed vel proin sed. Ut mauris in facilisi urna eget massa ac.
                </p>
                
                <div className="founder_social_links">
                  <a href="#" className="social_link mail_link">
                    <img src={mail} alt="Mail" className="social_icon" />
                  </a>
                  <a href="#" className="social_link linked_link">
                    <img src={linked} alt="LinkedIn" className="social_icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <img src={star_svg} alt="" className="founders_decor star_founders_1" />
          <img src={sparkles_svg} alt="" className="founders_decor sparkle_founders_1" />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
