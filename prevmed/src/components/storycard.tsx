import React from 'react'
import { Link } from 'react-router-dom'
import type { Article } from '../types'
import '../style/story.css'

const StoryCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <article className="card" aria-labelledby={`title-${article.slug}`}>
      {article.hero && 
      <div className="card-image">
        <img src={article.hero} alt="Image not found" />
      </div>}
      <div className="card-body">
        <span className="badge">{article.category}</span>
        <h3 className="card-title" id={`title-${article.slug}`}>
          <Link to={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="card-desc">{article.excerpt}</p>
        <div className="meta">
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span> · <span>{article.readingMinutes} min read</span>
        </div>
      </div>
    </article>
  )
}

export default StoryCard
