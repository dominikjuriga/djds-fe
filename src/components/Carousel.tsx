import React, { useRef } from 'react'
import s from "../styles/Carousel.module.css"
import Link from "next/link"
import useDraggableScroll from "use-draggable-scroll"

const Carousel = ({ items }: Props) => {
  const ref = useRef(null)
  const { onMouseDown } = useDraggableScroll(ref)
  return (
    <div className={`${s.mediaScroller} ${s.snapsInline}`} ref={ref} onMouseDown={onMouseDown}>
      {items.map((item, index) => (
        <div className={s.mediaElement} key={index}>
          <span className={s.tag}>{index + 1}</span>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
      <div className={s.mediaElement}>
        <span className={s.tag}>&infin;</span>
        <h4>{t.card_title}</h4>
        <p>{t.card_para}</p>
        <Link href="/contact">
          <a className="cta">
            {t.cta}
          </a>
        </Link>
      </div>
    </div>
  )
}

interface Props {
  items: {
    title: string,
    description: string
  }[]
}

const t = {
  card_title: "Naša práca nekončí.",
  card_para: "Projekty udržiavame pri živote, takže sa nemusíte báť, že Vás zaskočia nečakané chyby alebo aktualizácie.",
  cta: "Chcem konzultáciu"
}

export default Carousel