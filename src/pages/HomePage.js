import React, { useState } from "react";
import style from "./styles/HomePage.module.css";

// Components
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";

// JSON Data
import products from "../assets/products.json";

// Images
import hero from "../assets/designs/hero-page-bg.png";
import mens from "../assets/designs/person-01.jpg";
import womens from "../assets/designs/person-02.jpg";
import formal from "../assets/designs/person-04.png";
import sportwear from "../assets/designs/person-03.png";

// Brand logos (Imported as standard image paths)
// import rolexLogo from "../assets/designs/logos/rolex-logo.png";
import rolexLogo from "../assets/designs/logos/rolex-logo.png"; // <-- Use this image for the test
import iwcLogo from "../assets/designs/logos/iwc-logo.png";
import omegaLogo from "../assets/designs/logos/omega-logo.png";
import seikoLogo from "../assets/designs/logos/seiko-logo.png";
import richardLogo from "../assets/designs/logos/richard-mille-logo.png";
// import patekLogo from "../assets/designs/logos/patek-philippe-logo.png"; // Removed

// Mock data
const mockReviews = [
  { id: 1, name: "Alex T.", rating: 5, text: "Absolutely stunning timepiece. The service was impeccable from start to finish. Highly recommend!" },
  { id: 2, name: "Maria G.", rating: 5, text: "I'm in love with my new watch! It arrived faster than expected and was beautifully packaged." },
  { id: 3, name: "David K.", rating: 4, text: "Great selection and competitive prices. The website was easy to navigate. Will shop here again." }
];

// Pre-filter all product sets
const rolexProducts = products.filter(p => p.brand === "Rolex").slice(0, 4);
const rmProducts = products.filter(p => p.brand === "Richard Mille").slice(0, 4);
const iwcProducts = products.filter(p => p.brand === "IWC").slice(0, 4);
const seikoProducts = products.filter(p => p.brand === "Seiko").slice(0, 4);
const omegaProducts = products.filter(p => p.brand === "Omega").slice(0, 4);
// const patekProducts = products.filter(p => p.brand === "Patek Philippe").slice(0, 4); // Removed

function HomePage() {
  const [showAllBrands, setShowAllBrands] = useState(false);

  return (
    <main>
      
      {/* 1. Hero Section */}
      <section className={style.heroSection} style={{ backgroundImage: `url(${hero})` }}>
        <div className={style.heroContent}>
          <h1>MATCH YOUR STYLE WITH THE RIGHT WATCH</h1>
          <p>Shop from our latest collection of premium watches from top brands around the world.</p>
          <button className={style.heroButton}>Go Shopping</button>
        </div>
      </section>

      {/* 2. Brand Banner */}
      <section className={style.brandBanner}>
        <p>IWC</p>
        <p>Rolex</p>
        <p>Seiko</p>
        <p>Omega</p>
        <p>Richard Mille</p>
        {/* <p>Patek Philippe</p> */} {/* Removed */}
      </section>

      {/* 3. Rolex Products - Using <img> tag */}
      <section className={style.productHighlight}>
        <div className={style.container}>
          <img src={rolexLogo} alt="Rolex" className={style.sectionLogo} />
          <hr className={style.divider} />
          <div className={style.productGrid}>
            {rolexProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product} 
              />
            ))}
          </div>
          <button className={style.viewAllButton}>View All</button>
        </div>
      </section>

      {/* 4. Richard Mille Products - Using <img> tag */}
      <section className={style.productHighlight}>
        <div className={style.container}>
          <img src={richardLogo} alt="Richard Mille" className={style.sectionLogo} />
          <hr className={style.divider} />
          <div className={style.productGrid}>
            {rmProducts.map(product => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
          <button className={style.viewAllButton}>View All</button>
        </div>
      </section>

      {/* 5. "Show More" Button */}
      {!showAllBrands && (
        <div className={style.showMoreContainer}>
          <button onClick={() => setShowAllBrands(true)} className={style.showMoreButton}>
            Show More Brands
          </button>
        </div>
      )}

      {/* 6. Hidden Sections - Using <img> tag */}
      {showAllBrands && (
        <>
          {/* IWC Products */}
          <section className={style.productHighlight}>
            <div className={style.container}>
              <img src={iwcLogo} alt="IWC" className={style.sectionLogo} />
              <hr className={style.divider} />
              <div className={style.productGrid}>
                {iwcProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              <button className={style.viewAllButton}>View All</button>
            </div>
          </section>

          {/* Seiko Products */}
          <section className={style.productHighlight}>
            <div className={style.container}>
              <img src={seikoLogo} alt="Seiko" className={style.sectionLogo} />
              <hr className={style.divider} />
              <div className={style.productGrid}>
                {seikoProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              <button className={style.viewAllButton}>View All</button>
            </div>
          </section>
          
          {/* Omega Products */}
          <section className={style.productHighlight}>
            <div className={style.container}>
              <img src={omegaLogo} alt="Omega" className={style.sectionLogo} />
              <hr className={style.divider} />
              <div className={style.productGrid}>
                {omegaProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              <button className={style.viewAllButton}>View All</button>
            </div>
          </section>

          {/* Patek Philippe Section Removed */}

        </>
      )}

      {/* 7. Browse by Category */}
      <section className={style.categorySection}>
        <div className={style.container}>
          <div className={style.categoryWrapper}> 
            <h2 className={style.sectionTitle}>BROWSE BY CATEGORY</h2>
            <div className={style.categoryGrid}>
              
              <div className={style.categoryCard}>
                <div className={style.categoryOverlay}>
                  <h3>Men's</h3>
                </div>
                <img src={mens} alt="Men's Watches" />
              </div>
              
              <div className={style.categoryCard}>
                <div className={style.categoryOverlay}>
                  <h3>Women's</h3>
                </div>
                <img src={womens} alt="Women's Watches" />
              </div>

              <div className={style.categoryCard}>
                <div className={style.categoryOverlay}>
                  <h3>Formal</h3>
                </div>
                <img src={formal} alt="Formal Watches" />
              </div>

              <div className={style.categoryCard}>
                <div className={style.categoryOverlay}>
                  <h3>Sportswear</h3>
                </div>
                <img src={sportwear} alt="Sportswear Watches" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Customer Reviews */}
      <section className={style.reviewSection}>
        <div className={style.container}>
          <h2 className={style.sectionTitle}>OUR HAPPY CUSTOMERS</h2>
          <div className={style.reviewCarousel}>
            {mockReviews.map(review => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;