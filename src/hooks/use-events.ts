import { TinyEmitter } from "tiny-emitter"

// Initialize once the library.
const events = new TinyEmitter()
if (typeof window !== "undefined") {
  // window.$events = events
}

/**
 * useEvents hook
 * for register, emit and listen custom events.
 * @author Mystro Ken <mystroken@gmail.com>
 */
export default function useEvents() {
  return events
}
