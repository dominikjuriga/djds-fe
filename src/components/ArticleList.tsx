import React from "react";
import Card from "./Card";
import s from "../styles/ArticleList.module.css"

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
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className={s.articleList}>
        {articles.length === 0 && (
          <p>
            🔎 Aj napriek snahe sa nám nepodarilo nájsť žiadne články. Určite na nich ale pilno pracujú!
          </p>
        )}
        {leftArticles.map((article, i: number) => {
          return (
            <Card
              article={article}
              key={`article__left__${article.attributes.slug}`}
            />
          );
        })}

        {rightArticles.map((article, i: number) => {
          return (
            <Card
              article={article}
              key={`article__right__${article.attributes.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;