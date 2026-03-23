/**
 * Ultra Radiant — Weekly Vlog Data
 * Each entry documents one week of ranked play + training sessions.
 */
export const vlogs = [
  {
    id: 'week-01',
    week: 1,
    date: '2024-01-07',
    title: 'Week 1 — The Journey Begins',
    subtitle: 'Resetting the mindset, starting fresh.',
    game: 'valorant',
    thumbnail: null,
    rankStart: 'Gold 1',
    rankEnd: 'Gold 2',
    rankColor: 'gold',
    rr: { start: 12, end: 55 },
    record: { wins: 7, losses: 4 },
    agents: ['Jett', 'Reyna'],
    maps: ['Ascent', 'Bind', 'Haven'],
    highlights: [
      '4K clutch on Ascent B-site with Jett — finally executed the dash-to-safety mechanic',
      'First time winning a pistol round by buying shield instead of going full eco',
      'Communicated comp every round — team followed the call 3 times and we won those rounds',
    ],
    lowlights: [
      'Lost 3 straight on Icebox — still not comfortable with angles',
      'Over-peeked mid on Haven twice, gifted easy kills',
      'Tilted after a 3-game lose streak, started playing reactively instead of proactively',
    ],
    trainingNotes: 'Did 20 min of range warmup each morning. Noticed flicking accuracy improved by day 4. Need to work on counter-strafing consistency.',
    keyLessons: [
      'Win rate on maps you instalock is lower than maps chosen by the team — trust the collective.',
      'Crosshair placement beats aim speed every time. Stop spraying at heads, place it there first.',
      'A 1 RR loss stings less than a bad habit left uncorrected.',
    ],
    youtube: null,
    csSession: {
      date: '2024-01-10',
      focus: 'Spray control on AK-47',
      duration: '45 min',
      notes: 'Aim_botz + recoil master. The AK first-shot recoil is brutal coming from Valorant. Muscle memory is completely different. Prioritized landing first 5 bullets accurately rather than full spray.',
    }
  },
  {
    id: 'week-02',
    week: 2,
    date: '2024-01-14',
    title: 'Week 2 — Crosshair Placement Deep Dive',
    subtitle: 'The fundamentals you keep skipping matter.',
    game: 'valorant',
    thumbnail: null,
    rankStart: 'Gold 2',
    rankEnd: 'Gold 3',
    rankColor: 'gold',
    rr: { start: 55, end: 82 },
    record: { wins: 8, losses: 4 },
    agents: ['Omen', 'Jett'],
    maps: ['Split', 'Ascent', 'Fracture'],
    highlights: [
      'Held a 1v3 clutch by using Omen TP to bait the rotation',
      'Hit 68% headshot rate in a single game — crosshair placement drill is paying off',
      'Called out a 3-man stack through a smoke and the info won the round',
    ],
    lowlights: [
      'Went Jett on Fracture and had 8 deaths in 10 rounds — agent-map matchup matters',
      'Let frustration with a teammate affect buy decisions — punished immediately',
    ],
    trainingNotes: 'Switched warmup to custom game firing range: 7-7-7 drill (7 min bots, 7 min flicking, 7 min tracking). Noticeably sharper after.',
    keyLessons: [
      'Pre-aim every corner you walk past. Habit formation > reaction time.',
      'Omen\'s blind/teleport wins more rounds than mechanical skill on low ranks.',
      'Mute toxic players immediately — emotional state directly tanks performance.',
    ],
    youtube: null,
    csSession: {
      date: '2024-01-17',
      focus: 'AWP flicking + deathmatch',
      duration: '1 hr',
      notes: 'Deathmatch on Dust2 for 30 min. AWP is wildly satisfying when it connects. Much slower playstyle than Valorant. Learned to take fewer duels and play more off-angles.',
    }
  },
  {
    id: 'week-03',
    week: 3,
    date: '2024-01-21',
    title: 'Week 3 — The Plat Push',
    subtitle: 'Grinding toward Platinum and building a vlog routine.',
    game: 'valorant',
    thumbnail: null,
    rankStart: 'Gold 3',
    rankEnd: 'Gold 3',
    rankColor: 'gold',
    rr: { start: 82, end: 45 },
    record: { wins: 5, losses: 7 },
    agents: ['Omen', 'Breach', 'Kayo'],
    maps: ['Lotus', 'Pearl', 'Split'],
    highlights: [
      'First time playing Breach seriously — flashbang utility completely changes how enemies play',
      'Saved a full-buy round by calling exactly where to hold given their economy',
      'Shot a 360 no-scope with the Operator to defuse a clutch — completely on accident but felt amazing',
    ],
    lowlights: [
      'Dropped from 95 RR to 45 in 3 days — classic tilt spiral',
      'Kept playing when tired. Every session after 11 PM ended in a loss.',
      'Pearl is genuinely rough — need dedicated map study sessions',
    ],
    trainingNotes: 'Introduced VOD reviews — watching back 2 rounds per session. Caught myself over-peeking mid Pearl 4 times and not even noticing during gameplay.',
    keyLessons: [
      'Stop playing tired. Schedule sessions like workouts — when the energy\'s gone, quit.',
      'VOD review reveals habits your muscle memory hides from you.',
      'Soft agents (Breach, KAY/O) teach you more about game state than fraggers do.',
    ],
    youtube: null,
    csSession: {
      date: '2024-01-24',
      focus: 'Utility lineups on Mirage',
      duration: '1 hr 15 min',
      notes: 'Practiced CT-side smokes from spawn for window and jungle. Then A-site entry smokes. CS utility execution is significantly more complex than Valorant — the arcs are all manual.',
    }
  },
  {
    id: 'week-04',
    week: 4,
    date: '2024-01-28',
    title: 'Week 4 — Climbing Back',
    subtitle: 'Recovering from the tilt with structure.',
    game: 'valorant',
    thumbnail: null,
    rankStart: 'Gold 3',
    rankEnd: 'Platinum 1',
    rankColor: 'platinum',
    rr: { start: 45, end: 20 },
    record: { wins: 9, losses: 3 },
    agents: ['Omen', 'Neon'],
    maps: ['Ascent', 'Sunset', 'Bind'],
    highlights: [
      'Finally hit Platinum 1 — first time ever reaching this rank',
      'Won 6 consecutive games with Omen on Ascent — found a playstyle that clicked',
      'Content creation milestone: posted first Twitter clip and got 180 impressions',
    ],
    lowlights: [
      'Neon on Sunset was a mistake — too much movement, no game sense to back it up yet',
      'Lost a clutch round by reloading at the worst possible moment',
    ],
    trainingNotes: 'Set a hard limit of 3 games per session, 2 sessions/day max. Win rate went from 42% to 75% immediately. Quality over quantity.',
    keyLessons: [
      'Discipline > motivation. Structured sessions beat marathon grinding every time.',
      'Celebrate small wins — Plat 1 is real progress, not just a number.',
      'Content creation is part of the journey, not a distraction from it.',
    ],
    youtube: null,
    csSession: {
      date: '2024-01-31',
      focus: 'Full competitive match on Inferno',
      duration: '1 hr 45 min',
      notes: 'First full comp match on CS2. Team was mostly puggers. Went 18/14/5 — happy with kills for first real match. CT-side banana holds with a rifle feel totally different from T-side.',
    }
  },
  {
    id: 'week-05',
    week: 5,
    date: '2024-02-04',
    title: 'Week 5 — Platinum Life',
    subtitle: 'A harder lobby, a smarter player.',
    game: 'valorant',
    thumbnail: null,
    rankStart: 'Platinum 1',
    rankEnd: 'Platinum 2',
    rankColor: 'platinum',
    rr: { start: 20, end: 48 },
    record: { wins: 7, losses: 5 },
    agents: ['Omen', 'Vyse', 'Breach'],
    maps: ['Abyss', 'Ascent', 'Split'],
    highlights: [
      'Played Abyss for the first time seriously — love the chaos of this map',
      'Had a 1v4 clutch with Omen — smoked off 2 angles, got 2 kills blind-running the third',
      'Opponent team messaged GG after the match — respect is earned, not asked for',
    ],
    lowlights: [
      'Getting hardstuck at Plat 1 mid-week — the skill gap between Gold and Plat is real',
      'My mic was causing echo — lost a round because teammates couldn\'t hear my call',
    ],
    trainingNotes: 'Started including 15 min of mental prep before sessions: reviewing one VOD from last week\'s losses. Changed my queue time from 10 PM to 7 PM.',
    keyLessons: [
      'Platinum players punish rotation bait far more than Gold. Slow down.',
      'Team communication quality is the single highest-leverage improvement available.',
      'Every map has a flow state — find yours before locking in.',
    ],
    youtube: null,
    csSession: {
      date: '2024-02-07',
      focus: 'M4 vs. AK matchup study',
      duration: '50 min',
      notes: 'Deathmatch with alternating rifles. M4 on CT side feels way more forgiving. AK one-taps are a different skill entirely. Need to learn when to burst vs. spray at what distance.',
    }
  },
]

export function getVlogById(id) {
  return vlogs.find(v => v.id === id) || null
}

export function getLatestVlog() {
  return vlogs[vlogs.length - 1]
}

export const journeyStats = {
  startRank: 'Gold 1',
  currentRank: 'Platinum 2',
  targetRank: 'Radiant',
  totalGames: 112,
  totalWins: 67,
  totalLosses: 45,
  hoursPlayed: 186,
  weeksDocumented: 5,
  peakRR: 82,
  currentRR: 48,
}
