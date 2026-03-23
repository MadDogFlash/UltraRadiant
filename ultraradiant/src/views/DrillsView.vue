<template>
  <main class="page">
    <div class="container">

      <!-- Header -->
      <div class="drills-header">
        <p class="section-label">Training Protocol</p>
        <h1 class="drills-title">Practice Drill Library</h1>
        <p class="drills-desc">
          Every drill actively used during the ranked grind. Broken down by game, category, and difficulty. Not theory — real reps from real sessions.
        </p>
      </div>

      <!-- Filter Bar -->
      <div class="filter-bar">
        <button
          class="filter-btn"
          :class="{ 'filter-btn--active': activeGame === 'all' }"
          @click="activeGame = 'all'"
        >All</button>
        <button
          class="filter-btn filter-btn--val"
          :class="{ 'filter-btn--active': activeGame === 'valorant' }"
          @click="activeGame = 'valorant'"
        >Valorant</button>
        <button
          class="filter-btn filter-btn--cs"
          :class="{ 'filter-btn--active': activeGame === 'cs2' }"
          @click="activeGame = 'cs2'"
        >CS2</button>
        <div class="filter-bar__separator"></div>
        <button
          v-for="cat in drillCategories"
          :key="cat.id"
          class="filter-btn filter-btn--cat"
          :class="{ 'filter-btn--active': activeCategory === cat.id }"
          @click="toggleCategory(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Counts -->
      <div class="drill-count">
        <span class="drill-count__num">{{ filteredDrills.length }}</span>
        <span class="drill-count__label">drills shown</span>
      </div>

      <!-- Drill Grid -->
      <div class="drills-grid">
        <div
          v-for="drill in filteredDrills"
          :key="drill.id"
          class="drill-card card"
          :class="{ 'drill-card--open': openDrill === drill.id }"
          @click="toggleDrill(drill.id)"
        >
          <!-- Card Header -->
          <div class="drill-card__header">
            <div class="drill-card__badges">
              <span :class="drill.game === 'valorant' ? 'tag tag--val' : 'tag tag--cs'">
                {{ drill.game === 'valorant' ? 'Valorant' : 'CS2' }}
              </span>
              <span class="tag" :class="difficultyClass(drill.difficulty)">{{ drill.difficulty }}</span>
            </div>
            <div class="drill-card__meta-right">
              <span class="drill-card__duration">⏱ {{ drill.duration }}</span>
              <span class="drill-card__toggle">{{ openDrill === drill.id ? '▲' : '▼' }}</span>
            </div>
          </div>

          <h3 class="drill-card__title">{{ drill.title }}</h3>
          <p class="drill-card__desc">{{ drill.description }}</p>

          <div class="drill-card__freq">
            <span class="drill-card__freq-label">Frequency:</span>
            <span>{{ drill.frequency }}</span>
          </div>

          <!-- Expandable content -->
          <transition name="expand">
            <div v-if="openDrill === drill.id" class="drill-card__expanded" @click.stop>

              <hr class="divider" />

              <!-- Steps -->
              <div class="drill-steps">
                <h4 class="drill-steps__heading">Step-by-Step</h4>
                <div v-for="(step, i) in drill.steps" :key="step.label" class="drill-step">
                  <div class="drill-step__num">{{ i + 1 }}</div>
                  <div class="drill-step__content">
                    <strong class="drill-step__label">{{ step.label }}</strong>
                    <p class="drill-step__detail">{{ step.detail }}</p>
                  </div>
                </div>
              </div>

              <!-- Tips -->
              <div v-if="drill.tips && drill.tips.length" class="drill-tips">
                <h4 class="drill-tips__heading">Tips & Notes</h4>
                <ul>
                  <li v-for="tip in drill.tips" :key="tip">{{ tip }}</li>
                </ul>
              </div>

              <!-- Pro Reference -->
              <div v-if="drill.proReference" class="drill-reference">
                <span class="tag tag--tip">Pro Reference</span>
                <p>{{ drill.proReference }}</p>
              </div>

            </div>
          </transition>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredDrills.length === 0" class="empty-state">
        <p>No drills match these filters.</p>
        <button class="btn btn--outline" @click="resetFilters">Clear filters</button>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allDrills, drillCategories } from '../data/drills.js'

const activeGame = ref('all')
const activeCategory = ref(null)
const openDrill = ref(null)

const filteredDrills = computed(() => {
  return allDrills.filter(drill => {
    const gameMatch = activeGame.value === 'all' || drill.game === activeGame.value
    const catMatch = !activeCategory.value || drill.category === activeCategory.value
    return gameMatch && catMatch
  })
})

function toggleCategory(id) {
  activeCategory.value = activeCategory.value === id ? null : id
}

function toggleDrill(id) {
  openDrill.value = openDrill.value === id ? null : id
}

