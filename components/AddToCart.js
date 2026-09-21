"use client";

import styles from "./AddToCart.module.css";

export default function AddToCart({ product }) {
  const addToCart = () => {
    const existing = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const index = existing.findIndex(
      (item) => item.id === product.id
    );

    if (index >= 0) {
      existing[index].quantity += 1;
    } else {
      existing.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existing));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <button
      className={styles.button}
      onClick={addToCart}
    >
      Add to cart
    </button>
  );
}