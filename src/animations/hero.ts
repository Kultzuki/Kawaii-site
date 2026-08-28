import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION_DURATIONS, MOTION_EASINGS, MOTION_STAGGERS } from './tokens';
import { isReducedMotion, isMobileDevice } from './scroll';
import { initFloating } from './interactions';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface Hero25DLayerConfig {
  sky?: string | HTMLElement;
  cloudsDistant?: string | HTMLElement[] | NodeListOf<HTMLElement>;
  cloudsForeground?: string | HTMLElement[] | NodeListOf<HTMLElement>;
  hills?: string | HTMLElement;
  cottage?: string | HTMLElement;
  character?: string | HTMLElement;
  decorations?: string | HTMLElement[] | NodeListOf<HTMLElement>;
  stickers?: string | HTMLElement[] | NodeListOf<HTMLElement>;
  content?: string | HTMLElement;
  cta?: string | HTMLElement;
}

/**
 * Initializes the full 2.5D Hero Scene: Entrance Sequence, Mouse Parallax, and Scroll Transformation.
 */
export function initHeroScene25D(
  containerSelector: string = '#hero-scene',
  layers: Hero25DLayerConfig = {}
): {
  entranceTimeline: gsap.core.Timeline | null;
  cleanup: () => void;
} {
  if (typeof window === 'undefined') {
    return { entranceTimeline: null, cleanup: () => {} };
  }

  const container = document.querySelector(containerSelector) as HTMLElement;
  if (!container) {
    return { entranceTimeline: null, cleanup: () => {} };
  }

  const reduced = isReducedMotion();
  const mobile = isMobileDevice();

  // Query DOM elements
  const skyEl = typeof layers.sky === 'string' ? document.querySelector(layers.sky) : layers.sky;
  const cloudsDist = typeof layers.cloudsDistant === 'string' ? document.querySelectorAll(layers.cloudsDistant) : layers.cloudsDistant;
  const cloudsFore = typeof layers.cloudsForeground === 'string' ? document.querySelectorAll(layers.cloudsForeground) : layers.cloudsForeground;
  const hillsEl = typeof layers.hills === 'string' ? document.querySelector(layers.hills) : layers.hills;
  const cottageEl = typeof layers.cottage === 'string' ? document.querySelector(layers.cottage) : layers.cottage;
  const charEl = typeof layers.character === 'string' ? document.querySelector(layers.character) : layers.character;
  const decoEls = typeof layers.decorations === 'string' ? document.querySelectorAll(layers.decorations) : layers.decorations;
  const stickerEls = typeof layers.stickers === 'string' ? document.querySelectorAll(layers.stickers) : layers.stickers;
  const contentEl = typeof layers.content === 'string' ? document.querySelector(layers.content) : layers.content;
  const ctaEl = typeof layers.cta === 'string' ? document.querySelector(layers.cta) : layers.cta;

  // --------------------------------------------------------------------------
  // 1. Initial Load Entrance Timeline
  // --------------------------------------------------------------------------
  const entranceTl = gsap.timeline({
    delay: 0.1,
    defaults: { ease: MOTION_EASINGS.outExpo },
  });

  if (reduced) {
    entranceTl.to(
      [skyEl, hillsEl, cottageEl, charEl, contentEl, ctaEl].filter(Boolean),
      { opacity: 1, duration: 0.3 }
    );
  } else {
    // 1. Sky & atmosphere fade in
    if (skyEl) {
      entranceTl.fromTo(skyEl, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' });
    }

    // 2. Distant hills & environment reveal
    if (hillsEl) {
      entranceTl.fromTo(
        hillsEl,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: MOTION_DURATIONS.reveal },
        '<0.2'
      );
    }

    if (cottageEl) {
      entranceTl.fromTo(
        cottageEl,
        { opacity: 0, scale: 0.9, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: MOTION_DURATIONS.reveal, ease: MOTION_EASINGS.springGentle },
        '<0.15'
      );
    }

    // 3. Clouds float into initial position
    if (cloudsDist && ((cloudsDist instanceof NodeList && cloudsDist.length > 0) || (Array.isArray(cloudsDist) && cloudsDist.length > 0))) {
      entranceTl.fromTo(
        cloudsDist,
        { opacity: 0, y: -25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, stagger: 0.1 },
        '<0.1'
      );
    }

    // 4. Character focal hero enters with energetic spring
    if (charEl) {
      entranceTl.fromTo(
        charEl,
        { opacity: 0, scale: 0.88, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.95,
          ease: MOTION_EASINGS.springGentle,
        },
        '<0.2'
      );
    }

    // 5. Typography content reveal
    if (contentEl) {
      const heading = contentEl.querySelector('h1');
      const tagline = contentEl.querySelector('p');
      const meta = contentEl.querySelector('.hero-meta-bar, .hero-pill-kicker');

      if (meta) {
        entranceTl.fromTo(meta, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 }, '<0.2');
      }
      if (heading) {
        entranceTl.fromTo(heading, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '<0.1');
      }
      if (tagline) {
        entranceTl.fromTo(tagline, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 }, '<0.15');
      }
    }

    // 6. Floating stickers and decorations settle into place
    if (stickerEls && ((stickerEls instanceof NodeList && stickerEls.length > 0) || (Array.isArray(stickerEls) && stickerEls.length > 0))) {
      entranceTl.fromTo(
        stickerEls,
        { opacity: 0, scale: 0.65, rotation: (i) => (i % 2 === 0 ? -12 : 12) },
        {
          opacity: 1,
          scale: 1,
          rotation: (i) => (i % 2 === 0 ? -2 : 3),
          duration: 0.75,
          stagger: MOTION_STAGGERS.normal,
          ease: MOTION_EASINGS.spring,
        },
        '<0.15'
      );
    }

    if (decoEls && ((decoEls instanceof NodeList && decoEls.length > 0) || (Array.isArray(decoEls) && decoEls.length > 0))) {
      entranceTl.fromTo(
        decoEls,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: MOTION_EASINGS.springGentle },
        '<0.1'
      );
    }

    // 7. CTAs appear
    if (ctaEl) {
      entranceTl.fromTo(
        ctaEl,
        { opacity: 0, y: 16, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: MOTION_EASINGS.springGentle },
        '<0.2'
      );
    }

    // After entrance, start subtle organic idle floating on character and stickers
    entranceTl.add(() => {
      if (charEl) {
        initFloating(charEl, { y: 10, duration: 3.4 });
      }
      if (stickerEls) {
        initFloating(stickerEls, { y: 7, rotation: 1.5, duration: 2.8 });
      }
      if (cloudsFore) {
        initFloating(cloudsFore, { y: 6, duration: 4.0 });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mouse Move 2.5D Interactive Parallax (Desktop only)
  // --------------------------------------------------------------------------
  let cleanupMouseMove = () => {};

  if (!reduced && !mobile) {
    const quickSetters = {
      cloudsDistX: cloudsDist ? gsap.quickTo(cloudsDist, 'x', { duration: 0.8, ease: 'power2.out' }) : null,
      cloudsDistY: cloudsDist ? gsap.quickTo(cloudsDist, 'y', { duration: 0.8, ease: 'power2.out' }) : null,
      hillsX: hillsEl ? gsap.quickTo(hillsEl, 'x', { duration: 0.7, ease: 'power2.out' }) : null,
      hillsY: hillsEl ? gsap.quickTo(hillsEl, 'y', { duration: 0.7, ease: 'power2.out' }) : null,
      cottageX: cottageEl ? gsap.quickTo(cottageEl, 'x', { duration: 0.6, ease: 'power2.out' }) : null,
      cottageY: cottageEl ? gsap.quickTo(cottageEl, 'y', { duration: 0.6, ease: 'power2.out' }) : null,
      charX: charEl ? gsap.quickTo(charEl, 'x', { duration: 0.5, ease: 'power2.out' }) : null,
      charY: charEl ? gsap.quickTo(charEl, 'y', { duration: 0.5, ease: 'power2.out' }) : null,
      stickersX: stickerEls ? gsap.quickTo(stickerEls, 'x', { duration: 0.4, ease: 'power2.out' }) : null,
      stickersY: stickerEls ? gsap.quickTo(stickerEls, 'y', { duration: 0.4, ease: 'power2.out' }) : null,
      decoX: decoEls ? gsap.quickTo(decoEls, 'x', { duration: 0.35, ease: 'power2.out' }) : null,
      decoY: decoEls ? gsap.quickTo(decoEls, 'y', { duration: 0.35, ease: 'power2.out' }) : null,
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      // Balanced Depth Multipliers
      quickSetters.cloudsDistX?.(normX * 8);
      quickSetters.cloudsDistY?.(normY * 6);

      quickSetters.hillsX?.(normX * 12);
      quickSetters.hillsY?.(normY * 8);

      quickSetters.cottageX?.(normX * 18);
      quickSetters.cottageY?.(normY * 10);

      quickSetters.charX?.(normX * 22);
      quickSetters.charY?.(normY * 12);

      quickSetters.decoX?.(normX * 28);
      quickSetters.decoY?.(normY * 16);

      quickSetters.stickersX?.(normX * 36);
      quickSetters.stickersY?.(normY * 20);
    };

    const onMouseLeave = () => {
      quickSetters.cloudsDistX?.(0);
      quickSetters.cloudsDistY?.(0);
      quickSetters.hillsX?.(0);
      quickSetters.hillsY?.(0);
      quickSetters.cottageX?.(0);
      quickSetters.cottageY?.(0);
      quickSetters.charX?.(0);
      quickSetters.charY?.(0);
      quickSetters.decoX?.(0);
      quickSetters.decoY?.(0);
      quickSetters.stickersX?.(0);
      quickSetters.stickersY?.(0);
    };

    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    cleanupMouseMove = () => {
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }

  // --------------------------------------------------------------------------
  // 3. Scroll Scene Transformation (ScrollTrigger scrub)
  // --------------------------------------------------------------------------
  let scrollTriggerInstance: ScrollTrigger | null = null;

  if (!reduced) {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Differential scroll speeds across depth planes
    if (cloudsDist) {
      scrollTl.to(cloudsDist, { y: -80, opacity: 0.3, ease: 'none' }, 0);
    }
    if (cloudsFore) {
      scrollTl.to(cloudsFore, { y: -140, scale: 1.15, ease: 'none' }, 0);
    }
    if (hillsEl) {
      scrollTl.to(hillsEl, { y: 60, ease: 'none' }, 0);
    }
    if (cottageEl) {
      scrollTl.to(cottageEl, { y: 90, scale: 0.96, ease: 'none' }, 0);
    }
    if (charEl) {
      scrollTl.to(charEl, { y: 70, scale: 0.92, ease: 'none' }, 0);
    }
    if (stickerEls) {
      scrollTl.to(stickerEls, { y: -60, opacity: 0.2, ease: 'none' }, 0);
    }
    if (contentEl) {
      scrollTl.to(contentEl, { y: -40, opacity: 0.1, ease: 'none' }, 0);
    }

    scrollTriggerInstance = scrollTl.scrollTrigger ?? null;
  }

  // Cleanup helper
  const cleanup = () => {
    cleanupMouseMove();
    scrollTriggerInstance?.kill();
  };

  return { entranceTimeline: entranceTl, cleanup };
}
