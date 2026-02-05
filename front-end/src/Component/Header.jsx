import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

import styles from './Header.module.css'
import { signOut } from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../Utility/Firebase';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../Utility/Type';

function Header() {

  const [state,dispatch]=useContext(DataContext);
  const {user,basket}=state;
const userName=user?.email.split('@')[0]

  const total=basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0);





  const handleSingOut=async()=>{
        await signOut(auth);
        dispatch({
          type:Type.SET_USER,
          user:null
        })
  }
  return (
    <section className={styles.header}>
  <section className={styles.headerNav}>

    <div className={styles.logo}>
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" />
      </Link>
    </div>

    <div className={styles.delivery}>
      <div className={styles.deliveryText}>
        <p>Delivered to</p>
        <span>Ethiopia</span>
      </div>
    </div>

    <div className={styles.search}>
      <select>
        <option>All</option>
      </select>
      <input placeholder="Search Amazon" />
      <div className={styles.searchIcon}>
        <CiSearch />
      </div>
    </div>

    <div className={styles.language}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" />
      <select>
        <option>EN</option>
      </select>
    </div>

    <div className={styles.navItem}>
      <Link to={!user&& "/auth"}>
      {
          user?
        (  <>
          <p>Hello, {userName}</p>
      <span onClick={handleSingOut}>Sign Out</span></>):(
        <>
         <p>Hello, Sign in</p>
         <span>Account & Lists</span>
        </>
        
      )
      }
     
      </Link>
      
    </div>

    <div className={styles.navItem}>
      <Link to='/orders'>
      <p>Returns</p>
      <span>& Orders</span>
      </Link>
 
    </div>

    <div className={styles.cart}>
      <Link to='/cart'>
      <MdOutlineShoppingCart className={styles.cartIcon} />
      <span className={styles.cartCount}>{total}</span>
      </Link>
      
    </div>

  </section>
</section>

  )
}

export default Header
