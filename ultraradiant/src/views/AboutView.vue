<template>
  <main class="page">
    <div class="container">

      <div class="about-header">
        <p class="section-label">The Creator</p>
        <h1 class="about-title">Why Ultra Radiant Exists</h1>
      </div>

      <div class="about-body">
        <div class="about-main">

          <section class="about-section">
            <h2>The Premise</h2>
            <p>
              Ultra Radiant is a public document of one player's attempt to climb from Gold to Radiant in Valorant, while cross-training in Counter-Strike 2, and building an audience through the content created along the way.
            </p>
            <p>
              The goal is not just to hit Radiant — it's to become a content creator through authentic competitive documentation. The assumption: if the grind is real and documented honestly, the content will follow.
            </p>
          </section>

          <section class="about-section">
            <h2>Why Both Games?</h2>
            <p>
              Valorant is the primary ranked game. CS2 is training ground. The two games share enough DNA — rifle mechanics, map control, economy management — that serious CS2 practice directly improves Valorant performance.
            </p>
            <p>
              Counter-Strike is also one of the most studied competitive FPS games in history. Its community has produced more coaching content, pro analysis, and practice methodologies than almost any other game. Using it as a supplementary training tool is a deliberate choice.
            </p>
          </section>

          <section class="about-section">
            <h2>The Content Strategy</h2>
            <p>
              Each week produces one vlog entry covering:
            </p>
            <ul class="about-list">
              <li>Rank update and RR movement</li>
              <li>Session highlights and lowlights</li>
              <li>What was learned, what failed, what's being changed</li>
              <li>CS2 cross-training notes from the same week</li>
              <li>Key lessons formatted as shareable takeaways</li>
            </ul>
            <p>
              The drill library serves as a living reference — updated as new techniques are added to the training rotation. Every drill listed has been used, tested, and evaluated against actual rank performance.
            </p>
          </section>

          <section class="about-section">
            <h2>The Long Game</h2>
            <p>
              Content creation through competitive play is not a shortcut. It requires consistent output, genuine improvement visible week over week, and the willingness to document failures as honestly as wins.
            </p>
            <p>
              The timeline is measured in months, not weeks. Each vlog is a data point. The audience, if it comes, will come from the compound interest of consistent, honest documentation.
            </p>
          </section>

        </div>

        <!-- Sidebar -->
        <aside class="about-sidebar">

          <div class="about-card card">
            <h3>Journey Timeline</h3>
            <div class="timeline">
              <div v-for="(event, i) in timeline" :key="i" class="timeline-item" :class="{ 'timeline-item--active': event.active }">
                <div class="timeline-item__dot"></div>
                <div class="timeline-item__content">
                  <span class="timeline-item__label">{{ event.label }}</span>
                  <span class="timeline-item__detail">{{ event.detail }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="about-card card">
            <h3>Current Goals</h3>
            <ul class="goal-list">
              <li v-for="goal in goals" :key="goal.label" class="goal-item">
                <span :class="['goal-item__check', goal.done ? 'goal-item__check--done' : '']">
                  {{ goal.done ? '✓' : '○' }}
                </span>
                <span class="goal-item__label">{{ goal.label }}</span>
              </li>
            </ul>
          </div>

          <div class="about-card card about-card--highlight">
            <h3>The Mission Statement</h3>
            <blockquote class="mission-quote">
              "Document the grind honestly. Improve week over week. Build the audience through the process, not through performance."
            </blockquote>
          </div>

        </aside>
      </div>

    </div>
  </main>
</template>

<script setup>
const timeline = [
  { label: 'Started', detail: 'Gold I — Week 1', active: false },
  { label: 'First Rank Up', detail: 'Gold II — Week 1', active: false },
  { label: 'Hit Platinum', detail: 'Plat I — Week 4', active: false },
  { label: 'Current', detail: 'Platinum II — Week 5', active: true },
  { label: 'Next Milestone', detail: 'Diamond I', active: false },
  { label: 'Stretch Goal', detail: 'Radiant', active: false },
]

const goals = [
  { label: 'Reach Platinum', done: true },
  { label: 'Post first Twitter clip', done: true },
  { label: 'Complete 5 vlogs', done: true },
  { label: 'Build drill library (7+ drills per game)', done: true },
  { label: 'Reach Diamond', done: false },
  { label: 'Record first YouTube vlog format video', done: false },
  { label: 'Reach Immortal', done: false },
  { label: 'Reach Radiant', done: false },
]
</script>

<style scoped>
.about-header { padding: 3rem 0 2rem; }
.about-title { font-size: 2.5rem; color: var(--text-primary); margin: 0.4rem 0; }

.about-body {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: start;
  padding-bottom: 5rem;
}

.about-main { display: flex; flex-direction: column; gap: 2.5rem; }

.about-section h2 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--bg-border);
}
.about-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.975rem;
  margin-bottom: 0.75rem;
}
.about-section p:last-child { margin-bottom: 0; }

.about-list {
  list-style: disc;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0.75rem 0;
}
.about-list li { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.65; }

/* Sidebar */
.about-sidebar { display: flex; flex-direction: column; gap: 1.25rem; position: sticky; top: 100px; }

.about-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.about-card h3 { font-size: 1rem; color: var(--text-primary); }

.about-card--highlight {
  border-color: rgba(255,70,85,0.3);
  background: linear-gradient(135deg, var(--bg-card), rgba(255,70,85,0.04));
}

/* Timeline */
.timeline { display: flex; flex-direction: column; gap: 0; }
.timeline-item {
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 0.75rem;
  padding: 0.6rem 0;
  opacity: 0.5;
  border-left: 2px solid var(--bg-border);
  padding-left: 1rem;
  margin-left: 8px;
}
.timeline-item--active {
  opacity: 1;
  border-left-color: var(--ur-red);
}
.timeline-item__dot {
  width: 10px;
  height: 10px;
  background: var(--bg-border);
  border-radius: 50%;
  position: absolute;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
}
.timeline-item--active .timeline-item__dot {
  background: var(--ur-red);
  box-shadow: 0 0 0 3px rgba(255,70,85,0.2);
}
.timeline-item__content { display: flex; flex-direction: column; gap: 0.1rem; }
.timeline-item__label { font-size: 0.875rem; color: var(--text-primary); font-weight: 500; }
.timeline-item__detail { font-size: 0.78rem; color: var(--text-muted); }

/* Goals */
.goal-list { display: flex; flex-direction: column; gap: 0.6rem; }
.goal-item { display: flex; align-items: flex-start; gap: 0.6rem; }
.goal-item__check {
  font-size: 0.875rem;
  color: var(--text-muted);
  width: 18px;
  flex-shrink: 0;
  padding-top: 1px;
}
.goal-item__check--done { color: #69f0ae; }
.goal-item__label { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; }

/* Mission quote */
.mission-quote {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.75;
  font-style: italic;
  border-left: 2px solid var(--ur-red);
  padding-left: 1rem;
}

@media (max-width: 900px) {
  .about-body { grid-template-columns: 1fr; }
  .about-sidebar { position: static; }
}
</style>
