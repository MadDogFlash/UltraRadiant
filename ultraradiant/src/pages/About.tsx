import { HiMail, HiExternalLink } from 'react-icons/hi'
import { SiTwitch, SiYoutube, SiTiktok, SiInstagram, SiX, SiValorant } from 'react-icons/si'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const milestones = [
  { rank: 'Iron → Bronze', date: 'Season Start 2024', note: 'Started the grind. Aimed at the floor, lost every gunfight. Embarrassing but necessary.' },
  { rank: 'Bronze → Silver', date: 'Month 2', note: 'Discovered crosshair placement. Everything clicked. Win rate jumped from 40% to 52%.' },
  { rank: 'Silver → Gold', date: 'Month 4', note: 'Economy awareness unlocked. Started syncing buys with the team. Stopped solo-forcing every round.' },
  { rank: 'Gold → Platinum', date: 'Month 7', note: 'The hardest rank transition. Spent 2 months hardstuck Gold 3. Fixed positioning and stopped peeking everything.' },
  { rank: 'Platinum (Current)', date: 'Ongoing', note: 'Deep in the Diamond grind now. VOD review every session. The improvement is measurable.', current: true },
]

const faqs = [
  { q: 'What rank are you?', a: 'Currently Platinum 2. The goal is Radiant and I\'m documenting every step.' },
  { q: 'How many hours do you have?', a: 'Somewhere over 1,500 hours. The first 500 were wasted not knowing what to focus on — hence this site.' },
  { q: 'What agents do you main?', a: 'Omen for controller, Killjoy for sentinel, and Neon when I want to run someone over. Occasionally Sova when the map calls for it.' },
  { q: 'Do you coach?', a: 'Not formally yet, but I do occasional VOD review requests from the community. Drop a message on Discord or Twitch.' },
  { q: 'What\'s your setup?', a: '240Hz monitor, Logitech G Pro X Superlight, 800 DPI, 0.4 in-game sensitivity. DPI doesn\'t make you good — habits do.' },
  { q: 'Why make this website?', a: 'Because I was hardstuck for too long and kept seeing the same generic advice everywhere. This is the actual game-by-game record of what worked.' },
]

