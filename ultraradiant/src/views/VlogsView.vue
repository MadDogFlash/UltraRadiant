<template>
  <main class="page">
    <div class="container">

      <!-- Header -->
      <div class="vlogs-header">
        <p class="section-label">All Entries</p>
        <h1 class="vlogs-title">Weekly Vlog Journal</h1>
        <p class="vlogs-desc">
          Every week of the ranked grind — Valorant sessions, Counter-Strike training, rank changes, what worked and what didn't. Nothing filtered out.
        </p>
      </div>

      <!-- Journey Progress Bar -->
      <div class="journey-bar card">
        <div class="journey-bar__col">
          <span class="journey-bar__label">Started</span>
          <span class="rank rank--gold">Gold I</span>
        </div>
        <div class="journey-bar__track">
          <div class="journey-bar__ranks">
            <span v-for="r in rankSteps" :key="r.name" class="journey-bar__step" :class="{ 'journey-bar__step--done': r.done, 'journey-bar__step--current': r.current }">
              <span :class="`rank rank--${r.cls}`">{{ r.name }}</span>
            </span>
          </div>
          <div class="progress-bar" style="margin-top: 0.6rem;">
            <div class="progress-bar__fill" :style="{ width: progressPercent + '%' }"></div>
          </div>
        </div>
        <div class="journey-bar__col journey-bar__col--right">
          <span class="journey-bar__label">Goal</span>
          <span class="rank rank--radiant">Radiant</span>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="stats-row">
        <div class="stat-box card">
          <span class="stat-box__value">{{ stats.totalGames }}</span>
          <span class="stat-box__label">Games Played</span>
        </div>
        <div class="stat-box card">
          <span class="stat-box__value">{{ winRate }}%</span>
          <span class="stat-box__label">Win Rate</span>
        </div>
        <div class="stat-box card">
          <span class="stat-box__value">{{ stats.hoursPlayed }}h</span>
          <span class="stat-box__label">Hours Played</span>
        </div>
        <div class="stat-box card">
          <span class="stat-box__value">{{ stats.weeksDocumented }}</span>
          <span class="stat-box__label">Weeks Logged</span>
        </div>
      </div>

      <!-- Vlog Feed -->
      <div class="vlog-feed">
        <RouterLink
          v-for="vlog in sortedVlogs"
          :key="vlog.id"
          :to="`/vlogs/${vlog.id}`"
          class="vlog-card card"
        >
          <div class="vlog-card__left">
            <span class="vlog-card__week">W{{ vlog.week }}</span>
          </div>
          <div class="vlog-card__body">
            <div class="vlog-card__meta">
              <span :class="vlog.game === 'valorant' ? 'tag tag--val' : 'tag tag--cs'">
                {{ vlog.game === 'valorant' ? 'Valorant' : 'CS2' }}
              </span>
              <span class="vlog-card__date">{{ formatDate(vlog.date) }}</span>
              <span class="vlog-card__record">{{ vlog.record.wins }}W / {{ vlog.record.losses }}L</span>
            </div>
            <h3 class="vlog-card__title">{{ vlog.title }}</h3>
            <p class="vlog-card__subtitle">{{ vlog.subtitle }}</p>
            <p class="vlog-card__training-preview" v-if="vlog.csSession">
              <span class="tag tag--cs" style="font-size: 0.65rem; padding: 0.1rem 0.5rem;">CS2</span>
              {{ vlog.csSession.focus }}
            </p>
          </div>
          <div class="vlog-card__right">
            <div class="rank-shift">
              <div :class="`rank rank--${vlog.rankColor}`">{{ vlog.rankStart }}</div>
              <div class="rank-shift__arrow">↓</div>
              <div :class="`rank rank--${getRankClass(vlog.rankEnd)}`">{{ vlog.rankEnd }}</div>
            </div>
            <div :class="['rr-change', getRRDiff(vlog) >= 0 ? 'rr-change--up' : 'rr-change--down']">
              {{ getRRDiff(vlog) >= 0 ? '+' : '' }}{{ getRRDiff(vlog) }} RR
            </div>
            <span class="vlog-card__arrow">→</span>
          </div>
        </RouterLink>
      </div>

    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { vlogs, journeyStats } from '../data/vlogs.js'

