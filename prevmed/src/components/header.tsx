import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { CATEGORIES } from '../data/articles'
import type { Category } from '../types'
import '../style/header.css'

export default function Header(){
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const category = (params.get('category') as Category) || 'Diseases'
  const q = params.get('q') || ''

  const setParam = (key: string, value?: string) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'Search by disease category') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace:true })
    navigate({ pathname: '/', search: next.toString() })
  }

  return (
    <header>
      <div className="container header">
        <Link to="/" className="brand">Preventive Health</Link>
        <nav className="nav">
          <select
            className="select"
            value={category}
            onChange={e => setParam('category', (e.target as HTMLSelectElement).value)}
            aria-label="Filter by category"
          >
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input
            className="search"
            type="search"
            placeholder="Search titles…"
            value={q}
            onChange={e => setParam('q', (e.target as HTMLInputElement).value)}
          />
        </nav>
      </div>
    </header>
  )
}