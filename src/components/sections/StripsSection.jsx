import React, { useState, useEffect } from 'react';
import './StripsSection.css';

import image01 from '../../Image/people/01.png';
import image02 from '../../Image/people/02.png';
import image03 from '../../Image/people/03.png';
import image04 from '../../Image/people/04.png';
import image05 from '../../Image/people/05.png';
import image06 from '../../Image/people/06.png';
import image07 from '../../Image/people/07.png';
import image08 from '../../Image/people/08.png';

// Import decorative images from StripsSection folder - each folder has 2 images for swapping
// Heart folder
import heart_1 from '../../Image/StripsSection/Heart/Property 1=heart.png';
import heart_2 from '../../Image/StripsSection/Heart/Property 1=Highlight 12.png';

// FullGrass folder
import fullGrass_1 from '../../Image/StripsSection/FullGrass/Property 1=gras-1.png';
import fullGrass_2 from '../../Image/StripsSection/FullGrass/Property 1=gras.png';

// Grass folder
import grass_1 from '../../Image/StripsSection/Grass/Property 1=grass.png';
import grass_2 from '../../Image/StripsSection/Grass/Property 1=Highlight 34.png';

// Star folder
import star_1 from '../../Image/StripsSection/Star/Property 1=star-1.png';
import star_2 from '../../Image/StripsSection/Star/Property 1=star.png';

// Arrow folder
import arrow_1 from '../../Image/StripsSection/Arrow/Property 1=Arrow 11.png';
import arrow_2 from '../../Image/StripsSection/Arrow/Property 1=Arrow 12.png';

// markatEnd.png
import markatEnd from '../../Image/StripsSection/markatEnd.png';

// Circle.png
import circle from '../../Image/StripsSection/Circle.png';

const StripsSection = () => {
  const [current_frame, set_current_frame] = useState(0);

  useEffect(() => {
    // Swap images every 500ms like loading page
    const imageInterval = setInterval(() => {
      set_current_frame((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(imageInterval);
  }, []);

  // Image swap functions
  const get_heart_image = () => current_frame === 0 ? heart_1 : heart_2;
  const get_fullGrass_image = () => current_frame === 0 ? fullGrass_1 : fullGrass_2;
  const get_grass_image = () => current_frame === 0 ? grass_1 : grass_2;
  const get_star_image = () => current_frame === 0 ? star_1 : star_2;
  const get_arrow_image = () => current_frame === 0 ? arrow_1 : arrow_2;

  return (
    <section className="strips_section">
      <div className="strips_container">
        <div className="strips_gallery_grid">
          {/* Row 1: Image | "Strips Of Memory" | Image | Image */}
          <div className="photo_strip strip_1">
            <img src={image01} alt="Memory" className="strip_photo" />
          </div>

          <div className="text_box strips_header">
            <h2 className="strips_title">Strips Of<br />Memory</h2>
            <img src={get_arrow_image()} alt="" className="strips_arrow_decor image_swap" />
          </div>

          <div className="photo_strip strip_2">
            <img src={image02} alt="Memory" className="strip_photo" />
          </div>

          <div className="photo_strip strip_3">
            <img src={image03} alt="Memory" className="strip_photo" />
          </div>

          {/* Row 2: Image | Image | "Instant Memories..." | Image */}
          <div className="photo_strip strip_4">
            <img src={image04} alt="Memory" className="strip_photo" />
          </div>

          <div className="photo_strip strip_5">
            <img src={image05} alt="Memory" className="strip_photo" />
            <img src={get_grass_image()} alt="" className="strip_5_grass image_swap" />
          </div>

          <div className="text_box strip_tagline_box">
            <p className="strip_tagline">
              <span className="instant_word">
                Instant
                <img src={circle} alt="" className="instant_circle" />
              </span><br />
              Memories,<br />
              <span className="zero_drama">Zero Drama.</span>
            </p>
          </div>

          <div className="photo_strip strip_6">
            <img src={image06} alt="Memory" className="strip_photo" />
            <img src={get_star_image()} alt="" className="strip_6_star image_swap" />
          </div>

          {/* Row 3: Image | "It Is Timeless" | Image | Image */}
          <div className="photo_strip strip_7">
            <img src={image07} alt="Memory" className="strip_photo" />
            <img src={get_fullGrass_image()} alt="" className="strip_7_fullGrass image_swap" />
          </div>

          <div className="text_box strips_bottom_text">
            <p className="timeless_text">
              It Is Timeless
              <img src={markatEnd} alt="" className="timeless_markatEnd" />
            </p>
          </div>

          <div className="photo_strip strip_8">
            <img src={image08} alt="Memory" className="strip_photo" />
            <img src={get_heart_image()} alt="" className="strip_8_heart image_swap" />
          </div>

          <div className="photo_strip strip_9">
            <img src={image01} alt="Memory" className="strip_photo" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StripsSection;
