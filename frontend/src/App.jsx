import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { productsData, categories } from './data/products';
import './App.css';

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // ফিল্টার্ড প্রোডাক্ট আপডেট করা
  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'সব' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  // কার্টে প্রোডাক্ট যোগ
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // কার্ট থেকে প্রোডাক্ট সরান
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // মোট মূল্য গণনা
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Home 
      products={filteredProducts}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      totalPrice={totalPrice}
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  );
}

export default App;

