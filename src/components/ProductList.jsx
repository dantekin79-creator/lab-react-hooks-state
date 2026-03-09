import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ addToCart, selectedCategory }) => {
  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="product-list-container">
      <h2>Available Products</h2>

      <div
        className="product-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  )
}

export default ProductList
