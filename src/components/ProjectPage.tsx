import React from 'react'
import Seo from "./Seo"
import EmblaCarousel from "./EmblaCarousel"
import ReactMarkdown from "react-markdown"
import s from "../styles/ProjectPage.module.css"
import UnderlineLink from './UnderlineLink'

const ProjectPage = ({ project }: IProject) => {
  return (
    <>
      <Seo seo={{ siteName: project.attributes.title }}></Seo>

      <section className="container">
        <h1>{project.attributes.title}</h1>
        {project.images && project.images && (
          <EmblaCarousel slides={Array.from(Array(project.images?.length).keys())} media={project.images} projectName={project.attributes.title} />
        )}
        <article>
          <ReactMarkdown>
            {project.attributes.content}
          </ReactMarkdown>
        </article>
      </section>
      <section className={`full-container ${s.interested}`}>
        <article>
          <h2>{t.interested}</h2>
          <ul className={s.list}>
            {t.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <UnderlineLink href={`/#cooperation`} variant="light">
            <a className={`smooth-link`}>{t.cta}</a>
          </UnderlineLink>
        </article>
      </section>
    </>
  )
}

const t = {
  interested: "Máte projekt alebo nápad? Vieme Vám pomôcť.",
  services: [
    "Tvoríme webové stránky na mieru",
    "Zaistíme Vašu obsahovú stratégiu",
    "Vytvoríme vám fotografie",
    "Postaráme sa o Vašu digitálnu identitu"
  ],
  cta: "Ako prebieha spolupráca?"
}

interface IProject {
  project: {
    id: number,
    attributes: {
      title: string,
      slug: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string
    },
    images?: string[]
  }
}

export default ProjectPage