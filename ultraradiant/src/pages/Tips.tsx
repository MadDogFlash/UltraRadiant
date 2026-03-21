import { useState } from 'react'
import { HiLightningBolt, HiChevronDown, HiChevronUp } from 'react-icons/hi'
import SEOHead from '../components/SEOHead'

interface Tip {
  id: number
  title: string
  summary: string
  details: string[]
  rank: string
  category: string
  priority: 'Critical' | 'High' | 'Medium'
}

const tips: Tip[] = [
  // Fundamentals
  {
    id: 1,
    title: 'Crosshair Placement is the #1 Mechanical Skill',
    summary: 'Keep your crosshair at head height and pre-aim corners at the exact angle enemies will peek from. Most low elo players aim at the floor.',
    details: [
      'Your crosshair should always be at the height an enemy head would be at the current distance — not the floor, not the sky.',
      'Pre-aim corners at the pixel-precise angle. If an enemy is 10m away, your crosshair needs to be at 10m head height, not 5m.',
      'Use deathmatch to drill this. Play 15 minutes of deathmatch before ranked, focusing only on head-level crosshair placement — not winning.',
      'Identify the 3-4 corners enemies peek from on each site you play. Pre-aim each one as you move through the map.',
      'This single habit can drop your time-to-kill by 30-40% because you eliminate the 0.2-0.3 second micro-adjustment every gunfight requires.',
    ],
    rank: 'All Ranks',
    category: 'Mechanics',
    priority: 'Critical',
  },
  {
    id: 2,
    title: 'Stop Sprinting Around Corners',
    summary: 'Walking and crouching eliminate movement inaccuracy. Sprinting while shooting is statistically one of the most common low-elo death causes.',
    details: [
      'In Valorant, bullets fired while sprinting have dramatically increased spread — your shots are essentially random.',
      'Always stop moving (tap Shift or release W) 0.1-0.2 seconds before firing. This counter-strafing eliminates movement spread.',
      'Counter-strafe: if moving right (D), tap A before shooting. The crosshair snaps accurate immediately.',
      'Crouching mid-fight can work but has a 0.3s delay before accuracy returns. Use it to dodge the second shot, not the first.',
      'The rule: Walk around corners, sprint between cover only when no enemies can see you.',
    ],
    rank: 'Iron – Gold',
    category: 'Mechanics',
    priority: 'Critical',
  },
  {
    id: 3,
    title: 'Economy: Always Know Your Team\'s Buy',
    summary: 'Buying a Vandal when 3 teammates are saving is one of the most common throws in low elo. Economy coordination wins rounds before the fight starts.',
    details: [
      'At the start of a round, look at your team\'s credits before buying. If 3+ players have under 1900, you should save.',
      'A full eco round (everyone saves) gives your team a bonus round — you all buy shields + rifles together.',
      "Light buy: 3 players buy, 2 save. Heavy buy: all 5 buy. Never be the one Vandal in a team of pistols.",
      'Rifle cost: Vandal/Phantom = 2900. Add armor (650-1000) and you need ~3500+ to full buy comfortably.',
      'After a won pistol round, most teams semi-buy round 2. A Spectre + armor costs ~2350 — usually affordable.',
      'Force buy only when the map situation demands it (match point, huge ult advantage, enemy on eco).',
    ],
    rank: 'Iron – Platinum',
    category: 'Economy',
    priority: 'Critical',
  },
  {
    id: 4,
    title: 'Communicate Callouts — Not Complaints',
    summary: 'Every word in comms should give information. "He\'s at A main, vandal, half health" beats "WHY DID YOU RUSH" every time.',
    details: [
      'Call enemy position, weapon, and HP when possible: "Jett A long, Operator, full."',
      'Call your intention before doing it: "I\'m pushing B elbow, watch my back." This prevents 2v1 miscoordination.',
      'After dying, instantly call where you died and what killed you. You are now a permanent scout.',
      'Mute on sight — anyone who is actively making you play worse with negative comms gets muted. No exceptions.',
      'Callout vocabulary: Learn the standard map callouts for every map you play. Using wrong callouts creates chaos.',
    ],
    rank: 'All Ranks',
    category: 'Game Sense',
    priority: 'High',
  },
  {
    id: 5,
    title: 'Play the Clock — Spike Timing Wins Rounds',
    summary: 'In Valorant, time is a resource. Attackers have 100 seconds. Defenders have spike timer + defuse. Understanding timing separates smart players.',
    details: [
      'Attackers: Spike should be planted by 60 seconds ideally. If you\'re not planted by 40 seconds, something went wrong.',
      'Defenders: You have until 0:00 to stop an unplanted spike. Once planted, you need 7 seconds to defuse.',
      'Never peek at 0:10 on defense without a plan — reset, go eco, or play for a pick.',
      'As an attacker with a numbers advantage (4v2), plant immediately and hold — force the retake rather than chasing.',
      'Retake timing: If spike is planted on A and you have 30 seconds, that\'s 2 angles to clear + 7 second defuse = possible. 15 seconds = not possible alone.',
    ],
    rank: 'Silver – Diamond',
    category: 'Game Sense',
    priority: 'High',
  },
  {
    id: 6,
    title: 'One-Way Smokes vs. Full Smokes — When to Use Each',
    summary: 'A one-way smoke blocks enemy vision but lets you see their feet. Full smokes block all vision. Knowing when each is better is a controller skill.',
    details: [
      'One-way smokes: Use on attack when you\'re holding an angle and the enemy WILL peek. They can\'t see you; you can see their shins.',
      'Full smokes: Use to block sightlines for team entry. A smoke that blocks CT from A site on Haven lets 5 players enter safely.',
      'Never smoke yourself into a corner. A smoke that blocks enemy vision also blocks your teammate\'s support.',
      'Controllers: You should smoke round start within the first 5-10 seconds. Late smokes let enemies pre-position.',
      'On defense, smokes can also be used to delay, not just block. Smoke the chokepoint to buy time for rotations.',
    ],
    rank: 'Gold – Ascendant',
    category: 'Agent Mechanics',
    priority: 'High',
  },
  {
    id: 7,
    title: 'Play to Your Spike Side Advantage',
    summary: 'When you have spike, you control the game tempo. Force the defense to rotate; don\'t play their rotations for them.',
    details: [
      'Fake spike plants. Walk into a site, plant noise, pull out spike, walk away. Good defenders rotate for nothing.',
      'A/B split with spike carrier going opposite of the rest of the team is a diamond-level win condition in lower elos.',
      'Avoid B rushing every round if you\'re winning — good players will adjust and stack B. Mix in A, mid, and B rounds.',
      'Spike side: If 3 players are on A, drop spike to whoever is hardest to stop from planting.',
      'Attackers own the first 45 seconds. Use it to gather info before committing.',
    ],
    rank: 'Platinum – Immortal',
    category: 'Strategy',
    priority: 'Medium',
  },
  {
    id: 8,
    title: 'Deathmatch Correctly — It\'s Not Just Warmup',
    summary: 'Most people deathmatch wrong. Random running and gunning builds bad habits. Purposeful deathmatch targets specific weaknesses.',
    details: [
      'Pick ONE thing to drill per deathmatch session: crosshair placement, counter-strafing, flick accuracy, or close-range dueling.',
      'Don\'t play for top fragging — play for quality of aim. 15 kills with perfect technique beats 30 sloppy kills every time.',
      'Play against players who are using rifles, not pistols. Get into rifle vs. rifle fights.',
      'Use the range before ranked: 100 bots at medium difficulty, flick series. Warms up flick speed without building bad habits.',
      'After deathmatch, jump straight into ranked while your mechanics are fresh. The warmup is wasted if you wait an hour.',
    ],
    rank: 'All Ranks',
    category: 'Improvement',
    priority: 'Medium',
  },
  {
    id: 9,
    title: 'Master 2-3 Agents Instead of Playing All 25',
    summary: 'Agent knowledge and muscle memory on abilities matters. A Jett main who knows every dash angle on Ascent beats a Jett player who just picked it up.',
    details: [
      'Pick 1 duelist, 1 controller or initiator, and 1 flex pick. Learn each one deeply.',
      'For each main agent, learn 5 key ability uses per map: the smoke spots, the flash angles, the lurk paths.',
      'Duelist mains: Learn 3 different entry sequences per map. Repeating the same entry every round lets enemies predict you.',
      'Controller mains: Learn orb control routes. Attacking ult orbs with smokes ready changes the economics of a round.',
      'Recommended beginner agents for climbing: Reyna (aim dependent), Sage (self-sufficient), Cypher/KJ (game sense carriers), Omen (flexible controller).',
    ],
    rank: 'All Ranks',
    category: 'Agent Mechanics',
    priority: 'High',
  },
  {
    id: 10,
    title: 'Mental Reset Protocol — Stop the Tilt Spiral',
    summary: 'Tilt compounds. One bad round becomes a bad half becomes a derank. Having a reset protocol breaks the spiral before it destroys your RR.',
    details: [
      'After a loss, close Valorant for 10 minutes minimum. No exceptions. Sit outside, drink water, do 20 push-ups.',
      'Never queue ranked after 2 consecutive losses in the same session. Tilt is a physiological state — you cannot think it away.',
      'Identify your tilt triggers: is it bad teammates? Losing duels? Being flashed? Knowing your trigger lets you address it specifically.',
      'Before queuing, set a session intention: "I will focus on crosshair placement this session." This gives you something to succeed at regardless of win/loss.',
      'Track your performance on stats sites (tracker.gg). Objectively, if your ACS is going up, you\'re improving even if your RR isn\'t reflecting it yet.',
    ],
    rank: 'All Ranks',
    category: 'Mental',
    priority: 'High',
  },
  {
    id: 11,
    title: 'Peek Timing — Don\'t Let Enemies Set Up on You',
    summary: 'A player who is still moving is harder to hit than one who is standing still. Learning when to wide-peek vs. shoulder-peek changes gunfight outcomes.',
    details: [
      'Shoulder peek: Briefly expose yourself to bait a shot, then hide. Reveal your position without fully committing to a fight.',
      'Wide peek: Run wide around a corner to change the angle before the enemy\'s crosshair repositions. Works best with superior aim.',
      'Never peek a held angle head-on if you can jiggle it first. Jiggling gives you info without dying.',
      'On defense, punish peeks — let enemies walk into your crosshair rather than pushing into them.',
      'Good peek timing: Never peek immediately after losing a teammate — the enemy has the advantage of your last-known position.',
    ],
    rank: 'Silver – Ascendant',
    category: 'Mechanics',
    priority: 'High',
  },
  {
    id: 12,
    title: 'Map Control — Win Without Winning Gunfights',
    summary: 'High elo players control map space before the guns come out. Mid control on Ascent, B Lobby on Pearl, and CT control on Haven win rounds before fights start.',
    details: [
      'Map control means your team has more angles covered, more escape routes, and more information than the enemy.',
      'Initiators enable map control. A Skye flash or KAY/O knife clears corners so your duelists don\'t have to peek blind.',
      'Winning mid control on Ascent lets you split any site from two directions — this is why Ascent mid is so contested.',
      'On defense, stagger your positioning. All 5 players stacked on one site means the other site loses instantly.',
      'Lurking: While 4 players make noise on one side, a lurker applies pressure on the other. The defense cannot rotate without giving something up.',
    ],
    rank: 'Gold – Radiant',
    category: 'Strategy',
    priority: 'High',
  },
]

