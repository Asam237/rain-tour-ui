import { useEffect, useRef } from "react"
// import { useRouter } from 'next/router'

import { useStore } from "@/lib/store"
import { IUseFrameResponse, requestFrame } from "@/lib/request-frame"

/**
 * Set up Lenis for smooth scroll.
 */
export const LenisSmoothScroll = () => {
  const rAF = useRef<IUseFrameResponse>()
  const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])

  /**
   * Asynchronously load Lenis.
   */
  const initialize = async () => {
    const Lenis = await import("@studio-freight/lenis")
    return new Lenis.default({
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      infinite: false,
    })
  }

  useEffect(() => {
    // Import Lenis.
    if (!lenis) {
      initialize()
        .then((lenis) => setLenis(lenis))
        .catch(() => null)
      return
    }

    // Lenis has been imported.
    // Exposing to the
    // global scope for ease of use.
    window.lenis = lenis

    // Use only one
    // requestAnimationFrame for your whole app.
    rAF.current = requestFrame("write", (time: number) => {
      lenis?.raf(time)
    })

    return () => {
      // clean rAF.
      rAF.current?.dispose()

      // clean Lenis.
      lenis.destroy()
      setLenis(null)
      window.lenis = undefined
    }
  }, [lenis])

  // Ask Lenis to
  // manage internal navigation (hash)
  const scrollToHashTarget = (hash: string, shouldUpdateLocation = true) => {
    if (lenis && hash) {
      const target = document.querySelector(hash)
      lenis.stop()
      lenis.start()
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        // easeInOutExpo
        easing: (x) =>
          x === 0
            ? 0
            : x === 1
            ? 1
            : x < 0.5
            ? Math.pow(2, 20 * x - 10) / 2
            : (2 - Math.pow(2, -20 * x + 10)) / 2,
      })
      if (shouldUpdateLocation) window.location.hash = hash
    }
  }

  useEffect(() => {
    const { hash } = location

    // ScrollTrigger.refresh()

    // update scroll position
    // on page refresh based on hash
    if (hash != "") {
      scrollToHashTarget(hash)
    }

    // catch anchor links clicks.
    function handleClickOnInternalLink(this: HTMLAnchorElement, event: Event) {
      event.preventDefault()
      const currentHash = this.href.split("#").pop()
      const shouldUpdateLocation = this.dataset.silentlyScrollTo ? false : true
      if (currentHash)
        scrollToHashTarget("#" + currentHash, shouldUpdateLocation)
    }

    const internalLinks = Array.from<HTMLAnchorElement>(
      document.querySelectorAll("[href]")
    ).filter((node) => node.href.includes(location.pathname + "#"))

    internalLinks.forEach((node) => {
      node.addEventListener("click", handleClickOnInternalLink, false)
    })

    // cleanup.
    return () => {
      internalLinks.forEach((node) => {
        node.removeEventListener("click", handleClickOnInternalLink, false)
      })
    }
  }, [lenis])

  return null
}
