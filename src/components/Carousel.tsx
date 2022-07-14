import React from 'react'
import s from "../styles/Carousel.module.css"
import Link from "next/link"

interface Props {
  items: {
    title: string,
    description: string
  }[]
}

const Carousel = ({ items }: Props) => {
  return (
    <div className={`${s.mediaScroller} ${s.snapsInline}`}>
      {items.map((item, index) => (
        <div className={s.mediaElement} key={index}>
          <span className={s.tag}>{index + 1}</span>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
      <div className={s.mediaElement}>
        <span className={s.tag}>&infin;</span>
        <h4>Naša práca nekončí.</h4>
        <p>Projekty udržiavame pri živote, takže sa nemusíte báť, že Vás zaskočia nečakané chyby alebo aktualizácie.</p>
        <Link href="/contact">
          <a className="cta">
            Chcem konzultáciu
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Carousel