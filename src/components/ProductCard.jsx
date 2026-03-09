import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>
        Status:{' '}
        <span
          className={`${styles.status} ${
            product.inStock ? styles.inStockStatus : styles.outOfStockStatus
          }`}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button
        data-testid={'product-' + product.id}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
