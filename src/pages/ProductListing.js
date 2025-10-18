
import React from "react";
import styles from "./styles/ProductListing.module.css";
import ProductCard from "../components/ProductCard";
import products from "../assets/products.json"; // ✅ direct import

// Member 3: Josua
function ProductListing() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <h3>Categories</h3>
        <ul>
          <li>Luxury Watch</li>
          <li>Smart Watch</li>
          <li>Sport Watch</li>
          <li>Classic Watch</li>
          <li>Casual Watch</li>
        </ul>

        <h3>Price Range</h3>
        <ul>
          <li>₱1,000 - ₱3,000</li>
          <li>₱3,001 - ₱5,000</li>
          <li>₱5,001 - ₱10,000</li>
          <li>₱10,001 - ₱15,000</li>
        </ul>
      </aside>

      {/* Main Product Grid */}
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Our Collection of Watches</h2>
          <input
            type="text"
            className={styles.searchBox}
            placeholder="Search for a watch..."
          />
        </div>

        <div className={styles.grid}>
          {products.map((item, i) => (
            <ProductCard
              key={i}
              model={item.model}
              brand={item.brand}
              star_review={item.star_review}
              price={item.price}
            />
          ))}
        </div>

        <button className={styles.loadMore}>Load More</button>
      </main>
    </div>
  );
}

export default ProductListing;

