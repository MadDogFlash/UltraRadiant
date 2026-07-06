<template>
  <section class="home">
    <h1>UltraRadiant</h1>
    <p>Chronicling the climb to Radiant using ultralearning techniques.</p>
    <RouterLink class="cta" to="/coach">Try the AI Coach &rarr;</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.home {
  max-width: 640px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  text-align: center;
}

.cta {
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: 600;
}
</style>
