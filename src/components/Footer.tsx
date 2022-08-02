import s from "../styles/Footer.module.css"

const Footer = () => {
  return (

    <footer className={s.footer}>
      <section>
        <h3>&copy; DJDS</h3>
      </section>
      <section>
        S 💗 navrhli a nakódili <a href="https://djds.sk"> DJDS.sk</a>
      </section>
    </footer>

  )
}

export default Footer