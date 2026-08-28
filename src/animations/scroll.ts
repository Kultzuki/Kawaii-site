import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger plugin if running in browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Checks if user prefers reduced motion.
 */
export function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if current viewport is a mobile/touch device.
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

let lenisInstance: Lenis | null = null;
let isScrollInitialized = false;

/**
 * Initializes Lenis smooth scroll and synchronizes it with GSAP ScrollTrigger.
 */
export function initSmoothScroll(): Lenis | null {
  if (typeof window === 'undefined') return null;
  if (lenisInstance && isScrollInitialized) return lenisInstance;

  // In reduced motion mode, allow standard native scrolling behavior
  const reducedMotion = isReducedMotion();

  lenisInstance = new Lenis({
    duration: reducedMotion ? 0.01 : 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !reducedMotion,
    wheelMultiplier: 1,
    touchMultiplier: 1.8,
  });

  // Connect Lenis scroll event to ScrollTrigger update
  lenisInstance.on('scroll', () => {
    ScrollTrigger.update();
  });

  // Drive Lenis tick through GSAP ticker for 60/120fps sync
  gsap.ticker.add((time: number) => {
    lenisInstance?.raf(time * 1000);
  });

  // Disable GSAP lag smoothing to keep scroll animations responsive
  gsap.ticker.lagSmoothing(0);

  isScrollInitialized = true;
  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Scroll to specific target (selector, number, or HTMLElement).
 */
export function scrollTo(target: string | number | HTMLElement, options?: { offset?: number; immediate?: boolean; duration?: number }): void {
  if (!lenisInstance) {
    if (typeof window !== 'undefined') {
      if (typeof target === 'string') {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    return;
  }

  lenisInstance.scrollTo(target, {
    offset: options?.offset ?? 0,
    immediate: options?.immediate ?? false,
    duration: options?.duration ?? 1.2,
  });
}

/**
 * Binds a progress bar element (width or transform scaleX) to scroll progress of a trigger.
 */
export function initScrollProgress(
  progressBar: string | HTMLElement,
  trigger: string | HTMLElement = document.body,
  options?: { start?: string; end?: string }
): ScrollTrigger | null {
  if (typeof window === 'undefined') return null;

  const barEl = typeof progressBar === 'string' ? document.querySelector(progressBar) : progressBar;
  if (!barEl) return null;

  return ScrollTrigger.create({
    trigger: typeof trigger === 'string' ? document.querySelector(trigger) : trigger,
    start: options?.start ?? 'top top',
    end: options?.end ?? 'bottom bottom',
    onUpdate: (self) => {
      gsap.to(barEl, {
        scaleX: self.progress,
        transformOrigin: 'left center',
        duration: 0.1,
        ease: 'none',
        overwrite: 'auto',
      });
    },
  });
}

/**
 * Binds horizontal scrolling on a track container within a pinned wrapper.
 */
export function initHorizontalScroll(
  container: string | HTMLElement,
  track: string | HTMLElement,
  options?: { pinSpacing?: boolean; snap?: boolean }
): gsap.core.Timeline | null {
  if (typeof window === 'undefined') return null;

  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  const trackEl = typeof track === 'string' ? document.querySelector(track) : track;

  if (!containerEl || !trackEl) return null;
  if (isReducedMotion()) return null;

  const getScrollAmount = () => {
    const trackWidth = (trackEl as HTMLElement).scrollWidth;
    return -(trackWidth - window.innerWidth + 80);
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerEl,
      start: 'top top',
      end: () => `+=${Math.abs(getScrollAmount())}`,
      pin: true,
      pinSpacing: options?.pinSpacing ?? true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(trackEl, {
    x: getScrollAmount,
    ease: 'none',
  });

  return tl;
}

/**
 * Recalculate and refresh all ScrollTrigger instances.
 */
export function refreshScroll(): void {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
}

/**
 * Helper to safely wrap animations inside a GSAP Context for automatic teardown.
 */
export function createAnimationContext(scope?: Element | string): gsap.Context {
  return gsap.context(() => {}, scope);
}

export { gsap, ScrollTrigger };
