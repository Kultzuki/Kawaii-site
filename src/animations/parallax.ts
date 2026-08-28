import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion, isMobileDevice } from './scroll';

export interface ParallaxOptions {
  trigger?: string | Element;
  speed?: number; // e.g. -0.2 for slower drift, 0.4 for faster drift
  direction?: 'y' | 'x';
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export interface ParallaxLayerConfig {
  target: string | Element;
  speed: number;
  direction?: 'y' | 'x';
}

/**
 * Initializes single-element parallax movement driven by ScrollTrigger scrub.
 */
export function initParallax(
  target: string | Element | Element[],
  options: ParallaxOptions = {}
): ScrollTrigger | null {
  if (typeof window === 'undefined') return null;
  if (isReducedMotion()) return null;

  const elements = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  const isMobile = isMobileDevice();
  const rawSpeed = options.speed ?? 0.2;
  // Tone down speed on smaller touch viewports for smoother performance
  const speed = isMobile ? rawSpeed * 0.5 : rawSpeed;
  const direction = options.direction ?? 'y';

  const triggerEl = options.trigger ?? (Array.isArray(elements) ? elements[0] : elements instanceof NodeList ? elements[0] : elements);
  const distance = speed * 160;

  const tweenVars: gsap.TweenVars = {
    ease: 'none',
  };

  if (direction === 'y') {
    tweenVars.y = distance;
  } else {
    tweenVars.x = distance;
  }

  const tween = gsap.to(elements, {
    ...tweenVars,
    scrollTrigger: {
      trigger: triggerEl,
      start: options.start ?? 'top bottom',
      end: options.end ?? 'bottom top',
      scrub: options.scrub ?? 1,
      invalidateOnRefresh: true,
    },
  });

  return tween.scrollTrigger ?? null;
}

/**
 * Initializes multi-layer depth parallax within a container.
 */
export function initParallaxLayers(
  container: string | Element,
  layers: ParallaxLayerConfig[],
  options?: { start?: string; end?: string; scrub?: boolean | number }
): ScrollTrigger[] {
  if (typeof window === 'undefined') return [];
  if (isReducedMotion()) return [];

  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  if (!containerEl) return [];

  const triggers: ScrollTrigger[] = [];

  layers.forEach((layer) => {
    const trigger = initParallax(layer.target, {
      trigger: containerEl,
      speed: layer.speed,
      direction: layer.direction ?? 'y',
      start: options?.start ?? 'top bottom',
      end: options?.end ?? 'bottom top',
      scrub: options?.scrub ?? 1,
    });
    if (trigger) triggers.push(trigger);
  });

  return triggers;
}
