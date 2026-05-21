/**
 * Padrão pra animar dentro de useEffect respeitando prefers-reduced-motion:
 *
 *   const mm = gsap.matchMedia();
 *   mm.add("(prefers-reduced-motion: no-preference)", () => {
 *     gsap.to(ref.current, { ... });
 *   });
 *   return () => mm.revert();
 */

export { gsap } from "gsap";
