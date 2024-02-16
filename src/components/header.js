import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);

  return (
    <header>
      <div>
        <span className="logo"> House staff</span>
        <ul className="nav">
          <li>About As</li>
          <li>Contact</li>
          <li>Account</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />

        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
