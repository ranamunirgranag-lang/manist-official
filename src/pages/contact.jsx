
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../style.css/contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const cardRef = useRef(null);
  const elementsRef = useRef(null);

  useEffect(() => {
    // 1. Core Card Animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // 2. Internal Text Animation
    gsap.fromTo(
      elementsRef.current.querySelectorAll('.ct-stagger-item'),
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, []);

  // MANIST OFFICIAL WHATSAPP CONTACT
  const handleWhatsAppContact = () => {
    const phoneNumber = "923423515942";

    const message = `
Assalamualaikum! 🌸

Welcome to MANIST OFFICIAL! ✨

Thank you for visiting our store. ❤️

We are delighted to connect with you!

How can we assist you today?

🕯️ Candles
🌿 Premium Oils
💗 Beauty & Skincare Creams

You can contact us for:

1. Product details and prices.
2. Available products and shades.
3. Custom orders and special requests.
4. Bulk orders and gift packaging.
5. Delivery information and payment methods.

Please share your requirements with us, and our team will be happy to guide you.

Thank you for choosing MANIST OFFICIAL! 🌷

Your satisfaction is our priority. ❤️
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact-viewport-dark">

      {/* Background Glow */}
      <div className="contact-ambient-neon-glow" />

      {/* Premium Contact Card */}
      <div ref={cardRef} className="contact-premium-card-glowing">

        <div
          ref={elementsRef}
          className="contact-inner-content-wrapper"
        >

          <span className="contact-tag-gold ct-stagger-item">
            Get In Touch
          </span>

          <h2 className="contact-main-title-luxury ct-stagger-item">
            Let's Connect
          </h2>

          <div className="contact-glowing-gold-line ct-stagger-item" />

          <p className="contact-description-pro ct-stagger-item">
            Whether you want to curate a bespoke color combination,
            design a personalized signature fragrance blend, or
            arrange bulk event packaging for luxury gifts, corporate
            gatherings, or weddings—we are here to bring your vision
            to life. Let's collaborate!
          </p>

          {/* Contact Details */}
          <div className="contact-details-grid-premium ct-stagger-item">

            <div className="contact-detail-item-luxury">
              <span className="icon-span-glow">📍</span>
              Gujranwala Pakistan
            </div>

            <div className="contact-detail-item-luxury">
              <span className="icon-span-glow">📧</span>
              drammara06@gmail.com
            </div>

          </div>

          {/* WhatsApp Contact Button */}
          <div className="contact-action-zone-pro ct-stagger-item">

            <button
              type="button"
              onClick={handleWhatsAppContact}
              className="contact-wa-submit-btn-glow"
              style={{
                border: 'none',
                cursor: 'pointer',
                font: 'inherit'
              }}
            >
              <span>Message on WhatsApp</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
