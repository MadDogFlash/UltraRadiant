<template>
  <main class="page" v-if="vlog">
    <div class="container">

      <!-- Back -->
      <RouterLink to="/vlogs" class="back-link">← All vlogs</RouterLink>

      <!-- Header -->
      <header class="vlog-header">
        <div class="vlog-header__meta">
          <span :class="vlog.game === 'valorant' ? 'tag tag--val' : 'tag tag--cs'">
            Week {{ vlog.week }}
          </span>
          <span class="vlog-header__date">{{ formatDate(vlog.date) }}</span>
        </div>
        <h1 class="vlog-header__title">{{ vlog.title }}</h1>
        <p class="vlog-header__subtitle">{{ vlog.subtitle }}</p>

        <!-- Session Stats -->
        <div class="session-stats">
          <div class="session-stat">
            <span class="session-stat__label">Record</span>
            <span class="session-stat__value">{{ vlog.record.wins }}W {{ vlog.record.losses }}L</span>
          </div>
          <div class="session-stat">
            <span class="session-stat__label">Rank Start</span>
            <span :class="`session-stat__value rank rank--${vlog.rankColor}`">{{ vlog.rankStart }}</span>
          </div>
          <div class="session-stat">
            <span class="session-stat__label">Rank End</span>
            <span :class="`session-stat__value rank rank--${getRankClass(vlog.rankEnd)}`">{{ vlog.rankEnd }}</span>
          </div>
          <div class="session-stat">
            <span class="session-stat__label">RR Change</span>
            <span :class="['session-stat__value', rrDiff >= 0 ? 'positive' : 'negative']">
              {{ rrDiff >= 0 ? '+' : '' }}{{ rrDiff }} RR
            </span>
          </div>
          <div class="session-stat">
            <span class="session-stat__label">Agents</span>
            <span class="session-stat__value">{{ vlog.agents.join(', ') }}</span>
          </div>
          <div class="session-stat">
            <span class="session-stat__label">Maps</span>
            <span class="session-stat__value">{{ vlog.maps.join(', ') }}</span>
          </div>
        </div>
      </header>

      <div class="vlog-body">
        <!-- Main Content -->
        <div class="vlog-main">

          <!-- Highlights -->
          <section class="vlog-section">
            <h2 class="vlog-section__title vlog-section__title--green">Session Highlights</h2>
            <ul class="vlog-section__list vlog-section__list--green">
              <li v-for="h in vlog.highlights" :key="h">{{ h }}</li>
            </ul>
          </section>

          <!-- Lowlights -->
          <section class="vlog-section">
            <h2 class="vlog-section__title vlog-section__title--red">What Went Wrong</h2>
            <ul class="vlog-section__list vlog-section__list--red">
              <li v-for="l in vlog.lowlights" :key="l">{{ l }}</li>
            </ul>
          </section>

          <!-- Training Notes -->
          <section class="vlog-section">
            <h2 class="vlog-section__title">Training Notes</h2>
            <p class="vlog-section__text">{{ vlog.trainingNotes }}</p>
          </section>

          <!-- Key Lessons -->
          <section class="vlog-section">
            <h2 class="vlog-section__title">Key Lessons This Week</h2>
            <ul class="vlog-section__lessons">
              <li v-for="(lesson, i) in vlog.keyLessons" :key="lesson">
                <span class="lesson__num">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="lesson__text">{{ lesson }}</span>
              </li>
            </ul>
          </section>

          <!-- Navigation -->
          <div class="vlog-nav">
            <RouterLink v-if="prevVlog" :to="`/vlogs/${prevVlog.id}`" class="vlog-nav__btn vlog-nav__btn--prev card">
              <span class="vlog-nav__dir">← Previous</span>
              <span class="vlog-nav__title">{{ prevVlog.title }}</span>
            </RouterLink>
            <div v-else class="vlog-nav__placeholder"></div>
            <RouterLink v-if="nextVlog" :to="`/vlogs/${nextVlog.id}`" class="vlog-nav__btn vlog-nav__btn--next card">
              <span class="vlog-nav__dir">Next →</span>
              <span class="vlog-nav__title">{{ nextVlog.title }}</span>
            </RouterLink>
          </div>

        </div>

        <!-- Sidebar -->
        <aside class="vlog-sidebar">

          <!-- CS Session -->
          <div v-if="vlog.csSession" class="sidebar-card card sidebar-card--cs">
            <div class="sidebar-card__header">
              <span class="tag tag--cs">CS2 Session</span>
            </div>
            <h3 class="sidebar-card__title">{{ vlog.csSession.focus }}</h3>
            <div class="sidebar-card__meta">
              <span>{{ vlog.csSession.duration }}</span>
              <span>{{ formatDate(vlog.csSession.date) }}</span>
            </div>
            <p class="sidebar-card__text">{{ vlog.csSession.notes }}</p>
          </div>

          <!-- RR Chart -->
          <div class="sidebar-card card">
            <div class="sidebar-card__header">
              <span class="sidebar-card__heading">RR This Week</span>
            </div>
            <div class="rr-visual">
              <div class="rr-visual__bar">
                <div class="rr-visual__fill" :style="{ height: (vlog.rr.end / 100 * 100) + '%' }"></div>
              </div>
              <div class="rr-visual__labels">
                <span :class="rrDiff >= 0 ? 'positive' : 'negative'" class="rr-visual__delta">
                  {{ rrDiff >= 0 ? '+' : '' }}{{ rrDiff }} RR
                </span>
                <span class="rr-visual__end">{{ vlog.rr.end }} / 100</span>
              </div>
            </div>
          </div>

          <!-- Agent Used -->
          <div class="sidebar-card card">
            <div class="sidebar-card__header">
              <span class="sidebar-card__heading">Agents Played</span>
            </div>
            <div class="agent-tags">
              <span v-for="agent in vlog.agents" :key="agent" class="agent-tag">{{ agent }}</span>
            </div>
          </div>

          <!-- Link to drills -->
          <RouterLink to="/drills" class="sidebar-drills card">
            <p class="section-label">Related</p>
            <h4>View Practice Drills</h4>
            <p>See the exact drills used during this training cycle.</p>
            <span class="sidebar-drills__cta">Open Drill Library →</span>
          </RouterLink>

        </aside>
      </div>

    </div>
  </main>
  <main v-else class="page">
    <div class="container">
      <p style="padding: 4rem 0; color: var(--text-secondary);">Vlog entry not found.</p>
      <RouterLink to="/vlogs" class="btn btn--outline">← Back to all vlogs</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { vlogs, getVlogById } from '../data/vlogs.js'

