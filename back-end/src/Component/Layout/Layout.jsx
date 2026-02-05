import React from 'react'
import Header from '../Header'
import LowerHeader from '../LowerHeader'

function Layout({children}) {
  return (
    <>
      <Header/>
      <LowerHeader/>
      {children}
    </>
  )
}

export default Layout
