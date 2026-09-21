"use client";

import { useEffect, useState } from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const updateCart = () => {
    const existing = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(existing);
  };

  useEffect(() => {
    updateCart();

    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          quantity: item.quantity + change,
        };
      })
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = async () => {
    if (!cart.length) return;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
  <div className={styles.cartWrapper}>
    <button
      className={styles.cartButton}
      onClick={() => setOpen(!open)}
    >
      🛒 {count}
    </button>

    {open && (
      <div className={styles.dropdown}>
        <h3>Your Cart</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className={styles.item}
              >
                <strong>{item.name}</strong>

                <div>
                  £{((item.price * item.quantity) / 100).toFixed(2)}
                </div>

                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityButton}
                    onClick={() =>
                      updateQuantity(item.id, -1)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className={styles.quantityButton}
                    onClick={() =>
                      updateQuantity(item.id, 1)
                    }
                  >
                    +
                  </button>

                  <button
                    className={styles.removeButton}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <hr />

            <strong>
              Total: £{(total / 100).toFixed(2)}
            </strong>

            <br />
            <br />

            <button
              className={styles.checkoutButton}
              onClick={checkout}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    )}
  </div>
);
}