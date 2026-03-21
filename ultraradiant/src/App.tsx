import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import VodReview from './pages/VodReview'
import Tips from './pages/Tips'
import TierList from './pages/TierList'
import Stream from './pages/Stream'
import Media from './pages/Media'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-val-dark flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vod-review" element={<VodReview />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/tier-list" element={<TierList />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
