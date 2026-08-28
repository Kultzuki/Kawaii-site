import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion, isMobileDevice } from './scroll';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StoryAnimationElements {
  container?: string | HTMLElement;
  track?: string | HTMLElement;
  scene1?: string | HTMLElement;
  scene2?: string | HTMLElement;
  scene3?: string | HTMLElement;
  progressBar?: string | HTMLElement;
  navDots?: string | HTMLElement[] | NodeListOf<HTMLElement>;
}

/**
 * Initializes the 3-Scene Scroll-Driven Storytelling Experience.
 */
export function initStoryScrollSequence(options: StoryAnimationElements = {}): {
  timeline: gsap.core.Timeline | null;
  cleanup: () => void;
} {
  if (typeof window === 'undefined') {
    return { timeline: null, cleanup: () => {} };
  }

  const container = typeof options.container === 'string' ? document.querySelector(options.container) : options.container;
  if (!container) {
    return { timeline: null, cleanup: () => {} };
  }

  const reduced = isReducedMotion();
  const mobile = isMobileDevice();

  // If reduced motion is requested or viewport is very small mobile, provide smooth vertical reveal without aggressive pin trapping
  if (reduced || mobile) {
    const scenes = [options.scene1, options.scene2, options.scene3]
      .map((s) => (typeof s === 'string' ? document.querySelector(s) : s))
      .filter(Boolean);

    scenes.forEach((scene) => {
      if (scene) {
        gsap.fromTo(
          scene,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: scene,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });

    return { timeline: null, cleanup: () => {} };
  }

  // --------------------------------------------------------------------------
  // Desktop Pinned Story Scrub Timeline
  // --------------------------------------------------------------------------
  const scene1 = typeof options.scene1 === 'string' ? (document.querySelector(options.scene1) as HTMLElement) : (options.scene1 as HTMLElement);
  const scene2 = typeof options.scene2 === 'string' ? (document.querySelector(options.scene2) as HTMLElement) : (options.scene2 as HTMLElement);
  const scene3 = typeof options.scene3 === 'string' ? (document.querySelector(options.scene3) as HTMLElement) : (options.scene3 as HTMLElement);
  const progressBar = typeof options.progressBar === 'string' ? (document.querySelector(options.progressBar) as HTMLElement) : (options.progressBar as HTMLElement);
  const navDots = typeof options.navDots === 'string' ? document.querySelectorAll(options.navDots) : options.navDots;

  // Scene sub-elements
  const s1Visual = scene1?.querySelector('.scene-visual');
  const s1Text = scene1?.querySelector('.scene-text');
  const s1Decos = scene1?.querySelectorAll('.scene-deco');

  const s2Visual = scene2?.querySelector('.scene-visual');
  const s2Text = scene2?.querySelector('.scene-text');
  const s2Decos = scene2?.querySelectorAll('.scene-deco');

  const s3Visual = scene3?.querySelector('.scene-visual');
  const s3Text = scene3?.querySelector('.scene-text');
  const s3Decos = scene3?.querySelectorAll('.scene-deco');

  // Initial state setup
  gsap.set([scene2, scene3], { opacity: 0, pointerEvents: 'none', visibility: 'hidden' });
  gsap.set(scene1, { opacity: 1, pointerEvents: 'auto', visibility: 'visible' });

  const storyTl = gsap.timeline({
    scrollTrigger: {
      trigger: container as HTMLElement,
      start: 'top top',
      end: '+=240%',
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (progressBar) {
          gsap.set(progressBar, { scaleX: self.progress, transformOrigin: 'left center' });
        }
        if (navDots && navDots.length === 3) {
          const index = self.progress < 0.35 ? 0 : self.progress < 0.7 ? 1 : 2;
          navDots.forEach((dot, i) => {
            (dot as HTMLElement).classList.toggle('active', i === index);
          });
        }
      },
    },
  });

  // --------------------------------------------------------------------------
  // ACT 1 -> ACT 2 Transition (Progress 0.0 -> 0.45)
  // --------------------------------------------------------------------------
  storyTl
    // Scene 1 drift & exit
    .to(s1Visual, { x: -60, y: -20, opacity: 0, duration: 1, ease: 'power2.inOut' }, 's1-out')
    .to(s1Text, { x: -40, opacity: 0, duration: 0.8, ease: 'power2.in' }, 's1-out')
    .to(s1Decos, { scale: 0.6, opacity: 0, stagger: 0.05, duration: 0.7 }, 's1-out')
    .set(scene1, { pointerEvents: 'none', visibility: 'hidden' })

    // Scene 2 enter
    .set(scene2, { pointerEvents: 'auto', visibility: 'visible' }, 's2-in')
    .fromTo(scene2, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 's2-in')
    .fromTo(s2Visual, { x: 70, y: 30, opacity: 0, scale: 0.9 }, { x: 0, y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }, 's2-in')
    .fromTo(s2Text, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 's2-in+=0.1')
    .fromTo(s2Decos, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'back.out(1.5)' }, 's2-in+=0.2')

    // --------------------------------------------------------------------------
    // ACT 2 -> ACT 3 Transition (Progress 0.5 -> 1.0)
    // --------------------------------------------------------------------------
    // Scene 2 exit
    .to(s2Visual, { y: -50, scale: 0.92, opacity: 0, duration: 1, ease: 'power2.inOut' }, 's2-out')
    .to(s2Text, { y: -30, opacity: 0, duration: 0.8, ease: 'power2.in' }, 's2-out')
    .to(s2Decos, { opacity: 0, scale: 0.7, duration: 0.6 }, 's2-out')
    .set(scene2, { pointerEvents: 'none', visibility: 'hidden' })

    // Scene 3 enter
    .set(scene3, { pointerEvents: 'auto', visibility: 'visible' }, 's3-in')
    .fromTo(scene3, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 's3-in')
    .fromTo(s3Visual, { y: 60, opacity: 0, scale: 0.88 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.4)' }, 's3-in')
    .fromTo(s3Text, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }, 's3-in+=0.1')
    .fromTo(s3Decos, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.08, duration: 0.9, ease: 'back.out(1.7)' }, 's3-in+=0.2');

  const cleanup = () => {
    storyTl.scrollTrigger?.kill();
    storyTl.kill();
  };

  return { timeline: storyTl, cleanup };
}
