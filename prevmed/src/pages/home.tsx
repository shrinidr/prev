import React, { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ARTICLES } from '../data/articles'
import StoryCard from '../components/storycard'

const Home: React.FC = () => {
  const [params] = useSearchParams()
  const category = params.get('category') ?? 'All'
  const q = (params.get('q') ?? '').toLowerCase().trim()

  const filtered = useMemo(() => {
    return ARTICLES
      .filter(a => category === 'All' ? true : a.category === category)
      .filter(a => q ? a.title.toLowerCase().includes(q) : true)
      .sort((a,b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
  }, [category, q])

  const recent = filtered.slice(0, 9)

  return (
    <>
      <section className="hero section">
        <div className="container">
          <h1 className="h1">Preventive medicine, explained plainly.</h1>
          <p className="p-lead">
            Concise, no‑nonsense guidance that helps you avoid problems before they start.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Recent stories</div>
          <div className="grid" style={{marginTop:12}}>
            {recent.map(a => (
              <div key={a.slug} className="col-4">
                <StoryCard article={a}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">What we do</div>
          <h2 style={{margin:'8px 0 12px'}}>Focused on prevention, not hype</h2>
          <p className="p-lead">
            We summarize actionable habits, early warning signs, and risk-cutting tactics for common
            mental and physical conditions.
          </p>
          <p style={{marginTop:12}}>
            Browse by category in the header. Each article is short, structured, and practical.
          </p>
          <p style={{marginTop:16}}>
            <Link className="button" to="/">Start reading</Link>
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