const route = useRoute()
const vlog = computed(() => getVlogById(route.params.id))

const currentIndex = computed(() => vlogs.findIndex(v => v.id === route.params.id))
const prevVlog = computed(() => currentIndex.value > 0 ? vlogs[currentIndex.value - 1] : null)
const nextVlog = computed(() => currentIndex.value < vlogs.length - 1 ? vlogs[currentIndex.value + 1] : null)
const rrDiff = computed(() => vlog.value ? vlog.value.rr.end - vlog.value.rr.start : 0)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
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
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin: 2rem 0 1.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: var(--transition);
}
.back-link:hover { color: var(--ur-red); }

/* Header */
.vlog-header { margin-bottom: 3rem; }
.vlog-header__meta { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem; }
.vlog-header__date { color: var(--text-muted); font-size: 0.875rem; }
.vlog-header__title { font-size: clamp(1.75rem, 4vw, 2.75rem); color: var(--text-primary); margin-bottom: 0.5rem; }
.vlog-header__subtitle { color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem; }

.session-stats {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1px;
  background: var(--bg-border);
  border: 1px solid var(--bg-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.session-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.1rem;
  background: var(--bg-card);
}
.session-stat__label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); }
.session-stat__value { font-size: 1rem; font-weight: 600; color: var(--text-primary); }
.positive { color: #69f0ae; }
.negative { color: var(--ur-red); }

/* Body layout */
.vlog-body {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
  padding-bottom: 5rem;
}

/* Sections */
.vlog-section {
  margin-bottom: 2.5rem;
}
.vlog-section__title {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--bg-border);
}
.vlog-section__title--green { border-bottom-color: rgba(105,240,174,0.3); }
.vlog-section__title--red { border-bottom-color: rgba(255,70,85,0.3); }

