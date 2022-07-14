import React from 'react'
import s from "../styles/Tooltip.module.css"

interface Props {
  children: React.ReactNode,
  title: string
}

const Tooltip = ({ children, title }: Props) => {
  return (
    <span
      data-text={title}
      className={s.tooltip}
    >{children}</span>
  )
}

export default Tooltip