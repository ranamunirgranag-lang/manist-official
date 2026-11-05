import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../style.css/about.css'; // Sab small letter paths jesa hamara rule hai

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const leftImagesRef = useRef(null);

  useEffect(() => {
    // Elegant stagger fade reveal for professional texts
    gsap.fromTo(".about-reveal", 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    // Multi-layered cinematic sliding effect for product frames
    gsap.fromTo(".about-frame-animate",
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-viewport-dark">
      {/* Background radial soft ambient lights */}
      <div className="about-ambient-glow-1" />
      <div className="about-ambient-glow-2" />

      <div className="about-content-wrapper-premium">
        
        {/* LEFT PANEL: Multi-Image Grid Framework for Candles, Oils, & Creams */}
        <div ref={leftImagesRef} className="about-imagery-showcase-zone">
          <div className="about-image-frame-main about-frame-animate">
            <img 
              src="/about-candle.jpg" 
              alt="Handcrafted Luxury Scented Candles" 
              className="about-asset-img"
              onError={(e) => { e.target.src = "oil.jpg" }}
            />
            <span className="frame-badge-gold">Organic Candles</span>
          </div>
          
          <div className="about-image-frame-secondary about-frame-animate">
            <img 
              src="/about-skincare.jpg" 
              alt="Homemade Luxury Essential Oils and Creams" 
              className="about-asset-img"
              onError={(e) => { e.target.src = "candle.png" }}
            />
            <span className="frame-badge-gold">Oils & Creams</span>
          </div>
        </div>

        {/* RIGHT PANEL: Elite Elite Brand Copywriting Story */}
        <div className="about-literary-narrative-zone">
          <span className="about-mini-tag-glow about-reveal">The Artisan & Founder</span>
          <h2 className="about-main-title-luxury about-reveal">Our Legacy</h2>
          <div className="about-glowing-divider about-reveal" />
          
          <p className="about-story-p-elite about-reveal">
            Founded by the visionary artisan <strong>Ume Ammara Naeem</strong>, <span className="text-highlight-gold">MANIST OFFICIAL</span> began as a passionate, home-based pursuit of absolute sensory perfection. What started within the walls of a cozy home studio is now destined to illuminate and bring serenity to spaces across the entire globe.
          </p>
          
          <p className="about-story-p-elite about-reveal">
            We specialize in crafting ultra-stylish, hand-poured homemade candles, alongside premium therapeutic essential oils and organic skincare creams. Every single product is born from 100% all-natural, raw organic ingredients, meticulously blended to preserve unparalleled premium quality.
          </p>
          
          <p className="about-story-p-elite about-reveal text-italic">
            "We do not mass-produce commodities. We design unforgettable emotional atmospheres, luxury self-care rituals, and flawless aesthetic statements for modern lifestyles."
          </p>

          {/* Uncompromising Quality Seal Certification Badge */}
          <div className="about-quality-seal-flex about-reveal">
            <div className="seal-item">🛡️ 100% Organic Certified</div>
            <div className="seal-item">✨ Flawless Homemade Standards</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
