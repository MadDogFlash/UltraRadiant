import { useState } from 'react'
import { SiYoutube, SiTiktok, SiInstagram } from 'react-icons/si'
import { HiExternalLink, HiPlay } from 'react-icons/hi'
import SEOHead from '../components/SEOHead'

// REPLACE these with your real channel handles/IDs
const YOUTUBE_CHANNEL_ID = 'YOUR_YOUTUBE_CHANNEL_ID'
const TIKTOK_HANDLE = 'YOUR_TIKTOK'
const INSTAGRAM_HANDLE = 'YOUR_INSTAGRAM'

// Add real YouTube video IDs here
const youtubeVideos = [
  { id: 'REPLACE_VIDEO_ID_1', title: 'Diamond Lobby Breakdown – Neon on Ascent', date: 'March 18, 2025' },
  { id: 'REPLACE_VIDEO_ID_2', title: '5 Crosshair Placement Mistakes to Fix', date: 'March 14, 2025' },
  { id: 'REPLACE_VIDEO_ID_3', title: 'Economy Guide – When to Buy vs Save', date: 'March 10, 2025' },
  { id: 'REPLACE_VIDEO_ID_4', title: 'Viper Line-Up Guide for Breeze', date: 'February 28, 2025' },
  { id: 'REPLACE_VIDEO_ID_5', title: 'How I Fixed My Tilt Problem', date: 'March 5, 2025' },
  { id: 'REPLACE_VIDEO_ID_6', title: 'Sentinel Play in Solo Queue', date: 'February 21, 2025' },
]

// Add real TikTok embed URLs
const tiktokVideos = [
  { url: 'https://www.tiktok.com/embed/REPLACE_VIDEO_ID_1', title: '1 tip that will instantly improve your aim' },
  { url: 'https://www.tiktok.com/embed/REPLACE_VIDEO_ID_2', title: 'Why you keep losing on defense' },
  { url: 'https://www.tiktok.com/embed/REPLACE_VIDEO_ID_3', title: 'The economy mistake everyone makes' },
]

type Tab = 'youtube' | 'tiktok' | 'instagram'

