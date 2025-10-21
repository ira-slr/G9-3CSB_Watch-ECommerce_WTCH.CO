import React from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>WTCH.CO</div>
            <ul className={styles.navLinks}>
                <li>Home</li>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
            <div className={styles.navIcons}>
                <div className={styles.searchBar}>
                    {/* Placeholder for search icon */}
                    <input type="text" placeholder="Search products..." />
                </div>
                <div className={styles.cartIcon}>
                    {/* Placeholder for cart icon */}
                    Cart
                </div>
                <div className={styles.profileIcon}>
                    {/* Placeholder for profile icon */}
                    Profile
                </div>
            </div>
        </nav>
    );

}
 export default Navbar;