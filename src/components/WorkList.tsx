import React from 'react'
import s from "../styles/Home.module.css"
import Link from "next/link"
import WorkListCard from './WorkListCard'

const WorkList = () => {
  return (
    <ul className={s.work_list}>
      {workList.map((work) => (
        <WorkListCard work={work} key={work.slug} />
      ))}

      <li className={s.spanTwo}>
        <div className="center">
          <div className={s.workItem}>
            <h3>{t.youCouldBeHere}</h3>
            <span></span>
          </div>
        </div>
        <div className="center">
          <Link href="/contact">
            <a className="cta">
              {t.cta}
            </a>
          </Link>
        </div>
      </li>
    </ul>
  )
}

const t = {
  cta: "Kontaktujte nás",
  youCouldBeHere: "Tu môže byť aj váš projekt."
}

const workList = [

  {
    title: "E-Learning",
    duration: "2021 - 2022",
    description: "Online vzdelávacia platforma pre súkromné školy. Umožňuje organizáciu tried, livestreaming a chat.",
    slug: "elearning"
  },
  {
    title: "Slovak Retriever Klub",
    duration: "2021 - 2022",
    description: "Webová stránka a administračný panel pre správu slovenského klubu retrieverov.",
    slug: "srk"
  },
  {
    title: "Var Astro",
    duration: "2021 - 2022",
    description: "Systém pre správu a publikáciu pozorovaní hviezdnych objektov. Cieľom je zjednodušenie práce členov Sekcie premenných hviezd a exoplanét.",
    slug: "varastro"
  }
]

export default WorkList