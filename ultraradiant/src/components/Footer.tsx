import { Link } from 'react-router-dom'
import { SiValorant, SiTwitch, SiYoutube, SiTiktok, SiInstagram, SiX } from 'react-icons/si'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/vod-review', label: 'VOD Review' },
  { to: '/tips', label: 'Tips' },
  { to: '/tier-list', label: 'Tier List' },
  { to: '/stream', label: 'Stream' },
  { to: '/media', label: 'Media' },
  { to: '/about', label: 'About' },
]

const socials = [
  { href: 'https://twitch.tv/YOUR_CHANNEL', icon: SiTwitch, label: 'Twitch', color: 'hover:text-purple-400' },
  { href: 'https://youtube.com/@YOUR_CHANNEL', icon: SiYoutube, label: 'YouTube', color: 'hover:text-red-500' },
  { href: 'https://tiktok.com/@YOUR_CHANNEL', icon: SiTiktok, label: 'TikTok', color: 'hover:text-pink-400' },
  { href: 'https://instagram.com/YOUR_CHANNEL', icon: SiInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
  { href: 'https://twitter.com/YOUR_CHANNEL', icon: SiX, label: 'Twitter', color: 'hover:text-sky-400' },
]

export default function Footer() {
  return (
    <footer className="bg-val-surface border-t border-val-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SiValorant className="text-val-red text-2xl" />
              <span className="text-white font-black text-xl tracking-widest uppercase">
                Ultra<span className="text-val-red">Radiant</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Documenting the grind from Gold to Radiant. Real gameplay, real improvement, no shortcuts.
              Follow the journey and level up your game.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Pages</h3>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-val-red text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Follow the Grind</h3>
            <div className="flex gap-4 flex-wrap">
              {socials.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-400 ${color} text-xl transition-colors`}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Not affiliated with Riot Games. Valorant is a trademark of Riot Games, Inc.
            </p>
          </div>
        </div>

        <div className="border-t border-val-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} UltraRadiant. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built for ranked climbers, by a ranked climber.
          </p>
        </div>
      </div>
    </footer>
  )
}
