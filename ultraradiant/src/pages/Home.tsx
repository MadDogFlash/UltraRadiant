import { Link } from 'react-router-dom'
import { SiTwitch } from 'react-icons/si'
import { HiArrowRight, HiPlay, HiLightningBolt, HiChartBar, HiFilm } from 'react-icons/hi'
import SEOHead from '../components/SEOHead'

const rankProgress = [
  { rank: 'Iron', done: true },
  { rank: 'Bronze', done: true },
  { rank: 'Silver', done: true },
  { rank: 'Gold', done: true },
  { rank: 'Platinum', done: false, current: true },
  { rank: 'Diamond', done: false },
  { rank: 'Ascendant', done: false },
  { rank: 'Immortal', done: false },
  { rank: 'Radiant', done: false },
]

const rankColors: Record<string, string> = {
  Iron: '#7B8FA1',
  Bronze: '#B26A40',
  Silver: '#8FA8BF',
  Gold: '#C9AA71',
  Platinum: '#5C8CAD',
  Diamond: '#5B6EAD',
  Ascendant: '#2F8B5C',
  Immortal: '#B23A50',
  Radiant: '#FFFBA3',
}

const features = [
  {
    icon: HiFilm,
    title: 'VOD Review',
    desc: 'Frame-by-frame breakdowns of ranked games — positioning, decision-making, and timing errors dissected so you can stop making the same mistakes.',
    to: '/vod-review',
    color: 'text-blue-400',
  },
  {
    icon: HiLightningBolt,
    title: 'Climbing Tips',
    desc: 'Proven strategies for every rank — crosshair placement, economy decisions, agent synergies, and the mental game that separates good players from great ones.',
    to: '/tips',
    color: 'text-yellow-400',
  },
  {
    icon: HiChartBar,
    title: 'Tier List',
    desc: 'Updated agent rankings for the current patch, filtered by role. Know which agents are broken, which are reliable, and which to avoid in solo queue.',
    to: '/tier-list',
    color: 'text-green-400',
  },
  {
    icon: SiTwitch,
    title: 'Live Stream',
    desc: 'Catch ranked sessions live on Twitch. Watch real-time decision-making, hear the thought process, and interact during the grind.',
    to: '/stream',
    color: 'text-purple-400',
  },
]

