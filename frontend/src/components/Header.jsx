import React from 'react';

const Header = ({ cartCount, totalPrice, categories, selectedCategory, setSelectedCategory, searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>ই-কমার্স স্টোর</h1>
        <div className="search-filter">
          <input
            type="text"
            placeholder="পণ্য খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="cart-info">
          <span>কার্ট: {cartCount} আইটেম</span>
          <span>মোট: {totalPrice} টাকা</span>
        </div>
      </div>
    </header>
  );
};

export default Header;