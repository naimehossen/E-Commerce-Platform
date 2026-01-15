import React from 'react';

const Cart = ({ cart, removeFromCart, totalPrice }) => {
  return (
    <aside className="cart">
      <div className="container">
        <h2>আপনার কার্ট</h2>
        {cart.length === 0 ? (
          <p>আপনার কার্টে কোন পণ্য নেই</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>{item.price} টাকা</span>
                  <button onClick={() => removeFromCart(item.id)}>সরান</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <strong>মোট: {totalPrice} টাকা</strong>
            </div>
            <button className="checkout-btn">চেকআউট</button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Cart;