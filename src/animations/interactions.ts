import { gsap } from 'gsap';
import { isReducedMotion, isMobileDevice } from './scroll';

export interface FloatingOptions {
  y?: number;
  rotation?: number;
  duration?: number;
  ease?: string;
  delay?: number;
}

export interface ContinuousRotationOptions {
  duration?: number;
  clockwise?: boolean;
  ease?: string;
}

export interface MagneticOptions {
  strength?: number;
  ease?: string;
  duration?: number;
}

export type AnimationTarget = string | Element | Element[] | NodeListOf<Element>;

/**
 * Creates smooth floating idle movement that automatically pauses when offscreen
 * to conserve GPU/CPU cycles and avoid unneeded requestAnimationFrame loops.
 */
export function initFloating(
  target: AnimationTarget,
  options: FloatingOptions = {}
): gsap.core.Tween | null {
  if (typeof window === 'undefined') return null;
  if (isReducedMotion()) return null;

  const elements = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  const yDistance = options.y ?? 10;
  const rotationAmt = options.rotation ?? 2;
  const duration = options.duration ?? 2.8;

  const tween = gsap.to(elements, {
    y: `+=${yDistance}`,
    rotation: `+=${rotationAmt}`,
    duration,
    ease: options.ease ?? 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: options.delay ?? 0,
  });

  // IntersectionObserver to pause when element scrolls out of view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tween.play();
          } else {
            tween.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach((el) => observer.observe(el as Element));
    } else {
      observer.observe(elements as Element);
    }
  }

  return tween;
}

/**
 * Creates continuous rotation (for badges, sparkle stars, prize badges)
 * that pauses when offscreen.
 */
export function initContinuousRotation(
  target: AnimationTarget,
  options: ContinuousRotationOptions = {}
): gsap.core.Tween | null {
  if (typeof window === 'undefined') return null;
  if (isReducedMotion()) return null;

  const elements = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!elements || (elements instanceof NodeList && elements.length === 0)) return null;

  const duration = options.duration ?? 18;
  const clockwise = options.clockwise ?? true;

  const tween = gsap.to(elements, {
    rotation: clockwise ? '+=360' : '-=360',
    duration,
    ease: 'none',
    repeat: -1,
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tween.play();
          } else {
            tween.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach((el) => observer.observe(el as Element));
    } else {
      observer.observe(elements as Element);
    }
  }

  return tween;
}

/**
 * Initializes desktop magnetic pull interaction on interactive CTA buttons or stickers.
 * Automatically bypassed on mobile/touch devices.
 */
export function initMagnetic(
  target: string | HTMLElement,
  options: MagneticOptions = {}
): () => void {
  if (typeof window === 'undefined') return () => {};
  if (isReducedMotion() || isMobileDevice()) return () => {};

  const element = typeof target === 'string' ? (document.querySelector(target) as HTMLElement) : target;
  if (!element) return () => {};

  const strength = options.strength ?? 0.35;
  const duration = options.duration ?? 0.3;

  const onMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: distanceX,
      y: distanceY,
      duration,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const onMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: duration * 1.5,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto',
    });
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  // Return teardown function for clean removal
  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
}