function resetFilters() {
  activeGame.value = 'all'
  activeCategory.value = null
}

function difficultyClass(d) {
  if (d === 'beginner') return 'tag--beginner'
  if (d === 'intermediate') return 'tag--intermediate'
  if (d === 'advanced') return 'tag--advanced'
  return 'tag--beginner'
}
</script>

<style scoped>
.drills-header {
  padding: 3rem 0 2rem;
}
.drills-title { font-size: 2.5rem; color: var(--text-primary); margin: 0.4rem 0 0.75rem; }
.drills-desc { color: var(--text-secondary); max-width: 560px; font-size: 1rem; line-height: 1.7; }

/* Filter bar */
.filter-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  border-radius: var(--radius-md);
}

.filter-btn {
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
  border: 1px solid transparent;
  transition: var(--transition);
}
.filter-btn:hover { color: var(--text-primary); background: var(--bg-border); }
.filter-btn--active { background: var(--bg-border); color: var(--text-primary); border-color: var(--bg-border); }

.filter-btn--val.filter-btn--active { color: var(--ur-red); border-color: rgba(255,70,85,0.3); background: rgba(255,70,85,0.08); }
.filter-btn--cs.filter-btn--active { color: var(--cs-yellow); border-color: rgba(240,180,41,0.3); background: rgba(240,180,41,0.08); }

.filter-bar__separator {
  width: 1px;
  height: 24px;
  background: var(--bg-border);
  margin: 0 0.25rem;
}

.drill-count {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}
.drill-count__num { font-family: var(--font-display); font-size: 1.5rem; color: var(--ur-red); }
.drill-count__label { font-size: 0.875rem; color: var(--text-muted); }

/* Drill grid */
.drills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-bottom: 4rem;
}

.drill-card {
  padding: 1.4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: var(--transition);
}

.drill-card--open {
  border-color: rgba(255,70,85,0.3);
  box-shadow: 0 0 0 1px rgba(255,70,85,0.1);
}

.drill-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.drill-card__badges { display: flex; align-items: center; gap: 0.5rem; }
.drill-card__meta-right { display: flex; align-items: center; gap: 0.75rem; }
.drill-card__duration { font-size: 0.78rem; color: var(--text-muted); }
.drill-card__toggle { color: var(--text-muted); font-size: 0.7rem; transition: var(--transition); }
.drill-card--open .drill-card__toggle { color: var(--ur-red); }

.drill-card__title { font-family: var(--font-display); font-size: 1.15rem; color: var(--text-primary); line-height: 1.3; }
.drill-card__desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }
.drill-card__freq { display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; color: var(--text-muted); }
.drill-card__freq-label { text-transform: uppercase; letter-spacing: 0.07em; font-size: 0.68rem; }

/* Difficulty tags (not scoped with tag--) */
:deep(.tag--beginner) {
  background: rgba(105,240,174,0.08);
  color: #69f0ae;
  border: 1px solid rgba(105,240,174,0.2);
}
:deep(.tag--intermediate) {
  background: rgba(255,183,77,0.08);
  color: #ffb74d;
  border: 1px solid rgba(255,183,77,0.2);
}
:deep(.tag--advanced) {
  background: rgba(255,70,85,0.08);
  color: var(--ur-red);
  border: 1px solid rgba(255,70,85,0.2);
}

/* Expanded content */
.drill-card__expanded { display: flex; flex-direction: column; gap: 1.5rem; }

.drill-steps__heading,
.drill-tips__heading {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.drill-steps { display: flex; flex-direction: column; gap: 0.2rem; }
.drill-step {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  margin-bottom: 0.5rem;
}
.drill-step__num {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255,70,85,0.12);
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: 0.9rem;
  color: var(--ur-red);
  font-weight: 700;
  flex-shrink: 0;
  padding-top: 2px;
}
.drill-step__content { display: flex; flex-direction: column; gap: 0.3rem; }
.drill-step__label { font-size: 0.9rem; color: var(--text-primary); font-family: var(--font-display); }
.drill-step__detail { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.65; }

.drill-tips ul { display: flex; flex-direction: column; gap: 0.6rem; }
.drill-tips li {
  padding: 0.65rem 0.75rem 0.65rem 2rem;
  background: var(--bg-secondary);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.55;
  position: relative;
}
.drill-tips li::before {
  content: '→';
  position: absolute;
  left: 0.6rem;
  color: var(--cs-yellow);
}

.drill-reference {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem;
  background: rgba(105,240,174,0.05);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(105,240,174,0.15);
}
.drill-reference p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; font-style: italic; }

/* Expand transition */
.expand-enter-active, .expand-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .drills-grid { grid-template-columns: 1fr; }
  .filter-bar { gap: 0.35rem; }
}
</style>
