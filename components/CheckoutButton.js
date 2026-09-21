"use client";

export default function CheckoutButton() {
  const checkout = async () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

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
    <button onClick={checkout}>
      Checkout
    </button>
  );
}