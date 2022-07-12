import React from 'react'
import Header from './Header'
import Meta from './Meta'

const Layout = ({ children, title, keywords, desc, className }) => {
  return (
    <>
    <Meta title={title} keywords={keywords} desc={desc} />
    <Header />
    <main className={`max-w-6xl mx-auto text-xs md:text-base relative px-5 ${className}`}>{children}</main>
    </>
  )
}

export default Layout