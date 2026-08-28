import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from './scroll';
import { MOTION_DURATIONS, MOTION_EASINGS } from './tokens';

export interface SceneTransitionOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  duration?: number;
}

export interface SectionPinOptions {
  pinSpacing?: boolean;
  start?: string;
  end?: string;
  onEnter?: () => void;
  onLeave?: () => void;
}

/**
 * Creates a smooth scene crossfade transition between two story steps or cards.
 */
export function initSceneTransition(
  outgoingEl: string | Element,
  incomingEl: string | Element,
  options: SceneTransitionOptions = {}
): gsap.core.Timeline | null {
  if (typeof window === 'undefined') return null;

  const outgoing = typeof outgoingEl === 'string' ? document.querySelector(outgoingEl) : outgoingEl;
  const incoming = typeof incomingEl === 'string' ? document.querySelector(incomingEl) : incomingEl;
  if (!outgoing || !incoming) return null;

  const reduced = isReducedMotion();
  const tl = gsap.timeline({
    scrollTrigger: options.trigger
      ? {
          trigger: options.trigger,
          start: options.start ?? 'top center',
          end: options.end ?? 'bottom center',
          scrub: options.scrub ?? 1,
        }
      : undefined,
  });

  if (reduced) {
    tl.to(outgoing, { opacity: 0, duration: 0.2 })
      .to(incoming, { opacity: 1, duration: 0.2 }, '<');
  } else {
    tl.to(outgoing, {
      opacity: 0,
      y: -20,
      scale: 0.95,
      duration: options.duration ?? MOTION_DURATIONS.slow,
      ease: MOTION_EASINGS.inOutSmooth,
    }).fromTo(
      incoming,
      { opacity: 0, y: 20, scale: 1.05 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration ?? MOTION_DURATIONS.slow,
        ease: MOTION_EASINGS.inOutSmooth,
      },
      '<0.2'
    );
  }

  return tl;
}

/**
 * Pins a section in place for scroll-driven chapter storytelling.
 */
export function initSectionPin(
  section: string | Element,
  options: SectionPinOptions = {}
): ScrollTrigger | null {
  if (typeof window === 'undefined') return null;
  if (isReducedMotion()) return null;

  const sectionEl = typeof section === 'string' ? document.querySelector(section) : section;
  if (!sectionEl) return null;

  return ScrollTrigger.create({
    trigger: sectionEl,
    start: options.start ?? 'top top',
    end: options.end ?? '+=100%',
    pin: true,
    pinSpacing: options.pinSpacing ?? true,
    onEnter: options.onEnter,
    onLeave: options.onLeave,
    invalidateOnRefresh: true,
  });
}
