import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

function PrivateRote({login}) {
  
  return login? <ProductDetail />:<Navigate to='/login' />
}

export default PrivateRote