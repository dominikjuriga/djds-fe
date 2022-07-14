import React from 'react'
import s from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <>
      <section className="container">
        <h2>Kontakt</h2>
        <ul className={s.list}>
          <li>Obchodné meno
            <ul><li>Dominik Juriga - Digital Solutions</li></ul>
          </li>
          <li>IČO
            <ul><li>53943805</li></ul>
          </li>
          <li><a href="tel:+421949891198">+421 949 891 198</a></li>
          <li><a href="mailto:jurigadominik@gmail.com">jurigadominik@gmail.com</a></li>
        </ul>
      </section>
    </>

  )
}

export default Contact