import React, { useContext, useEffect, useState } from "react";
import { db } from "../../Utility/Firebase";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";
import styles from "./Orders.module.css"; // ✅ Fixed typo
import Layout from "../../Component/Layout/Layout";
import { DataContext } from "../../DataProvider/DataProvider.jsx";
import { Type } from '../../Utility/Type';
import ProductCard from '../../Component/Product/ProductCard';

function Order() {
  
  const [state, dispatch] = useContext(DataContext);
  const { user } = state;
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (user?.uid) {
      setLoading(true);
      
      // Reference: users/{uid}/orders
      const ordersRef = collection(db, "users", user.uid, "orders");

      // Create query with ordering
      const q = query(ordersRef, orderBy("created", "desc"));

      // Real-time listener
      const unsubscribe = onSnapshot(
        q, 
        (snapshot) => {
          const ordersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setOrders(ordersData);
         
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching orders:", error);
          setLoading(false);
        }
      );

      // Cleanup on unmount
      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []); 


  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.order_container}> 
          <h1>Your Orders List</h1>
          
          {loading ? (
            <p>Loading orders...</p>
          ) : orders?.length === 0 ? (
            <p>Oops! You don't have any orders yet</p>
          ) : (
            <div className={styles.orders_list}>
              {orders.map((order) => (
                <div key={order.id} className={styles.order_item}> 
                  <div className={styles.order_header}>
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Date:</strong> {new Date(order.data.created?.seconds * 1000).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> ${(order.data.amount / 100).toFixed(2)}</p>
                  </div>
                  <hr />
                  <div className={styles.order_products}>
                    {order?.data?.basket?.map((orderItem) => (
                      <ProductCard 
                        product={orderItem} 
                        renderAdd={false} 
                        key={orderItem.id} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Order;