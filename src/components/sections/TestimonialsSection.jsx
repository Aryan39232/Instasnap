import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import first from '../../Image/Story/01.jpg';
import second from '../../Image/Story/02.jpg';
import third from '../../Image/Story/03.jpg';
import fourth from '../../Image/Story/04.jpg';
import fifth from '../../Image/Story/05.jpg';

// Import TestimonialsSection images
import line11_image from '../../Image/TestimonialsSection/Line11.png';

// Import TwoStar images for swapping
import twoStar_1 from '../../Image/TestimonialsSection/TwoStar/Property 1=Group 39926.png';
import twoStar_2 from '../../Image/TestimonialsSection/TwoStar/Property 1=sparkels.png';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      location: "Ameerpet metro station, Hyderabad",
      image: first
    },
    {
      id: 2,
      location: "Central Mall, Punjagutta, Hyderabad",
      image: second
    },
    {
      id: 3,
      location: "Next Galleria Mall, Punjagutta, Hyderabad",
      image: third
    },
    {
      id: 4,
      location: "Ameerpet metro station, Hyderabad",
      image: fourth
    },
    {
      id: 5,
      location: "Central Mall, Punjagutta, Hyderabad",
      image: fifth
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [current_frame, set_current_frame] = useState(0);

  useEffect(() => {
    // Swap images every 500ms like loading page
    const imageInterval = setInterval(() => {
      set_current_frame((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(imageInterval);
  }, []);

  // Image swap function for TwoStar
  const get_twoStar_image = () => current_frame === 0 ? twoStar_1 : twoStar_2;

  const handleCardClick = (position) => {
    if (position === -1) {
      // Click on left card - move left
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    } else if (position === 1) {
      // Click on right card - move right
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i,
        arrayIndex: index
      });
    }
    return visible;
  };

  return (
    <section className="testimonials_section">
      <div className="testimonials_container">
        {/* Header */}
        <div className="testimonials_header">
          
          <h2 className="testimonials_title">Hear From Them</h2>
          
          {/* TwoStar images with swap effect */}
          <img src={get_twoStar_image()} alt="" className="testimonials_header_decor star_testi_1 image_swap" />
          <img src={get_twoStar_image()} alt="" className="testimonials_header_decor star_testi_2 image_swap" />
        </div>

        {/* Carousel - 5 cards visible */}
        <div className="testimonials_carousel_wrapper">
          <div className="testimonials_carousel">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.arrayIndex}
                className={`testimonial_card position_${testimonial.position}`}
                onClick={() => handleCardClick(testimonial.position)}
              >
                <div className="testimonial_image_wrapper">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.location} 
                    className="testimonial_image" 
                  />
                </div>
                <p className={`testimonial_location ${testimonial.position === 0 ? 'center' : ''}`}>
                  {testimonial.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Line11 image */}
        <img src={line11_image} alt="" className="testimonials_line11" />

      </div>
    </section>
  );
};

export default TestimonialsSection;
