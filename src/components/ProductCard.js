import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/ProductCard.module.css";

// Member 3: Josua Rigodon
function ProductCard({ id, model, brand, star_review, price, image_link }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.cardLink}>
        {image_link && !imageError ? (
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
          <h3 className={styles.modelName}>{model}</h3>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.rating}>⭐ {star_review}</p>
          <p className={styles.price}>₱{price.toLocaleString()}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
