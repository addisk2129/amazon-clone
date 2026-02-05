import React, { useEffect, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import {BaseUrl} from '../../Utility/BaseUrl'
import styles from '../../Component/Product/Product.module.css'
import Loader from '../../Component/Loader/Loader.jsx'
import axios from 'axios'
import  {useParams} from 'react-router-dom'
import ProductCard from '../../Component/Product/ProductCard'
function Result() {
    const {categoryname}=useParams();
    const [product,setproduct]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        setIsLoading(true);

  axios.get(`${BaseUrl}/category/${categoryname}`)
       .then(res=>{
        setproduct(res.data)
    setIsLoading(false)
        })
       .catch((err)=>{
     
        setIsLoading(true);
    })
    },[categoryname])

  return (
    <Layout>
        <div>
        <h1 style={{paddingLeft:'50px'}}>Results</h1>
        <h4 style={{paddingLeft:'50px'}}>{categoryname}</h4>
        <br />
            
            {
                isLoading ?<Loader/>:
                (<div className={styles.productGrid}>
                    {
                      product.map((prod,index)=>(
                          <ProductCard product={prod} key={index} rendAdd={true}/>
                      ))
                    }
                  </div>)
            }
        </div>
         
    </Layout>
  )
}

export default Result
