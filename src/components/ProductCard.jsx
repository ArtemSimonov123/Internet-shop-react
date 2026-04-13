import { useState } from 'react'

function ProductCard({ name, author, price, image }) {
  const [count, setCount] = useState(0)

  const handleBuy = () => {
    setCount(count + 1)
  }

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <h3 className="product-title">{name}</h3>
      <p className="product-author">Бренд: {author}</p>
      <p className="product-price">Ціна: {price} грн</p>

      <button className="buy-button" onClick={handleBuy}>
        Купити
      </button>

      <p className="product-count">Кількість: {count}</p>
    </div>
  )
}

export default ProductCard