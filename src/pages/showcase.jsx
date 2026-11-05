
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { candlesData, oilsData, creamsData } from '../data/products';
import '../style.css/showcase.css';

gsap.registerPlugin(ScrollTrigger);

const DELIVERY_CHARGES = 300;
const ADVANCE_PAYMENT = 300;
const WHATSAPP_NUMBER = "923423515942";

const UNIVERSAL_COLORS = [
  { code: "#FDF0D5", name: "Creamy White" },
  { code: "#FFE4D6", name: "Pastel Pink" },
  { code: "#E8D7F1", name: "Soft Lavender" },
  { code: "#A8DADC", name: "Pastel Blue" },
  { code: "#D4A373", name: "Soft Amber" },
  { code: "#E07A5F", name: "Terracotta" },
  { code: "#457B9D", name: "Ocean Blue" },
  { code: "#E63946", name: "Rose Crimson" }
];

const formatPrice = (amount) => {
  return `Rs. ${Number(amount).toLocaleString('en-PK')}`;
};

// Product price ko number mein convert karna
const getNumericPrice = (price) => {
  if (typeof price === 'number') return price;

  const cleanedPrice = String(price || '').replace(/,/g, '');
  const match = cleanedPrice.match(/\d+(\.\d+)?/);

  return match ? Number(match[0]) : 0;
};


// ==========================================
// PRODUCT ROW
// ==========================================

