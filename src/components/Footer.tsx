import s from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <section>
        <h3>&copy; {t.copy}</h3>
      </section>
      <section>
        {t.foot.content} <a href={t.foot.href}>{t.foot.href_title}</a>
      </section>
    </footer>
  )
}

const t = {
  copy: "DJDS",
  foot: {
    href: "https://djds.sk",
    href_title: "DJDS.sk",
    content: "S 💗 navrhli a nakódili ",
  }
}

export default Footer