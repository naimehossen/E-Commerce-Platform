import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price} টাকা</p>
      <p className="category">{product.category}</p>
      <p className="description">{product.description}</p>
      <button onClick={() => addToCart(product)}>কার্টে যোগ করুন</button>
    </div>
  );
};

export default ProductCard;