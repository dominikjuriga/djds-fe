import React from "react";
import Link from "next/link";
import Moment from "react-moment"
import NextImage from "./Image";
import s from "../styles/Card.module.css"

const Card = ({ article }: Props) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className={s.link}>
        <div className={s.top}>
          <NextImage image={article.attributes.image} />
        </div>
        <div className={s.bottom}>
          <p className={s.cardTitle}>
            {article.attributes.title}
          </p>
          <div className="flex">
            <p className={s.cardCategory}>
              {article.attributes.category.data.attributes.name}
            </p>
            <p>
              <Moment format="DD.MM.YYYY">
                {article.attributes.publishedAt}
              </Moment>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

interface Props {
  article: {
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
            alternativeText: string
            width: number,
            height: number
          }
        }
      }
    }
  }
}

export default Card;