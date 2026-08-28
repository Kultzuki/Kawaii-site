/**
 * Motion Tokens for GSAP and client-side interactions.
 * Aligned with CSS custom properties in tokens.css.
 */

export const MOTION_DURATIONS = {
  fast: 0.16,
  normal: 0.32,
  slow: 0.55,
  reveal: 0.85,
  dramatic: 1.2,
} as const;

export const MOTION_EASINGS = {
  standard: 'power2.out',
  outExpo: 'expo.out',
  inOutSmooth: 'power3.inOut',
  spring: 'back.out(1.7)',
  springGentle: 'back.out(1.2)',
  elastic: 'elastic.out(1, 0.5)',
} as const;

export const MOTION_STAGGERS = {
  fast: 0.05,
  normal: 0.09,
  slow: 0.15,
} as const;

export const MOTION_TOKENS = {
  durations: MOTION_DURATIONS,
  easings: MOTION_EASINGS,
  staggers: MOTION_STAGGERS,
} as const;

export default MOTION_TOKENS;
