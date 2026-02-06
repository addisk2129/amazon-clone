import React from 'react'
import Header from '../Header'
import LowerHeader from '../LowerHeader'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <>
      <Header/>
      <LowerHeader/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
