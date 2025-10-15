import React, { useState } from "react";
import styles from "./styles/CartCheckout.module.css";

function CartCheckout() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product A",
      price: 300,
      quantity: 1,
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/ph/en/timepiece/product/watch/G/GM/GMA/gma-s145pk-4a/assets/GMA-S145PK-4A.png",
    },
    {
      id: 2,
      name: "Product B",
      price: 450,
      quantity: 2,
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/ph/en/timepiece/product/watch/G/GM/GMA/gma-s145pk-4a/assets/GMA-S145PK-4A.png",
    },
  ]);

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

  const deliveryFee = cartItems.length > 0 ? 100 : 0;

  const getSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const getDiscount = () => getSubtotal() * discountRate;
  const getTotal = () => getSubtotal() - getDiscount() + deliveryFee;

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCartItems((items) => items.filter((item) => item.id !== id));
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
      setDiscountRate(0.1);
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
    alert(
      `✅ Checkout successful!\n\nThank you, ${form.name}! Your order is being processed.`
    );
    setShowForm(false);
    setCartItems([]);
    setForm({ name: "", address: "", contact: "", payment: "" });
    setPromoCode("");
    setPromoApplied(false);
    setDiscountRate(0);
    setPromoMessage("");
    setPromoStatus("");
  };

  return (
    <section className={styles.cartPage}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumbBar}>
        <ol className={styles.breadcrumb}>
          <li className={styles.breadcrumb__item}>
            <a href="/Home.jsx">Home</a>
          </li>
          <li className={styles.breadcrumb__item}>Cart</li>
        </ol>
      </nav>

      <h2 className={styles.yourCart}>Your Cart</h2>

      <div className={styles.cartLayout}>
        <section className={styles.cartSection}>
          {cartItems.length > 0 ? (
            <ul className={styles.cartList}>
              {cartItems.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                  <div className={styles.cartLeft}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.productImage}
                    />
                    <div className={styles.itemDetails}>
                      <strong>{item.name}</strong>
                      <p>₱{item.price}</p>
                      <p>Size: Medium</p>
                    </div>
                  </div>

                  <div className={styles.cartRight}>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => removeItem(item.id)}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        alt="Delete"
                        className={styles.deleteIcon}
                      />
                    </button>
                    <div className={styles.cartButtons}>
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyCart}>🛍️ Your cart is empty.</p>
          )}
        </section>

        {cartItems.length > 0 && (
          <section className={styles.checkoutSection}>
            <h2 className={styles.orderSummary}>Order Summary</h2>

            <div>
              <p>Subtotal ₱{getSubtotal().toFixed(2)}</p>
              <p>
                Discount ({(discountRate * 100).toFixed(0)}%): -₱
                {getDiscount().toFixed(2)}
              </p>
              <p>Delivery Fee ₱{deliveryFee.toFixed(2)}</p>
              <hr />
              <p>
                <strong>Total ₱{getTotal().toFixed(2)}</strong>
              </p>

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
                  placeholder={promoMessage ? "" : "Add promo code"}
                  value={promoMessage ? promoMessage : promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    if (promoMessage) {
                      setPromoMessage("");
                      setPromoStatus("");
                    }
                  }}
                  disabled={promoApplied}
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
                Go to Checkout →
              </button>
            </div>
          </section>
        )}
      </div>

      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Checkout Details</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Complete Address
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Contact Number
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Mode of Payment
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                  <option value="GCash">GCash</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
              </label>

              <div className={styles.modalButtons}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.confirmBtn}>
                  Confirm
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