const ProductRow = ({
  item,
  isEven,
  currentTab,
  cartQuantity,
  onAddToCart,
  onQuantityChange
}) => {

  const [selectedColorName, setSelectedColorName] = useState(
    UNIVERSAL_COLORS[0].name
  );

  const [selectedColorCode, setSelectedColorCode] = useState(
    UNIVERSAL_COLORS[0].code
  );

  const rowRef = useRef(null);
  const imagePanelRef = useRef(null);
  const infoPanelRef = useRef(null);

  useEffect(() => {

    const imageAnimation = gsap.fromTo(
      imagePanelRef.current,
      {
        opacity: 0,
        x: isEven ? -80 : 80,
        rotate: isEven ? -3 : 3
      },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 82%",
          end: "bottom 15%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    const infoAnimation = gsap.fromTo(
      infoPanelRef.current.querySelectorAll('.sc-reveal-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    return () => {
      imageAnimation.scrollTrigger?.kill();
      infoAnimation.scrollTrigger?.kill();
      imageAnimation.kill();
      infoAnimation.kill();
    };

  }, [item, isEven]);


  return (
    <div
      ref={rowRef}
      className={`showcase-row ${isEven ? 'row-normal' : 'row-reverse'}`}
    >

      {/* Product Image Frame */}

      <div ref={imagePanelRef} className="candle-image-panel">

        <div
          className="candle-image-bg-effect"
          style={{
            backgroundColor: currentTab === 'candles'
              ? selectedColorCode
              : '#E6B88A',

            boxShadow: currentTab === 'candles'
              ? `0 0 40px ${selectedColorCode}66`
              : '0 0 40px rgba(230, 184, 138, 0.15)'
          }}
        />

        <div className="candle-image-holder">

          <img
            src={item.image}
            alt={item.name}
            className="candle-main-display-pic"
            onError={(e) => {
              e.target.src = item.fallbackImage;
            }}
          />

        </div>

      </div>


      {/* Product Information Panel */}

      <div ref={infoPanelRef} className="candle-info-panel">

        <span className="candle-row-tag sc-reveal-item">
          {item.tagline}
        </span>

        <h3 className="candle-row-title sc-reveal-item">
          {item.name}
        </h3>


        {/* Product Price */}

       <p
  className="candle-row-price sc-reveal-item"
  style={{
    color: '#E6B88A',
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '15px'
  }}
>
  Rs. {item.price}
</p>

        <p className="candle-row-desc sc-reveal-item">
          {item.description}
        </p>


        {/* Candle Color Selector */}

        {currentTab === 'candles' && (

          <div className="candle-color-selector-zone sc-reveal-item">

            <label className="candle-color-lbl">

              Select Custom Shade:

              <span className="active-color-name">
                ({selectedColorName})
              </span>

            </label>

            <div className="candle-color-dots-flex">

              {UNIVERSAL_COLORS.map((colorItem, idx) => (

                <button
                  type="button"
                  key={idx}
                  onClick={() => {
                    setSelectedColorName(colorItem.name);
                    setSelectedColorCode(colorItem.code);
                  }}
                  style={{
                    backgroundColor: colorItem.code
                  }}
                  className={`candle-color-dot-btn ${
                    selectedColorName === colorItem.name
                      ? 'dot-active'
                      : ''
                  }`}
                />

              ))}

            </div>

          </div>

        )}


        {/* Add to Cart / Quantity Controls */}

        <div className="candle-btn-container sc-reveal-item">

          {cartQuantity === 0 ? (

            <button
              type="button"
              onClick={() => onAddToCart(
                item,
                currentTab,
                selectedColorName
              )}
              className="hero-cta-whatsapp"
              style={{
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Add to Cart +
            </button>

          ) : (

            <div className="product-quantity-control">

              <button
                type="button"
                onClick={() => onQuantityChange(item, currentTab, -1)}
              >
                −
              </button>

              <span>{cartQuantity}</span>

              <button
                type="button"
                onClick={() => onQuantityChange(item, currentTab, 1)}
              >
                +
              </button>

            </div>

          )}

        </div>

        {cartQuantity > 0 && (
          <p className="cart-added-message">
            ✓ Added to your shopping cart
          </p>
        )}

      </div>

    </div>
  );
};


// ==========================================
// MAIN SHOWCASE
// ==========================================

const Showcase = () => {

  const [activeTab, setActiveTab] = useState('candles');

  // Cart localStorage se load hoga
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('manist_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Customer details
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');


  // Cart localStorage mein save hoga
  useEffect(() => {
    localStorage.setItem('manist_cart', JSON.stringify(cart));
  }, [cart]);


  // Category tab system
  useEffect(() => {

    window.setCatalogTab = (tabName) => {

      setActiveTab(tabName);

      document
        .getElementById("showcase")
        ?.scrollIntoView({ behavior: 'smooth' });

    };

    return () => {
      delete window.setCatalogTab;
    };

  }, []);


  // Active products
  const getActiveCatalogDataSet = () => {

    if (activeTab === 'oils') return oilsData;

    if (activeTab === 'creams') return creamsData;

    return candlesData;
  };


  // Unique product ID
  const getProductKey = (item, category) => {
    return `${category}-${item.id}`;
  };


  // Add product to cart
  const handleAddToCart = (item, category, colorName) => {

    const productKey = getProductKey(item, category);

    const productPrice = getNumericPrice(item.price);

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (product) => product.key === productKey
      );

      if (existingProduct) {

        return previousCart.map((product) =>

          product.key === productKey
            ? { ...product, quantity: product.quantity + 1 }
            : product

        );

      }

      return [
        ...previousCart,
        {
          key: productKey,
          id: item.id,
          name: item.name,
          category,
          price: productPrice,
          quantity: 1,
          color: category === 'candles' ? colorName : null
        }
      ];

    });

  };


  // Increase / decrease quantity
  const handleQuantityChange = (item, category, change) => {

    const productKey = getProductKey(item, category);

    setCart((previousCart) => {

      return previousCart
        .map((product) => {

          if (product.key === productKey) {

            return {
              ...product,
              quantity: product.quantity + change
            };

          }

          return product;

        })
        .filter((product) => product.quantity > 0);

    });

  };


  // Cart calculations
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const productSubtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const grandTotal = productSubtotal + DELIVERY_CHARGES;

  const remainingPayment = grandTotal - ADVANCE_PAYMENT;


  // WhatsApp final order
  const handleFinalOrder = () => {

    if (cart.length === 0) {
      alert('Please add products to your cart first.');
      return;
    }

    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      alert('Please enter your name, phone number and delivery address.');
      return;
    }

    if (productSubtotal <= 0) {
      alert('Please check product prices before placing your order.');
      return;
    }

    const productDetails = cart.map((product, index) => {

      return `
${index + 1}. ${product.name}
Category: ${product.category}
Quantity: ${product.quantity}
Unit Price: ${formatPrice(product.price)}
${product.color ? `Selected Shade: ${product.color}` : ''}
Subtotal: ${formatPrice(product.price * product.quantity)}
`;

    }).join('\n');


    const message = `
Assalamualaikum! 🌸

I would like to place an order from MANIST OFFICIAL.

━━━━━━━━━━━━━━━━━━
🛍️ ORDER DETAILS
━━━━━━━━━━━━━━━━━━

${productDetails}

━━━━━━━━━━━━━━━━━━
💰 PAYMENT SUMMARY
━━━━━━━━━━━━━━━━━━

Products Subtotal: ${formatPrice(productSubtotal)}
Delivery Charges: ${formatPrice(DELIVERY_CHARGES)}
Grand Total: ${formatPrice(grandTotal)}

Advance Payment: ${formatPrice(ADVANCE_PAYMENT)}
Cash on Delivery: ${formatPrice(remainingPayment)}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

Total Items: ${totalQuantity}

Please confirm my order. Thank you! ❤️
MANIST OFFICIAL
`;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

  };


  return (

    <section id="showcase" className="showcase-viewport">

      <div className="showcase-header text-center">

        <span className="sc-mini-tag">
          Handcrafted & Premium Wellness
        </span>

        <h2 className="showcase-main-title">
          The Signature Collection
        </h2>

        <div className="showcase-title-line" />


        {/* Category Switches */}

        <div className="catalog-tab-switcher-row">

          <button
            className={`catalog-tab-btn ${
              activeTab === 'candles' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('candles')}
          >
            Candles
          </button>

          <button
            className={`catalog-tab-btn ${
              activeTab === 'oils' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('oils')}
          >
            Oils
          </button>

          <button
            className={`catalog-tab-btn ${
              activeTab === 'creams' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('creams')}
          >
            Creams
          </button>

        </div>

      </div>


      {/* Product Rows */}

      <div className="showcase-rows-container">

        {getActiveCatalogDataSet().map((item, index) => {

          const productKey = getProductKey(item, activeTab);

          const cartProduct = cart.find(
            (product) => product.key === productKey
          );

          return (

            <ProductRow
              key={productKey}
              item={item}
              isEven={index % 2 === 0}
              currentTab={activeTab}
              cartQuantity={cartProduct?.quantity || 0}
              onAddToCart={handleAddToCart}
              onQuantityChange={handleQuantityChange}
            />

          );

        })}

      </div>


      {/* ================================== */}
      {/* SHOPPING CART */}
      {/* ================================== */}

      <div className="manist-cart-section" id="manist-cart">

        <div className="manist-cart-heading">

          <span>YOUR SHOPPING BAG</span>

          <h2>My Shopping Cart 🛍️</h2>

          <p>
            Your selected MANIST products
          </p>

        </div>


        {cart.length === 0 ? (

          <div className="empty-cart-message">
            <h3>Your Cart is Empty</h3>
            <p>Add your favourite products to get started!</p>
          </div>

        ) : (

          <>

            {/* Cart Products */}

            <div className="manist-cart-items">

              {cart.map((product) => (

                <div
                  className="manist-cart-item"
                  key={product.key}
                >

                  <div className="manist-cart-product-info">

                    <h3>{product.name}</h3>

                    <p>
                      Category: {product.category}
                    </p>

                    {product.color && (
                      <p>
                        Shade: {product.color}
                      </p>
                    )}

                    <p>
                      Price: {formatPrice(product.price)}
                    </p>

                  </div>


                  {/* Cart Quantity */}

                  <div className="cart-quantity-control">

                    <button
                      type="button"
                      onClick={() => {
                        const productData = cart.find(
                          (p) => p.key === product.key
                        );

                        if (productData) {
                          handleQuantityChange(
                            { id: product.id },
                            product.category,
                            -1
                          );
                        }
                      }}
                    >
                      −
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      type="button"
                      onClick={() => {
                        handleQuantityChange(
                          { id: product.id },
                          product.category,
                          1
                        );
                      }}
                    >
                      +
                    </button>

                  </div>


                  <div className="manist-cart-item-total">
                    {formatPrice(product.price * product.quantity)}
                  </div>

                </div>

              ))}

            </div>


            {/* Price Summary */}

            <div className="manist-cart-summary">

              <h3>Order Summary</h3>

              <div className="cart-summary-row">
                <span>Total Products</span>
                <span>{totalQuantity}</span>
              </div>

              <div className="cart-summary-row">
                <span>Products Subtotal</span>
                <span>{formatPrice(productSubtotal)}</span>
              </div>

              <div className="cart-summary-row">
                <span>Delivery Charges</span>
                <span>{formatPrice(DELIVERY_CHARGES)}</span>
              </div>

              <div className="cart-summary-row cart-grand-total">
                <strong>Grand Total</strong>
                <strong>{formatPrice(grandTotal)}</strong>
              </div>

              <div className="cart-payment-info">

                <p>
                  Advance Payment: {formatPrice(ADVANCE_PAYMENT)}
                </p>

                <p>
                  Remaining Cash on Delivery: {formatPrice(remainingPayment)}
                </p>

              </div>

            </div>


            {/* Customer Details */}

            <div className="manist-checkout-form">

              <h3>Delivery Information</h3>

              <input
                type="text"
                placeholder="Your Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Your Phone Number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />

              <textarea
                placeholder="Complete Delivery Address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />

              <button
                type="button"
                className="hero-cta-whatsapp"
                onClick={handleFinalOrder}
              >
                Place Order via WhatsApp
              </button>

              <p className="checkout-note">
                Your order details will open in WhatsApp.
                You will need to press Send to submit your order.
              </p>

            </div>

          </>

        )}

      </div>

    </section>

  );

};

export default Showcase;
