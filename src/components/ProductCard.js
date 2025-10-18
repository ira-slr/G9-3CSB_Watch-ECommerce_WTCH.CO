import React from "react";
import styles from "./styles/ProductCard.module.css";
// Member #3 : Josua
function ProductCard({ model, brand, star_review, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.info}>
        <p className={styles.price}>{brand}</p>
        <h4 className={styles.productName}>{model}</h4>
        <p className={styles.rating}>Rating: {star_review} ★</p>
        <p className={styles.price}>₱{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
