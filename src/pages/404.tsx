import React from 'react'
import Link from "next/link"

const Error404 = () => {
  return (
    <>
      <section className="container">
        <p>❌</p>
        <h1>Táto stránka neexistuje. Skús to niekde inde?</h1>
        <Link href="/">Domov</Link>
      </section>
    </>
  )
}

export default Error404