const tipCategories = ['All', 'Mechanics', 'Economy', 'Game Sense', 'Agent Mechanics', 'Strategy', 'Mental', 'Improvement']
const priorityColors = {
  Critical: 'text-red-400 bg-red-900/30',
  High: 'text-orange-400 bg-orange-900/30',
  Medium: 'text-yellow-400 bg-yellow-900/30',
}

const tipsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete Valorant Ranked Climbing Tips Guide 2025',
  description: 'Proven tips and strategies to rank up in Valorant, covering mechanics, economy, game sense, mental game, and agent mastery.',
  author: { '@type': 'Person', name: 'UltraRadiant' },
  datePublished: '2025-01-01',
  dateModified: '2025-03-18',
}

export default function Tips() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedTip, setExpandedTip] = useState<number | null>(null)

  const filtered = tips.filter((t) => activeCategory === 'All' || t.category === activeCategory)

  return (
    <>
      <SEOHead
        title="Valorant Ranked Climbing Tips"
        description="Proven tips to rank up in Valorant. Covers crosshair placement, economy management, agent mechanics, mental game, map control, and everything you need to stop hardstucking."
        keywords="valorant tips to rank up, valorant ranked tips 2025, how to get better at valorant, valorant climbing guide, valorant mechanical tips, valorant economy guide, valorant mental game, stop hardstuck valorant"
        canonicalUrl="/tips"
        schema={tipsSchema}
      />

      <div className="pt-24 pb-20 min-h-screen bg-val-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-val-red text-xs font-bold uppercase tracking-widest mb-3">
              <HiLightningBolt /> Climbing Guide
            </div>
            <h1 className="val-heading text-4xl sm:text-5xl text-white mb-3">
              Ranked <span className="text-val-red">Climbing Tips</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              These aren't generic "communicate with your team" tips. Every entry here is a specific, actionable habit I identified and fixed in my own gameplay. Start with the <span className="text-val-red font-semibold">Critical</span> priority items.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap mb-8">
            {tipCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider clip-corner-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-val-red text-white'
                    : 'border border-val-border text-gray-400 hover:border-val-red hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tips List */}
          <div className="space-y-4">
            {filtered.map((tip) => (
              <article key={tip.id} className="glass clip-corner overflow-hidden">
                <button
                  className="w-full text-left p-5"
                  onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${priorityColors[tip.priority]}`}>
                          {tip.priority}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{tip.category}</span>
                        <span className="text-xs text-gray-600">{tip.rank}</span>
                      </div>
                      <h2 className="text-white font-bold text-base leading-snug">{tip.title}</h2>
                      <p className="text-gray-400 text-sm mt-1">{tip.summary}</p>
                    </div>
                    <div className="flex-shrink-0 text-gray-400 mt-1">
                      {expandedTip === tip.id ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
                    </div>
                  </div>
                </button>

                {expandedTip === tip.id && (
                  <div className="px-5 pb-5 border-t border-val-border pt-4">
                    <ul className="space-y-3">
                      {tip.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-300">
                          <span className="text-val-red font-bold flex-shrink-0 mt-0.5">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
