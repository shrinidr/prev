import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Article from './pages/article'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="*" element={<div className="container section">Not found.</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}