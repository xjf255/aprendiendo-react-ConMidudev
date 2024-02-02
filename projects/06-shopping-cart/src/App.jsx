import {products as initialProducts} from './mocks/products.json'
import { Products } from "./Products"
import { Header } from './Header'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category:'laptops',
    minPrice:0
  })

  const filterProducts = (products) =>{
    return products.filter(product =>{
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)
  console.log(filters)
  return (
    <>
    <Header/>
    <Products products={filteredProducts} />
    </>
  )
}

export default App
