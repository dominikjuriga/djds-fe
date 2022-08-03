import React from "react";
import Link from "next/link";
import Image from "next/image"
import s from "../styles/Card.module.css"

const Card = ({ article }: Props) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <a className={s.card}>
        <div className={s.cardTop}>
          <Image src={article.frontmatter.socialImage} layout="fill" alt={`Obrázok článku ${article.frontmatter.title}`} />
        </div>
        <div className={s.cardBottom}>
          <h2>{article.frontmatter.title}</h2>
          <p>{article.frontmatter.author}</p>
        </div>
      </a>
    </Link>
  );
};

interface Props {
  article: {
    slug: string,
    frontmatter: {
      date: string,
      title: string,
      socialImage: string,
      author: string
    }
  }
}

export default Card;