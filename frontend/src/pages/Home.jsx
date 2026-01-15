import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const Home = ({ 
  products, 
  cart, 
  addToCart, 
  removeFromCart, 
  totalPrice, 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  searchTerm, 
  setSearchTerm 
}) => {
  return (
    <div className="App">
      <Header 
        cartCount={cart.length} 
        totalPrice={totalPrice} 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} />
      <Footer />
    </div>
  );
};

export default Home;