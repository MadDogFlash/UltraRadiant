<template>
  <main class="page home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__bg-lines" aria-hidden="true"></div>
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="section-label">The Grind is Documented</p>
          <h1 class="hero__title">
            Ranked Journey<br />
            <span class="hero__title-accent">to Radiant</span>
          </h1>
          <p class="hero__desc">
            Weekly vlogs of a competitive player grinding Valorant ranked and sharpening skills in Counter-Strike. Every session tracked. Every loss learned from. Every step toward Radiant documented.
          </p>
          <div class="hero__ctas">
            <RouterLink to="/vlogs" class="btn btn--primary">Watch the Journey</RouterLink>
            <RouterLink to="/drills" class="btn btn--outline">View Drills</RouterLink>
          </div>
        </div>
        <div class="hero__rank-card">
          <div class="hero__rank-card-inner">
            <div class="rank-display">
              <span class="rank-display__label">CURRENT RANK</span>
              <span class="rank-display__rank rank rank--platinum">PLATINUM II</span>
              <div class="rank-display__rr">
                <div class="progress-bar">
                  <div class="progress-bar__fill" :style="{ width: rrPercent + '%' }"></div>
                </div>
                <span class="rank-display__rr-text">{{ stats.currentRR }} RR</span>
              </div>
            </div>
            <div class="rank-arrow-group">
              <span class="rank-arrow-group__from rank rank--gold">Gold I</span>
              <span class="rank-arrow-group__arrow">→→→→→</span>
              <span class="rank-arrow-group__to rank rank--radiant">Radiant</span>
            </div>
            <div class="hero__mini-stats">
              <div class="mini-stat">
                <span class="mini-stat__value">{{ stats.totalWins }}</span>
                <span class="mini-stat__label">Wins</span>
              </div>
              <div class="mini-stat">
                <span class="mini-stat__value">{{ stats.hoursPlayed }}h</span>
                <span class="mini-stat__label">Played</span>
              </div>
              <div class="mini-stat">
                <span class="mini-stat__value">W{{ winRate }}%</span>
                <span class="mini-stat__label">Win Rate</span>
              </div>
              <div class="mini-stat">
                <span class="mini-stat__value">{{ stats.weeksDocumented }}</span>
                <span class="mini-stat__label">Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LATEST VLOG -->
    <section class="section container">
      <div class="section-header">
        <p class="section-label">Latest Entry</p>
        <h2 class="section-title">This Week's Vlog</h2>
        <RouterLink to="/vlogs" class="section-link">All weeks →</RouterLink>
      </div>
      <RouterLink :to="`/vlogs/${latest.id}`" class="featured-vlog card">
        <div class="featured-vlog__header">
          <div class="featured-vlog__meta">
            <span class="tag tag--val">Week {{ latest.week }}</span>
            <span class="featured-vlog__date">{{ formatDate(latest.date) }}</span>
          </div>
          <h3 class="featured-vlog__title">{{ latest.title }}</h3>
          <p class="featured-vlog__subtitle">{{ latest.subtitle }}</p>
        </div>
        <div class="featured-vlog__body">
          <div class="featured-vlog__col">
            <h4 class="featured-vlog__col-title">Highlights</h4>
            <ul class="featured-vlog__list featured-vlog__list--green">
              <li v-for="h in latest.highlights.slice(0, 2)" :key="h">{{ h }}</li>
            </ul>
          </div>
          <div class="featured-vlog__col">
            <h4 class="featured-vlog__col-title">What to Improve</h4>
            <ul class="featured-vlog__list featured-vlog__list--red">
              <li v-for="l in latest.lowlights.slice(0, 2)" :key="l">{{ l }}</li>
            </ul>
          </div>
        </div>
        <div class="featured-vlog__footer">
          <div class="rank-change">
            <span :class="`rank rank--${latest.rankColor}`">{{ latest.rankStart }}</span>
            <span class="rank-change__arrow">→</span>
            <span :class="`rank rank--${latest.rankEnd?.toLowerCase() || latest.rankColor}`">{{ latest.rankEnd }}</span>
          </div>
          <span class="featured-vlog__cta">Read full entry →</span>
        </div>
      </RouterLink>
    </section>

    <!-- GAMES SPLIT -->
    <section class="section container">
      <div class="section-header">
        <p class="section-label">The Two-Game Grind</p>
        <h2 class="section-title">Training Across Both Games</h2>
      </div>
      <div class="games-grid">
        <div class="game-card card">
          <div class="game-card__badge game-card__badge--val">VALORANT</div>
          <h3 class="game-card__title">Ranked Climb</h3>
          <p class="game-card__desc">Weekly Valorant ranked sessions with full VOD breakdowns. Tracking every rank gain and loss, analyzing decision-making, and building agent mastery.</p>
          <ul class="game-card__features">
            <li>✓ Weekly rank updates & RR tracking</li>
            <li>✓ Agent selection analysis</li>
            <li>✓ Map-specific improvement goals</li>
            <li>✓ Clutch and lowlight reviews</li>
          </ul>
          <RouterLink to="/vlogs" class="game-card__link">View vlogs →</RouterLink>
        </div>
        <div class="game-card card">
          <div class="game-card__badge game-card__badge--cs">COUNTER-STRIKE 2</div>
          <h3 class="game-card__title">Cross-Training</h3>
          <p class="game-card__desc">Using CS2 to sharpen raw mechanics — spray control, movement discipline, and utility mastery. Skills that transfer directly back to Valorant.</p>
          <ul class="game-card__features">
            <li>✓ Spray pattern drills (AK, M4)</li>
            <li>✓ Counter-strafe discipline</li>
            <li>✓ Smokes & utility lineups</li>
            <li>✓ Map control & info play</li>
          </ul>
          <RouterLink to="/drills" class="game-card__link">View CS drills →</RouterLink>
        </div>
      </div>
    </section>

    <!-- DRILL PREVIEW -->
    <section class="section container">
      <div class="section-header">
        <p class="section-label">Practice Protocol</p>
        <h2 class="section-title">Featured Drills</h2>
        <RouterLink to="/drills" class="section-link">All drills →</RouterLink>
      </div>
      <div class="drills-preview">
        <RouterLink
          v-for="drill in featuredDrills"
          :key="drill.id"
          to="/drills"
          class="drill-preview-card card"
        >
          <div class="drill-preview-card__top">
            <span :class="drill.game === 'valorant' ? 'tag tag--val' : 'tag tag--cs'">
              {{ drill.game === 'valorant' ? 'Valorant' : 'CS2' }}
            </span>
            <span class="drill-preview-card__duration">{{ drill.duration }}</span>
          </div>
          <h4 class="drill-preview-card__title">{{ drill.title }}</h4>
          <p class="drill-preview-card__desc">{{ drill.description }}</p>
          <div class="drill-preview-card__meta">
            <span class="drill-preview-card__freq">{{ drill.frequency }}</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- MISSION -->
    <section class="section section--dark container">
      <div class="mission">
        <p class="section-label">The Goal</p>
        <h2 class="mission__title">Content Creator Through Competitive Play</h2>
        <p class="mission__body">
          Ultra Radiant is a public commitment: grind from Gold to Radiant, document every week with honest detail, and build an audience through the process — not by going viral, but by being consistent and real. The content IS the journey.
        </p>
        <div class="mission__pillars">
          <div class="pillar">
            <span class="pillar__icon">📹</span>
            <h4>Weekly Vlogs</h4>
            <p>Every ranked session gets documented — wins, losses, tilt, breakthroughs.</p>
          </div>
          <div class="pillar">
            <span class="pillar__icon">🎯</span>
            <h4>Drill Library</h4>
            <p>A growing reference of drills used in active training — nothing theoretical.</p>
          </div>
          <div class="pillar">
            <span class="pillar__icon">📈</span>
            <h4>Transparent Progress</h4>
            <p>Every RR change, every rank up and down, tracked publicly week by week.</p>
          </div>
        </div>
        <RouterLink to="/about" class="btn btn--outline">About the Creator →</RouterLink>
      </div>
    </section>

  </main>
