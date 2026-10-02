export type Tone = "white" | "grey";

export const toneClass: Record<Tone, string> = {
  white: "bg-background",
  grey: "bg-surface",
};