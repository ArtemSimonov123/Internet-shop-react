import ProductCard from './ProductCard'

function Main({ products }) {
  const scrollToCatalog = () => {
    const section = document.getElementById('catalog')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="main">
      <div className="container">
        <section className="hero-section">
          <h2 className="main-title">Головна сторінка</h2>
          <p className="main-text">
            Ласкаво просимо в інтернет-магазин.
          </p>

          <button className="catalog-button" onClick={scrollToCatalog}>
            Перейти в каталог
          </button>
        </section>

        <section className="catalog-section" id="catalog">
          <h2 className="catalog-title">Каталог товарів</h2>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                author={product.author}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Main