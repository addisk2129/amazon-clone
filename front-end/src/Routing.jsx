import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Carts/Cart'
import Auth from './Pages/Auth/Auth'
import Result from './Pages/Result/Result'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51RJwDvIynJZKopozRaOtSIIPplzjKCntQyqnx5HjqxTxtXRzeu7kCwtSM1tZTbAJoQEJHMd4Kj4iz9ksKo33vc2t00ghLoeXgF');





function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>}/>

        
        
        <Route
          path='/payments'
          element={
            <ProtectedRoute msg={"you must login to pay"} 
                            redirect={"/payments"}>
                <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
            </ProtectedRoute>
          
          }
        />
        
        <Route path='/orders' element={
                  <ProtectedRoute msg={"you must login to see your order"}  redirect={"/orders"}>
                     <Orders/>
                  </ProtectedRoute>
          }/>


        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryname' element={<Result/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
      </Routes>
    </Router>
  )
}

export default Routing
