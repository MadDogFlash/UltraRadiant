import { useState } from 'react'
import { HiChartBar, HiInformationCircle } from 'react-icons/hi'
import SEOHead from '../components/SEOHead'

type Role = 'All' | 'Duelist' | 'Controller' | 'Initiator' | 'Sentinel'
type Tier = 'S' | 'A' | 'B' | 'C' | 'D'

interface Agent {
  name: string
  role: Omit<Role, 'All'>
  tier: Tier
  soloQueue: 'Strong' | 'Good' | 'Situational' | 'Weak'
  notes: string
  strengths: string[]
}

const agents: Agent[] = [
  // Duelists
  { name: 'Jett', role: 'Duelist', tier: 'S', soloQueue: 'Strong', notes: 'Still the best duelist for aggressive plays and Op-peeking. Dash resets on kill make her forgiving for snowballing rounds.', strengths: ['Op pocket', 'Dash escape', 'Vertical mobility'] },
  { name: 'Neon', role: 'Duelist', tier: 'A', soloQueue: 'Strong', notes: 'High sprint speed makes her extremely difficult to pre-aim. Best in aggressive, fast-tempo teams. Has a strong slide mechanic for dueling.', strengths: ['Speed', 'Slide shot', 'Slide reset on kill'] },
  { name: 'Reyna', role: 'Duelist', tier: 'A', soloQueue: 'Strong', notes: 'The go-to duelist for aim-confident solo queuers. Dismiss invulnerability after kills means she can escape bad positions. Useless without kills.', strengths: ['Self-healing', 'Post-kill safety', 'Dismiss invulnerability'] },
  { name: 'Iso', role: 'Duelist', tier: 'B', soloQueue: 'Good', notes: 'Underrated duelist. 1v1 shield mechanic removes an enemy from the round while winning the shield. Works well in dive comps.', strengths: ['Shield 1v1', 'Underappreciated ult', 'Strong wall'] },
  { name: 'Raze', role: 'Duelist', tier: 'S', soloQueue: 'Strong', notes: 'Best grenade in the game. Boom Bot gives free info. Paint Shells deal massive AOE damage. Strong in any comp.', strengths: ['Satchel mobility', 'Blast Pack combo', 'Paint Shell damage'] },
  { name: 'Yoru', role: 'Duelist', tier: 'B', soloQueue: 'Situational', notes: 'Outplay potential is high but inconsistent. Decoy and ult create massive confusion but require team coordination to capitalize on.', strengths: ['Deception', 'Ult invulnerability', 'Flank potential'] },
  { name: 'Phoenix', role: 'Duelist', tier: 'C', soloQueue: 'Weak', notes: 'Outclassed by other duelists in most scenarios. Self-flash is nice but the kit doesn\'t offer enough impact vs. current meta picks.', strengths: ['Self-flash', 'Self-healing', 'Run It Back ult'] },

  // Controllers
  { name: 'Omen', role: 'Controller', tier: 'S', soloQueue: 'Strong', notes: 'The most flexible controller. Blind flash, paranoia slow, teleport for repositioning, and global ult. Works on every map.', strengths: ['Flash utility', 'Paranoia', 'Global ult', 'Teleport'] },
  { name: 'Viper', role: 'Controller', tier: 'S', soloQueue: 'Strong', notes: 'Best for large maps (Breeze, Pearl, Icebox). Her wall and orb allow 1 player to smoke an entire site. High skill ceiling but massive payoff.', strengths: ['Wall + orb combos', 'Decay damage', 'Post-plant Pit'] },
  { name: 'Brimstone', role: 'Controller', tier: 'A', soloQueue: 'Good', notes: 'Most reliable smokes in the game — instant, full, and pre-deployable. Stim Beacon is underrated for holding a site. Molly post-plant is strong.', strengths: ['Instant smokes', 'Stim Beacon', 'Post-plant molly'] },
  { name: 'Harbor', role: 'Controller', tier: 'B', soloQueue: 'Good', notes: 'Underused. Water wall blocks bullets, cascade flashs enemies through smokes. Strong in dive comps. Still learning curve for most players.', strengths: ['Bullet-blocking wall', 'Flash through smoke', 'Cove orb'] },
  { name: 'Astra', role: 'Controller', tier: 'A', soloQueue: 'Situational', notes: 'Global smokes and pull make her S-tier in coordinated play. In solo queue, the setup time makes her more difficult — needs a team that communicates.', strengths: ['Global smokes', 'Nebula', 'Gravity Well'] },
  { name: 'Clove', role: 'Controller', tier: 'S', soloQueue: 'Strong', notes: 'New controller with self-resurrection utility. Picks up kills from smokes reliably. Currently one of the best solo queue controllers due to self-sufficiency.', strengths: ['Self-resurrection', 'Pick-up kills', 'Aggressive smoke style'] },

  // Initiators
  { name: 'Sova', role: 'Initiator', tier: 'A', soloQueue: 'Strong', notes: 'Recon Bolt gives your whole team free info. Shock Dart is a strong post-plant tool. High skill ceiling on line-ups but worth the investment.', strengths: ['Free info', 'Shock Dart line-ups', 'Drone vision'] },
  { name: 'Skye', role: 'Initiator', tier: 'S', soloQueue: 'Strong', notes: 'Best all-around initiator. Flash, heal, trail for info, and ult that finds every enemy. Her heals make her the most self-sufficient support.', strengths: ['Team flash', 'Healing', 'Trailblazer info', 'Ult scouting'] },
  { name: 'KAY/O', role: 'Initiator', tier: 'A', soloQueue: 'Strong', notes: 'Suppression on knife/ult means no abilities from suppressed players. Extremely strong in anti-ability comps. Pop Flash is one of the best flashes.', strengths: ['Ability suppression', 'Pop Flash', 'Suppression ult'] },
  { name: 'Fade', role: 'Initiator', tier: 'S', soloQueue: 'Strong', notes: 'Haunt reveals all nearby enemies through walls. Seize roots and decays. Her ult is a trail that tells your team exactly where enemies are for 12 seconds.', strengths: ['Vision through walls', 'Root CC', 'Ult trail'] },
  { name: 'Breach', role: 'Initiator', tier: 'A', soloQueue: 'Good', notes: 'Wall-penetrating utility makes him devastating in tight corridors. Aftershock forces enemies out of corners. Best on maps with thin walls.', strengths: ['Wall-penetrating flash', 'Aftershock', 'Rolling Thunder stun'] },
  { name: 'Gekko', role: 'Initiator', tier: 'A', soloQueue: 'Strong', notes: 'Unique kit with reusable abilities. Dizzy flashes, Wingman plants spike — all retrievable after use. Very strong utility loop in extended games.', strengths: ['Reusable abilities', 'Wingman plant', 'Thrash suppression'] },

  // Sentinels
  { name: 'Killjoy', role: 'Sentinel', tier: 'S', soloQueue: 'Strong', notes: 'Best site anchor in the game. Turret gives info + harassment, Alarm Bot catches flanks, Nanoswarm denies plant/defuse. Her ult locks down a site.', strengths: ['Passive site control', 'Alarm Bot flanks', 'Lockdown ult'] },
  { name: 'Cypher', role: 'Sentinel', tier: 'A', soloQueue: 'Strong', notes: 'Information sentinel. Trapwire catches flanks, Spycam monitors any angle, Neural Theft reveals all remaining enemies on death. Strong solo queue pick.', strengths: ['Neural Theft ult', 'Trapwire flank coverage', 'SpyCam'] },
  { name: 'Sage', role: 'Sentinel', tier: 'A', soloQueue: 'Strong', notes: 'Self-sufficient healer. The ult (resurrect) is the most impactful ability in the game when used correctly. Wall blocks chokepoints and enables team plays.', strengths: ['Self-heal', 'Resurrect ult', 'Wall blocking'] },
  { name: 'Chamber', role: 'Sentinel', tier: 'B', soloQueue: 'Good', notes: 'After multiple nerfs, Chamber lost dominance. Still strong with an Operator (Headhunter + TP escape). Tour de Force ult remains excellent for eco rounds.', strengths: ['Operator playstyle', 'TP escape', 'Trapwire variant'] },
  { name: 'Deadlock', role: 'Sentinel', tier: 'B', soloQueue: 'Situational', notes: 'Underrated. GravNet slows and prevents jumping, Sonic Sensor stuns. Her ult cocoons and kills. Works well on maps with tight corridors.', strengths: ['GravNet slow', 'Sonic Sensor stun', 'Annihilation ult'] },
]

