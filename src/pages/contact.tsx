import React from 'react'
import s from "../styles/Contact.module.css"
import Seo from '../components/Seo'
import Animated from '../components/Animated'

const Contact = () => {
  return (
    <>
      <Seo seo={{ siteName: "Kontakt" }} />
      <section className="container">
        <Animated>
          <h2>Kontakt</h2>
        </Animated>
        <Animated animationDelay={.25}>
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
        </Animated>
      </section>
    </>

  )
}

export default Contact