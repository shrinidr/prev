import React, {useMemo} from 'react'
import { useParams, Link } from 'react-router-dom'
import { ARTICLES } from '../data/articles'
import ArticleMd from '../components/articledata'

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = useMemo(() => ARTICLES.find(a => a.slug === slug), [slug])

  if (!article) {
    return (
      <div className="container section">
        <p>Article not found.</p>
        <Link to="/" className="button ghost">Back</Link>
      </div>
    )
  }

  return (
    <>
      <section className="section alt">
        <div className="container">
          <div className="kicker">{article.category}</div>
          <h1 className="h1" style={{marginTop:8}}>{article.title}</h1>
          <div className="meta" style={{color:'black'}}>{new Date(article.publishedAt).toLocaleDateString()} · {article.readingMinutes} min read</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/*{article.hero && <img src={article.hero} alt="" style={{border:'1px solid var(--border)', borderRadius:4, marginBottom:16}}/>}
          {article.sections.slice(0, visibleSections).map((s, idx) => (
            <div key={idx} style={{margin:'16px 0'}}>
              <h3 style={{margin:'0 0 4px'}}>{s.h}</h3>
              <p style={{margin:0}}>{s.p}</p>
            </div>
          ))}*/}

          {slug && <div className="markdown"> <ArticleMd slug={slug}/> </div>}
          <div style={{marginTop:24}}>
            <Link to="/" className="button ghost">Back</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Article