const tierConfig: Record<Tier, { label: string; color: string; bg: string; description: string }> = {
  S: { label: 'S Tier', color: 'text-red-400', bg: 'bg-red-900/20 border-red-800/40', description: 'Pick whenever possible. Strong in almost every comp and map.' },
  A: { label: 'A Tier', color: 'text-orange-400', bg: 'bg-orange-900/20 border-orange-800/40', description: 'Reliable and strong. Solid choice in most situations.' },
  B: { label: 'B Tier', color: 'text-yellow-400', bg: 'bg-yellow-900/20 border-yellow-800/40', description: 'Good situationally. Map or comp dependent.' },
  C: { label: 'C Tier', color: 'text-green-400', bg: 'bg-green-900/20 border-green-800/40', description: 'Below average for current meta. Only pick if very comfortable.' },
  D: { label: 'D Tier', color: 'text-gray-400', bg: 'bg-gray-900/20 border-gray-800/40', description: 'Avoid in ranked unless you have a specific counter-strategy.' },
}

const roleColors: Record<string, string> = {
  Duelist: 'bg-red-900/40 text-red-300',
  Controller: 'bg-purple-900/40 text-purple-300',
  Initiator: 'bg-green-900/40 text-green-300',
  Sentinel: 'bg-blue-900/40 text-blue-300',
}

