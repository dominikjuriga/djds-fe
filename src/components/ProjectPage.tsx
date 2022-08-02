import React from 'react'
import Seo from "./Seo"
import EmblaCarousel from "./EmblaCarousel"
import ReactMarkdown from "react-markdown"

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
    </>
  )
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