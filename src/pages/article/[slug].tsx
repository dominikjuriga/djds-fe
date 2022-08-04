import React from 'react'
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from 'react-markdown';
import s from "../../styles/Article.module.css"
import Seo from '../../components/Seo';
const slug = ({ frontmatter, content }: Props) => {
  return (
    <>
      <Seo seo={{ siteName: frontmatter.title }}></Seo>
      <article className={s.article}>
        <div className={s.articleImage}>
          <img src={frontmatter.socialImage} alt={`Obrázok článku ${frontmatter.title}`} />
        </div>
        <section className="container">
          <div className={s.meta}>
            <h4>
              {frontmatter.author}
            </h4>
            <img src={frontmatter.authorImage} alt={frontmatter.author} />
          </div>
          <div className={s.content}>
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </div>
        </section>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const dirents = fs.readdirSync('articles', { withFileTypes: true });
  const paths = dirents
    .filter(dirent => dirent.isFile())
    .map((dirent) => ({
      params: {
        slug: dirent.name.replace(".md", "")
      }
    }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }: Params) {
  const filename = fs.readFileSync(`articles/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(filename);
  return {
    props: {
      frontmatter,
      content
    }
  }
}

interface Props {
  frontmatter: {
    author: string,
    authorImage: string,
    title: string,
    socialImage: string
  },
  content: string
}

interface Params {
  params: {
    slug: string
  }
}

export default slug