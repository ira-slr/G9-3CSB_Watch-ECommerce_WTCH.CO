import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/ProductCard.module.css";
import images from "../assets/imageLoader"// Import the loader

function ProductCard({ id, model, brand, star_review, price, image_link }) {
  // Directly get the image from the loader using the filename from the JSON
  const imageSrc = images[image_link];

  const [imageError, setImageError] = useState(false);
  
  // Show placeholder if the image wasn't found in the loader
  const showPlaceholder = !imageSrc || imageError;

  return (
    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.cardLink}>
        {!showPlaceholder ? (
          <img
            src={imageSrc}
            alt={model}
            className={styles.productImage}
            // Fallback in case the image file itself is corrupted
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