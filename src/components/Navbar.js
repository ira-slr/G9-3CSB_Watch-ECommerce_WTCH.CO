import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import products from "../assets/products.json";

const Navbar = ({ cartItemsLength }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef();

  const handleNavClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = products.filter((p) =>
      p.model.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results.slice(0, 5));
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setShowResults(false);
  };

  return (
    <>
      <div className={styles.topBanner}>
        <p>Sign up and get 10% off your first order. Signup Now!</p>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.leftContainer}>
          <Link to="/" className={styles.logo}>WTCH</Link>

          <ul className={styles.navLinks}>
            <li className={styles.categoriesDropdown}>
              Categories <span className={styles.dropdownArrow}>&#9662;</span>
              <ul className={styles.dropdownMenu}>
                <li onClick={() => handleNavClick("/products")}>Shop All Categories</li>
                <li onClick={() => handleNavClick("/products?category=Mens")}>Men's</li>
                <li onClick={() => handleNavClick("/products?category=Womens")}>Women's</li>
                <li onClick={() => handleNavClick("/products?category=Formal")}>Formal</li>
                <li onClick={() => handleNavClick("/products?category=Sportswear")}>Sportswear</li>
              </ul>
            </li>

            <li className={styles.categoriesDropdown}>
              Brands <span className={styles.dropdownArrow}>&#9662;</span>
              <ul className={styles.dropdownMenu}>
                <li onClick={() => handleNavClick("/products")}>Shop All Brands</li>
                <li onClick={() => handleNavClick("/products?brand=Rolex")}>Rolex</li>
                <li onClick={() => handleNavClick("/products?brand=Richard Mille")}>Richard Mille</li>
                <li onClick={() => handleNavClick("/products?brand=Omega")}>Omega</li>
                <li onClick={() => handleNavClick("/products?brand=Seiko")}>Seiko</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.searchWrapper} ref={searchRef}>
            <div className={styles.searchBar}>
              <span className={styles.searchIcon}>&#x1F50D;</span>
              <input
                type="text"
                placeholder="Search for products..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
              />
            </div>

            {showResults && filteredProducts.length > 0 && (
              <ul className={styles.searchResults}>
                {filteredProducts.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleProductClick(item.id)}
                    className={styles.searchItem}
                  >
                    <img src={item.image_link || "/placeholder.png"} alt={item.model} />
                    <div>
                      <p className={styles.resultName}>{item.model}</p>
                      <span className={styles.resultBrand}>{item.brand}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.iconGroup}>
            <Link to="/cart" className={styles.cartIcon}>
              &#x1F6D2;
              {cartItemsLength > 0 && (
                <span className={styles.cartBadge}>{cartItemsLength}</span>
              )}
            </Link>
            <span className={styles.userIcon}>&#x1F464;</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
