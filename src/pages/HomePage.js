import React from 'react';
import Navbar from '../components/Navbar';
import styles from './styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            <header className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>MATCH YOUR STYLE WITH THE RIGHT WATCH</h1>
                    <p>
                        Discover our new collection of watches that perfectly complement
                        your individuality and sophistication.
                    </p>
                    <button className={styles.shopNowButton}>SHOP NOW</button>
                    <div className={styles.stats}>
                        <div>
                            <h3>850+</h3>
                            <p>International Brands</p>
                        </div>
                        <div>
                            <h3>12,500+</h3>
                            <p>High Quality Products</p>
                        </div>
                        <div>
                            <h3>85,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img src="/images/hero-models.png" alt="Models wearing watches" />
                </div>
            </header>

            <section className={styles.brandLogos}>
                <div className={styles.brand}>ROLEX</div>
                <div className={styles.brand}>SEIKO</div>
                <div className={styles.brand}>OMEGA</div>
                <div className={styles.brand}>RICHARD MILLE</div>
            </section>

            <section className={styles.newArrivals}>
                <h2>NEW ARRIVALS</h2>
                <div className={styles.newProducts}>
                    <div className={styles.newProductCard}>
                        <img src="/images/new-watch1.png" alt="Classic Chronograph" />
                        <h3>Classic Chronograph</h3>
                        <p>$220</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                    <div className={styles.newProductCard}>
                        <img src="/images/new-watch2.png" alt="Elegant Silver" />
                        <h3>Elegant Silver</h3>
                        <p>$190</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                    <div className={styles.newProductCard}>
                        <img src="/images/new-watch3.png" alt="Modern Minimalist" />
                        <h3>Modern Minimalist</h3>
                        <p>$260</p>
                        <button className={styles.addToCart}>Add to Cart</button>
                    </div>
                </div>
            </section>

            <section className={styles.productGrid}>
                <h2>TOP SELLING</h2>
                <div className={styles.products}>
                    <div className={styles.productCard}>
                        <img src="/images/watch1.png" alt="Chronograph Steel Watch" />
                        <h3>Chronograph Steel Watch</h3>
                        <p>$120</p>
                        <span className={styles.oldPrice}>$240</span>
                        <span className={styles.discount}>-50%</span>
                    </div>
                    <div className={styles.productCard}>
                        <img src="/images/watch2.png" alt="Minimalist Leather Strap" />
                        <h3>Minimalist Leather Strap</h3>
                        <p>$260</p>
                        <span className={styles.oldPrice}>$440</span>
                        <span className={styles.discount}>-40%</span>
                    </div>
                    <div className={styles.productCard}>
                        <img src="/images/watch3.png" alt="Sport Digital Watch" />
                        <h3>Sport Digital Watch</h3>
                        <p>$180</p>
                        <span className={styles.oldPrice}>$360</span>
                        <span className={styles.discount}>-50%</span>
                    </div>
                    <div className={styles.productCard}>
                        <img src="/images/watch4.png" alt="Vintage Square Face" />
                        <h3>Vintage Square Face</h3>
                        <p>$130</p>
                        <span className={styles.oldPrice}>$160</span>
                        <span className={styles.discount}>-20%</span>
                    </div>
                </div>
                <button className={styles.viewAllButton}>View All</button>
            </section>

            <section className={styles.browseByStyle}>
                <h2>BROWSE BY WATCHES STYLE</h2>
                <div className={styles.styleCategories}>
                    <div className={styles.styleCard}>
                        <img src="/images/casual.png" alt="Casual" />
                        <h3>Casual</h3>
                    </div>
                    <div className={styles.styleCard}>
                        <img src="/images/formal.png" alt="Formal" />
                        <h3>Formal</h3>
                    </div>
                    <div className={styles.styleCard}>
                        <img src="/images/party.png" alt="Party" />
                        <h3>Party</h3>
                    </div>
                    <div className={styles.styleCard}>
                        <img src="/images/gym.png" alt="Gym" />
                        <h3>Gym</h3>
                    </div>
                </div>
            </section>

            <section className={styles.customerReviews}>
                <h2>OUR HAPPY CUSTOMERS</h2>
                <div className={styles.reviews}>
                    <div className={styles.reviewCard}>
                        <div className={styles.stars}>★★★★★</div>
                        <h4>Sarah M.</h4>
                        <p>"I'm blown away by the craftsmanship and precision of the watches I received from Wtch.co. Everything is exactly what I'm looking for. Highly recommend!"</p>
                    </div>
                    <div className={styles.reviewCard}>
                        <div className={styles.stars}>★★★★★</div>
                        <h4>Alex K.</h4>
                        <p>"Finding a timepiece that aligns with my style has always been a challenge until I discovered Wtch.co. Incredible range and design!"</p>
                    </div>
                    <div className={styles.reviewCard}>
                        <div className={styles.stars}>★★★★★</div>
                        <h4>James L.</h4>
                        <p>"As someone who values horology, Wtch.co has become my go-to. Their attention to detail and mechanical quality sets them apart."</p>
                    </div>
                </div>
            </section>

            <section className={styles.newsletter}>
                <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className={styles.newsletterForm}>
                    <input type="email" placeholder="Enter your email address" />
                    <button>Subscribe to Newsletter</button>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerColumn}>
                    <h3>WTCH.CO</h3>
                    <p>We offer timepieces that suit your style and make you proud to wear them every day.</p>
                    <div className={styles.socialIcons}>
                        <img src="/icons/facebook.svg" alt="Facebook" />
                        <img src="/icons/instagram.svg" alt="Instagram" />
                        <img src="/icons/twitter.svg" alt="Twitter" />
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <h3>COMPANY</h3>
                    <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>HELP</h3>
                    <ul>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>FAQ</h3>
                    <ul>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>RESOURCES</h3>
                    <ul>
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How-to Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