.vlog-section__list { display: flex; flex-direction: column; gap: 0.75rem; }
.vlog-section__list li {
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  border-left: 2px solid transparent;
}
.vlog-section__list--green li {
  border-left-color: #69f0ae;
}
.vlog-section__list--green li::before { content: '✓'; position: absolute; left: 0.8rem; color: #69f0ae; font-weight: 700; }
.vlog-section__list--red li {
  border-left-color: var(--ur-red);
}
.vlog-section__list--red li::before { content: '✗'; position: absolute; left: 0.8rem; color: var(--ur-red); font-weight: 700; }

.vlog-section__text {
  color: var(--text-secondary);
  line-height: 1.75;
  font-size: 0.95rem;
  padding: 1rem;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--bg-border);
}

.vlog-section__lessons { display: flex; flex-direction: column; gap: 1rem; }
.vlog-section__lessons li {
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: start;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  border: 1px solid var(--bg-border);
}
.lesson__num {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--ur-red);
  font-weight: 700;
  line-height: 1.4;
}
.lesson__text {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.65;
}

/* Nav */
.vlog-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;
}
.vlog-nav__btn {
  padding: 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  cursor: pointer;
}
.vlog-nav__btn--next { text-align: right; }
.vlog-nav__dir { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }
.vlog-nav__title { font-size: 0.9rem; color: var(--text-primary); }
.vlog-nav__placeholder { display: block; }

/* Sidebar */
.vlog-sidebar { display: flex; flex-direction: column; gap: 1.25rem; position: sticky; top: 100px; }

.sidebar-card { padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sidebar-card__header { display: flex; align-items: center; justify-content: space-between; }
.sidebar-card__heading { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
.sidebar-card__title { font-family: var(--font-display); font-size: 1.1rem; color: var(--text-primary); }
.sidebar-card__meta { display: flex; gap: 1rem; font-size: 0.78rem; color: var(--text-muted); }
.sidebar-card__text { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.65; }

.rr-visual { display: flex; align-items: center; gap: 1rem; }
.rr-visual__bar { width: 8px; height: 80px; background: var(--bg-border); border-radius: 4px; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; }
.rr-visual__fill { background: linear-gradient(0deg, var(--ur-red), #ff8a80); border-radius: 4px; transition: height 0.6s ease; }
.rr-visual__labels { display: flex; flex-direction: column; gap: 0.4rem; }
.rr-visual__delta { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; }
.rr-visual__end { font-size: 0.78rem; color: var(--text-muted); }

.agent-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.agent-tag {
  padding: 0.3rem 0.7rem;
  background: var(--bg-border);
  border-radius: 3px;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.sidebar-drills {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
  border-color: rgba(255,70,85,0.2);
}
.sidebar-drills h4 { font-size: 1rem; color: var(--text-primary); }
.sidebar-drills p { font-size: 0.875rem; color: var(--text-secondary); }
.sidebar-drills__cta { color: var(--ur-red); font-size: 0.85rem; font-weight: 500; margin-top: 0.25rem; }

@media (max-width: 900px) {
  .vlog-body { grid-template-columns: 1fr; }
  .vlog-sidebar { position: static; }
  .session-stats { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 600px) {
  .session-stats { grid-template-columns: repeat(2, 1fr); }
  .vlog-nav { grid-template-columns: 1fr; }
}
</style>