</template>

<script setup>
import { computed } from 'vue'
import { journeyStats, vlogs } from '../data/vlogs.js'
import { allDrills } from '../data/drills.js'

const stats = journeyStats
const latest = vlogs[vlogs.length - 1]
const featuredDrills = allDrills.slice(0, 3)

const rrPercent = computed(() => Math.min(100, Math.max(0, stats.currentRR)))
const winRate = computed(() => Math.round((stats.totalWins / stats.totalGames) * 100))

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}
</script>

<style scoped>
/* ---- Hero ---- */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem 0 4rem;
}

.hero__bg-lines {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 79px,
      rgba(255,70,85,0.03) 79px,
      rgba(255,70,85,0.03) 80px
    ),
    radial-gradient(ellipse 60% 70% at 75% 50%, rgba(255,70,85,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 4rem;
  align-items: center;
}

.hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--text-primary);
  margin: 0.5rem 0 1rem;
}
.hero__title-accent { color: var(--ur-red); }

.hero__desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
  max-width: 520px;
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Rank card */
.hero__rank-card {
  position: relative;
}
.hero__rank-card-inner {
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,70,85,0.1);
}

.rank-display { display: flex; flex-direction: column; gap: 0.5rem; }
.rank-display__label {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.rank-display__rank { font-size: 2rem; }
.rank-display__rr { display: flex; align-items: center; gap: 0.75rem; margin-top: 0.25rem; }
.rank-display__rr-text { font-size: 0.8rem; color: var(--text-secondary); white-space: nowrap; }

.rank-arrow-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}
.rank-arrow-group__arrow {
  color: var(--text-muted);
  letter-spacing: -3px;
  font-size: 0.8rem;
}

