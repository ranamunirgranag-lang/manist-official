
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../style.css/header.css';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Header Entry Animation
    gsap.fromTo(
      headerRef.current,
      { y: -120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out'
      }
    );
  }, []);

  // Mobile Slide-in Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        right: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out'
      });

      gsap.fromTo(
        ".mobile-nav-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.4,
          delay: 0.2
        }
      );
    } else {
      gsap.to(menuRef.current, {
        right: '-100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in'
      });
    }
  }, [isMenuOpen]);

  // MANIST OFFICIAL WHATSAPP CONNECTION
  const handleWhatsAppChat = () => {
    const phoneNumber = "923423515942";

    const message = `
Assalamualaikum! 🌸

Welcome to MANIST OFFICIAL! ✨

Thank you for visiting our online store. ❤️

We are delighted to connect with you!

Explore our beautiful collection:

🕯️ Handcrafted Luxury Candles
🌿 Premium Oils
💗 Beauty & Skincare Creams

How can we help you today?

You can ask us about:

1. Product details and prices.
2. Available collections.
3. Custom orders and special requests.
4. Delivery charges and timings.
5. Payment methods and order confirmation.

Please share your requirements with us.

Our team will be happy to guide you!

Thank you for choosing MANIST OFFICIAL. 🌷

Your satisfaction is our priority! ❤️
`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <nav ref={headerRef} className="header-nav-pro">

      <div className="nav-wrapper-max">

        {/* Brand Logo */}
        <div className="logo-area-premium">

          <img
            src="/logo.png"
            alt="MANIST OFFICIAL"
            className="brand-main-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />

          <h1 className="brand-logo-fallback">
            MANIST
          </h1>

        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu-desktop">

          <li>
            <a href="#home" className="nav-link-glow">
              Home
            </a>
          </li>

          {/* Collection Dropdown */}
          <li
            className="dropdown-wrapper"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >

            <span
              className="nav-link-glow"
              style={{ cursor: 'pointer' }}
            >
              Collection ▾
            </span>

            {isDropdownOpen && (
              <ul className="dropdown-menu-list">

                <li>
                  <a
                    href="#showcase"
                    onClick={() => {
                      window.setCatalogTab?.('candles');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Candles
                  </a>
                </li>

                <li>
                  <a
                    href="#showcase"
                    onClick={() => {
                      window.setCatalogTab?.('oils');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Oils
                  </a>
                </li>

                <li>
                  <a
                    href="#showcase"
                    onClick={() => {
                      window.setCatalogTab?.('creams');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Creams
                  </a>
                </li>

              </ul>
            )}

          </li>

          <li>
            <a href="#about" className="nav-link-glow">
              Our Story
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link-glow">
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop WhatsApp Button */}
        <div className="nav-action-desktop">

          <button
            type="button"
            onClick={handleWhatsAppChat}
            className="wa-btn-luxury-glow"
            style={{
              border: 'none',
              cursor: 'pointer',
              font: 'inherit'
            }}
          >
            <span>Chat on WA</span>
          </button>

        </div>

        {/* Mobile Hamburger */}
        <button
          className={`mobile-hamburger-btn ${
            isMenuOpen ? 'open' : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </button>

      </div>

      {/* Mobile Navigation Overlay */}
      <div
        ref={menuRef}
        className="mobile-overlay-menu"
      >

        <ul className="mobile-nav-list">

          <li className="mobile-nav-item">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>

          <li className="mobile-nav-item">
            <a
              href="#showcase"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </a>
          </li>

          <li className="mobile-nav-item">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
          </li>

          <li className="mobile-nav-item">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>

          {/* Mobile WhatsApp Button */}
          <li className="mobile-nav-item pt-8">

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                handleWhatsAppChat();
              }}
              className="wa-btn-luxury-glow mobile-wa-full"
              style={{
                border: 'none',
                cursor: 'pointer',
                font: 'inherit'
              }}
            >
              <span>Chat on WhatsApp</span>
            </button>

          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Header;
