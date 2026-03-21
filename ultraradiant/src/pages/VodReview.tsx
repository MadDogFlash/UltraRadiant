import { useState } from 'react'
import { HiPlay, HiFilter } from 'react-icons/hi'
import SEOHead from '../components/SEOHead'

type Category = 'All' | 'Positioning' | 'Economy' | 'Agent Mechanics' | 'Team Comps' | 'Mental'

const categories: Category[] = ['All', 'Positioning', 'Economy', 'Agent Mechanics', 'Team Comps', 'Mental']

interface Vod {
  id: string
  title: string
  description: string
  date: string
  duration: string
  rank: string
  map: string
  agent: string
  categories: Omit<Category, 'All'>[]
  youtubeId?: string // Add real YouTube video ID here
  thumbnail?: string
}

const vods: Vod[] = [
  {
    id: '1',
    title: 'Why You Keep Losing on Ascent — Positioning Errors Fixed',
    description: 'I broke down 3 separate Plat ranked games on Ascent where poor mid-control and A-main crossfire setups were giving away rounds for free. Every mistake timestamped.',
    date: 'March 18, 2025',
    duration: '24:12',
    rank: 'Platinum 2',
    map: 'Ascent',
    agent: 'Neon',
    categories: ['Positioning'],
    youtubeId: 'REPLACE_WITH_VIDEO_ID',
  },
  {
    id: '2',
    title: '5 Crosshair Placement Mistakes That Tank Your ACS',
    description: "Head-level crosshair placement sounds obvious but barely anyone actually does it consistently. Here's a VOD review proving exactly how much free damage you're leaving on the table.",
    date: 'March 14, 2025',
    duration: '18:45',
    rank: 'Platinum 1',
    map: 'Haven',
    agent: 'Jett',
    categories: ['Positioning', 'Agent Mechanics'],
    youtubeId: 'REPLACE_WITH_VIDEO_ID',
  },
  {
    id: '3',
    title: 'When to Force Buy and When to Save — Economy Guide',
    description: 'Economy is the #1 thing low elo players get wrong consistently. This VOD shows 5 rounds where correct economy decisions swung the score from 4-8 to 13-11.',
    date: 'March 10, 2025',
    duration: '20:30',
    rank: 'Gold 3',
    map: 'Split',
    agent: 'Omen',
    categories: ['Economy'],
    youtubeId: 'REPLACE_WITH_VIDEO_ID',
  },
  {
    id: '4',
    title: 'How I Fixed My Tilting Problem — The Mental Reset',
    description: "Two consecutive losses and I was running it down. This video is me reviewing my comms, my decision-making when tilted, and what I changed to turn a 3-loss streak into a 5-win streak.",
    date: 'March 5, 2025',
    duration: '16:20',
    rank: 'Gold 2',
    map: 'Bind',
    agent: 'Sage',
    categories: ['Mental'],
    youtubeId: 'REPLACE_WITH_VIDEO_ID',
  },
  {
    id: '5',
    title: 'Viper on Breeze — Site Control and Line-Up Guide',
    description: 'Viper is the most powerful controller on Breeze. This VOD shows every key line-up for A and B site, how to chain smokes efficiently, and how I won 8 pistol+eco rounds.',
    date: 'February 28, 2025',
    duration: '28:55',
    rank: 'Gold 1',
    map: 'Breeze',
    agent: 'Viper',
    categories: ['Agent Mechanics', 'Team Comps'],
    youtubeId: 'REPLACE_WITH_VIDEO_ID',
  },
  {
    id: '6',
    title: 'Sentinel Play in Solo Queue — How to Anchor Correctly',
    description: 'Playing Killjoy and Cypher solo in ranked is different from pro play. This review shows how to set up utility defensively when your team has no game plan.',
    date: 'February 21, 2025',
    duration: '22:08',
    rank: 'Silver 3',
    map: 'Lotus',
    agent: 'Killjoy',
    categories: ['Agent Mechanics', 'Positioning'],
    youtubeId: 'REPLACE_WITH_VIDEO_ID',
  },
]

const vodSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Valorant VOD Reviews — UltraRadiant',
  description: 'Frame-by-frame Valorant ranked game breakdowns with timestamps for every mistake and fix.',
  uploadDate: '2025-03-18',
  thumbnailUrl: 'https://ultraradiant.gg/og-image.jpg',
  author: { '@type': 'Person', name: 'UltraRadiant' },
}

export default function VodReview() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = vods.filter(
    (v) => activeCategory === 'All' || v.categories.includes(activeCategory as Omit<Category, 'All'>)
  )

  return (
    <>
      <SEOHead
        title="VOD Review"
        description="Detailed Valorant VOD reviews with frame-by-frame analysis. Watch ranked game breakdowns covering positioning, economy, agent mechanics, and mental game improvements."
        keywords="valorant vod review, valorant game analysis, valorant ranked review, how to review valorant gameplay, valorant positioning guide, valorant improvement tips"
        canonicalUrl="/vod-review"
        schema={vodSchema}
      />

      <div className="pt-24 pb-20 min-h-screen bg-val-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-val-red text-xs font-bold uppercase tracking-widest mb-3">
              <HiPlay /> VOD Library
            </div>
            <h1 className="val-heading text-4xl sm:text-5xl text-white mb-3">
              VOD <span className="text-val-red">Review</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Every game reviewed is a lesson. These aren't highlights — they're the ugly truths about what's holding back rank progression, with every mistake timestamped and explained.
            </p>
          </div>

          {/* How to Use VODs — SEO content block */}
          <div className="glass p-6 clip-corner mb-10">
            <h2 className="text-white font-bold text-lg mb-3">How to Use These VOD Reviews</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>
                <span className="text-val-red font-bold">1. Pause at mistakes.</span> Every error is timestamped in the description. Don't just watch — actively identify the mistake before the explanation.
              </div>
              <div>
                <span className="text-val-red font-bold">2. Apply one fix per session.</span> Pick one habit to correct per gaming session. Fixing 5 things at once means fixing nothing.
              </div>
              <div>
                <span className="text-val-red font-bold">3. VOD your own games.</span> After watching these, record and review your own games. Self-review is the fastest improvement tool available.
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <HiFilter className="text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wider clip-corner-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-val-red text-white'
                    : 'border border-val-border text-gray-400 hover:border-val-red hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* VOD Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((vod) => (
              <article key={vod.id} className="glass clip-corner flex flex-col group hover:border-val-red/30 transition-all duration-300">
                {/* Thumbnail / Embed */}
                <div className="yt-container bg-val-surface">
                  {vod.youtubeId && vod.youtubeId !== 'REPLACE_WITH_VIDEO_ID' ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${vod.youtubeId}`}
                      title={vod.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-val-surface to-val-dark">
                      <HiPlay className="text-white/20 text-6xl group-hover:text-white/30 transition-all" />
                      <span className="text-gray-600 text-xs mt-2">Video coming soon</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {vod.categories.map((cat) => (
                      <span key={String(cat)} className="text-xs bg-val-border text-gray-300 px-2 py-0.5 rounded uppercase tracking-wide">
                        {String(cat)}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-white font-bold leading-snug mb-2 group-hover:text-val-red transition-colors">
                    {vod.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{vod.description}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-500 border-t border-val-border pt-3">
                    <span>🗓 {vod.date}</span>
                    <span>⏱ {vod.duration}</span>
                    <span>🗺 {vod.map}</span>
                    <span>🎮 {vod.agent}</span>
                    <span>🏆 {vod.rank}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No VODs in this category yet — check back soon.
            </div>
          )}
        </div>
      </div>
    </>
  )
}