const soloQueueColors: Record<string, string> = {
  Strong: 'text-green-400',
  Good: 'text-yellow-400',
  Situational: 'text-orange-400',
  Weak: 'text-red-400',
}

const tierListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Valorant Agent Tier List 2025 — Best Agents for Ranked Solo Queue',
  description: 'Complete Valorant agent tier list for ranked play. S, A, B, C tier rankings by role with solo queue ratings and notes for every agent.',
  author: { '@type': 'Person', name: 'UltraRadiant' },
  datePublished: '2025-01-01',
  dateModified: '2025-03-18',
}

export default function TierList() {
  const [activeRole, setActiveRole] = useState<Role>('All')
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)

  const roles: Role[] = ['All', 'Duelist', 'Controller', 'Initiator', 'Sentinel']
  const tiers: Tier[] = ['S', 'A', 'B', 'C', 'D']

  const filteredAgents = agents.filter((a) => activeRole === 'All' || a.role === activeRole)

  return (
    <>
      <SEOHead
        title="Valorant Agent Tier List 2025"
        description="Updated Valorant agent tier list for ranked solo queue. See which agents are S-tier and which to avoid, with role breakdowns and solo queue ratings for every agent."
        keywords="valorant tier list 2025, best valorant agents ranked, valorant solo queue tier list, valorant agent rankings, best agents valorant ranked, valorant s tier agents, valorant controller tier list, valorant duelist tier list"
        canonicalUrl="/tier-list"
        schema={tierListSchema}
      />

      <div className="pt-24 pb-20 min-h-screen bg-val-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-val-red text-xs font-bold uppercase tracking-widest mb-3">
              <HiChartBar /> Patch Updated
            </div>
            <h1 className="val-heading text-4xl sm:text-5xl text-white mb-3">
              Agent <span className="text-val-red">Tier List</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Ranked by solo queue viability, not pro play. A Viper may be S-tier in pro play but only A-tier in solo queue where coordination is limited. Updated regularly with each patch.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="flex gap-2 items-start glass p-4 clip-corner mb-8 text-sm text-gray-400">
            <HiInformationCircle className="text-val-red text-lg flex-shrink-0 mt-0.5" />
            <p>
              Tier lists are one person's opinion based on solo queue experience and community consensus. <strong className="text-white">Your agent mastery matters more than tier position.</strong> A Gold Jett main will outperform a Bronze Clove pilot every time.
            </p>
          </div>

          {/* Role Filter */}
          <div className="flex gap-2 flex-wrap mb-8">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider clip-corner-sm transition-all ${
                  activeRole === role
                    ? 'bg-val-red text-white'
                    : 'border border-val-border text-gray-400 hover:border-val-red hover:text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Tier Rows */}
          <div className="space-y-4">
            {tiers.map((tier) => {
              const tierAgents = filteredAgents.filter((a) => a.tier === tier)
              if (tierAgents.length === 0) return null
              const config = tierConfig[tier]
              return (
                <div key={tier} className={`border rounded-lg overflow-hidden ${config.bg}`}>
                  <div className="flex items-start gap-0 min-h-[80px]">
                    {/* Tier Label */}
                    <div className={`flex items-center justify-center w-20 sm:w-24 flex-shrink-0 self-stretch bg-black/20 border-r border-white/5`}>
                      <div className="text-center">
                        <div className={`text-3xl font-black ${config.color}`}>{tier}</div>
                        <div className="text-gray-500 text-xs hidden sm:block mt-1">Tier</div>
                      </div>
                    </div>

                    {/* Agents */}
                    <div className="flex flex-wrap gap-3 p-4 flex-1">
                      {tierAgents.map((agent) => (
                        <div
                          key={agent.name}
                          className="relative"
                          onMouseEnter={() => setHoveredAgent(agent.name)}
                          onMouseLeave={() => setHoveredAgent(null)}
                        >
                          <div className="flex flex-col items-center gap-1 cursor-pointer group">
                            {/* Agent icon placeholder */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-val-surface border border-val-border flex items-center justify-center text-2xl group-hover:border-val-red transition-colors overflow-hidden">
                              {/* Replace with: <img src={`/images/agents/${agent.name.toLowerCase()}.png`} alt={agent.name} /> */}
                              <span className="text-white font-black text-lg">{agent.name[0]}</span>
                            </div>
                            <span className="text-white text-xs font-semibold">{agent.name}</span>
                            <span className={`text-xs font-bold ${soloQueueColors[agent.soloQueue]}`}>
                              {agent.soloQueue}
                            </span>
                          </div>

                          {/* Tooltip */}
                          {hoveredAgent === agent.name && (
                            <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 glass p-3 clip-corner pointer-events-none">
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-white font-bold text-sm">{agent.name}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded ${roleColors[String(agent.role)]}`}>
                                  {String(agent.role)}
                                </span>
                              </div>
                              <p className="text-gray-300 text-xs leading-relaxed mb-2">{agent.notes}</p>
                              <div className="flex flex-wrap gap-1">
                                {agent.strengths.map((s) => (
                                  <span key={s} className="text-xs bg-val-border text-gray-400 px-1.5 py-0.5 rounded">{s}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Solo Queue Guide */}
          <div className="mt-12 glass p-6 clip-corner">
            <h2 className="text-white font-bold text-xl mb-4">Solo Queue Agent Selection Guide</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h3 className="text-val-red font-bold mb-2">If your team has no controller:</h3>
                <p>Pick Omen or Clove. Controllers win or lose rounds before the fight starts. Playing without smokes in high elo is a handicap.</p>
              </div>
              <div>
                <h3 className="text-val-red font-bold mb-2">If your team has no initiator:</h3>
                <p>Pick Skye or Fade. Pushing sites blind without flashes or info tools is the fastest way to die and lose rounds.</p>
              </div>
              <div>
                <h3 className="text-val-red font-bold mb-2">Best flex picks for solo queue:</h3>
                <p>Reyna (if your aim is strong), Killjoy (for anchoring sites), or KAY/O (for suppressing ability-heavy teams). These work in almost any comp.</p>
              </div>
              <div>
                <h3 className="text-val-red font-bold mb-2">What to avoid insta-locking:</h3>
                <p>Never lock Jett/Reyna if your team already has 2 duelists with no controller or sentinel. Flex picks win more games than ego picks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
