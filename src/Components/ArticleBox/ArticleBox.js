import React from 'react'
import './ArticleBox.css'

export const ArticleBox = ({img , title , desc , link}) => {
  return (
    <div class="col-4">
              <div class="article-card">
                <div class="article-card__header">
                  <a href={link} class="article-card__link-img">
                    <img src={img} class="article-card__img" alt="Article Cover" />
                  </a>
                </div>
                <div class="article-card__content">
                  <a href={link} class="article-card__link">
                    {title}
                  </a>
                  <p class="article-card__text">
                    {desc}
                  </p>
                  <a href={link} class="article-card__btn">بیشتر بخوانید</a>
                </div>
              </div>
            </div>
  )
}
