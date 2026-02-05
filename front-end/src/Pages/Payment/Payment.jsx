import React, { useContext, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import { DataContext } from '../../DataProvider/DataProvider'
import ProductCard from '../../Component/Product/ProductCard';
import {useElements, useStripe,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat';
import {axiosInstance} from '../../Api/Axios'
import {ClipLoader} from 'react-spinners'
import {db} from '../../Utility/Firebase';
import { doc, setDoc, collection } from "firebase/firestore";
import styles from './Payment.module.css';
import {useNavigate} from 'react-router-dom'
import { Type } from '../../Utility/Type';

function Payment() {

    const [state,dispatch]=useContext(DataContext);
    const {basket,user}=state;
    const [processing,setProcessing]=useState(false);
       const[cardError,setCardError]=useState('');

    const total=basket?.reduce((amount,item)=>{
      return item.amount + amount
    },0);
    const totalPrice=basket?.reduce((amount,item)=>{
      return item.amount * item.price + amount
    },0)
 const navigate=useNavigate()
    const elements=useElements();
    const stripe=useStripe();

const handleChange=(e)=>{
            e?.error?.message?setCardError( e?.error?.message):setCardError('')
          }



const handlePayment=async(e)=>{
      setProcessing(true)
          e.preventDefault();
             try {
              const response= await axiosInstance({
                method:"POST",
                url:`/payment/create?total=${totalPrice}`
               })
               const clientSecret=response.data?.clientSecret
               //step 2:client side (react side confirmation)
            const {paymentIntent}=await stripe.confirmCardPayment(
               clientSecret,
               {
                  payment_method:{
                card:elements.getElement(CardElement)
               }
            }
            )
           
  

            await setDoc(
              doc(
                collection(
                  doc(collection(db, "users"), user.uid), 
                  "orders"
                ), 
                paymentIntent.id
              ),
              {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
              }
            );

            
            setProcessing(false);
            dispatch({type:Type.EMPTY_BASKET})
          navigate('/orders',{state:{msg:'You have placed order now'}})
             } catch (error) {
                 console.log(error);
                 setProcessing(false);
             }
           
     



}

  return (
    <Layout>
     {/* header */}
<div className={styles.paymentHeader}>
  <h5>Checkout ({total} items)</h5>
</div>
<hr />

<section className={styles.payment}>

  {/* Address */}
  <div className={styles.section}>
    <h3>Delivery Address</h3>
    <div className={`${styles.sectionContent} ${styles.address}`}>
      <div>{user?.email}</div>
      <div>123 Arat Kilo</div>
      <div>Addis Abeba</div>
    </div>
  </div>

  <hr />

  {/* Review items */}
  <div className={styles.section}>
    <h3>Review items and delivery</h3>
    <div className={`${styles.sectionContent} ${styles.items}`}>
      {basket.map((item, i) => (
        <ProductCard product={item} key={i} rendAdd={false} />
      ))}
    </div>
  </div>

  <hr />

  {/* Payment */}
  <div className={styles.section}>
    <h3>Payment Method</h3>
    <div className={styles.sectionContent}>
      <form onSubmit={handlePayment} className={styles.paymentForm}>

        {cardError && <small className={styles.error}>{cardError}</small>}

        <div className={styles.cardBox}>
          <CardElement onChange={handleChange} />
        </div>

        <div className={styles.priceRow}>
          <span>Order Total:</span>
          <CurrencyFormat amount={totalPrice} />
        </div>

        <button disabled={processing} className={styles.payBtn}>
          {processing ? <ClipLoader size={18} /> : 'Pay now'}
        </button>

      </form>
    </div>
  </div>

</section>

    </Layout>
  )
}

export default Payment