const stats = journeyStats
const sortedVlogs = [...vlogs].reverse()

const winRate = computed(() => Math.round((stats.totalWins / stats.totalGames) * 100))

const rankSteps = [
  { name: 'Gold', cls: 'gold', done: true, current: false },
  { name: 'Platinum', cls: 'platinum', done: true, current: true },
  { name: 'Diamond', cls: 'diamond', done: false, current: false },
  { name: 'Ascendant', cls: 'ascendant', done: false, current: false },
  { name: 'Immortal', cls: 'immortal', done: false, current: false },
  { name: 'Radiant', cls: 'radiant', done: false, current: false },
]

const progressPercent = 22

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getRankClass(rankName) {
  if (!rankName) return 'gold'
  const name = rankName.toLowerCase()
  if (name.includes('iron')) return 'iron'
  if (name.includes('bronze')) return 'bronze'
  if (name.includes('silver')) return 'silver'
  if (name.includes('gold')) return 'gold'
  if (name.includes('platinum')) return 'platinum'
  if (name.includes('diamond')) return 'diamond'
  if (name.includes('ascendant')) return 'ascendant'
  if (name.includes('immortal')) return 'immortal'
  if (name.includes('radiant')) return 'radiant'
  return 'gold'
}

function getRRDiff(vlog) {
  return vlog.rr.end - vlog.rr.start
}
</script>

<style scoped>
.vlogs-header {
  padding: 3rem 0 2rem;
}
.vlogs-title { font-size: 2.5rem; color: var(--text-primary); margin: 0.4rem 0 0.75rem; }
.vlogs-desc { color: var(--text-secondary); max-width: 560px; font-size: 1rem; line-height: 1.7; }

/* Journey bar */
.journey-bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
}
.journey-bar__col { display: flex; flex-direction: column; gap: 0.2rem; white-space: nowrap; }
.journey-bar__col--right { text-align: right; }
.journey-bar__label { font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
.journey-bar__track { flex: 1; }
.journey-bar__ranks { display: flex; justify-content: space-between; }
.journey-bar__step { font-size: 0.8rem; opacity: 0.4; transition: opacity 0.2s; }
.journey-bar__step--done { opacity: 0.7; }
.journey-bar__step--current { opacity: 1; }

/* Stats row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.stat-box {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: center;
}
.stat-box__value { font-family: var(--font-display); font-size: 2rem; color: var(--text-primary); }
.stat-box__label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }

/* Vlog feed */
.vlog-feed { display: flex; flex-direction: column; gap: 1rem; padding-bottom: 4rem; }

.vlog-card {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  align-items: center;
  gap: 1.25rem;
  padding: 1.4rem 1.5rem;
  cursor: pointer;
}

.vlog-card__left {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem;
  width: 52px;
  height: 52px;
}
.vlog-card__week { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text-secondary); }

.vlog-card__body { display: flex; flex-direction: column; gap: 0.35rem; min-width: 0; }
.vlog-card__meta { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
.vlog-card__date { font-size: 0.78rem; color: var(--text-muted); }
.vlog-card__record { font-size: 0.78rem; color: var(--text-muted); }
.vlog-card__title { font-size: 1.05rem; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.vlog-card__subtitle { font-size: 0.875rem; color: var(--text-secondary); }
.vlog-card__training-preview { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted); }

.vlog-card__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
}
.rank-shift { display: flex; flex-direction: column; align-items: flex-end; gap: 0.1rem; font-size: 0.85rem; }
.rank-shift__arrow { color: var(--text-muted); font-size: 0.7rem; }

.rr-change {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
}
.rr-change--up { color: #69f0ae; }
.rr-change--down { color: var(--ur-red); }

.vlog-card__arrow { color: var(--text-muted); font-size: 1.1rem; margin-top: 0.25rem; }

@media (max-width: 768px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .vlog-card { grid-template-columns: 1fr; }
  .vlog-card__left { display: none; }
  .vlog-card__right { flex-direction: row; align-items: center; border-top: 1px solid var(--bg-border); padding-top: 0.75rem; }
  .journey-bar { flex-direction: column; }
  .journey-bar__ranks { display: none; }
}
</style>
