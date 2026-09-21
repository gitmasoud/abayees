"use client";

import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  }, []);

  return (
    <main>
      <h1>Payment successful</h1>
      <p>Thanks for your order!</p>
    </main>
  );
}