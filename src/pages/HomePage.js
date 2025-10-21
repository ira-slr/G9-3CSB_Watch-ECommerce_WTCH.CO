import React from "react";
import styles from "./styles/HomePage.module.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../assets/products.json";
import { Link } from "react-router-dom";

const HomePage = ({ cartItemsLength }) => {
  const rolexProducts = products.filter((p) => p.brand === "Rolex");
  const richardMilleProducts = products.filter((p) => p.brand === "Richard Mille");

  const reviews = [
    { name: "John D.", review: "Absolutely love my new Rolex Submariner!", rating: 5 },
    { name: "Sarah M.", review: "The Richard Mille watch I bought is stunning!", rating: 5 },
    { name: "Carlos R.", review: "Great experience shopping here.", rating: 4 },
    { name: "Jessica P.", review: "High-quality packaging and flawless watch.", rating: 5 },
  ];

  const StarRating = ({ rating }) => {
    const fullStars = Math.round(rating);
    return <span className={styles.starIcon}>{"★".repeat(fullStars)}</span>;
  };

  return (
    <>
      <Navbar cartItemsLength={cartItemsLength} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>MATCH YOUR STYLE WITH THE RIGHT WATCH</h1>
          <p>
            Discover timeless craftsmanship and modern luxury. Find the perfect
            watch that fits your personality and lifestyle.
          </p>
          <Link to="/products" className={styles.heroButtonLink}>
            <button>Shop Now</button>
          </Link>
        </div>
      </section>

      <section className={styles.brands}>
        <img src="/logos/iwc.png" alt="IWC" />
        <img src="/logos/rolex.png" alt="Rolex" />
        <img src="/logos/seiko.png" alt="Seiko" />
        <img src="/logos/omega.png" alt="Omega" />
        <img src="/logos/richardmille.png" alt="Richard Mille" />
      </section>

      <section className={styles.productSection}>
        <h2>ROLEX</h2>
        <div className={styles.productGrid}>
          {rolexProducts.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              model={item.model}
              brand={item.brand}
              star_review={item.star_review}
              price={item.price}
              image_link=""
            />
          ))}
        </div>
        <Link to="/products?brand=Rolex">
          <button className={styles.viewAll}>View All</button>
        </Link>
      </section>

      <section className={styles.productSection}>
        <h2>RICHARD MILLE</h2>
        <div className={styles.productGrid}>
          {richardMilleProducts.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              model={item.model}
              brand={item.brand}
              star_review={item.star_review}
              price={item.price}
              image_link=""
            />
          ))}
        </div>
        <Link to="/products?brand=Richard%20Mille">
          <button className={styles.viewAll}>View All</button>
        </Link>
      </section>

      <section className={styles.categories}>
        <h2>BROWSE BY CATEGORIES</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <div className={styles.blankImage}></div>
            <h3>Men’s</h3>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.blankImage}></div>
            <h3>Women’s</h3>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.blankImage}></div>
            <h3>Formal</h3>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.blankImage}></div>
            <h3>Sportswear</h3>
          </div>
        </div>
      </section>

      <section className={styles.reviews}>
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className={styles.reviewGrid}>
          {reviews.map((r, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.blankImage}></div>
                <div className={styles.reviewerInfo}>
                  <h4>{r.name}</h4>
                  <div className={styles.stars}>
                    <StarRating rating={r.rating} />
                  </div>
                </div>
              </div>
              <p className={styles.reviewText}>"{r.review}"</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h3>WTCH</h3>
            <p>We have an array of watch that suits your style and which you're proud to wear.</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          <div className={styles.footerLinkGroup}>
            <h4>LINK</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Categories</Link></li>
              <li><Link to="/products">Brands</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinkGroup}>
            <h4>ACCOUNT</h4>
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinkGroup}>
            <h4>HELP</h4>
            <ul>
              <li><Link to="/delivery">Delivery Details</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <hr className={styles.footerSeparator} />

        <div className={styles.footerBottom}>
          <p className={styles.copy}>wtch.co © 2025-2026, All Rights Reserved</p>
          <div className={styles.paymentIcons}>
            <img src="/icons/visa.png" alt="Visa" />
            <img src="/icons/mastercard.png" alt="Mastercard" />
            <img src="/icons/paypal.png" alt="PayPal" />
            <img src="/icons/applepay.png" alt="Apple Pay" />
            <img src="/icons/googlepay.png" alt="Google Pay" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
