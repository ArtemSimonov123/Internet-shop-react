import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const products = [
    {
      id: 1,
      name: 'Ноутбук',
      author: 'Lenovo',
      price: 35000,
      image: 'https://i.moyo.ua/img/gallery/7442/22/3514377_middle.jpg',
    },
    {
      id: 2,
      name: 'Навушники',
      author: 'Sony',
      price: 2500,
      image: 'https://i.moyo.ua/img/gallery/789/39/1631052_zoom.jpg',
    },
    {
      id: 3,
      name: 'Клавіатура',
      author: 'Logitech',
      price: 3200,
      image: 'https://content.rozetka.com.ua/goods/images/original/239858915.jpg',
    },
  ]

  return (
    <div className="app">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  )
}

export default App