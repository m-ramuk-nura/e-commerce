import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Pirate Stores – Your Ultimate Destination for Premium PCs</h1>
        <p>
          At Pirate Stores, we believe that your PC should be more than just a device – it should be a
          powerhouse that meets your specific needs. Whether you’re a gamer looking for the latest specs, a
          professional in need of high-performance systems, or a casual user seeking value for money, we’ve got
          you covered.
        </p>
      </header>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Tailored to Your Needs:</strong> Our wide selection of desktops and laptops can be customized to meet your exact specifications.</li>
          <li><strong>Cutting-Edge Technology:</strong> We offer the latest and most advanced technology to ensure your PC is equipped for the future.</li>
          <li><strong>Affordable Prices:</strong> High-end PCs at prices that won’t break the bank. We offer competitive pricing and exclusive deals.</li>
          <li><strong>Seamless Shopping Experience:</strong> Enjoy a smooth, easy, and secure online shopping experience with fast checkout.</li>
          <li><strong>Fast, Reliable Delivery:</strong> Your new PC will be delivered directly to your doorstep in no time.</li>
        </ul>
      </section>

      <section className="our-products">
        <h2>Our Products</h2>
        <p>
          From budget-friendly desktops to high-performance gaming machines, browse our extensive collection of PCs and laptops designed to fit every need:
        </p>
        <ul>
          <li><strong>Gaming PCs:</strong> Get ready for an unparalleled gaming experience with the latest processors and ultra-fast speeds.</li>
          <li><strong>Business Laptops:</strong> Boost your productivity with powerful, portable laptops that combine performance with style.</li>
          <li><strong>Custom-built PCs:</strong> Customize your PC with our easy-to-use tools for a system designed just for you.</li>
        </ul>
      </section>

      <section className="shop-with-confidence">
        <h2>Shop with Confidence</h2>
        <ul>
          <li><strong>Expert Support:</strong> Our knowledgeable team is here to help with any questions or guidance you need.</li>
          <li><strong>Satisfaction Guaranteed:</strong> Our hassle-free returns policy ensures you get the support you deserve.</li>
        </ul>
      </section>

      <footer>
        <h2>Ready to Upgrade Your Tech?</h2>
        <p>Explore our collection and take the first step towards a faster, more powerful PC today.</p>
        <button className="cta-button">Shop Now</button>
      </footer>
    </div>
  );
};

export default Home;
