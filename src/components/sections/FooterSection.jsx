import React from "react";
import "./FooterSection.css";
import footerBg from "../../Image/Footer/Footer.png";

const FooterSection = () => {
  return (
    <footer className="footer_section" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer_container">
        <div className="footer_content_grid">
          {/* Left Column - Both Explore AND Contact us */}
          <div className="footer_column footer_nav_column">
            {/* Explore Section */}
            <div>
              <h3 className="footer_column_title">Explore</h3>
              <ul className="footer_nav_list">
                <li className="footer_nav_item">
                  <a href="#about" className="footer_nav_link">
                    About us
                  </a>
                </li>
                <li className="footer_nav_item">
                  <a href="#instagram" className="footer_nav_link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer_contact_column">
              <h3 className="footer_column_title">Contact us</h3>
              <div className="footer_contact_info">
                <a
                  href="mailto:email@gmail.com"
                  className="footer_contact_link"
                >
                  email@gmail.com
                </a>
                <a href="tel:+917667676668" className="footer_contact_link">
                  +91 7667676668
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Locations */}
          <div className="footer_column footer_locations_column">
            <div className="footer_location_item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="location_icon"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="2" />
              </svg>
              <p className="location_text">Ameerpet Metro Station, Hyderabad</p>
            </div>
            <div className="footer_location_item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="location_icon"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="2" />
              </svg>
              <p className="location_text">
                Central Mall, Punjagutta, Hyderabad
              </p>
            </div>
            <div className="footer_location_item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="location_icon"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" stroke="white" strokeWidth="2" />
              </svg>
              <p className="location_text">
                Next Galleria Mall, Punjagutta, Hyderabad
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Logo and Legal */}
        <div className="footer_bottom">
          <div className="footer_logo_wrapper">
            <h2 className="footer_logo">
              Insta<span className="footer_logo_highlight">Snap</span>
            </h2>
            <span className="footer_trademark">TM</span>
          </div>

          <div className="footer_legal">
            <div className="footer_legal_row">
              <p className="footer_copyright">© 2025 Instsnap</p>
              <span className="footer_separator">|</span>
              <a href="#terms" className="footer_legal_link">
                Terms & Conditions
              </a>
              <span className="footer_separator">|</span>
              <a href="#privacy" className="footer_legal_link">
                Privacy
              </a>
            </div>
          </div>
        </div>

    
      </div>
    </footer>
  );
};

export default FooterSection;
