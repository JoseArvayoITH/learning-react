import React from 'react'
import Loader from './Loader'
import ProductCard from './ProductCard'
import { useAxiosGet } from './HttpsRequests'

const Home = () => {
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
  let products = useAxiosGet(url)

  let content = null

  if(products.error){
      content = <div>
          <div className="bg-blue-300 mb-2 p-3">
              If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
          </div>
          <div className="bg-red-300 p-3">
              There was an error please refresh or try again later.
          </div>
      </div>
  }

  if(products.loading){
      content = <Loader></Loader>
  }

  if(products.data){
      content = 
      products.data.map((product) => 
          <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
              <ProductCard 
                  product={product}
              />
          </div>
      )
  }

  return (
      <div className="container mx-auto">
          <h1 className="font-bold text-2xl mb-3 py-4 text-center">
              Best Sellers
          </h1>
          <div className="md:flex flex-wrap md:-mx-3">
              { content } 
          </div>
      </div>
  )
}

export default Home