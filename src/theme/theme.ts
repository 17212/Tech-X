import { gradients, palette } from "./palette";

export const applyTheme = () => {
  const root = document.documentElement;
  root.style.setProperty("--primary", palette.primary);
  root.style.setProperty("--primary-alt", palette.primaryAlt);
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--bg", palette.surface);
  root.style.setProperty("--bg-alt", palette.surfaceAlt);
  root.style.setProperty("--text", palette.text);
  root.style.setProperty("--muted", palette.muted);
  root.style.setProperty("--glass", palette.glass);
  root.style.setProperty("--border", palette.border);
  root.style.setProperty("--gradient-hero", gradients.hero);
  root.style.setProperty("--gradient-primary-glow", gradients.primaryGlow);
  root.style.setProperty("--gradient-card", gradients.card);
};
