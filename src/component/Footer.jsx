import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
/* Real React Icons Import modules */
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import '../style.css/Footer.css'; 

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current.querySelectorAll('.ft-fade-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  // 🎯 INLINE HOVER RE-ACTIVE SYSTEM MECHANICS
  const handleMouseEnter = (e, brandColor) => {
    e.currentTarget.style.background = brandColor;
    e.currentTarget.style.borderColor = brandColor;
    const icon = e.currentTarget.querySelector('.react-ft-icon');
    if (icon) icon.style.color = '#ffffff';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
    e.currentTarget.style.borderColor = 'rgba(230, 184, 138, 0.35)';
    const icon = e.currentTarget.querySelector('.react-ft-icon');
    if (icon) icon.style.color = '#E6B88A';
  };

  return (
    <footer ref={footerRef} className="brand-footer-dark">
      <div className="footer-max-container">
        
        {/* COLUMN 1: Identity */}
        <div className="footer-column-main ft-fade-item">
          <div className="footer-logo-zone">
            <img 
              src="/logo.png" 
              alt="MANIST OFFICIAL" 
              className="footer-brand-logo" 
              onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }}
            />
            <h2 className="footer-logo-fallback-text">MANIST</h2>
          </div>
          <p className="footer-brand-tagline">
            Crafting ultra-stylish, hand-poured sensory experiences, therapeutic essential oils, and organic skincare wellness for modern luxury spaces.
          </p>
          
          {/* 🎯 FIXED FOREVER: Hover trigger blocks mapped smoothly inside the anchor attributes */}
          <div className="footer-social-icons-flex">
            <a 
              href="https://www.instagram.com/manistorganics?rpxt=OTg1eXY0aTMwOW5h" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle-link" 
              title="Instagram"
              onMouseEnter={(e) => handleMouseEnter(e, 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)')}
              onMouseLeave={handleMouseLeave}
            >
              <FaInstagram className="react-ft-icon" style={{ fontSize: '20px', color: '#E6B88A', transition: 'color 0.3s ease' }} />
            </a>
            
            <a 
              href="https://www.facebook.com/share/1EcHqaNwg9/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle-link" 
              title="Facebook"
              onMouseEnter={(e) => handleMouseEnter(e, '#1877F2')}
              onMouseLeave={handleMouseLeave}
            >
              <FaFacebookF className="react-ft-icon" style={{ fontSize: '20px', color: '#E6B88A', transition: 'color 0.3s ease' }} />
            </a>
            
            <a 
              href="https://www.tiktok.com/@manist_official" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle-link" 
              title="TikTok"
              onMouseEnter={(e) => handleMouseEnter(e, '#010101')}
              onMouseLeave={handleMouseLeave}
            >
              <FaTiktok className="react-ft-icon" style={{ fontSize: '20px', color: '#E6B88A', transition: 'color 0.3s ease' }} />
            </a>
            
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-circle-link" 
              title="YouTube"
              onMouseEnter={(e) => handleMouseEnter(e, '#FF0000')}
              onMouseLeave={handleMouseLeave}
            >
              <FaYoutube className="react-ft-icon" style={{ fontSize: '20px', color: '#E6B88A', transition: 'color 0.3s ease' }} />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Links */}
        <div className="footer-column-links ft-fade-item">
          <h4 className="footer-column-title-gold">Explore</h4>
          <ul className="footer-links-list-menu">
            <li><a href="#home">Home Base</a></li>
            <li><a href="#showcase">Our Collection</a></li>
            <li><a href="#about">The Legacy Story</a></li>
            <li><a href="#contact">Get In Touch</a></li>
          </ul>
        </div>

        {/* COLUMN 3: Contact */}
        <div className="footer-column-contact ft-fade-item">
          <h4 className="footer-column-title-gold">The Atelier Contact</h4>
          <ul className="footer-contact-details-lines">
            <li><FaMapMarkerAlt className="contact-icon-gold" /> Gujranwala, Pakistan</li>
            <li><FaEnvelope className="contact-icon-gold" /> drammara06@gmail.com</li>
            <li><FaPhoneAlt className="contact-icon-gold" /> +92 342 3515942</li>
          </ul>
        </div>

      </div>

    {/* BOTTOM BASEBAR */}
<div className="footer-bottom-copyright-strip ft-fade-item">
  <p>&copy; 2026 MANIST OFFICIAL. Handcrafted with Absolute Luxury. Powered by Organic Excellence.</p>
  <p className="made-by-faqeeha">
    Made with <span className="made-by-heart">♥</span> by <span className="made-by-name">Faqeeha Developer</span>
  </p>
</div>
    </footer>
  );
};

export default Footer;
