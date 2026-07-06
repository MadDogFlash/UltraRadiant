export interface CoachContext {
  agent: string;
  map: string;
  rank: string;
}

export interface CoachReply {
  text: string;
}

const TIP_LIBRARY: Record<string, string[]> = {
  aim: [
    "Warm up with 10-15 minutes of crosshair placement drills before queuing. Keep your crosshair at head height and pre-aim common angles.",
  ],
  econ: [
    "Track the enemy econ each round. Force-buy rounds are winnable if you stack utility and play for picks instead of site execute.",
  ],
  positioning: [
    "Avoid holding the same angle every round. Off-angles and repositioning after trades will punish players who peek on autopilot.",
  ],
  lineup: [
    "Practice one smoke/molly lineup per site per session in the range instead of learning them all at once — retention is better in small batches.",
  ],
  default: [
    "Focus on one fixable habit per session (crosshair placement, trading, or util timing) rather than trying to improve everything at once.",
  ],
};

function pickTips(prompt: string): string[] {
  const lower = prompt.toLowerCase();
  const matched = Object.entries(TIP_LIBRARY).filter(
    ([keyword]) => keyword !== "default" && lower.includes(keyword)
  );

  if (matched.length === 0) {
    return TIP_LIBRARY.default;
  }

  return matched.flatMap(([, tips]) => tips);
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Stubbed coaching response. Swap this out for a real call to an LLM
 * (e.g. the Claude API) once a backend/proxy for the API key is in place.
 */
export async function askCoach(
  prompt: string,
  context: CoachContext
): Promise<CoachReply> {
  await wait(500);

  const tips = pickTips(prompt);
  const intro = `Looking at your ${context.rank} ${context.agent} games on ${context.map}:`;

  return {
    text: [intro, ...tips.map((tip) => `- ${tip}`)].join("\n"),
  };
}
