import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

type Options = {
  location: any // WindowLocation<unknown>
}

/**
 * Add pointer-events to certain
 * elements on scroll in order to smooth the experience.
 */
export default function usePointerEventsOnScroll({ location }: Options) {
  useEffect(() => {
    // Do not use this
    // trick on touch devices.
    const mm = gsap.matchMedia()
    mm.add("(hover: hover)", () => {
      // Select elements.
      const footer = document.querySelector<HTMLElement>("#footer")
      const elements: HTMLElement[] = Array.prototype.slice.call(
        document.querySelector<HTMLElement>("#main")?.children
      )
      footer && elements.push(footer)

      elements.forEach((element) => {
        let locked = false
        let timerID = 0

        ScrollTrigger.create({
          id: `${element.classList.value}`,
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: () => {
            // TODO: Fonction seems to be called twice.
            window.clearTimeout(timerID)

            if (!locked) {
              gsap.set(element, { pointerEvents: "none" })
              locked = true
            }

            timerID = window.setTimeout(() => {
              gsap.set(element, { pointerEvents: "auto" })
              locked = false
            }, 150)
          },
        })
      })
    })

    return () => {
      mm.revert()
    }
  }, [location])
}
