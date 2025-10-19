import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/ProductCard.module.css";

// Member #3 : Josua
function ProductCard({ id, model, brand, star_review, price }) {
  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.cardLink}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.info}>
          <p className={styles.brand}>{brand}</p>
          <h4 className={styles.productName}>{model}</h4>
          <p className={styles.rating}>⭐ {star_review}</p>
          <p className={styles.price}>₱{price.toLocaleString()}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
