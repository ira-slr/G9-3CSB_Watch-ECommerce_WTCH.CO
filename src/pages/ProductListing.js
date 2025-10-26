import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom"; // 1. Import useSearchParams
import styles from "./styles/ProductListing.module.css";
import ProductCard from "../components/ProductCard";
import productsData from "../assets/products.json";
import PriceRangeSlider from "../components/PriceRangeSlider";

function ProductListing() {
  const [products, setProducts] = useState([]); // Initialize as empty, let useEffect populate
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  // --- State Initialization ---
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([500, 400000]); // Keep initial range
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // 2. Get searchParams function
  const [searchParams] = useSearchParams();

  // 3. useEffect to read URL parameters ONCE on mount
  useEffect(() => {
    const brandParams = searchParams.getAll('brand');
    const categoryParams = searchParams.getAll('category');

    // Set state only if URL params exist
    if (brandParams.length > 0) {
        setSelectedBrands(brandParams);
    }
    if (categoryParams.length > 0) {
        setSelectedCategories(categoryParams);
    }
     // Apply initial filtering based on URL params (and default price range)
     // This logic is now duplicated here and below, let's consolidate
     // No need to set initial state here, the main filter useEffect will handle it

  }, [searchParams]); // Run only when searchParams object changes (effectively on mount/navigation)


  // Main filtering logic - runs when state changes (including after initial params are read)
  useEffect(() => {
    console.log("Filtering with:", { selectedBrands, selectedCategories, priceRange, selectedSizes }); // Debugging line
    let filtered = [...productsData];

    // Brand Filtering (Case-Insensitive)
    if (selectedBrands.length > 0) {
      const lowerSelectedBrands = selectedBrands.map(b => b.toLowerCase());
      filtered = filtered.filter(item =>
        item.brand && lowerSelectedBrands.includes(item.brand.toLowerCase())
      );
    }

    // Price Filtering
    filtered = filtered.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

    // Size Filtering
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(item => item.case_size && selectedSizes.includes(item.case_size));
    }

    // Category Filtering
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item =>
        item.category && Array.isArray(item.category) && item.category.some(cat => selectedCategories.includes(cat))
      );
    }

    console.log("Filtered Count:", filtered.length); // Debugging line
    setProducts(filtered);
    setCurrentPage(1); // Reset page number when filters change
  }, [selectedBrands, priceRange, selectedSizes, selectedCategories]); // Dependencies remain the same


  // --- Handlers remain the same ---
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
  const handlePriceChange = useCallback(([min, max]) => {
    setPriceRange([min, max]);
  }, []);

  // Pagination Logic remains the same
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginate = (pageNumber) => {
     if (pageNumber >= 1 && pageNumber <= totalPages) {
       setCurrentPage(pageNumber);
     }
  };

  // getHeaderTitle remains the same
  const getHeaderTitle = () => {
    const hasBrands = selectedBrands.length > 0;
    const hasCategories = selectedCategories.length > 0;
    const brandString = selectedBrands.join(' & ');
    const categoryString = selectedCategories.join(' & ');

    if (hasBrands && hasCategories) { return `${brandString} ${categoryString}`; }
    else if (hasBrands) { return brandString; }
    else if (hasCategories) { return categoryString; }
    else { return "All Watches"; }
  };

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        {/* Filters UI remains the same, 'checked' attribute handles initial state */}
         <div className={styles.filterHeader}>
          <h3>Filters</h3>
          <span className={styles.filterIcon}>☰</span>
        </div>
        <div className={styles.filterSection}>
          <h4>Brand</h4>
          {["Rolex", "Omega", "Seiko", "Richard Mille", "Casio"].map(brand => (
            <div key={brand} className={styles.checkboxItem}>
              <input type="checkbox" id={`brand-${brand}`} name="brand" value={brand} onChange={() => handleBrandChange(brand)} checked={selectedBrands.includes(brand)} />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          ))}
        </div>
        <div className={styles.filterSection}>
            <h4>Price</h4>
            <div className={styles.priceSlidersContainer}>
              <PriceRangeSlider
                min={500} // Keep original min/max for slider UI
                max={400000}
                onChange={handlePriceChange}
                // value={priceRange} // Pass value if slider needs it
              />
            </div>
            <div className={styles.priceLabelsContainer}>
              <div className={styles.priceLabel}> <label>Min</label> <span>₱{priceRange[0].toLocaleString()}</span> </div>
              <div className={styles.priceLabel}> <label>Max</label> <span>₱{priceRange[1].toLocaleString()}</span> </div>
            </div>
        </div>
        <div className={styles.filterSection}>
            <h4>Size</h4>
            <div className={styles.sizeOptions}>
                {["40mm", "41mm", "42mm"].map(size => (
                    <button key={size} onClick={() => handleSizeChange(size)} className={`${styles.sizeButton} ${selectedSizes.includes(size) ? styles.activeButton : ''}`}> {size} </button>
                ))}
            </div>
        </div>
        <div className={styles.filterSection}>
            <h4>Categories</h4>
            {["Men's", "Women's", "Formal", "Sportswear"].map(cat => (
                <div key={cat} className={styles.checkboxItem}>
                    <input type="checkbox" id={`cat-${cat}`} name="category" value={cat} onChange={() => handleCategoryChange(cat)} checked={selectedCategories.includes(cat)}/>
                    <label htmlFor={`cat-${cat}`}>{cat}</label>
                </div>
            ))}
        </div>
      </aside>

      {/* Main Product Grid remains the same */}
      <main className={styles.main}>
        <div className={styles.header}>
          <h2>{getHeaderTitle()}</h2>
          <p>Showing {products.length > 0 ? indexOfFirstProduct + 1 : 0}–{Math.min(indexOfLastProduct, products.length)} of {products.length} Products</p>
        </div>
        {currentProducts.length > 0 ? (
          <div className={styles.grid}>
            {currentProducts.map((product) => (
              <ProductCard key={product.id} {...product} /* Pass all props */ />
            ))}
          </div>
        ) : (
          <p className={styles.noProducts}>No products match the selected filters.</p>
        )}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}> &larr; Previous </button>
            {[...Array(totalPages).keys()].map(number => {
              const pageNumber = number + 1;
              if (pageNumber === 1 || pageNumber === totalPages || Math.abs(currentPage - pageNumber) <= 1) {
                return ( <button key={pageNumber} onClick={() => paginate(pageNumber)} className={currentPage === pageNumber ? styles.activePage : ''}> {pageNumber} </button> );
              } else if (Math.abs(currentPage - pageNumber) === 2) {
                 return <span key={`ellipsis-${pageNumber}`} className={styles.ellipsis}>...</span>;
              }
              return null;
            })}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}> Next &rarr; </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default ProductListing;