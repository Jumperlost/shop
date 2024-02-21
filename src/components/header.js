import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum">Total: {sum}</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h3>Your shopping cart is empty</h3>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

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

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
