<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__inner container">
      <RouterLink to="/" class="navbar__logo">
        <span class="navbar__logo-icon">◈</span>
        <span class="navbar__logo-text">ULTRA<strong>RADIANT</strong></span>
      </RouterLink>

      <div class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <RouterLink to="/" class="navbar__link" @click="menuOpen = false">Home</RouterLink>
        <RouterLink to="/vlogs" class="navbar__link" @click="menuOpen = false">Vlogs</RouterLink>
        <RouterLink to="/drills" class="navbar__link" @click="menuOpen = false">Drills</RouterLink>
        <RouterLink to="/about" class="navbar__link" @click="menuOpen = false">About</RouterLink>
      </div>

      <div class="navbar__rank-badge">
        <span class="rank rank--gold">Gold 2</span>
        <span class="navbar__rank-arrow">→ Radiant</span>
      </div>

      <button class="navbar__burger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(10, 11, 13, 0.95);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--bg-border);
  padding: 0.65rem 0;
}

.navbar__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  white-space: nowrap;
}
.navbar__logo strong {
  color: var(--ur-red);
}
.navbar__logo-icon {
  color: var(--ur-red);
  font-size: 1.1rem;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

.navbar__link {
  padding: 0.4rem 0.85rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}
.navbar__link:hover,
.navbar__link.router-link-active {
  color: var(--text-primary);
  background: rgba(255,255,255,0.05);
}
.navbar__link.router-link-exact-active {
  color: var(--ur-red);
}

.navbar__rank-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.75rem;
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  white-space: nowrap;
}
.navbar__rank-arrow {
  color: var(--text-muted);
  font-size: 0.75rem;
}

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.navbar__burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: var(--transition);
}

@media (max-width: 768px) {
  .navbar__burger { display: flex; }
  .navbar__rank-badge { display: none; }

  .navbar__links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--bg-border);
    padding: 1rem;
    gap: 0.25rem;
    transform: translateY(-110%);
    transition: transform 0.25s ease;
    margin-left: 0;
  }
  .navbar__links--open {
    transform: translateY(0);
  }
  .navbar__link {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
  }
}
</style>
