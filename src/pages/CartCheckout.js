import React, { useState } from "react";
import styles from "./styles/CartCheckout.module.css";
import images from "../assets/imageLoader"; // Make sure this path is correct relative to CartCheckout.js

function CartCheckout({ cartItems, setCartItems, clearCart, removeFromCart }) {

  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
    payment: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountRate, setDiscountRate] = useState(0);
  const [promoMessage, setPromoMessage] = useState("");
  const [promoStatus, setPromoStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Delivery Fee set to 10000
  const deliveryFee = cartItems.length > 0 ? 10000 : 0;

  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const getDiscount = () => getSubtotal() * discountRate;
  const getTotal = () => getSubtotal() - getDiscount() + deliveryFee;

  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      removeFromCart(id);
    }
  };

  const showMessage = (msg, status) => {
    setPromoMessage(msg);
    setPromoStatus(status);
    setTimeout(() => {
      setPromoMessage("");
      setPromoStatus("");
    }, 3000);
  };

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (promoApplied) {
      showMessage("Promo code already applied.", "error");
      return;
    }
    if (code === "WTCH.CO") {
      setDiscountRate(0.1); // 10% discount
      setPromoApplied(true);
      showMessage("You got a 10% discount!", "success");
    } else {
      showMessage("Invalid promo code. Try again.", "error");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Checkout successful! Thank you, ${form.name}! Your order is being processed.`
    );
    console.log("Order Details:", cartItems);
    console.log("Form Data:", form);
    console.log("Total Paid:", getTotal().toLocaleString('en-PH', { style: 'currency', currency: 'PHP' }));

    alert(
      `✅ Checkout successful!\n\nThank you, ${form.name}! Your order is being processed.`
    );
    setShowForm(false);
    clearCart();
    // Reset form and promo states
    setForm({ name: "", address: "", contact: "", payment: "" });
    setPromoCode("");
    setPromoApplied(false);
    setDiscountRate(0);
    setPromoMessage("");
    setPromoStatus("");
  };

  // const placeholderImage = "https://placehold.co/100x100/eee/ccc?text=Watch"; // REMOVED

  return (
    <section className={styles.cartPage}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
        <ol className={styles.breadcrumb}>
          <li className={styles.breadcrumb__item}>
            <a href="/">Home</a>
          </li>
          <li className={styles.breadcrumb__item}>Cart</li>
        </ol>
      </nav>

      <h2 className={styles.yourCart}>Your Cart</h2>

      <div className={styles.cartLayout}>
        {/* Cart Items Section */}
        <section className={styles.cartSection}>
          {cartItems.length > 0 ? (
            <ul className={styles.cartList}>
              {cartItems.map((item) => {
                // Get the image source from the loader
                const imageSrc = images[item.image_link];
                // const showPlaceholder = !imageSrc; // REMOVED

                return ( // Return the list item JSX
                  <li key={item.id} className={styles.cartItem}>
                    <img
                      // Directly use imageSrc from the loader
                      src={imageSrc} // UPDATED: Removed placeholder logic
                      alt={item.model || item.name}
                      className={styles.productImage}
                      // onError handler REMOVED
                    />
                    <div className={styles.itemDetails}>
                      <strong className={styles.itemTitle}>{item.brand} | {item.model || item.name}</strong>
                      <span className={styles.itemSize}>Size: {item.case_size || 'N/A'}</span>
                      <span className={styles.itemPrice}>₱{item.price.toLocaleString()}</span>
                    </div>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => removeItem(item.id)}
                      title="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                  </li>
                ); // End return
              })} {/* End map */}
            </ul>
          ) : (
            <p className={styles.emptyCart}>🛍️ Your cart is empty.</p>
          )}
        </section>

        {/* Checkout Summary Section */}
        {cartItems.length > 0 && (
          <section className={styles.checkoutSection}>
            <h3 className={styles.orderSummary}>Order Summary</h3>

            <div className={styles.summaryDetails}>
              <p><span>Subtotal</span> <span>₱{getSubtotal().toLocaleString()}</span></p>
              <p>
                <span>Discount ({(discountRate * 100).toFixed(0)}%)</span>
                <span className={styles.discountAmount}>-₱{getDiscount().toLocaleString()}</span>
              </p>
              <p><span>Delivery Fee</span> <span>₱{deliveryFee.toLocaleString()}</span></p>

              <hr className={styles.summaryDivider} />

              <p className={styles.totalAmount}><strong>Total</strong> <strong>₱{getTotal().toLocaleString()}</strong></p>

              <div className={styles.promoSection}>
                <input
                  className={`${styles.promoInput} ${
                    promoStatus === "success"
                      ? styles.success
                      : promoStatus === "error"
                      ? styles.error
                      : ""
                  }`}
                  type="text"
                  placeholder="Add promo code"
                  value={promoMessage ? promoMessage : promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    if (promoMessage) {
                      setPromoMessage("");
                      setPromoStatus("");
                    }
                  }}
                  disabled={promoApplied}
                  aria-label="Promo Code"
                />
                <button
                  type="button"
                  className={styles.applyBtn}
                  onClick={applyPromo}
                  disabled={promoApplied}
                >
                  {promoApplied ? "Applied" : "Apply"}
                </button>
              </div>

              <button
                type="button"
                className={styles.orderBtn}
                onClick={() => setShowForm(true)}
              >
                Go to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </section>
        )}
      </div>

      {/* Checkout Form Modal */}
      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Checkout Details</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </label>
              <label>
                Complete Address
                <input type="text" name="address" value={form.address} onChange={handleChange} required />
              </label>
              <label>
                Contact Number
                <input type="tel" name="contact" value={form.contact} onChange={handleChange} required />
              </label>
              <label>
                Mode of Payment
                <select name="payment" value={form.payment} onChange={handleChange} required >
                  <option value="">Select Payment Method</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="GCash">GCash</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
              </label>

              <div className={styles.modalButtons}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowForm(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.confirmBtn}>
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartCheckout;