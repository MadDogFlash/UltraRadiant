<template>
  <header>
    <nav>
      <RouterLink to="/">UltraRadiant</RouterLink>
      <RouterLink to="/coach">AI Coach</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
nav {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}
</style>
