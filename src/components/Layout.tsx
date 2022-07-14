import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from "./Header"
import Main from "./Main"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='app'>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout