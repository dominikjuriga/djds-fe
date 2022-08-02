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
          <h2>{t.page_title}</h2>
        </Animated>
        <Animated animationDelay={.25}>
          <ul className={s.list}>
            <li>{t.name_desc}
              <ul><li>{t.name_content}</li></ul>
            </li>
            <li> {t.ico_desc}
              <ul><li>{t.ico_content}</li></ul>
            </li>
            <li><a href={t.phone_href}>{t.phone_content}</a></li>
            <li><a href={t.main_href}>{t.mail_content}</a></li>
          </ul>
        </Animated>
      </section>
    </>
  )
}

const t = {
  page_title: "Kontakt",
  name_desc: "Obchodné meno",
  name_content: "Dominik Juriga - Digital Solutions",
  ico_desc: "IČO",
  ico_content: "53943805",
  phone_content: "+421 949 891 198",
  phone_href: "tel:+421949891198",
  mail_content: "jurigadominik@gmail.com",
  main_href: "mailto:jurigadominik@gmail.com"
}

export default Contact