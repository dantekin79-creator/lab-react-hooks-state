import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div
      className="cart-container"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #eee',
        position: 'sticky',
        top: '2rem',
      }}
    >
      <h2 style={{ marginTop: 0 }}>Shopping Cart 🛒</h2>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        Total items: {cart.length}
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.length === 0 ? (
          <p style={{ fontStyle: 'italic', color: '#999' }}>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <li
              key={index}
              style={{
                padding: '0.8rem',
                backgroundColor: 'white',
                marginBottom: '0.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0',
                fontSize: '0.95rem',
              }}
            >
              {item.name} is in your cart
            </li>
          ))
        )}
      </ul>

      {/* Styles for Dark Mode via inline-style isn't ideal but works for quick fixes */}
      <style>{`
        .dark-mode .cart-container {
          background-color: #2d2d2d !important;
          border-color: #444 !important;
        }
        .dark-mode .cart-container h2 {
          color: white;
        }
        .dark-mode .cart-container p {
          color: #aaa !important;
        }
        .dark-mode .cart-container li {
          background-color: #333 !important;
          color: #eee !important;
          border-color: #444 !important;
        }
      `}</style>
    </div>
  )
}

export default Cart
