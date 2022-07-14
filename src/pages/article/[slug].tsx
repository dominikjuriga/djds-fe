import React from 'react'
import Moment from "react-moment";
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from '../../lib/api';
import { getStrapiMedia, getStrapiMediaProfilePicture } from '../../lib/media';
import s from "../../styles/Article.module.css"
import Image from "next/image"
import Seo from '../../components/Seo';
import Animated from "../../components/Animated"

interface Props {
  article: {
    id: number,
    attributes: {
      content: string,
      summary: string,
      description: string,
      category: {
        data: {
          attributes: {
            name: string,
            slug: string
          }
        }
      }
      slug: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      author: {
        data: {
          id: number,
          attributes: {
            name: string,
            picture: {
              data: {
                attributes: {
                  alternativeText: string,
                  formats: {
                    small: {
                      url: string,
                      width: number,
                      height: number
                    }
                  }
                }
              }
            }
          }
        }
      },
      image: {
        data: {
          attributes: {
            url: string,
            alternativeText: string,
            width: number,
            height: number
          }
        }
      }
    }
  },
  categories: {
    attributes: {
      name: string,
      slug: string
    }
  }[]
}

const Article = ({ article, categories }: Props) => {
  console.log(article)
  const imageUrl = getStrapiMedia(article.attributes.image)
  return (
    <>
      <Seo seo={{ siteName: article.attributes.title }} />
      <section className='container'>
        <Animated>
          <Image src={imageUrl} height={article.attributes.image.data.attributes.height} width={article.attributes.image.data.attributes.width}></Image>
        </Animated>
        <Animated animationDelay={.25}>
          <h1>
            {article.attributes.title}
          </h1>
          <p>#{article.attributes.category.data.attributes.name}</p>
          <div className={`${s.articleMeta}`}>

            <div>
              <p>
                {article.attributes.author.data.attributes.name}
              </p>
              <p>
                <Moment format="DD.MM.YYYY">
                  {article.attributes.publishedAt}
                </Moment>
              </p>
            </div>
            <div>
              {article.attributes.author.data.attributes.picture && (
                <Image
                  src={getStrapiMediaProfilePicture(
                    article.attributes.author.data.attributes.picture.data.attributes.formats.small

                  )}
                  alt={
                    article.attributes.author.data.attributes.picture.data
                      .attributes.alternativeText
                  }
                  height="64px"
                  width="64px"

                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                />
              )}
            </div>
          </div>
          <hr />
        </Animated>
      </section>
      <Animated animationDelay={0.5}>
        <section className="container">
          <ReactMarkdown>
            {article.attributes.summary}
          </ReactMarkdown>
        </section>
      </Animated>
      <Animated animationDelay={0.75}>
        <section className='container'>
          <ReactMarkdown>
            {article.attributes.content}
          </ReactMarkdown>
        </section>
      </Animated>
    </>
  )
}

interface Article {
  attributes: {
    slug: string
  }
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article: Article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

interface Params {
  slug: string
}

export async function getStaticProps(params: Params) {
  const articleRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: {
      article: articleRes.data[0],
      categories: categoriesRes,
    },
    revalidate: 1,
  }
}

export default Article