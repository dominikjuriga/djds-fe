import React, { ReactNode } from 'react'

const Main = ({ children }: Props) => {
  return (
    <main className='main'>
      {children}
    </main>
  )
}

interface Props {
  children: ReactNode
}

export default Main