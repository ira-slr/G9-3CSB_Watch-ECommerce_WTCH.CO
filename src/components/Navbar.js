import React, { useState } from "react";
import style from "./styles/Navbar.module.css";
// Make sure these paths are correct relative to Navbar.jsx
import cartIcon from "../assets/designs/icons/cart.png"; 
import profileIcon from "../assets/designs/icons/profile.png"; 
import searchIcon from "../assets/designs/icons/search.png"; 
import dropdownIcon from "../assets/designs/icons/dropdown.png"; // Renamed to avoid conflict
import { Link } from "react-router-dom";

// Define the content for the dropdowns
const CATEGORIES = ["Men's", "Women's", "Formal", "Sportswear"];
const BRANDS = ["Rolex", "Omega", "Seiko", "Richard Mille", "Casio"];

// The Navbar component should accept a prop to communicate the search query change
function Navbar({ onSearchChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null); // 'categories', 'brands', or null

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    // Call the function passed from the parent component
    if (onSearchChange) {
      onSearchChange(newQuery);
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close dropdown when clicking outside (simple approach, usually uses a global listener)
  const closeDropdown = () => setOpenDropdown(null);


  return (
    <header className={style.navbar} onBlur={closeDropdown} tabIndex="0">
      {/* Top Banner for Promotion */}
      <div className={style.topBanner}>
        <p>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></p>
        <button className={style.closeButton}>&times;</button>
      </div>

      {/* Main Navigation Bar */}
      <div className={style.mainNav}>
        <div className={style.logo}>
          <span className={style.logoText}>WTCH</span> 
        </div>

        {/* Categories and Brands Dropdowns */}
        <nav className={style.navLinks}>
          {/* Categories Dropdown */}
          <div 
            className={style.dropdown} 
            onClick={() => toggleDropdown('categories')}
            role="button"
            aria-expanded={openDropdown === 'categories'}
          >
            Categories 
            <img src={dropdownIcon} alt="Dropdown" className={style.arrowIcon} />
            
            {openDropdown === 'categories' && (
              <div className={style.dropdownMenu}>
                {CATEGORIES.map(cat => (
                  <a key={cat} href={`/products?category=${cat}`} className={style.dropdownItem}>
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Brands Dropdown */}
          <div 
            className={style.dropdown} 
            onClick={() => toggleDropdown('brands')}
            role="button"
            aria-expanded={openDropdown === 'brands'}
          >
            Brands 
            <img src={dropdownIcon} alt="Dropdown" className={style.arrowIcon} />

            {openDropdown === 'brands' && (
              <div className={style.dropdownMenu}>
                {BRANDS.map(brand => (
                  <a key={brand} href={`/products?brand=${brand}`} className={style.dropdownItem}>
                    {brand}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Search Bar: Takes up most container space */}
        <div className={style.searchContainer}>
          <div className={style.searchInputWrapper}>
            <img src={searchIcon} alt="Search" className={style.searchIcon} />
            <input 
              type="text" 
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={style.searchInput}
            />
          </div>
        </div>

        {/* Cart and Profile Icons: Darkened in CSS */}
        <div className={style.userActions}>
          <button className={style.iconButton}>
            <Link to="/cart">
              <img src={cartIcon} alt="Shopping Cart" className={style.actionIcon} />
            </Link>
            
          </button>
          <button className={style.iconButton}>
            <img src={profileIcon} alt="User Profile" className={style.actionIcon} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;