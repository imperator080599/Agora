import type { Stance } from "@agora/contracts/internal/claim";

export const DOMAIN_LABEL: Record<string, string> = {
  economics: "Economics",
  business: "Business",
  tech_ai: "Tech & AI",
  geopolitics: "Geopolitics",
};

export const STANCE_LABEL: Record<Stance, string> = {
  agree: "Agree",
  disagree: "Disagree",
  complicated: "It’s complicated",
};

export const ERROR_MESSAGE: Record<string, string> = {
  ALREADY_POSITIONED: "You already hold this position.",
  RATE_LIMITED_24H: "You can change your position once every 24 hours. Sit with it a little longer.",
  CLAIM_NOT_OPEN: "This claim is not open for positions.",
  ACTOR_DELETED: "This account has been deleted.",
  BAD_STANCE: "That is not a stance Agora recognises.",
};
