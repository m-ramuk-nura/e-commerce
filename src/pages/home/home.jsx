import React from "react";
import "./home.css";
const image1 = "src/images/logo.jpg";
const image2 = "src/images/wlap.jpg";
const image3 = "src/images/setup.jpg";
const image4 = "src/images/gaming.jpg";

const Home = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Pirate Stores
            <br />
            Your Ultimate Destination for Premium PCs
          </h1>
          <p className="hero-subtitle">
            &emsp;&emsp;At Pirate Stores, we believe that your PC should be
            more than just a device – it should be a powerhouse that meets your
            specific needs. Whether you’re a gamer looking for the latest specs,
            a professional in need of high-performance systems, or a casual user
            seeking value for money, we’ve got you covered.
          </p>
          <div className="cta-button-box">
            <img
              src= {image1}
              alt="Explore Our Products"
              className="cta-button"
            />
          </div>
        </div>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Gaming PCs</h3>
            <p>
              Get ready for an unparalleled gaming experience with the latest
              processors and ultra-fast speeds.
            </p>
            <div className="product-image-box">
              <img
                src={image2}
                alt="View Gaming PCs"
              />
            </div>
          </div>
          <div className="product-card">
            <h3>Business Laptops</h3>
            <p>
              Boost your productivity with powerful, portable laptops that
              combine performance with style.
            </p>
            <div className="product-image-box">
              <img
                src={image3}
                alt="View Business Laptops"
              />
            </div>
          </div>
          <div className="product-card">
            <h3>Custom-Built PCs</h3>
            <p>
              Customize your PC with our easy-to-use tools for a system designed
              just for you.
            </p>
            <div className="product-image-box">
              <img
                src={image4}
                alt="Customize Your PC"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons-grid">
          <div className="reason">
            <strong>Tailored to Your Needs:</strong> Our wide selection of
            desktops and laptops can be customized to meet your exact
            specifications.
          </div>
          <div className="reason">
            <strong>Cutting-Edge Technology:</strong> We offer the latest and
            most advanced technology to ensure your PC is equipped for the
            future.
          </div>
          <div className="reason">
            <strong>Affordable Prices:</strong> High-end PCs at prices that won’t
            break the bank. We offer competitive pricing and exclusive deals.
          </div>
          <div className="reason">
            <strong>Seamless Shopping Experience:</strong> Enjoy a smooth, easy,
            and secure online shopping experience with fast checkout.
          </div>
          <div className="reason">
            <strong>Fast, Reliable Delivery:</strong> Your new PC will be
            delivered directly to your doorstep in no time.
          </div>
        </div>
      </section>

      <section className="shop-with-confidence">
        <h2>Shop with Confidence</h2>
        <div className="confidence-points">
          <div className="confidence-item">
            <strong>Expert Support:</strong> Our knowledgeable team is here to
            help with any questions or guidance you need.
          </div>
          <div className="confidence-item">
            <strong>Satisfaction Guaranteed:</strong> Our hassle-free returns
            policy ensures you get the support you deserve.
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <p>
          Explore our collection and take the first step towards a faster, more
          powerful PC today.
        </p>
        <p>&copy; 2024 Pirate Stores. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
