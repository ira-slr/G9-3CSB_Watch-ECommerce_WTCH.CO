import React from "react";
import styles from "./styles/ProductDetails.module.css";
// Member #3 : Josua
function ProductDetails() {
  return (
    <div className={styles.detailsPage}>
      <div className={styles.topSection}>
        <div className={styles.imageColumn}>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
        </div>

        <div className={styles.mainImage}></div>

        <div className={styles.info}>
          <h2>Watch Name</h2>
          <p className={styles.price}>₱0.00</p>
          <ul className={styles.features}>
            <li>Water Resistant</li>
            <li>Premium Stainless Steel</li>
            <li>Quartz Movement</li>
          </ul>

          <div className={styles.buttons}>
            <button className={styles.addToCart}>Add to Cart</button>
            <button className={styles.buyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <h3>Description | Reviews</h3>
        <p className={styles.description}>
          Product description goes here. You can write about the watch’s design,
          materials, and special features.
        </p>

        <h3>Similar Watches</h3>
        <div className={styles.similarGrid}>
          <div className={styles.similarCard}></div>
          <div className={styles.similarCard}></div>
          <div className={styles.similarCard}></div>
          <div className={styles.similarCard}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
