import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CaptureSection.css';
import GirlsImage from '../../Image/CaptureSection/GirlsImage.jpg';

const CaptureSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textStyles, setTextStyles] = useState({});
  const textRefs = useRef({});
  const sectionRef = useRef(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Calculate which background each text element is on
  useEffect(() => {
    const calculateTextStyles = () => {
      if (!sectionRef.current) return;

      const sectionWidth = sectionRef.current.offsetWidth;
      const newStyles = {};

      Object.keys(textRefs.current).forEach((key) => {
        const element = textRefs.current[key];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const leftPercent = ((rect.left - sectionRect.left) / sectionWidth) * 100;
        const rightPercent = ((rect.right - sectionRect.left) / sectionWidth) * 100;
        const centerPercent = (leftPercent + rightPercent) / 2;

        if (isOpen) {
          // When open, all text is on image - use Lora italic
          newStyles[key] = 'onImage';
        } else {
          // When closed, check position relative to curtains
          // Left curtain: Red (0-25vw) + Dark (25-50vw)
          // Right curtain: Dark (50-75vw) + Red (75-100vw)
          
          // Calculate how much of text is on red vs dark/image
          let redCoverage = 0;
          let totalWidth = rightPercent - leftPercent;

          // Left red area (0-25%)
          if (rightPercent > 0 && leftPercent < 25) {
            const overlapLeft = Math.min(25, rightPercent) - Math.max(0, leftPercent);
            redCoverage += Math.max(0, overlapLeft);
          }

          // Right red area (75-100%)
          if (rightPercent > 75 && leftPercent < 100) {
            const overlapRight = Math.min(100, rightPercent) - Math.max(75, leftPercent);
            redCoverage += Math.max(0, overlapRight);
          }

          const redPercentage = (redCoverage / totalWidth) * 100;

          // If 50% or more is on red, use Poppins, otherwise Lora
          newStyles[key] = redPercentage >= 50 ? 'onRed' : 'onDark';
        }
      });

      setTextStyles(newStyles);
    };

    // Calculate immediately
    calculateTextStyles();
    
    // Recalculate during and after transition for smooth updates
    const interval = setInterval(calculateTextStyles, 100);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      calculateTextStyles();
    }, 1200);
    
    window.addEventListener('resize', calculateTextStyles);
    
    return () => {
      window.removeEventListener('resize', calculateTextStyles);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isOpen]);

  // Transition settings for smooth "heavy" curtain feel
  const transition = {
    duration: 1.2,
    ease: [0.76, 0, 0.24, 1], // Custom bezier
  };

  return (
    <section 
      ref={sectionRef}
      className="capture_section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Background Layer (The Revealed Image) */}
      <div className="capture_image_container">
        <motion.div 
          className="capture_image_wrapper"
          animate={{ scale: isOpen ? 1 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={GirlsImage}
            alt="Capture The Moments"
            className="capture_image"
          />
          {/* Dark overlay to ensure text is legible over the image */}
          <div className="capture_image_overlay" />
        </motion.div>
      </div>

      {/* 2. Curtain Layer - Left Panel */}
      {/* 
         Structure: [Red][Dark]
         Initial: Covers left half of screen (0-50vw)
         Open: Slides Left by 50% of its width. 
               The Red part goes off-screen (-25vw to 0).
               The Dark part becomes the left edge (0 to 25vw).
      */}
      <motion.div 
        className="capture_curtain_left"
        initial={false}
        animate={{ x: isOpen ? '-50%' : '0%' }}
        transition={transition}
      >
        <div className="capture_curtain_red_left"></div>
        <div className="capture_curtain_dark_left"></div>
      </motion.div>

      {/* 3. Curtain Layer - Right Panel */}
      {/* 
         Structure: [Dark][Red]
         Initial: Covers right half of screen (50-100vw)
         Open: Slides Right by 50% of its width.
               The Dark part becomes the right edge (75-100vw).
               The Red part goes off-screen (100-125vw).
      */}
      <motion.div 
        className="capture_curtain_right"
        initial={false}
        animate={{ x: isOpen ? '50%' : '0%' }}
        transition={transition}
      >
        <div className="capture_curtain_dark_right"></div>
        <div className="capture_curtain_red_right"></div>
      </motion.div>

      {/* 4. Typography Layer */}
      <div className="capture_typography_container">
        <motion.div 
          className="capture_typography_wrapper"
          animate={{ gap: isOpen ? '10px' : '0px' }}
          transition={transition}
        >
          {/* Line 1: Capture The */}
          <div className="capture_text_line">
            <motion.h1 
              ref={(el) => (textRefs.current['line1'] = el)}
              className={`capture_title_line ${textStyles['line1'] === 'onRed' ? 'capture_text_on_red' : textStyles['line1'] === 'onImage' ? 'capture_text_on_image' : 'capture_text_on_dark'}`}
              animate={{ y: isOpen ? 0 : 0, x: isOpen ? -20 : 0 }}
              transition={transition}
            >
              Capture <span className={`capture_the_word ${isOpen ? 'capture_the_accent' : ''}`}>The</span>
            </motion.h1>
          </div>

          {/* Line 2: Moments */}
          <div className="capture_text_line">
            <motion.h1 
              ref={(el) => (textRefs.current['line2'] = el)}
              className={`capture_title_line ${textStyles['line2'] === 'onRed' ? 'capture_text_on_red' : textStyles['line2'] === 'onImage' ? 'capture_text_on_image' : 'capture_text_on_dark'}`}
              animate={{ y: isOpen ? 0 : 0, x: isOpen ? 0 : 0 }}
              transition={transition}
            >
              Moments
            </motion.h1>
          </div>

          {/* Line 3: Carry The */}
          <div className="capture_text_line">
            <motion.h1 
              ref={(el) => (textRefs.current['line3'] = el)}
              className={`capture_title_line ${textStyles['line3'] === 'onRed' ? 'capture_text_on_red' : textStyles['line3'] === 'onImage' ? 'capture_text_on_image' : 'capture_text_on_dark'}`}
              animate={{ y: isOpen ? 0 : 0, x: isOpen ? 0 : 0 }}
              transition={transition}
            >
              Carry <span className={`capture_the_word ${isOpen ? 'capture_the_accent' : ''}`}>The</span>
            </motion.h1>
          </div>

          {/* Line 4: Memory */}
          <div className="capture_text_line">
            <motion.h1 
              ref={(el) => (textRefs.current['line4'] = el)}
              className={`capture_title_line ${textStyles['line4'] === 'onRed' ? 'capture_text_on_red' : textStyles['line4'] === 'onImage' ? 'capture_text_on_image' : 'capture_text_on_dark'}`}
              animate={{ y: isOpen ? 0 : 0, x: isOpen ? 20 : 0 }}
              transition={transition}
            >
              Memory
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* 5. Metadata Text - Right Side */}
      <motion.div 
        className={`capture_metadata_container ${isOpen ? 'capture_text_on_image' : 'capture_text_on_red'}`}
        animate={{ opacity: isOpen ? 1 : 0.5 }}
        transition={transition}
      >
        <span className="capture_metadata_top">Lorem Ipsi,</span>
        <span className="capture_metadata_bottom">Loren</span>
      </motion.div>
    </section>
  );
};

export default CaptureSection;
