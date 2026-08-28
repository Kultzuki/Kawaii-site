import { gsap } from 'gsap';
import { MOTION_DURATIONS, MOTION_EASINGS, MOTION_STAGGERS } from './tokens';
import { isReducedMotion } from './scroll';

export interface BaseRevealOptions {
  trigger?: string | Element;
  start?: string;
  duration?: number;
  delay?: number;
  ease?: string;
  once?: boolean;
  onComplete?: () => void;
}

export interface SlideRevealOptions extends BaseRevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export interface ScaleRevealOptions extends BaseRevealOptions {
  initialScale?: number;
  initialRotation?: number;
}

export interface StaggerRevealOptions extends BaseRevealOptions {
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

/**
 * Clean Fade In Reveal
 */
export function initFadeReveal(
  target: string | Element | Element[],
  options: BaseRevealOptions = {}
): gsap.core.Tween | null {
  if (typeof window === 'undefined') return null;

  const reduced = isReducedMotion();
  const elements = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  return gsap.fromTo(
    elements,
    { opacity: 0 },
    {
      opacity: 1,
      duration: options.duration ?? (reduced ? 0.2 : MOTION_DURATIONS.normal),
      delay: options.delay ?? 0,
      ease: options.ease ?? MOTION_EASINGS.standard,
      scrollTrigger: {
        trigger: options.trigger ?? (Array.isArray(elements) ? elements[0] : elements),
        start: options.start ?? 'top 85%',
        once: options.once ?? true,
      },
      onComplete: options.onComplete,
    }
  );
}

/**
 * Slide Reveal from any cardinal direction
 */
export function initSlideReveal(
  target: string | Element | Element[],
  options: SlideRevealOptions = {}
): gsap.core.Tween | null {
  if (typeof window === 'undefined') return null;

  const reduced = isReducedMotion();
  const elements = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  const distance = options.distance ?? 36;
  const direction = options.direction ?? 'up';

  let fromX = 0;
  let fromY = 0;

  if (!reduced) {
    if (direction === 'up') fromY = distance;
    if (direction === 'down') fromY = -distance;
    if (direction === 'left') fromX = distance;
    if (direction === 'right') fromX = -distance;
  }

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      x: fromX,
      y: fromY,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: options.duration ?? (reduced ? 0.2 : MOTION_DURATIONS.reveal),
      delay: options.delay ?? 0,
      ease: options.ease ?? MOTION_EASINGS.outExpo,
      scrollTrigger: {
        trigger: options.trigger ?? (Array.isArray(elements) ? elements[0] : elements),
        start: options.start ?? 'top 85%',
        once: options.once ?? true,
      },
      onComplete: options.onComplete,
    }
  );
}

/**
 * Scale / Pop Reveal (Ideal for badges, cards, stickers, and character frames)
 */
export function initScaleReveal(
  target: string | Element | Element[],
  options: ScaleRevealOptions = {}
): gsap.core.Tween | null {
  if (typeof window === 'undefined') return null;

  const reduced = isReducedMotion();
  const elements = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  const initialScale = reduced ? 1 : options.initialScale ?? 0.88;
  const initialRotation = reduced ? 0 : options.initialRotation ?? 0;

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      scale: initialScale,
      rotation: initialRotation,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: options.duration ?? (reduced ? 0.2 : MOTION_DURATIONS.reveal),
      delay: options.delay ?? 0,
      ease: options.ease ?? MOTION_EASINGS.spring,
      scrollTrigger: {
        trigger: options.trigger ?? (Array.isArray(elements) ? elements[0] : elements),
        start: options.start ?? 'top 85%',
        once: options.once ?? true,
      },
      onComplete: options.onComplete,
    }
  );
}

/**
 * Staggered Reveal for Grids, Lists, Badges, and Info Cards
 */
export function initStaggerReveal(
  targets: string | Element[] | NodeListOf<Element>,
  options: StaggerRevealOptions = {}
): gsap.core.Tween | null {
  if (typeof window === 'undefined') return null;

  const reduced = isReducedMotion();
  const elements = typeof targets === 'string' ? document.querySelectorAll(targets) : targets;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  const direction = options.direction ?? 'up';
  const distance = options.distance ?? 28;

  let fromX = 0;
  let fromY = 0;

  if (!reduced && direction !== 'none') {
    if (direction === 'up') fromY = distance;
    if (direction === 'down') fromY = -distance;
    if (direction === 'left') fromX = distance;
    if (direction === 'right') fromX = -distance;
  }

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      x: fromX,
      y: fromY,
      scale: reduced ? 1 : 0.96,
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: options.duration ?? (reduced ? 0.2 : MOTION_DURATIONS.normal),
      delay: options.delay ?? 0,
      stagger: options.stagger ?? (reduced ? 0.02 : MOTION_STAGGERS.normal),
      ease: options.ease ?? MOTION_EASINGS.outExpo,
      scrollTrigger: {
        trigger: options.trigger ?? (elements instanceof NodeList ? elements[0] : Array.isArray(elements) ? elements[0] : elements),
        start: options.start ?? 'top 85%',
        once: options.once ?? true,
      },
      onComplete: options.onComplete,
    }
  );
}

/**
 * Auto-detect and initialize all data-reveal elements within a root container.
 */
export function autoBindReveals(root: Document | HTMLElement = document): void {
  if (typeof window === 'undefined') return;

  // 1. Standalone fade elements
  root.querySelectorAll('[data-reveal="fade"]').forEach((el) => {
    initFadeReveal(el);
  });

  // 2. Slide elements
  root.querySelectorAll('[data-reveal="slide"]').forEach((el) => {
    const dir = (el.getAttribute('data-reveal-direction') as 'up' | 'down' | 'left' | 'right') || 'up';
    initSlideReveal(el, { direction: dir });
  });

  // 3. Scale elements
  root.querySelectorAll('[data-reveal="scale"]').forEach((el) => {
    initScaleReveal(el);
  });

  // 4. Stagger parent containers
  root.querySelectorAll('[data-reveal-stagger]').forEach((container) => {
    const children = container.querySelectorAll(':scope > *');
    if (children.length > 0) {
      initStaggerReveal(children, { trigger: container });
    }
  });
}
