import React from 'react';
import style from './styles/Footer.module.css';

// Imported Social Media Icons
import fb from "../assets/designs/footer/fb.png";
import ig from "../assets/designs/footer/ig.png";
import github from "../assets/designs/footer/github.png";
import twitter from "../assets/designs/footer/twitter.png";

// Imported Payment Icons
import visa from "../assets/designs/footer/visa.png";
import mastercard from "../assets/designs/footer/mastercard.png";
import paypal from "../assets/designs/footer/paypal.png";
import apple from "../assets/designs/footer/applepay.png";
import gpay from "../assets/designs/footer/gpay.png";

// Define the data structure for the navigation columns
const NAV_LINKS = [
    {
        title: "LINK",
        links: ["Home", "Categories", "Brands"]
    },
    {
        title: "ACCOUNT",
        links: ["Profile", "Cart", "Checkout"]
    },
    {
        title: "HELP",
        links: ["Delivery Details", "Terms & Conditions", "Privacy Policy"]
    }
];

function Footer() {
    // List of social icons for mapping
    const socialIcons = [
        { icon: fb, alt: "Facebook", link: "#" },
        { icon: twitter, alt: "Twitter", link: "#" },
        { icon: ig, alt: "Instagram", link: "#" },
        { icon: github, alt: "GitHub", link: "#" },
    ];

    // List of payment icons for mapping
    const paymentIcons = [
        { icon: visa, alt: "Visa" },
        { icon: mastercard, alt: "Mastercard" },
        { icon: paypal, alt: "PayPal" },
        { icon: apple, alt: "Apple Pay" },
        { icon: gpay, alt: "Google Pay" },
    ];

    return (
        <footer className={style.footer}>
            <div className={style.contentWrapper}>
                {/* Top Section: Main Content Columns */}
                <div className={style.footerGrid}>
                    {/* Column 1: Logo and About */}
                    <div className={style.aboutSection}>
                        <h2 className={style.logoText}>WTCH</h2>
                        <p className={style.tagline}>
                            We have an array of watch that suits your style and which you're proud to wear.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className={style.socialIcons}>
                            {socialIcons.map((item) => (
                                <a key={item.alt} href={item.link} target="_blank" rel="noopener noreferrer" className={style.socialLink}>
                                    <img src={item.icon} alt={item.alt} className={style.socialIcon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columns 2, 3, 4: Navigation Links */}
                    {NAV_LINKS.map((section) => (
                        <div key={section.title} className={style.linkSection}>
                            <h3 className={style.linkTitle}>{section.title}</h3>
                            <ul className={style.linkList}>
                                {section.links.map((link) => (
                                    <li key={link} className={style.linkItem}>
                                        <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className={style.link}>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Copyright and Payment Methods */}
                <div className={style.bottomBar}>
                    <p className={style.copyright}>wtch.co © 2025-2026, All Rights Reserved</p>
                    
                    {/* Payment Icons */}
                    <div className={style.paymentIcons}>
                        {paymentIcons.map((item) => (
                            <img 
                                key={item.alt} 
                                src={item.icon} 
                                alt={item.alt} 
                                className={style.paymentIcon} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;