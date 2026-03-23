<template>
  <div id="ultra-radiant">
    <Navbar />
    <RouterView />
    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <span class="footer__logo">◈ ULTRA<strong>RADIANT</strong></span>
          <p class="footer__tagline">Gold to Radiant. Documented weekly.</p>
        </div>
        <nav class="footer__nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/vlogs">Vlogs</RouterLink>
          <RouterLink to="/drills">Drills</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <p class="footer__copy">© {{ new Date().getFullYear() }} Ultra Radiant. The grind continues.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
/* Global layout */
#ultra-radiant {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  margin-top: auto;
  border-top: 1px solid var(--bg-border);
  padding: 2.5rem 0;
  background: var(--bg-secondary);
}
.footer__inner {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 2rem;
}
.footer__brand { display: flex; flex-direction: column; gap: 0.3rem; }
.footer__logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  color: var(--text-primary);
}
.footer__logo strong { color: var(--ur-red); }
.footer__tagline { font-size: 0.8rem; color: var(--text-muted); }

.footer__nav { display: flex; gap: 1.5rem; }
.footer__nav a { font-size: 0.875rem; color: var(--text-secondary); transition: var(--transition); }
.footer__nav a:hover { color: var(--ur-red); }

.footer__copy { font-size: 0.78rem; color: var(--text-muted); }

@media (max-width: 768px) {
  .footer__inner { grid-template-columns: 1fr; gap: 1.25rem; }
}
</style>
