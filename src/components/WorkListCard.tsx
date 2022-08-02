import React from 'react'
import s from "../styles/Home.module.css"
import UnderlineLink from './UnderlineLink'

const WorkListCard = ({ work }: IProps) => {
  return (
    <li key={work.title} >
      <div className={s.workItem}>
        <h4>{work.title}</h4>
        <span>{work.duration}</span>
      </div>
      <p className='justify'>{work.description}</p>

      <UnderlineLink href={`/projects/${work.slug}`}>
        {t.moreDetails}
      </UnderlineLink>
    </li>
  )
}

const t = {
  moreDetails: "Viac detailov"
}

interface IProps {
  work: {
    title: string,
    slug: string,
    duration: string,
    description: string
  }
}

export default WorkListCard