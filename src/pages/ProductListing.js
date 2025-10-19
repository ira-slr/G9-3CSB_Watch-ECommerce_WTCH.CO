import React, { useState, useEffect } from "react";
import styles from "./styles/ProductListing.module.css";
import ProductCard from "../components/ProductCard";
import productsData from "../assets/products.json";
import { useNavigate } from "react-router-dom";

function ProductListing() {
  const [search, setSearch] = useState("");
  const [filterBrand, setFilterBrand] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortOption, setSortOption] = useState("none");
  const [displayProducts, setDisplayProducts] = useState(productsData);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = [...productsData];

    if (filterBrand !== "All") {
      filtered = filtered.filter((item) => item.brand === filterBrand);
    }

    if (priceRange !== "All") {
      filtered = filtered.filter((item) => {
        if (priceRange === "0-1000") return item.price <= 1000;
        if (priceRange === "1001-10000") return item.price >= 1001 && item.price <= 10000;
        if (priceRange === "10001-50000") return item.price >= 10001 && item.price <= 50000;
        if (priceRange === "50001+") return item.price > 50000;
        return true;
      });
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOption === "priceLowHigh") filtered.sort((a, b) => a.price - b.price);
    else if (sortOption === "priceHighLow") filtered.sort((a, b) => b.price - a.price);
    else if (sortOption === "ratingHighLow") filtered.sort((a, b) => b.star_review - a.star_review);
    else if (sortOption === "ratingLowHigh") filtered.sort((a, b) => a.star_review - b.star_review);

    setDisplayProducts(filtered);
  }, [search, filterBrand, priceRange, sortOption]);

  const handleBrandClick = (brand) => {
    if (filterBrand === brand) setFilterBrand("All");
    else setFilterBrand(brand);
  };

  const handlePriceClick = (range) => {
    if (priceRange === range) setPriceRange("All");
    else setPriceRange(range);
  };

  const getPriceLabel = (range) => {
    switch (range) {
      case "0-1000":
        return "₱0 - ₱1,000";
      case "1001-10000":
        return "₱1,001 - ₱10,000";
      case "10001-50000":
        return "₱10,001 - ₱50,000";
      case "50001+":
        return "₱50,001+";
      default:
        return "All Prices";
    }
  };

  const getSortLabel = (option) => {
    switch (option) {
      case "priceLowHigh":
        return "Price: Low to High";
      case "priceHighLow":
        return "Price: High to Low";
      case "ratingHighLow":
        return "Rating: High to Low";
      case "ratingLowHigh":
        return "Rating: Low to High";
      default:
        return "Default";
    }
  };

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <h3>Brands</h3>
        <ul>
          {["All", "Rolex", "Seiko", "Casio", "Omega", "Richard Mille"].map((brand) => (
            <li
              key={brand}
              onClick={() => handleBrandClick(brand)}
              className={filterBrand === brand ? styles.active : ""}
            >
              {brand}
            </li>
          ))}
        </ul>

        <h3>Price Range</h3>
        <ul>
          <li
            onClick={() => handlePriceClick("All")}
            className={priceRange === "All" ? styles.active : ""}
          >
            All Prices
          </li>
          <li
            onClick={() => handlePriceClick("0-1000")}
            className={priceRange === "0-1000" ? styles.active : ""}
          >
            ₱0 - ₱1,000
          </li>
          <li
            onClick={() => handlePriceClick("1001-10000")}
            className={priceRange === "1001-10000" ? styles.active : ""}
          >
            ₱1,001 - ₱10,000
          </li>
          <li
            onClick={() => handlePriceClick("10001-50000")}
            className={priceRange === "10001-50000" ? styles.active : ""}
          >
            ₱10,001 - ₱50,000
          </li>
          <li
            onClick={() => handlePriceClick("50001+")}
            className={priceRange === "50001+" ? styles.active : ""}
          >
            ₱50,001+
          </li>
        </ul>
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <input
            type="text"
            placeholder="Search watches..."
            className={styles.searchBox}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className={styles.sortDropdown}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="none">Sort by</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="ratingHighLow">Rating: High to Low</option>
            <option value="ratingLowHigh">Rating: Low to High</option>
          </select>
        </div>

        <div className={styles.filterSummary}>
          <p>
            Showing:{" "}
            <strong>
              {filterBrand} | {getPriceLabel(priceRange)} | {getSortLabel(sortOption)}
            </strong>
          </p>
          <p className={styles.resultCount}>{displayProducts.length} products found</p>
        </div>

        <div className={styles.grid}>
          {displayProducts.length > 0 ? (
            displayProducts.map((product, index) => (
              <ProductCard
                key={index}
                id={index + 1}
                model={product.model}
                brand={product.brand}
                star_review={product.star_review}
                price={product.price}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProductListing;