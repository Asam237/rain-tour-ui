/* eslint-disable react-hooks/rules-of-hooks */
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { requestFrame } from "@/lib/request-frame"

// Set GSAP
// Cancel the internal rAF
// since we want to use ours. (only one rAF)
gsap.ticker.remove(gsap.updateRoot)
gsap.registerPlugin(ScrollTrigger)
if (typeof window !== "undefined") {
  ScrollTrigger.defaults({ scroller: document.body })
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      return arguments.length
        ? window.lenis?.scrollTo(value)
        : window.pageYOffset
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
  })
}

export default function useGSAP() {
  /**
   * onComponentMounted
   */
  useEffect(() => {
    // Use only one
    // requestAnimationFrame for your whole app.
    const rAF = requestFrame("write", (time: number) => {
      gsap.updateRoot(time / 1000)
    })
    return () => rAF.dispose()
  }, [])
}
