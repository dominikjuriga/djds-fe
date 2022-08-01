import React from 'react'
import s from "../styles/SimpleCarousel.module.css"

import useEmblaCarousel from "embla-carousel-react"

interface IProps {
  children: React.ReactNode
}

const SimpleCarousel = ({ children }: IProps) => {
  const [emblaRef] = useEmblaCarousel()
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  )
}

export default SimpleCarousel