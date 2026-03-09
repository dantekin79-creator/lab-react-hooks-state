import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>🛒 Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      <main className="main-content">
        <div className="product-section">
          <div className="filter-section">
            <label>Filter by Category: </label>
            <select onChange={handleCategoryChange} value={selectedCategory}>
              <option value="all">All</option>
              <option value="Fruits">Fruits</option>
              <option value="Dairy">Dairy</option>
            </select>
          </div>

          <ProductList
            addToCart={addToCart}
            selectedCategory={selectedCategory}
          />
        </div>

        <aside className="cart-section">
          <Cart cart={cart} />
        </aside>
      </main>
    </div>
  )
}

export default App
