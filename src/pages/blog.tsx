import React from 'react'
import { fetchAPI } from '../lib/api'
import ArticleList from "../components/ArticleList"
import { useEffect } from 'react'
import { toast } from "react-toastify"
import Seo from '../components/Seo'
import Animated from "../components/Animated"

const Blog = ({ articles, loadFailed }: Props) => {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_STRAPI_API_URL)
    // this runs twice in development mode
    // https://flaviocopes.com/react-useeffect-two-times/
    if (loadFailed) {
      toast.error("Nepodarilo sa načítať články. Skúste to prosím neskôr.")
    }
    return () => { }
  }, [loadFailed])

  return (
    <>
      <Seo seo={{ siteName: "Blog" }} />
      <section className='container'>
        <Animated>
          <h2>Blog</h2>
        </Animated>
        <ArticleList articles={articles} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  try {
    const [articlesRes] = await Promise.all([
      fetchAPI("/articles", {
        populate: ["image", "category"]
      })
    ])
    return {
      props: {
        articles: articlesRes.data,
        loadFailed: false
      },
      revalidate: 10
    }
  }
  catch (e) {
    return {
      props: {
        articles: [],
        loadFailed: true
      }
    }
  }
}

interface Props {
  articles: {
    id: number,
    attributes: {
      content: string,
      description: string,
      category: {
        data: {
          attributes: {
            name: string,
            slug: string,
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
  }[],
  loadFailed: boolean
}

export default Blog