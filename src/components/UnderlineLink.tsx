import React from 'react'
import Link from "next/link"
import s from "../styles/UnderlineLink.module.css"

const UnderlineLink = ({ children, href, variant = "", isNav = false }: IProps) => {
  return (
    <Link href={href}  >
      <a className={`${variant === "light" ? s.ctaLight : ""} ${s.underline} ${isNav === true ? s.underline_nav : ""}`}>
        <span>{children}</span><svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
      </a>
    </Link>
  )
}

interface IProps {
  isNav?: boolean,
  href: string,
  variant?: string,
  children: React.ReactNode
}

export default UnderlineLink