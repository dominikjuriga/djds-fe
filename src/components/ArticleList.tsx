import React from "react";
import Card from "./Card";
import s from "../styles/ArticleList.module.css"
import Animated from "../components/Animated"

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
  }[]
}

const Articles = ({ articles }: Props) => {

  return (
    <div>
      <div className={s.articleList}>
        {articles.length === 0 && (
          <Animated animationDelay={0.5}>
            🔎 Aj napriek snahe sa nám nepodarilo nájsť žiadne články. Určite na nich ale pilno pracujú!
          </Animated>
        )}
        {articles.map((article, i: number) => {
          return (
            <Animated animationDelay={i * .1} key={article.attributes.slug}>
              <Card
                article={article}
                key={`article__${article.attributes.slug}`}
              />
            </Animated>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;