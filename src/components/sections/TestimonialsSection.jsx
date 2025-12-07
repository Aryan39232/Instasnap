import React, { useState, useEffect, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const resumeTimeoutRef = useRef(null);

  // Detect mobile and tablet screen sizes
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 550);
      setIsTablet(width >= 550 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Image swap function for TwoStar
  const get_twoStar_image = () => current_frame === 0 ? twoStar_1 : twoStar_2;

  // Auto-rotation for mobile
  useEffect(() => {
    if (!isMobile || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile, isPaused, testimonials.length]);

  // Pause auto-rotation on user interaction
  const pauseAutoRotation = () => {
    setIsPaused(true);
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    // Resume after 3 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Cleanup resume timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // Swipe handlers
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoRotation();
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    } else if (isRightSwipe) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

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
    if (isMobile) {
      pauseAutoRotation();
    }
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    // For tablets, show only 3 cards (-1, 0, 1)
    // For desktop, show 5 cards (-2, -1, 0, 1, 2)
    const range = isTablet ? 1 : 2;
    for (let i = -range; i <= range; i++) {
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

        {/* Desktop Carousel - 5 cards visible */}
        {!isMobile && (
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
                  {/* Line11 image - only for center card */}
                  {testimonial.position === 0 && (
                    <img src={line11_image} alt="" className="testimonials_line11" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Slider - Single card visible */}
        {isMobile && (
          <div className="testimonials_carousel_wrapper_mobile">
            <div 
              className="testimonials_slider_track"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="testimonial_card_mobile"
                >
                  <div className="testimonial_image_wrapper_mobile">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.location} 
                      className="testimonial_image" 
                    />
                  </div>
                  <p className="testimonial_location_mobile">
                    {testimonial.location}
                  </p>
                  {/* Line11 image for mobile */}
                  <img src={line11_image} alt="" className="testimonials_line11_mobile" />
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="slider_dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`slider_dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    pauseAutoRotation();
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TestimonialsSection;
