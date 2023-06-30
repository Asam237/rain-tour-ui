import { useCallback, useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import css from "./cursor.module.css"

export const Cursor = () => {
  const cursor = useRef<HTMLDivElement>()
  const [hasMoved, setHasMoved] = useState(false)

  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: hasMoved ? 0.6 : 0,
        ease: "expo.out",
      })
      setHasMoved(true)
    },
    [hasMoved]
  )

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, false)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove, false)
    }
  }, [hasMoved])

  return (
    <div
      ref={cursor}
      style={{ opacity: hasMoved ? 1 : 0 }}
      className={css.container}
    />
  )
}
