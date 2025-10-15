import React from "react";
import styles from "./styles/ProductCard.module.css";
// Member #3 : Josua
function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.info}>
        <h4 className={styles.productName}>Product Name</h4>
        <p className={styles.price}>₱0.00</p>
      </div>
    </div>
  );
}

export default ProductCard;