const recentVods = [
  {
    title: 'Diamond Lobby Breakdown – Neon Carry on Ascent',
    date: 'March 18, 2025',
    duration: '24 min',
    tag: 'VOD Review',
    tagColor: 'bg-blue-900/50 text-blue-300',
  },
  {
    title: '5 Crosshair Placement Mistakes Killing Your Rating',
    date: 'March 14, 2025',
    duration: '18 min',
    tag: 'Tips',
    tagColor: 'bg-yellow-900/50 text-yellow-300',
  },
  {
    title: 'Patch 9.x Agent Tier List – Best Picks for Solo Queue',
    date: 'March 10, 2025',
    duration: '12 min',
    tag: 'Tier List',
    tagColor: 'bg-green-900/50 text-green-300',
  },
]

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'UltraRadiant',
  url: 'https://ultraradiant.gg',
  description: 'Valorant ranked climb content creator — VOD reviews, tier lists, and climbing guides',
  sameAs: [
    'https://twitch.tv/YOUR_CHANNEL',
    'https://youtube.com/@YOUR_CHANNEL',
    'https://twitter.com/YOUR_CHANNEL',
  ],
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Valorant Ranked Climb Journey"
        description="Follow the grind from Gold to Radiant. Watch VOD reviews, study the tier list, learn climbing tips, and catch live Valorant ranked sessions on Twitch."
        keywords="valorant ranked climb, valorant tips 2025, valorant tier list, valorant vod review, how to rank up in valorant, valorant radiant grind"
        canonicalUrl="/"
        schema={homeSchema}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-val-dark via-val-surface to-val-dark" />
        <div className="absolute inset-0 bg-gradient-radial from-val-red/5 via-transparent to-transparent" />
        {/* Decorative lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-val-red/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-val-red/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-val-surface border border-val-border px-3 py-1.5 mb-6 clip-corner-sm">
                <span className="w-2 h-2 rounded-full bg-val-red animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  The Radiant Grind — Season 2025
                </span>
              </div>

              <h1 className="val-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-4">
                FROM GOLD
                <br />
                <span className="text-val-red val-glow">TO RADIANT.</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                No boosting. No duo queue cheese. Just raw improvement — VOD reviews, real gameplay analysis,
                and every lesson learned from hundreds of ranked games documented here.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/vod-review"
                  className="inline-flex items-center gap-2 bg-val-red text-white px-6 py-3 font-bold uppercase tracking-wider text-sm clip-corner hover:bg-red-500 transition-colors"
                >
                  <HiPlay /> Watch VODs
                </Link>
                <Link
                  to="/tips"
                  className="inline-flex items-center gap-2 border border-val-red text-val-red px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-val-red hover:text-white transition-all clip-corner"
                >
                  Climbing Tips <HiArrowRight />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: '300+', label: 'Ranked Games' },
                  { value: '48%', label: 'Win Rate' },
                  { value: 'Plat 2', label: 'Current Rank' },
                ].map(({ value, label }) => (
                  <div key={label} className="val-border-glow p-4 text-center">
                    <div className="text-2xl font-black text-val-red">{value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rank Progress Panel */}
            <div className="glass p-6 clip-corner">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                Rank Progress
              </h2>
              <div className="space-y-3">
                {rankProgress.map(({ rank, done, current }) => (
                  <div key={rank} className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        current
                          ? 'animate-glow-pulse'
                          : ''
                      }`}
                      style={{
                        backgroundColor: done || current ? rankColors[rank] : '#2a3a45',
                        boxShadow: current ? `0 0 12px ${rankColors[rank]}` : undefined,
                      }}
                    />
                    <div className="flex-1 bg-val-border rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: done ? '100%' : current ? '50%' : '0%',
                          backgroundColor: rankColors[rank],
                        }}
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold w-24 ${
                        current ? 'text-white' : done ? 'text-gray-400' : 'text-gray-600'
                      }`}
                      style={{ color: current ? rankColors[rank] : undefined }}
                    >
                      {rank} {current && '← Now'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-val-border text-center">
                <span className="text-xs text-gray-500">Goal:</span>{' '}
                <span className="text-val-radiant font-bold" style={{ color: rankColors.Radiant }}>
                  RADIANT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-val-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="val-heading text-3xl sm:text-4xl text-white mb-3">
              Everything You Need to <span className="text-val-red">Climb</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This site is the full picture — not just highlights. Real games, real mistakes, real growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, to, color }) => (
              <Link
                key={title}
                to={to}
                className="group glass p-6 clip-corner hover:border-val-red/40 hover:shadow-val-red/10 hover:shadow-lg transition-all duration-300"
              >
                <Icon className={`${color} text-3xl mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 text-val-red text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <HiArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Content */}
      <section className="py-20 bg-val-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="val-heading text-3xl text-white">
              Latest <span className="text-val-red">Content</span>
            </h2>
            <Link to="/vod-review" className="text-val-red text-sm font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
              View All <HiArrowRight />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVods.map((item) => (
              <div key={item.title} className="glass clip-corner overflow-hidden group cursor-pointer hover:border-val-red/30 transition-all">
                {/* Placeholder thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-val-border to-val-dark flex items-center justify-center relative overflow-hidden">
                  <HiPlay className="text-white/30 text-5xl group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {item.duration}
                  </div>
                </div>
                <div className="p-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <h3 className="text-white font-semibold mt-2 leading-snug group-hover:text-val-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-2">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-val-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-val-red/5 via-transparent to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="val-heading text-4xl text-white mb-4">
            Ready to Stop <span className="text-val-red">Hardstucking?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Start with the Tips page — or jump straight into a VOD review to see exactly what I fixed in my gameplay to start winning more.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/tips" className="bg-val-red text-white px-8 py-3 font-bold uppercase tracking-wider clip-corner hover:bg-red-500 transition-colors">
              Get the Tips
            </Link>
            <Link to="/vod-review" className="border border-gray-600 text-gray-300 px-8 py-3 font-bold uppercase tracking-wider clip-corner hover:border-val-red hover:text-val-red transition-all">
              Watch VODs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
