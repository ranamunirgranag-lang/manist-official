
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../style.css/home.css';

const Home = () => {
  const textContainerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    // GSAP Timeline Animation
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-mini-tag",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4
      }
    )
    .fromTo(
      ".hero-main-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out"
      },
      "-=0.5"
    )
    .fromTo(
      ".hero-description",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8
      },
      "-=0.6"
    )
    .fromTo(
      ".hero-cta-whatsapp",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.5)"
      },
      "-=0.4"
    )
    .fromTo(
      imageWrapperRef.current,
      { opacity: 0, x: 80, rotate: 4 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.4,
        ease: "power4.out"
      },
      "-=1.2"
    );
  }, []);

  // MANIST OFFICIAL WHATSAPP CONNECTION
  const handleWhatsAppOrder = () => {
    const phoneNumber = "923423515942";

    const message = `
Assalamualaikum! 🌸

Welcome to MANIST OFFICIAL! ✨

Thank you for visiting our store. ❤️

Discover our beautiful collection:

🕯️ Handcrafted Luxury Candles
🌿 Premium Oils
💗 Beauty & Skincare Creams

We are here to help you!

You can ask us about:

1. Product details and prices.
2. Available products and fragrances.
3. Customization and special orders.
4. Delivery charges and timings.
5. Payment methods and order confirmation.

Please let us know what you are looking for. We will be happy to guide you!

Thank you for choosing MANIST OFFICIAL. 🌷

Your satisfaction is our priority! ❤️
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="home" className="hero-viewport">

      <div className="hero-content-wrapper">

        {/* Left Interactive Text Content */}
        <div ref={textContainerRef} className="hero-left-text">

          <span className="hero-mini-tag">
            Handcrafted Luxury Candles
          </span>

          <h1 className="hero-main-title">
            Illuminate Your Space With <span>MANIST</span>
          </h1>

          <p className="hero-description">
            Premium, colorful, and customized scented candles
            designed tastefully to turn your ordinary rooms
            into cozy aesthetic memories.
          </p>

          {/* WhatsApp Order Button */}
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="hero-cta-whatsapp"
            style={{
              border: 'none',
              cursor: 'pointer',
              font: 'inherit'
            }}
          >

            <svg
              className="wa-icon-svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                fill="#ffffff"
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.447 5.338 1.448 5.494 0 9.961-4.471 9.964-9.97 0-2.664-1.033-5.17-2.91-7.053C17.162 1.697 14.653.662 12.01.662c-5.51 0-9.98 4.47-9.983 9.97-.001 2.014.52 3.982 1.51 5.7l-.32 1.17-.775 2.833 2.91-.763.705-.426z"
              />
            </svg>

            Order on WhatsApp

          </button>

        </div>

        {/* Right Aesthetic Imagery Showcase */}
        <div
          ref={imageWrapperRef}
          className="hero-right-display"
        >

          <div className="hero-image-backdrop" />

          <video
            src="/video.mp4"
            className="hero-showcase-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/video.mp4"
          >
            Your browser does not support the video tag.
          </video>

        </div>

      </div>

    </section>
  );
};

export default Home;
