import { defineStore } from "pinia";
import { askCoach, type CoachContext } from "@/services/aiCoachService";

export interface CoachMessage {
  role: "user" | "coach";
  text: string;
}

interface CoachState {
  profile: CoachContext;
  messages: CoachMessage[];
  isThinking: boolean;
}

export const AGENTS = [
  "Jett",
  "Reyna",
  "Sova",
  "Killjoy",
  "Omen",
  "Sage",
  "Raze",
] as const;

export const MAPS = [
  "Ascent",
  "Bind",
  "Haven",
  "Split",
  "Icebox",
  "Lotus",
  "Sunset",
] as const;

export const RANKS = [
  "Iron",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Ascendant",
  "Immortal",
  "Radiant",
] as const;

export const useCoachStore = defineStore({
  id: "coach",
  state: (): CoachState => ({
    profile: {
      agent: AGENTS[0],
      map: MAPS[0],
      rank: RANKS[3],
    },
    messages: [
      {
        role: "coach",
        text: "Hey! Tell me about a recent round or ask for tips and I'll break it down.",
      },
    ],
    isThinking: false,
  }),
  actions: {
    async sendMessage(prompt: string) {
      const trimmed = prompt.trim();
      if (!trimmed || this.isThinking) return;

      this.messages.push({ role: "user", text: trimmed });
      this.isThinking = true;

      try {
        const reply = await askCoach(trimmed, this.profile);
        this.messages.push({ role: "coach", text: reply.text });
      } finally {
        this.isThinking = false;
      }
    },
  },
});
