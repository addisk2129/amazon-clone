import React, { useContext } from 'react'
import Layout from '../../Component/Layout/Layout'
import { DataContext } from '../../DataProvider/DataProvider'
import ProductCard from '../../Component/Product/ProductCard'
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import styles from './Cart.module.css'
import {Type} from '../../Utility/Type'
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)
const total=basket.reduce((amount,item)=>{
      return item.price*item.amount+amount
},0)

const increment=(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item
  })
}
 const decrement=(id)=> {
    dispatch({
      type:Type.REMOVE_FROM_CART,
      id
    })
 }

  return (
    <Layout>
      <section className={styles.cart}>
        {/* LEFT */}
        <div className={styles.left}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <hr />

          {basket?.length === 0 ? (
            <p className={styles.empty}>Your Amazon Cart is empty.</p>
          ) :(basket.map((item, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.imageWrapper}>
                <ProductCard product={item} rendAdd={false} />
              </div>
              <button onClick={()=>increment(item)}><IoIosArrowUp/></button>
                <span>{item.amount}</span>
            <button onClick={()=>decrement(item.id)}><MdKeyboardArrowDown/></button>
              <p className={styles.description}>{item.description}</p>
            </div>
          )))
          }
        </div>

        {/* RIGHT */}
        {basket?.length !== 0 && (
          <div className={styles.right}>
            <p className={styles.subtotal}>
              Subtotal ({basket.length} items)
            </p>

            <CurrencyFormat amount={total} />

            <div className={styles.gift}>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </div>

            <Link className={styles.checkoutBtn} to="/payments">
              Proceed to checkout
            </Link>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Cart
