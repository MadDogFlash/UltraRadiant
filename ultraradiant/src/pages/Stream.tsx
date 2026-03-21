import { useState } from 'react'
import { SiTwitch } from 'react-icons/si'
import { HiExternalLink, HiClock, HiCalendar } from 'react-icons/hi'
import SEOHead from '../components/SEOHead'

// REPLACE with your actual Twitch channel name
const TWITCH_CHANNEL = 'YOUR_TWITCH_CHANNEL'

const schedule = [
  { day: 'Monday', time: 'Off', isLive: false },
  { day: 'Tuesday', time: '8 PM – 12 AM EST', isLive: false },
  { day: 'Wednesday', time: '8 PM – 12 AM EST', isLive: false },
  { day: 'Thursday', time: 'Off', isLive: false },
  { day: 'Friday', time: '7 PM – 2 AM EST', isLive: true },
  { day: 'Saturday', time: '3 PM – 10 PM EST', isLive: false },
  { day: 'Sunday', time: '3 PM – 8 PM EST', isLive: false },
]

const streamFeatures = [
  { icon: '🎯', title: 'Ranked Grind', desc: 'Pure ranked gameplay — no deathmatch filler. Every session is a push toward the next rank.' },
  { icon: '🧠', title: 'Real-Time Analysis', desc: 'Commentary on every decision — why I push, why I save, what I see from enemies before engaging.' },
  { icon: '📊', title: 'Stats Review', desc: "At the end of every stream block, I review tracker.gg — what's going up, what's not, and what I'm changing next session." },
  { icon: '💬', title: 'Chat Interaction', desc: 'Questions answered during the game. Call out my mistakes in chat — I want to hear it.' },
]

const streamSchema = {
  '@context': 'https://schema.org',
  '@type': 'BroadcastEvent',
  name: 'UltraRadiant — Valorant Ranked Climb Live Stream',
  description: 'Live Valorant ranked gameplay on Twitch. Watch real-time decision-making and ranked sessions.',
  url: `https://twitch.tv/${TWITCH_CHANNEL}`,
  broadcastOfEvent: {
    '@type': 'SportsEvent',
    name: 'Valorant Ranked Climb',
  },
}

export default function Stream() {
  const [isLive] = useState(false) // Toggle this based on real API data later

  return (
    <>
      <SEOHead
        title="Live Twitch Stream"
        description={`Watch live Valorant ranked gameplay on Twitch. Follow the grind to Radiant — real-time commentary, decision analysis, and chat interaction every stream.`}
        keywords="valorant twitch stream, valorant ranked stream, watch valorant live, valorant streamer, valorant radiant grind stream, ultraradiant twitch"
        canonicalUrl="/stream"
        schema={streamSchema}
      />

      <div className="pt-24 pb-20 min-h-screen bg-val-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">
              <SiTwitch />
              {isLive ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Live Now
                </span>
              ) : (
                'Twitch Stream'
              )}
            </div>
            <h1 className="val-heading text-4xl sm:text-5xl text-white mb-3">
              Watch <span className="text-val-red">Live</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Ranked sessions streamed live on Twitch. Real decisions, real mistakes, real growth — no scripted plays or highlight reels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Stream Embed */}
            <div className="lg:col-span-2 space-y-4">
              {/* Stream */}
              <div className="glass clip-corner overflow-hidden">
                <div className="twitch-container bg-val-surface">
                  {TWITCH_CHANNEL !== 'YOUR_TWITCH_CHANNEL' ? (
                    <iframe
                      src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${window.location.hostname}`}
                      allowFullScreen
                      title={`${TWITCH_CHANNEL} Twitch Stream`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/20 to-val-dark">
                      <SiTwitch className="text-purple-400 text-6xl mb-4" />
                      <p className="text-white font-bold text-xl mb-2">Stream Coming Soon</p>
                      <p className="text-gray-400 text-sm text-center max-w-xs">
                        Set your Twitch channel name in <code className="text-val-red">/src/pages/Stream.tsx</code> to embed the live stream.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Twitch Chat */}
              {TWITCH_CHANNEL !== 'YOUR_TWITCH_CHANNEL' && (
                <div className="glass clip-corner overflow-hidden h-96">
                  <iframe
                    src={`https://www.twitch.tv/embed/${TWITCH_CHANNEL}/chat?darkpopout&parent=${window.location.hostname}`}
                    title="Twitch Chat"
                    className="w-full h-full"
                  />
                </div>
              )}

              {/* Stream Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {streamFeatures.map(({ icon, title, desc }) => (
                  <div key={title} className="glass p-4 clip-corner">
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Live Status */}
              <div className={`glass p-5 clip-corner ${isLive ? 'border-red-500/40' : ''}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-600'}`}
                  />
                  <span className={`font-bold text-sm uppercase tracking-wider ${isLive ? 'text-red-400' : 'text-gray-400'}`}>
                    {isLive ? 'Live Now' : 'Offline'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {isLive
                    ? 'Stream is live! Click below to watch on Twitch.'
                    : 'Not streaming right now. Check the schedule or follow on Twitch for live notifications.'}
                </p>
                <a
                  href={`https://twitch.tv/${TWITCH_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-wider text-sm clip-corner-sm transition-colors"
                >
                  <SiTwitch /> Follow on Twitch <HiExternalLink />
                </a>
              </div>

              {/* Stream Schedule */}
              <div className="glass p-5 clip-corner">
                <h2 className="text-white font-bold mb-4 flex items-center gap-2">
                  <HiCalendar className="text-val-red" /> Stream Schedule
                </h2>
                <div className="space-y-2">
                  {schedule.map(({ day, time, isLive: dayIsLive }) => (
                    <div
                      key={day}
                      className={`flex justify-between items-center py-2 border-b border-val-border last:border-0 ${
                        dayIsLive ? 'text-val-red' : ''
                      }`}
                    >
                      <span className={`text-sm font-semibold ${dayIsLive ? 'text-val-red' : 'text-white'}`}>
                        {day}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {dayIsLive && <span className="w-1.5 h-1.5 rounded-full bg-val-red animate-pulse" />}
                        <span className={`text-xs ${time === 'Off' ? 'text-gray-600' : 'text-gray-300'}`}>
                          {time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs mt-3 flex items-center gap-1">
                  <HiClock size={12} /> All times Eastern (EST/EDT)
                </p>
              </div>

              {/* Stream Rules */}
              <div className="glass p-5 clip-corner">
                <h2 className="text-white font-bold mb-3">Chat Rules</h2>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    'Be respectful — zero toxicity tolerated',
                    'No spoilers on upcoming maps/rounds',
                    'Backseat gaming is fine, but keep it constructive',
                    'Clip and share with credit',
                    'Have fun — we\'re all learning together',
                  ].map((rule, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-val-red font-bold">{i + 1}.</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