const socials = [
  { href: 'https://twitch.tv/YOUR_CHANNEL', icon: SiTwitch, label: 'Twitch', color: 'text-purple-400 hover:text-purple-300', handle: 'YOUR_TWITCH' },
  { href: 'https://youtube.com/@YOUR_CHANNEL', icon: SiYoutube, label: 'YouTube', color: 'text-red-500 hover:text-red-400', handle: 'YOUR_YT' },
  { href: 'https://tiktok.com/@YOUR_CHANNEL', icon: SiTiktok, label: 'TikTok', color: 'text-pink-400 hover:text-pink-300', handle: 'YOUR_TT' },
  { href: 'https://instagram.com/YOUR_CHANNEL', icon: SiInstagram, label: 'Instagram', color: 'text-pink-500 hover:text-pink-400', handle: 'YOUR_IG' },
  { href: 'https://twitter.com/YOUR_CHANNEL', icon: SiX, label: 'Twitter / X', color: 'text-sky-400 hover:text-sky-300', handle: 'YOUR_TW' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'UltraRadiant',
  url: 'https://ultraradiant.gg',
  description: 'Valorant ranked climb content creator documenting the journey from Gold to Radiant through VOD reviews, tier lists, and climbing guides.',
  knowsAbout: ['Valorant', 'Esports', 'Ranked Climbing', 'FPS Games'],
  sameAs: [
    'https://twitch.tv/YOUR_CHANNEL',
    'https://youtube.com/@YOUR_CHANNEL',
    'https://twitter.com/YOUR_CHANNEL',
  ],
}

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description="Learn about UltraRadiant — the Valorant ranked climb journey from Gold to Radiant. The story, the grind, the milestones, and why this site exists."
        keywords="ultraradiant valorant, valorant content creator, valorant ranked grind story, about valorant streamer, valorant climb journey"
        canonicalUrl="/about"
        schema={aboutSchema}
      />

      <div className="pt-24 pb-20 min-h-screen bg-val-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 text-val-red text-xs font-bold uppercase tracking-widest mb-4">
                <SiValorant /> The Story
              </div>
              <h1 className="val-heading text-4xl sm:text-5xl text-white mb-4">
                About <span className="text-val-red">UltraRadiant</span>
              </h1>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I was hardstuck Gold for four months. Not because I wasn't playing enough — I was grinding 15+ games a week. But I was doing everything wrong: force-buying alone, peeking everything, tilting after one loss, and refusing to use my utility correctly.
                </p>
                <p>
                  This site is the living record of every mistake I identified, every habit I broke, and every rank I climbed as a result. No coaching. No duo boosting. Just intentional improvement documented in real time.
                </p>
                <p>
                  The goal is <strong className="text-val-radiant" style={{ color: '#FFFBA3' }}>Radiant</strong>. Every VOD review, tier list update, and tip on this site is a step in that direction.
                </p>
              </div>
            </div>

            {/* Profile Card */}
            <div className="glass p-8 clip-corner text-center">
              {/* Avatar placeholder — replace with your actual photo */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-val-red to-orange-500 flex items-center justify-center text-4xl font-black text-white mx-auto mb-4">
                UR
              </div>
              <h2 className="text-white text-2xl font-black mb-1">UltraRadiant</h2>
              <p className="text-val-red font-semibold text-sm mb-4 uppercase tracking-widest">Platinum 2 → Radiant</p>
              <div className="grid grid-cols-2 gap-3 text-center mb-6">
                {[
                  { label: 'Games Played', value: '300+' },
                  { label: 'Win Rate', value: '48%' },
                  { label: 'Main Role', value: 'Flex' },
                  { label: 'Hours', value: '1,500+' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-val-dark p-3 rounded">
                    <div className="text-val-red font-black text-xl">{value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
              {/* Socials */}
              <div className="flex justify-center gap-4">
                {socials.map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`${color} text-xl transition-colors`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Rank Journey / Milestones */}
          <div className="mb-20">
            <h2 className="val-heading text-3xl text-white mb-8">
              The <span className="text-val-red">Journey</span>
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-val-red via-val-border to-transparent" />
              <div className="space-y-8 pl-12">
                {milestones.map(({ rank, date, note, current }) => (
                  <div key={rank} className={`relative glass p-5 clip-corner ${current ? 'border-val-red/40 animate-glow-pulse' : ''}`}>
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-9 top-5 w-3 h-3 rounded-full border-2 ${
                        current ? 'bg-val-red border-val-red' : 'bg-val-dark border-val-border'
                      }`}
                    />
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className={`font-black text-lg ${current ? 'text-val-red' : 'text-white'}`}>
                          {rank} {current && '← You are here'}
                        </h3>
                        <p className="text-gray-500 text-xs mb-2">{date}</p>
                        <p className="text-gray-300 text-sm">{note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="val-heading text-3xl text-white mb-8">
              <span className="text-val-red">FAQ</span>
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="glass p-5 clip-corner">
                  <h3 className="text-white font-bold mb-2">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact + Socials */}
          <div className="glass p-8 clip-corner">
            <h2 className="val-heading text-2xl text-white mb-2">Get In Touch</h2>
            <p className="text-gray-400 text-sm mb-6">
              Business inquiries, community questions, or VOD review requests — send it over.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:contact@ultraradiant.gg"
                className="inline-flex items-center gap-2 border border-val-border text-gray-300 hover:border-val-red hover:text-white px-4 py-2 text-sm font-semibold clip-corner-sm transition-all"
              >
                <HiMail /> contact@ultraradiant.gg
              </a>
            </div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow the Grind</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {socials.map(({ href, icon: Icon, label, color, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-val-dark p-3 rounded hover:bg-val-border transition-colors group"
                >
                  <Icon className={`${color} text-xl`} />
                  <div>
                    <div className="text-white font-semibold text-sm">{label}</div>
                    <div className="text-gray-500 text-xs">{handle}</div>
                  </div>
                  <HiExternalLink className="ml-auto text-gray-600 group-hover:text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4 text-sm">Start learning with the content:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/tips" className="bg-val-red text-white px-6 py-3 font-bold uppercase tracking-wider clip-corner text-sm hover:bg-red-500 transition-colors">
                Read Tips
              </Link>
              <Link to="/vod-review" className="border border-val-border text-gray-300 px-6 py-3 font-bold uppercase tracking-wider clip-corner text-sm hover:border-val-red hover:text-white transition-all">
                Watch VODs
              </Link>
              <Link to="/tier-list" className="border border-val-border text-gray-300 px-6 py-3 font-bold uppercase tracking-wider clip-corner text-sm hover:border-val-red hover:text-white transition-all">
                Tier List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
