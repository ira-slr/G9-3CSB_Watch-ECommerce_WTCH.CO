import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles/ProductDetails.module.css";
import ProductCard from "../components/ProductCard";
import products from "../assets/products.json";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[parseInt(id)];

  if (!product) {
    return <div className={styles.loading}>Product not found...</div>;
  }

  const similar = products.filter(
    (p) => p.brand === product.brand && p.model !== product.model
  );

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      addToCart({
        id: parseInt(id),
        model: product.model,
        brand: product.brand,
        price: product.price,
        star_review: product.star_review,
        quantity: 1,
      });
    }
  };

  const handleCheckout = () => {
    // optionally add to cart first, then go to cart page
    if (typeof addToCart === "function") {
      addToCart({
        id: parseInt(id),
        model: product.model,
        brand: product.brand,
        price: product.price,
        star_review: product.star_review,
        quantity: 1,
      });
    }
    navigate("/cart");
  };

  return (
    <div className={styles.detailsPage}>
      <div className={styles.topSection}>
        <div className={styles.mainImage}></div>

        <div className={styles.info}>
          <h2>{product.model}</h2>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.price}>₱{product.price.toLocaleString()}</p>
          <p className={styles.rating}>⭐ {product.star_review}</p>

          <ul className={styles.features}>
            <li>Water Resistant</li>
            <li>Premium Stainless Steel</li>
            <li>Quartz Movement</li>
          </ul>

          <div className={styles.buttons}>
            <button className={styles.addToCart} onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <h3>Description</h3>
        <p className={styles.description}>
          A luxurious {product.brand} timepiece with elegant craftsmanship and
          superior precision. Designed for timeless style and reliability.
        </p>

        <h3>Similar Watches</h3>
        <div className={styles.similarGrid}>
          {similar.map((item, index) => (
            <ProductCard
              key={index}
              id={index}
              model={item.model}
              brand={item.brand}
              star_review={item.star_review}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
