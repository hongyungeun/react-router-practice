import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  
  let {id} = useParams()
  const [product,setProduct]= useState(null)
  const getProductDetail = async()=>{
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[product])
  return (
    <div className='product_detail_wrap'>
      <div>
        <img src={product?.img} />
      </div>
      <div>
        <p>{product?.title}</p>
        <p>${product?.price}</p>
        <p>{product?.choice == true ? 'Consclous Choice' : ''}</p>
        <select>
          <option hidden>사이즈 선택</option>
          {product?.size.map((i)=>(
            <option>{i}</option>
          ))}
        </select>
        <button>추가</button>
      </div>


    </div>
  )
}
