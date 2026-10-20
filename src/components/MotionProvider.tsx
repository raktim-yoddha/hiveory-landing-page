"use client";

/**
 * Site-wide motion: Locomotive Scroll (Lenis) smooth scrolling driven by GSAP's ticker,
 * ScrollTrigger kept in sync with it, a hero intro timeline, and scroll reveals for
 * anything marked with data attributes:
 *
 *   data-hero="1..n"        intro on load, in order (data-hero-split splits the words)
 *   data-split              heading whose words rise from a mask on scroll
 *   data-reveal             fades and rises into place on scroll (batched, staggered)
 *   data-reveal-stagger     its children rise one after another
 *   data-reveal-line        a rule that draws in from the centre
 *   data-scale-in           a screenshot that eases from slightly smaller to full size
 *
 * Elements start hidden through `html.motion` CSS (set before paint in layout.tsx) so
 * nothing flashes; with reduced motion none of this runs and the page stays still.
 */
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import { setScroller } from "@/lib/smooth-scroll";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const EASE = "expo.out";
const REDUCED = "(prefers-reduced-motion: reduce)";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // One smooth-scroll engine for the whole session, rendered by GSAP's ticker
  useEffect(() => {
    if (window.matchMedia(REDUCED).matches) return;
    const scroller = new LocomotiveScroll({
      lenisOptions: { lerp: 0.1, smoothWheel: true, anchors: { offset: -80 } },
      initCustomTicker: (render) => gsap.ticker.add(render),
      destroyCustomTicker: (render) => gsap.ticker.remove(render),
    });
    gsap.ticker.lagSmoothing(0);
    scroller.lenisInstance?.on("scroll", ScrollTrigger.update);
    setScroller(scroller);
    return () => {
      setScroller(null);
      scroller.destroy();
    };
  }, []);

  // Animations for the page that is showing; reverted and rebuilt on every route change
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(REDUCED, () => {
        gsap.set("[data-hero],[data-split],[data-reveal],[data-reveal-stagger] > *,[data-reveal-line]", { autoAlpha: 1, clearProps: "transform" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero intro, in data-hero order
        const hero = gsap.utils
          .toArray<HTMLElement>("[data-hero]")
          .sort((a, b) => Number(a.dataset.hero) - Number(b.dataset.hero));
        if (hero.length) {
          const tl = gsap.timeline({ defaults: { ease: EASE, duration: 1.1 }, delay: 0.1 });
          hero.forEach((el, i) => {
            const at = i === 0 ? 0 : "<0.12";
            if (el.hasAttribute("data-hero-split")) {
              const split = SplitText.create(el, { type: "words", mask: "words" });
              tl.set(el, { autoAlpha: 1 }, at).from(split.words, { yPercent: 110, duration: 1.2, stagger: 0.06 }, "<");
            } else {
              tl.fromTo(el, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0 }, at);
            }
          });
        }

        // Headings: words rise from a mask as they enter
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "words",
            mask: "words",
            autoSplit: true,
            onSplit(self) {
              gsap.set(el, { autoAlpha: 1 });
              return gsap.from(self.words, {
                yPercent: 110,
                duration: 1.1,
                ease: EASE,
                stagger: 0.045,
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              });
            },
          });
        });

        // Single elements, batched so neighbours entering together stagger.
        // Start states are set now, so nothing shows before its turn.
        gsap.set("[data-reveal]", { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 90%",
          once: true,
          onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 1.1, ease: EASE, stagger: 0.09 }),
        });

        // Grids and lists: children one after another ("fade" keeps them in place,
        // for layouts measured from their children's positions)
        gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
          gsap.fromTo(
            group.children,
            { autoAlpha: 0, y: group.dataset.revealStagger === "fade" ? 0 : 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.1,
              ease: EASE,
              stagger: 0.08,
              scrollTrigger: { trigger: group, start: "top 88%", once: true },
            },
          );
        });

        // Rules draw in from the centre
        gsap.utils.toArray<HTMLElement>("[data-reveal-line]").forEach((line) => {
          gsap.fromTo(
            line,
            { autoAlpha: 1, scaleX: 0 },
            { scaleX: 1, duration: 1.4, ease: "power3.inOut", scrollTrigger: { trigger: line, start: "top 95%", once: true } },
          );
        });

        // Screenshots settle to full size while they scroll into view
        gsap.utils.toArray<HTMLElement>("[data-scale-in]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.92, autoAlpha: 0.4 },
            { scale: 1, autoAlpha: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 95%", end: "top 35%", scrub: 0.6 } },
          );
        });
      });

      // Layout can shift once images and fonts settle
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh);
      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return <>{children}</>;
}