.hero__mini-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  border-top: 1px solid var(--bg-border);
  padding-top: 1.25rem;
}
.mini-stat { display: flex; flex-direction: column; gap: 0.2rem; }
.mini-stat__value { font-family: var(--font-display); font-size: 1.5rem; color: var(--text-primary); }
.mini-stat__label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }

/* ---- Sections ---- */
.section { padding: 5rem 0; }
.section--dark {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: 3rem;
  margin: 2rem 0;
}

.section-header {
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.section-title {
  font-size: 1.8rem;
  color: var(--text-primary);
  flex: 1;
}
.section-link {
  color: var(--ur-red);
  font-size: 0.875rem;
  font-weight: 500;
  transition: var(--transition);
  white-space: nowrap;
  padding-bottom: 2px;
}
.section-link:hover { text-decoration: underline; }

/* ---- Featured Vlog ---- */
.featured-vlog {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.75rem;
  cursor: pointer;
}
.featured-vlog__header { display: flex; flex-direction: column; gap: 0.5rem; }
.featured-vlog__meta { display: flex; align-items: center; gap: 0.75rem; }
.featured-vlog__date { font-size: 0.8rem; color: var(--text-muted); }
.featured-vlog__title { font-size: 1.5rem; color: var(--text-primary); }
.featured-vlog__subtitle { color: var(--text-secondary); font-size: 0.95rem; }

.featured-vlog__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  border-top: 1px solid var(--bg-border);
  padding-top: 1.25rem;
}
.featured-vlog__col-title {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}
.featured-vlog__list { display: flex; flex-direction: column; gap: 0.6rem; }
.featured-vlog__list li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding-left: 1.1rem;
  position: relative;
  line-height: 1.5;
}
.featured-vlog__list--green li::before { content: '✓'; position: absolute; left: 0; color: #69f0ae; }
.featured-vlog__list--red li::before { content: '✗'; position: absolute; left: 0; color: var(--ur-red); }

.featured-vlog__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--bg-border);
  padding-top: 1rem;
}
.rank-change { display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem; }
.rank-change__arrow { color: var(--text-muted); }
.featured-vlog__cta { color: var(--ur-red); font-size: 0.875rem; font-weight: 500; }

/* ---- Games Grid ---- */
.games-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.game-card { padding: 1.75rem; display: flex; flex-direction: column; gap: 1rem; }
.game-card__badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 0.25rem 0.7rem;
  border-radius: 3px;
  width: fit-content;
}
.game-card__badge--val {
  background: rgba(255,70,85,0.12);
  color: var(--ur-red);
  border: 1px solid rgba(255,70,85,0.25);
}
.game-card__badge--cs {
  background: rgba(240,180,41,0.1);
  color: var(--cs-yellow);
  border: 1px solid rgba(240,180,41,0.25);
}
.game-card__title { font-size: 1.3rem; color: var(--text-primary); }
.game-card__desc { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.65; }
.game-card__features { display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.25rem; }
.game-card__features li { font-size: 0.875rem; color: var(--text-secondary); }
.game-card__link { color: var(--ur-red); font-size: 0.875rem; font-weight: 500; margin-top: auto; }
.game-card__link:hover { text-decoration: underline; }

/* ---- Drills Preview ---- */
.drills-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.drill-preview-card { padding: 1.4rem; display: flex; flex-direction: column; gap: 0.75rem; cursor: pointer; }
.drill-preview-card__top { display: flex; align-items: center; justify-content: space-between; }
.drill-preview-card__duration { font-size: 0.78rem; color: var(--text-muted); }
.drill-preview-card__title { font-family: var(--font-display); font-size: 1.1rem; color: var(--text-primary); line-height: 1.3; }
.drill-preview-card__desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; flex: 1; }
.drill-preview-card__freq { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.07em; }

/* ---- Mission ---- */
.mission { display: flex; flex-direction: column; gap: 1.25rem; max-width: 800px; }
.mission__title { font-size: 2rem; color: var(--text-primary); }
.mission__body { color: var(--text-secondary); line-height: 1.75; font-size: 1.05rem; }
.mission__pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 0.75rem 0; }
.pillar { display: flex; flex-direction: column; gap: 0.4rem; }
.pillar__icon { font-size: 1.5rem; }
.pillar h4 { font-size: 1rem; color: var(--text-primary); }
.pillar p { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__rank-card { display: none; }
  .games-grid { grid-template-columns: 1fr; }
  .drills-preview { grid-template-columns: 1fr 1fr; }
  .featured-vlog__body { grid-template-columns: 1fr; }
  .mission__pillars { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .drills-preview { grid-template-columns: 1fr; }
  .hero__ctas { flex-direction: column; }
}
</style>
