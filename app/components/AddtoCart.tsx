'use client'
import React from 'react'

const AddtoCart = () => {
  return (
    <div>
      <button className="bg-blue-500 text-white" onClick={()=>console.log('product added to cart')}>Add to Cart</button>
    </div>
  )
}

export default AddtoCart
