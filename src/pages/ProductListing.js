import React, { useState, useEffect } from "react";
import styles from "./styles/ProductListing.module.css";
import ProductCard from "../components/ProductCard";
import productsData from "../assets/products.json";

function ProductListing() {
  const [products, setProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  // State for active filters
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([500, 400000]); 
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Main filter effect
  useEffect(() => {
    let filtered = [...productsData];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(item => selectedBrands.includes(item.brand));
    }
    
    filtered = filtered.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);
    
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(item => selectedSizes.includes(item.case_size));
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => 
        item.category.some(cat => selectedCategories.includes(cat))
      );
    }

    setProducts(filtered);
    setCurrentPage(1);
  }, [selectedBrands, priceRange, selectedSizes, selectedCategories]);

  // Handlers for filters
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };
  
  const handleSizeChange = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
  
  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <div className={styles.filterHeader}>
          <h3>Filters</h3>
          <span className={styles.filterIcon}>☰</span>
        </div>

        <div className={styles.filterSection}>
          <h4>Brand</h4>
          {["Rolex", "Omega", "Seiko", "Richard Mille", "Casio"].map(brand => (
            <div key={brand} className={styles.checkboxItem}>
              <input type="checkbox" id={brand} onChange={() => handleBrandChange(brand)} checked={selectedBrands.includes(brand)} />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
        
        <div className={styles.filterSection}>
            <h4>Price</h4>
            <div className={styles.priceSlidersContainer}>
              {/* Min Price Slider */}
              <div className={styles.priceInputGroup}>
                <label htmlFor="minPrice">Min: ₱{priceRange[0].toLocaleString()}</label>
                <input
                  type="range"
                  id="minPrice"
                  min={500}
                  max={400000}
                  value={priceRange[0]}
                  onChange={(event) => {
                    const value = Math.min(Number(event.target.value), priceRange[1] - 1);
                    setPriceRange([value, priceRange[1]]);
                  }}
                  className={styles.slider}
                />
              </div>

              {/* Max Price Slider */}
              <div className={styles.priceInputGroup}>
                <label htmlFor="maxPrice">Max: ₱{priceRange[1].toLocaleString()}</label>
                <input
                  type="range"
                  id="maxPrice"
                  min={500}
                  max={400000}
                  value={priceRange[1]}
                  onChange={(event) => {
                    const value = Math.max(Number(event.target.value), priceRange[0] + 1);
                    setPriceRange([priceRange[0], value]);
                  }}
                  className={styles.slider}
                />
              </div>
            </div>
        </div>

        <div className={styles.filterSection}>
            <h4>Size</h4>
            <div className={styles.sizeOptions}>
                {["40mm", "41mm", "42mm"].map(size => (
                    <button 
                      key={size} 
                      onClick={() => handleSizeChange(size)}
                      className={`${styles.sizeButton} ${selectedSizes.includes(size) ? styles.activeButton : ''}`}
                    >
                      {size}
                    </button>
                ))}
            </div>
        </div>

        <div className={styles.filterSection}>
            <h4>Categories</h4>
            {["Men's", "Women's", "Formal", "Sportswear"].map(cat => (
                <div key={cat} className={styles.checkboxItem}>
                    <input type="checkbox" id={cat} onChange={() => handleCategoryChange(cat)} checked={selectedCategories.includes(cat)}/>
                    <label htmlFor={cat}>{cat}</label>
                </div>
            ))}
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <h2>Men's</h2>
          <p>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} of {products.length} Products</p>
        </div>

        <div className={styles.grid}>
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              model={product.model}
              brand={product.brand}
              star_review={product.star_review}
              price={product.price}
              image_link={product.image_link}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            &larr; Previous
          </button>
          {[...Array(totalPages).keys()].map(number => (
            (number < 3 || number > totalPages - 4 || Math.abs(currentPage - (number + 1)) < 2) &&
            <button 
              key={number + 1} 
              onClick={() => paginate(number + 1)} 
              className={currentPage === number + 1 ? styles.activePage : ''}
            >
              {number + 1}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            Next &rarr;
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProductListing;