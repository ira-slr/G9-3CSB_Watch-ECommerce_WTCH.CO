import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/ProductCard.module.css";

// Member 3: Josua Rigodon
function ProductCard({ id, model, brand, star_review, price, image_link }) {
  const [imageError, setImageError] = useState(false);
  const showPlaceholder = !image_link || imageError;

  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.cardLink}>
        {!showPlaceholder ? (
          <img
            src={image_link}
            alt={model}
            className={styles.productImage}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <p>Details</p>
          </div>
        )}

        <div className={styles.info}>
          <p className={styles.brand}>{brand}</p>
          <h3 className={styles.productName}>{model}</h3>
          <p className={styles.rating}>⭐ {star_review}</p>
          <p className={styles.price}>₱{price.toLocaleString()}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
