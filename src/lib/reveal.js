import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Restrained scroll reveal. Corporate motion: short travel, no overshoot,
 * no scale. Elements opt in with the `data-reveal` attribute.
 */
export function useReveal(options = {}) {
  const scope = useRef(null);
  const { y = 18, stagger = 0.07, duration = 0.8, start = 'top 82%' } = options;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray('[data-reveal]');
      if (!targets.length) return;

      // Never hide content from users who have asked for reduced motion.
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { opacity: 0, y });
      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease: 'power2.out',
            overwrite: true,
          }),
      });
    }, scope);

    return () => ctx.revert();
  }, [y, stagger, duration, start]);

  return scope;
}

/** Hairline rule that draws itself left-to-right when scrolled into view. */
export function useDrawRule(ref) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        }
      );
    });
    return () => ctx.revert();
  }, [ref]);
}
