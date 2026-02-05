import React from 'react'
import {Link} from 'react-router-dom'
import styles from './CategoryCard.module.css'


function CategoryCard({title,name,image}) {
 
  return (
    <div className={styles.card}>
        
           
            <Link to={`/category/${name}`}>
                <span><h2>{title}</h2></span>
                <img src={image} alt={title} />
                <p>shop now</p>
         </Link>
                
    </div>
  )
}

export default CategoryCard
