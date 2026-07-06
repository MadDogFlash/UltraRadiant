<template>
  <section class="ai-coach">
    <h1>AI Coach</h1>

    <form class="profile" @submit.prevent>
      <label>
        Agent
        <select v-model="coach.profile.agent">
          <option v-for="agent in AGENTS" :key="agent" :value="agent">
            {{ agent }}
          </option>
        </select>
      </label>

      <label>
        Map
        <select v-model="coach.profile.map">
          <option v-for="map in MAPS" :key="map" :value="map">
            {{ map }}
          </option>
        </select>
      </label>

      <label>
        Rank
        <select v-model="coach.profile.rank">
          <option v-for="rank in RANKS" :key="rank" :value="rank">
            {{ rank }}
          </option>
        </select>
      </label>
    </form>

    <div class="quick-prompts">
      <button
        v-for="prompt in quickPrompts"
        :key="prompt"
        type="button"
        @click="ask(prompt)"
      >
        {{ prompt }}
      </button>
    </div>

    <div class="chat" ref="chatLog">
      <p
        v-for="(message, index) in coach.messages"
        :key="index"
        class="message"
        :class="message.role"
      >
        {{ message.text }}
      </p>
      <p v-if="coach.isThinking" class="message coach thinking">
        Thinking&hellip;
      </p>
    </div>

    <form class="composer" @submit.prevent="submit">
      <input
        v-model="draft"
        type="text"
        placeholder="Ask about your last game, a matchup, or a lineup..."
      />
      <button type="submit" :disabled="coach.isThinking || !draft.trim()">
        Send
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { AGENTS, MAPS, RANKS, useCoachStore } from "@/stores/coach";

const coach = useCoachStore();
const draft = ref("");

const quickPrompts = [
  "Review my aim habits",
  "How's my econ management?",
  "Give me a lineup tip",
];

async function ask(prompt: string) {
  await coach.sendMessage(prompt);
}

async function submit() {
  const prompt = draft.value;
  draft.value = "";
  await coach.sendMessage(prompt);
}
</script>

<style scoped>
.ai-coach {
  max-width: 640px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.profile {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profile label {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  gap: 0.25rem;
}

.quick-prompts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.chat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  white-space: pre-line;
}

.message {
  margin: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  max-width: 85%;
}

.message.user {
  align-self: flex-end;
  background: #dbeafe;
}

.message.coach {
  align-self: flex-start;
  background: #f1f5f9;
}

.message.thinking {
  font-style: italic;
  opacity: 0.7;
}

.composer {
  display: flex;
  gap: 0.5rem;
}

.composer input {
  flex: 1;
  padding: 0.5rem;
}
</style>
