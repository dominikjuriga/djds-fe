import React from "react";
import Card from "./Card";
import s from "../styles/ArticleList.module.css"
import Animated from "../components/Animated"

const Articles = ({ articles }: Props) => {
  return (
    <div>
      <div className={s.articleList}>
        {articles.length === 0 && (
          <Animated animationDelay={0.5}>
            <p>{t.not_found}</p>
          </Animated>
        )}
        {articles.map((article, i: number) => {
          return (
            <Animated animationDelay={0.5 + i * .1} key={article.slug}>
              <Card
                article={article}
                key={`article__${article.slug}`}
              />
            </Animated>
          );
        })}
      </div>
    </div>
  );
};

interface Props {
  articles: {
    slug: string,
    frontmatter: {
      date: string,
      title: string,
      author: string,
      socialImage: string
    }
  }[]
}

const t = {
  not_found: "🔎 Aj napriek snahe sa nám nepodarilo nájsť žiadne články. Určite na nich ale pilno pracujú!"
}

export default Articles;