export default function Media() {
  const [activeTab, setActiveTab] = useState<Tab>('youtube')

  return (
    <>
      <SEOHead
        title="YouTube, TikTok & Instagram"
        description="Watch Valorant clips, tips, and content across YouTube, TikTok, and Instagram. Short-form tips, VOD highlights, and ranked gameplay clips."
        keywords="valorant youtube, valorant tiktok clips, valorant instagram, valorant clips, valorant highlights, valorant tips short form"
        canonicalUrl="/media"
      />

      <div className="pt-24 pb-20 min-h-screen bg-val-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-val-red text-xs font-bold uppercase tracking-widest mb-3">
              <HiPlay /> Content Hub
            </div>
            <h1 className="val-heading text-4xl sm:text-5xl text-white mb-3">
              Media <span className="text-val-red">Hub</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Long-form breakdowns on YouTube, quick tips and clips on TikTok, and behind-the-scenes on Instagram.
            </p>
          </div>

          {/* Platform Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                platform: 'youtube' as Tab,
                icon: SiYoutube,
                label: 'YouTube',
                handle: `@${YOUTUBE_CHANNEL_ID}`,
                color: 'hover:border-red-500 hover:text-red-500',
                iconColor: 'text-red-500',
                href: `https://youtube.com/channel/${YOUTUBE_CHANNEL_ID}`,
                desc: 'Full VOD reviews & guides',
              },
              {
                platform: 'tiktok' as Tab,
                icon: SiTiktok,
                label: 'TikTok',
                handle: `@${TIKTOK_HANDLE}`,
                color: 'hover:border-pink-500 hover:text-pink-400',
                iconColor: 'text-pink-400',
                href: `https://tiktok.com/@${TIKTOK_HANDLE}`,
                desc: 'Quick tips & highlight clips',
              },
              {
                platform: 'instagram' as Tab,
                icon: SiInstagram,
                label: 'Instagram',
                handle: `@${INSTAGRAM_HANDLE}`,
                color: 'hover:border-pink-600 hover:text-pink-500',
                iconColor: 'text-pink-500',
                href: `https://instagram.com/${INSTAGRAM_HANDLE}`,
                desc: 'Clips, stories & reels',
              },
            ].map(({ platform, icon: Icon, label, handle, color, iconColor, href, desc }) => (
              <div key={platform} className={`glass p-5 clip-corner border border-val-border ${color} transition-all cursor-pointer group`} onClick={() => setActiveTab(platform)}>
                <div className="flex items-start justify-between mb-3">
                  <Icon className={`${iconColor} text-3xl`} />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label={`Open ${label}`}
                  >
                    <HiExternalLink />
                  </a>
                </div>
                <h2 className="text-white font-bold">{label}</h2>
                <p className="text-gray-500 text-sm">{handle}</p>
                <p className="text-gray-400 text-xs mt-1">{desc}</p>
                {activeTab === platform && (
                  <div className="mt-2 h-0.5 bg-val-red rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Tab Nav */}
          <div className="flex gap-2 mb-8 border-b border-val-border pb-4">
            {(['youtube', 'tiktok', 'instagram'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider clip-corner-sm transition-all ${
                  activeTab === tab
                    ? 'bg-val-red text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* YouTube Tab */}
          {activeTab === 'youtube' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-xl flex items-center gap-2">
                  <SiYoutube className="text-red-500" /> YouTube Videos
                </h2>
                <a
                  href={`https://youtube.com/channel/${YOUTUBE_CHANNEL_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 text-sm font-semibold flex items-center gap-1 hover:underline"
                >
                  Subscribe <HiExternalLink />
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video) => (
                  <div key={video.id} className="glass clip-corner overflow-hidden group">
                    <div className="yt-container bg-val-surface">
                      {video.id !== 'REPLACE_VIDEO_ID_1' && !video.id.startsWith('REPLACE') ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-900/10 to-val-dark">
                          <SiYoutube className="text-red-500/30 text-5xl mb-2" />
                          <span className="text-gray-600 text-xs">Replace with YouTube video ID</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-red-400 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">{video.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TikTok Tab */}
          {activeTab === 'tiktok' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-xl flex items-center gap-2">
                  <SiTiktok className="text-pink-400" /> TikTok Clips
                </h2>
                <a
                  href={`https://tiktok.com/@${TIKTOK_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 text-sm font-semibold flex items-center gap-1 hover:underline"
                >
                  Follow <HiExternalLink />
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tiktokVideos.map((video) => (
                  <div key={video.url} className="glass clip-corner overflow-hidden">
                    <div className="bg-val-surface flex flex-col items-center justify-center min-h-[400px] p-4">
                      {!video.url.includes('REPLACE') ? (
                        <iframe
                          src={video.url}
                          className="w-full"
                          style={{ height: '700px', maxHeight: '80vh' }}
                          allow="autoplay"
                          title={video.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-64">
                          <SiTiktok className="text-pink-400/30 text-5xl mb-2" />
                          <p className="text-white font-semibold text-sm text-center mb-1">{video.title}</p>
                          <span className="text-gray-600 text-xs">Replace embed URL with real TikTok video</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href={`https://tiktok.com/@${TIKTOK_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-pink-500 text-pink-400 px-6 py-3 font-bold uppercase tracking-wider clip-corner hover:bg-pink-500 hover:text-white transition-all text-sm"
                >
                  <SiTiktok /> See All TikToks <HiExternalLink />
                </a>
              </div>
            </div>
          )}

          {/* Instagram Tab */}
          {activeTab === 'instagram' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-xl flex items-center gap-2">
                  <SiInstagram className="text-pink-500" /> Instagram
                </h2>
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 text-sm font-semibold flex items-center gap-1 hover:underline"
                >
                  Follow <HiExternalLink />
                </a>
              </div>

              {/* Instagram Embed */}
              <div className="glass p-6 clip-corner text-center">
                <SiInstagram className="text-pink-500 text-5xl mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">@{INSTAGRAM_HANDLE}</h3>
                <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                  Clips, ranked session recaps, and quick tips on Instagram. Follow for daily Valorant content.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {/* Instagram embed placeholders — Instagram's API requires app review for embeds */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-val-surface border border-val-border rounded flex items-center justify-center"
                    >
                      <SiInstagram className="text-gray-700 text-2xl" />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs mb-4">
                  Instagram API requires business account verification for embedded posts. View content directly:
                </p>
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 font-bold uppercase tracking-wider clip-corner hover:opacity-90 transition-opacity text-sm"
                >
                  <SiInstagram /> Open Instagram <HiExternalLink />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
