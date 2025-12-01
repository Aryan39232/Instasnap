import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

// Import images from LoadingImage folders - each folder has 2 images for swapping
// Folder 1: InstaSnap Design (10)
import star_1 from '../Image/LoadingImage/InstaSnap Design (10)/Property 1=star-1.png';
import star from '../Image/LoadingImage/InstaSnap Design (10)/Property 1=star.png';

// Folder 2: InstaSnap Design (11)
import grass from '../Image/LoadingImage/InstaSnap Design (11)/Property 1=grass.png';
import highlight_34 from '../Image/LoadingImage/InstaSnap Design (11)/Property 1=Highlight 34.png';

// Folder 3: InstaSnap Design (12)
import gras_1 from '../Image/LoadingImage/InstaSnap Design (12)/Property 1=gras-1.png';
import gras from '../Image/LoadingImage/InstaSnap Design (12)/Property 1=gras.png';

// Folder 4: InstaSnap Design (13)
import crackers_1 from '../Image/LoadingImage/InstaSnap Design (13)/Property 1=crackers-1.png';
import crackers from '../Image/LoadingImage/InstaSnap Design (13)/Property 1=crackers.png';

// Folder 5: InstaSnap Design (14)
import highlight_33_1 from '../Image/LoadingImage/InstaSnap Design (14)/Property 1=Highlight 33.png';
import role from '../Image/LoadingImage/InstaSnap Design (14)/Property 1=role.png';

// Folder 6: InstaSnap Design (15)
import highlight_33_2 from '../Image/LoadingImage/InstaSnap Design (15)/Property 1=Highlight 33.png';
import swirl from '../Image/LoadingImage/InstaSnap Design (15)/Property 1=swirl.png';

// Folder 7: InstaSnap Design (16)
import arrow_10 from '../Image/LoadingImage/InstaSnap Design (16)/Property 1=Arrow 10.png';
import variant24 from '../Image/LoadingImage/InstaSnap Design (16)/Property 1=Variant24.png';

// Folder 8: InstaSnap Design (5)
import group_39927 from '../Image/LoadingImage/InstaSnap Design (5)/Property 1=Group 39927.png';
import xoxo from '../Image/LoadingImage/InstaSnap Design (5)/Property 1=xoxo.png';

// Folder 9: InstaSnap Design (6)
import group_39926 from '../Image/LoadingImage/InstaSnap Design (6)/Property 1=Group 39926.png';
import sparkels from '../Image/LoadingImage/InstaSnap Design (6)/Property 1=sparkels.png';

// Folder 10: InstaSnap Design (7)
import heart from '../Image/LoadingImage/InstaSnap Design (7)/Property 1=heart.png';
import highlight_12 from '../Image/LoadingImage/InstaSnap Design (7)/Property 1=Highlight 12.png';

// Folder 11: InstaSnap Design (8)
import shout_1 from '../Image/LoadingImage/InstaSnap Design (8)/Property 1=shout-1.png';
import shout from '../Image/LoadingImage/InstaSnap Design (8)/Property 1=shout.png';

// Folder 12: InstaSnap Design (9)
import arrow_11 from '../Image/LoadingImage/InstaSnap Design (9)/Property 1=Arrow 11.png';
import arrow_12 from '../Image/LoadingImage/InstaSnap Design (9)/Property 1=Arrow 12.png';

const LoadingPage = ({ onComplete }) => {
  const [current_frame, set_current_frame] = useState(0);
  const [countdown, set_countdown] = useState(5);

  useEffect(() => {
    // Countdown timer - starts at 5, counts down to 1, then navigates
    const countdownInterval = setInterval(() => {
      set_countdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Wait a moment to show "1" before navigating
          setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
          }, 500);
          return 1; // Keep showing 1 until navigation
        }
        return prev - 1;
      });
    }, 1000);

    // Swap images every 500ms for slide animation
    const imageInterval = setInterval(() => {
      set_current_frame((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(imageInterval);
    };
  }, [onComplete]);

  // Image pairs for swapping - each folder has 2 images
  const get_image_1 = () => current_frame === 0 ? star_1 : star;
  const get_image_2 = () => current_frame === 0 ? grass : highlight_34;
  const get_image_3 = () => current_frame === 0 ? gras_1 : gras;
  const get_image_4 = () => current_frame === 0 ? crackers_1 : crackers;
  const get_image_5 = () => current_frame === 0 ? highlight_33_1 : role;
  const get_image_6 = () => current_frame === 0 ? highlight_33_2 : swirl;
  const get_image_7 = () => current_frame === 0 ? arrow_10 : variant24;
  const get_image_8 = () => current_frame === 0 ? group_39927 : xoxo;
  const get_image_9 = () => current_frame === 0 ? group_39926 : sparkels;
  const get_image_10 = () => current_frame === 0 ? heart : highlight_12;
  const get_image_11 = () => current_frame === 0 ? shout_1 : shout;
  const get_image_12 = () => current_frame === 0 ? arrow_11 : arrow_12;

  return (
    <div className="loading_container">
      <div className="loading_content">
        {/* Countdown Display */}
        <div className="countdown_wrapper">
          <div className="countdown_number" data-count={countdown}>{countdown}</div>
        </div>

        {/* Decorative Elements - 12 images from LoadingImage folders */}
        <div className="decorative_elements">
          {/* Image 1 - Folder 10: star */}
          <img src={get_image_1()} alt="image1" className="element image_1 image_swap" />
          
          {/* Image 2 - Folder 11: grass/highlight */}
          <img src={get_image_2()} alt="image2" className="element image_2 image_swap" />
          
          {/* Image 3 - Folder 12: gras */}
          <img src={get_image_3()} alt="image3" className="element image_3 image_swap" />
          
          {/* Image 4 - Folder 13: crackers */}
          <img src={get_image_4()} alt="image4" className="element image_4 image_swap" />
          
          {/* Image 5 - Folder 14: highlight/role */}
          <img src={get_image_5()} alt="image5" className="element image_5 image_swap" />
          
          {/* Image 6 - Folder 15: highlight/swirl */}
          <img src={get_image_6()} alt="image6" className="element image_6 image_swap" />
          
          {/* Image 7 - Folder 16: arrow/variant */}
          <img src={get_image_7()} alt="image7" className="element image_7 image_swap" />
          
          {/* Image 8 - Folder 5: group/xoxo */}
          <img src={get_image_8()} alt="image8" className="element image_8 image_swap" />
          
          {/* Image 9 - Folder 6: group/sparkels */}
          <img src={get_image_9()} alt="image9" className="element image_9 image_swap" />
          
          {/* Image 10 - Folder 7: heart/highlight */}
          <img src={get_image_10()} alt="image10" className="element image_10 image_swap" />
          
          {/* Image 11 - Folder 8: shout */}
          <img src={get_image_11()} alt="image11" className="element image_11 image_swap" />
          
          {/* Image 12 - Folder 9: arrows */}
          <img src={get_image_12()} alt="image12" className="element image_12 image_swap" />
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;
