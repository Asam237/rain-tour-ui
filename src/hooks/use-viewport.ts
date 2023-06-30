import { useEffect } from "react"

import useEvents from "@/hooks/use-events"

/**
 * Observe the viewport on
 * resize and detect the device capability.
 * @author Mystro Ken <mystroken@gmail.com>
 */
export const useViewportObserver = () => {
  const events = useEvents()

  /**
   * on viewport resize.
   * get the current di
   */
  const onWindowResize = (event: UIEvent | null) => {
    // get the current viewport dimension.
    const width =
      document.documentElement.clientWidth || document.body.clientWidth
    const height = Math.min(
      window.innerHeight,
      document.documentElement.clientHeight
    ) // fixing invalid value on chrome

    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    const vh = height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    events.emit("viewport:resize", {
      width,
      height,
      event,
    })

    // Check if the device
    // has touchable capabilities.
    document.body.classList.toggle(
      "is-touch-device",
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    )
  }

  useEffect(() => {
    onWindowResize(null)
    window.addEventListener("resize", onWindowResize)

    return () => {
      window.removeEventListener("resize", onWindowResize)
    }
  }, [])
}
