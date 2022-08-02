import React from 'react'
import s from "../styles/Tooltip.module.css"

const Tooltip = ({ children, title }: Props) => {
  return (
    <span
      data-text={title}
      className={s.tooltip}
    >{children}</span>
  )
}

interface Props {
  children: React.ReactNode,
  title: string
}

export default Tooltip