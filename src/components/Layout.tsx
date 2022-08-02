import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from "./Header"
import Main from "./Main"

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

interface Props {
  children: ReactNode
}

export default Layout