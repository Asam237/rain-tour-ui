import { useEffect } from "react"
import { useStore } from "@/lib/store"

export const useScroll = (callback: (any) => any, deps = []) => {
  const lenis = useStore(({ lenis }) => lenis)

  useEffect(() => {
    if (!lenis) return
    lenis.on("scroll", callback)

    return () => {
      lenis.off("scroll", callback)
    }
  }, [lenis, callback, [...deps]])
}
