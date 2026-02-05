import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import styles from './Product.module.css'

function Product() {
     const [product,setproduct]=useState ([])   



    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
             .then((res)=>{
                setproduct(res.data)
             })
             .catch((err)=>console.log(err))
    },[])

  return (
    <div className={styles.productGrid}>
      {
        product.map((singleProduct,index)=>(
            <ProductCard  product={singleProduct} key={index} rendAdd={true}/>
        ))
      }
    </div>
  )
}

export default Product
