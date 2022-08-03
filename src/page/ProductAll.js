import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {ProductAction} from '../redux/actions/productAction'
export default function ProductAll() {
  const dispatch = useDispatch()
  const productList = useSelector((state)=>state.product.productList)
  const [query,setQuery]= useSearchParams()
  const getProducts = ()=>{
    let searchQuery = query.get('q') || ''
    dispatch(ProductAction.getProducts(searchQuery))
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
