import s from "../styles/Header.module.css"
import Link from "next/link"
import Image from "next/image"
import Hamburger from "./Hamburger"
import { useAppContext } from "../context/AppContext"
import { motion } from "framer-motion"
import UnderlineLink from "./UnderlineLink"

const navigation = [
  { name: 'Domov', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakt', href: '/contact' },
  { name: "Projekty", href: "/projects" }
]

export default function Header() {
  const { navOpen, closeNav } = useAppContext();
  return (
    <>
      {/* <motion.header
        // className={s.navbar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      > */}
      <header className={s.navbar}>
        <div className={s.brand}>
          <Link href="/">
            <a className={s.logoSmall}>
              <Image alt="DJDS logo" src={"/images/djds-logo.png"} width="64px" height="64px" />
            </a>
          </Link>
          <Link href="/">
            <a className={s.logoBig} >
              <Image alt="DJDS Logo s textom DJDS" src={"/images/djds-text.svg"} width="215px" height="64px" />
            </a>
          </Link>
        </div>
        <ul className={` ${s.largeNav} onlyXL`}>
          {navigation.map((navItem) => (
            <UnderlineLink key={navItem.href} href={navItem.href} isNav={true}>{navItem.name}</UnderlineLink>
          ))}
        </ul>
        <Hamburger />
      </header>
      {/* </motion.header> */}
      <ul className={`${s.navmenu} ${navOpen ? s.active : ""}`}>
        {navigation.map((navItem) => (
          <li key={navItem.href} onClick={closeNav}>
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
