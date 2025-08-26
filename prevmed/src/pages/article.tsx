import React, {useMemo} from 'react'
import { useParams, Link } from 'react-router-dom'
import { ARTICLES } from '../data/articles'
import ArticleMd from '../components/articledata'
import { useSearchParams } from 'react-router-dom'
import StoryCard from '../components/storycard'

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = useMemo(() => ARTICLES.find(a => a.slug === slug), [slug])

  const [params] = useSearchParams()
  const category = params.get('category') ?? 'All'
  const q = (params.get('q') ?? '').toLowerCase().trim()

  
  const slugToCat: Record<string, string> = {"mental": 'Mental & Neurological Disorders',
    "digest": "Digestive & Gastrointestinal Disorders",
    "renal":'Renal Diseases',
    "metabol": 'Metabolic & Lifestyle Disorders',
    "vision": 'Vision',
    "dental" : 'Dental & Oral Health',
    "gen": 'General',
    "resp": "Respiratory Disorders",
    "cardio": "Cardiovascular Disorders"}

  const filtered = useMemo(() => {
    return ARTICLES
      .filter(a => category === 'All' ? true : a.category === category)
      .filter(a => q ? a.title.toLowerCase().includes(q) : true)
      .sort((a,b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
  }, [category, q])


  let recent = filtered.slice(0, 9)
  console.log("recent", recent)
  
  const key = slug?.split('-')[0] 
  if (key)
  {
    const anna = slugToCat[key]
    recent = recent.filter(item => item["category"] === anna)
            .filter(item => item["slug"] != slug)
  }

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
          {slug && <div className="markdown"> <ArticleMd slug={slug}/> </div>}
          <div style={{paddingTop:24, paddingBottom:34}}>
            <Link to="/" className="button ghost">Back</Link>
          </div>
        {recent.length!=0?<p style={{fontSize:27}}> <b>People also read</b></p>:<div/>}
        <div className="container">
          <div className="grid" style={{marginTop:12}}>
            {recent.map(a => (
              <div key={a.slug} className="col-4">
                <StoryCard article={a}/>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Article
