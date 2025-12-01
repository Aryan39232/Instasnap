import React, { useRef, useEffect } from 'react';
import './AboutSection.css';
import vide from "../../Image/firstVideo.mp4";

// Import three line images
import xo_left from '../../Image/AboutSection/ThreeLine/xo-1.png';
import xo_right from '../../Image/AboutSection/ThreeLine/xo.png';

const AboutSection = () => {
  const video_ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video_ref.current) {
            video_ref.current.play();
          } else if (video_ref.current) {
            video_ref.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (video_ref.current) {
      observer.observe(video_ref.current);
    }

    return () => {
      if (video_ref.current) {
        observer.unobserve(video_ref.current);
      }
    };
  }, []);

  return (
    <section className="about_section">
      <div className="about_container">
        {/* Top Row: Title Left + Features Right */}
        <div className="about_top_row">
          {/* Left: Title */}
          <div className="about_title_wrapper">
            <h2 className="about_title">Lorem Ipsim</h2>
          </div>

          {/* Right: Features */}
          <div className="about_features_wrapper">
            <div className="about_features_list">
              {/* Feature 1 - Cloud Off Icon (Cloud with slash) */}
              <div className="about_feature_item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature_icon">
                  <path d="M24 13C24 9.68629 21.3137 7 18 7C16.7 7 15.5 7.4 14.5 8.1M9 13C6.79086 13 5 14.7909 5 17C5 19.2091 6.79086 21 9 21H23C25.2091 21 27 19.2091 27 17C27 14.7909 25.2091 13 23 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="4" y1="4" x2="28" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="feature_text">
                  Your pictures are never uploaded to the cloud or seen by third parties.
                </p>
              </div>

              {/* Feature 2 - Trash Icon */}
              <div className="about_feature_item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature_icon">
                  <path d="M8 9.6H24V24C24 25.7673 22.5673 27.2 20.8 27.2H11.2C9.43269 27.2 8 25.7673 8 24V9.6Z" stroke="white" strokeWidth="2"/>
                  <path d="M4.8 9.6H27.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12.8 4.8H19.2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12.8 14.4V22.4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19.2 14.4V22.4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="feature_text">
                  Your pictures are auto-deleted right after your session.
                </p>
              </div>

              {/* Feature 3 - Privacy Shield Icon */}
              <div className="about_feature_item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature_icon">
                  <path d="M16 4L6 8V14C6 20 10 25.5 16 28C22 25.5 26 20 26 14V8L16 4Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="16" cy="15" r="3" stroke="white" strokeWidth="2"/>
                  <path d="M16 18V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="feature_text">
                  The system uses special, in-house technology built for speed and privacy.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Row: Full Width Video */}
        <div className="about_video_wrapper">
          {/* Three line image - Left side */}
          <img src={xo_left} alt="" className="about_three_line three_line_left" />
          
          <video
            ref={video_ref}
            className="about_video"
            loop
            muted
            playsInline
          >
            <source src={vide} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Three line image - Right side */}
          <img src={xo_right} alt="" className="about_three_line three_line_right" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
