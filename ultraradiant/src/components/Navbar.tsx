import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiValorant } from 'react-icons/si'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/vod-review', label: 'VOD Review' },
  { to: '/tips', label: 'Tips' },
  { to: '/tier-list', label: 'Tier List' },
  { to: '/stream', label: 'Stream' },
  { to: '/media', label: 'Media' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-val-dark/95 backdrop-blur-md border-b border-val-border shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <SiValorant className="text-val-red text-2xl group-hover:scale-110 transition-transform" />
            <span className="text-white font-black text-xl tracking-widest uppercase">
              Ultra<span className="text-val-red">Radiant</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-val-red border-b-2 border-val-red'
                      : 'text-gray-400 hover:text-white hover:text-val-red'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://twitch.tv/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-val-red text-white text-sm font-bold uppercase tracking-wider clip-corner-sm hover:bg-red-500 transition-colors"
            >
              Live Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-val-dark/98 backdrop-blur-md border-b border-val-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-val-red bg-val-surface rounded'
                      : 'text-gray-400 hover:text-white hover:bg-val-surface rounded'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://twitch.tv/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-val-red text-white text-sm font-bold uppercase tracking-wider text-center mt-2 rounded"
            >
              Watch Live
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
