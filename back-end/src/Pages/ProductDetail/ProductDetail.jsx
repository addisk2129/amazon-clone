import React, { use, useEffect, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import axios from 'axios'
import {BaseUrl} from '../../Utility/BaseUrl'
import {useParams} from 'react-router-dom';
import ProductCard from '../../Component/Product/ProductCard';
import Loader from '../../Component/Loader/Loader.jsx'
import styles from "./ProductDetail.module.css";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const { productId } = useParams();
  
    useEffect(() => {
      setIsLoading(true);
  
      axios
        .get(`${BaseUrl}/${productId}`)
        .then((res) => {
          setProduct(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
    
          setIsLoading(false);
        });
    }, [productId]);
  
    return (
      <Layout>
        <div className={styles.page}>
          {isLoading ? (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.left}>
                <ProductCard product={product}  rendAdd={true}/>
              </div>
  
              <div className={styles.right}>
                <h3 className={styles.description}>
                  {product.description}
                </h3>
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
  
export default ProductDetail