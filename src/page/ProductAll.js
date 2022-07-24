import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
export default function ProductAll() {
  const [productList,setProductList] = useState([])
  const [query,setQuery]= useSearchParams()
  const getProducts = async ()=>{
    let searchQuery = query.get('q') || ''
    let url = `https://my-json-server.typicode.com/hongyungeun/react-router-practice/products?q=${searchQuery}` 
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }
  useEffect(()=>{
    getProducts()
  },[query])
  return (
    <div className='product_all_wrap'>
      {productList.map((item)=>(
        <ProductCard item={item}/>
      ))}
    </div>
  )
}
