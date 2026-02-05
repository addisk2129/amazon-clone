import React from 'react'
import Layout from '../../Component/Layout/Layout'
import Category from '../../Component/Category/Category'
import Product from '../../Component/Product/Product'
import SwiperEffect from '../../Component/Swiper/SwiperEffect'

function Landing() {
  return (
    <Layout>
           <SwiperEffect/>
           <Category/>
           <Product/>
    </Layout>
  )
}

export default Landing
