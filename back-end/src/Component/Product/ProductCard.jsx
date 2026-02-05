import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import styles from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataProvider/DataProvider';
import {Type} from '../../Utility/Type.js'


function ProductCard({ product,rendAdd }) {
  const {id, title, price, image, rating ,description} = product;
   const [state,dispatch] =useContext(DataContext);


   const addToCart=()=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item:{
        image,title,id,rating,price,description
      }
    })
   }

    return (
      <div className={styles.card}>
        
        <div className={styles.imageWrapper}>
          <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
          </Link>
          
        </div>
  
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
  
          <div className={styles.rating}>
            <Rating
              name="half-rating-read"
              value={rating?.rate}
              precision={0.5}
              readOnly
              size="small"
            />
            <span>{rating?.count}</span>
          </div>
  
          <div className={styles.price}>
            <CurrencyFormat amount={price} />
          </div>
        </div>
        {rendAdd&&<button className={styles.button} onClick={addToCart}>Add to cart</button>}
      </div>
    );
  }
  

export default ProductCard
