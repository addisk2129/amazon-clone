import React from 'react'
import CategoryCard from './CategoryCard'
import {CategoryImage} from './CategoryInfo'
import styles from './Category.module.css'


function Category() {

  return (
    <div className={styles.Category_Container}>
        {
            CategoryImage?.map((data,index)=>(
                <CategoryCard key={index}
             name={data?.name}
             title={data?.title}
             image={data?.image}
               />

            ))
        }
      
    </div>
  )
}

export default Category
