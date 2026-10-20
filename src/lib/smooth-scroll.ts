/**
 * The page's one smooth-scroll instance (Locomotive Scroll v5, which runs Lenis),
 * set by MotionProvider. Anything that scrolls in code goes through scrollToTarget
 * so it eases with the rest of the page.
 */
import type LocomotiveScroll from "locomotive-scroll";

let instance: LocomotiveScroll | null = null;

export function setScroller(next: LocomotiveScroll | null) {
  instance = next;
}

/** Smoothly scroll to an element, selector or offset; native scrolling when smooth scroll is off. */
export function scrollToTarget(target: HTMLElement | string | number, offset = -80) {
  if (instance) {
    instance.scrollTo(target, { offset, duration: 1.2 });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth" });
  }
}

/** Pause page scrolling (e.g. while a dialog is open). */
export function setScrollLocked(locked: boolean) {
  const lenis = instance?.lenisInstance;
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
