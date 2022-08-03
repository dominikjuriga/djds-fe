import React from 'react'
import fs from 'fs';
import matter from 'gray-matter';
import ArticleList from "../components/ArticleList"
import Animated from '../components/Animated';
import Seo from '../components/Seo';
const blog = ({ posts }: Props) => {
  return (
    <>
      <Seo seo={{ siteName: "Blog" }}></Seo>
      <section className="container">
        <Animated>
          <h1>Blog</h1>
        </Animated>
        <ArticleList articles={posts} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync("articles", { withFileTypes: true })
  const posts = files
    .filter(dirent => dirent.isFile())
    .map((dirent) => {
      const readFile = fs.readFileSync(`articles/${dirent.name}`, "utf-8");
      const { data: frontmatter } = matter(readFile);

      return { slug: dirent.name.replace(".md", ""), frontmatter }
    })

  return {
    props: {
      posts
    }
  }
}

interface Props {
  posts: {
    slug: string,
    frontmatter: {
      date: string,
      title: string,
      author: string,
      socialImage: string
    }
  }[]
}

export default blog