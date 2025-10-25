import React, { useState, useRef } from "react";
import style from "./styles/HomePage.module.css";

// Components
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";

// JSON Data
import products from "../assets/products.json";

// Images
import heroNew from "../assets/designs/hero-page-bg-removebg-preview.png";
import mens from "../assets/designs/person-01.jpg";
import womens from "../assets/designs/person-02.jpg";
import formal from "../assets/designs/person-04.png";
import sportwear from "../assets/designs/person-03.png";

// Brand logos
import rolexLogo from "../assets/designs/logos/rolex-logo.png";
import iwcLogo from "../assets/designs/logos/iwc-logo.png";
import omegaLogo from "../assets/designs/logos/omega-logo.png";
import seikoLogo from "../assets/designs/logos/seiko-logo.png";
import richardLogo from "../assets/designs/logos/richard-mille-logo.png";

const sampleReviews = [
  { id: 1, name: "Correllene I.", rating: 5, comment: "Absolutely in love with my new watch! The quality is outstanding and it looks even better in person. 10/10!", date: "October 1, 2025" },
  { id: 2, name: "Josua R.", rating: 4, comment: "Great customer service and fast shipping. The watch is beautiful, though a bit heavier than I expected. Still a fantastic piece.", date: "October 3, 2025" },
  { id: 3, name: "Ira S.", rating: 5, comment: "This was a gift for my husband and he was thrilled. The craftsmanship is impeccable. Will definitely be shopping here again.", date: "October 2, 2025" },
  { id: 4, name: "Aljake R.", rating: 5, comment: "From the unboxing experience to wearing it daily, everything about this watch is premium. Worth every penny.", date: "October 4, 2025" },
  { id: 5, name: "Benedic S.", rating: 5, comment: "I've been a watch collector for years, and this piece is a stunning addition. The detail on the dial is incredible.", date: "October 5, 2025" },
  { id: 6, name: "Gladwyn S.", rating: 4, comment: "A truly reliable and stylish timepiece. It's become my go-to for both formal events and casual outings.", date: "October 6, 2025" }
];

// Pre-filter all product sets
const rolexProducts = products.filter(p => p.brand === "Rolex").slice(0, 4);
const rmProducts = products.filter(p => p.brand === "Richard Mille").slice(0, 4);
const iwcProducts = products.filter(p => p.brand === "IWC").slice(0, 4);
const seikoProducts = products.filter(p => p.brand === "Seiko").slice(0, 4);
const omegaProducts = products.filter(p => p.brand === "Omega").slice(0, 4);

function HomePage() {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const carouselRef = useRef(null);

  // --- UPDATED SCROLL FUNCTION ---
  const scroll = (direction) => {
    if (carouselRef.current) {
      // Get the full visible width of the carousel
      const scrollAmount = carouselRef.current.clientWidth * (direction === 'left' ? -1 : 1);
      
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main>
      
      {/* 1. Hero Section */}
      <section className={style.heroSection}>
        <div className={style.heroContent}>
          <h1>MATCH YOUR STYLE WITH THE RIGHT WATCH</h1>
          <p>Shop from our latest collection of premium watches from top brands around the world.</p>
          <button className={style.heroButton}>Go Shopping</button>
        </div>
        <div className={style.heroImageContainer}>
          <img src={heroNew} alt="Models wearing watches" className={style.heroImage} />
        </div>
      </section>

      {/* 2. Brand Banner */}
      <section className={style.brandBanner}>
        <p>IWC</p>
        <p>Rolex</p>
        <p>Seiko</p>
        <p>Omega</p>
        <p>Richard Mille</p>
      </section>

      {/* 3. Rolex Products */}
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

      {/* 4. Richard Mille Products */}
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

      {/* 6. Hidden Sections */}
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
          
          <div className={style.reviewHeader}>
            <h2 className={style.sectionTitle}>OUR HAPPY CUSTOMERS</h2>
            <div className={style.reviewNav}>
              <button onClick={() => scroll('left')} title="Scroll left">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button onClick={() => scroll('right')} title="Scroll right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
          
          <div className={style.reviewCarousel} ref={carouselRef}>
            {sampleReviews.map(review => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
                date={review.date}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;