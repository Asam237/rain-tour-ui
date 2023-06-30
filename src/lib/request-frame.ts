/**
 * The goal is to optimize the use of
 * rAF (only one loop for the whole app).
 */
type FrameMethod = "read" | "write"
type FrameRequestEntry = {
  method: FrameMethod
  callback: FrameRequestCallback
  loop: boolean
}

export interface IUseFrameResponse {
  dispose: Function
}

// Cache entries.
const entries = new Set<FrameRequestEntry>()

// Start requesting frames.
if (typeof window !== "undefined") {
  requestAnimationFrame(loop)
}

/**
 * Call entries  on each frame call.
 */
function loop(time: number) {
  // It's important to read first,
  // and to write later. Otherwise we will
  // cause a Layout computation on each call.
  requestAnimationFrame(loop)
  if (entries.size < 1) return
  const entriesThatWantToWrite: FrameRequestEntry[] = []

  // Call "read" entries first.
  entries.forEach((entry) => {
    if (entry.method === "write") {
      entriesThatWantToWrite.push(entry)
      return
    }
    callEntry(entry, time)
  })

  // Now let's call "write" entries.
  entriesThatWantToWrite.forEach((entry) => callEntry(entry, time))
}

/**
 * Define how an entry will be called.
 */
function callEntry(entry: FrameRequestEntry, time: number) {
  entry.callback(time)
  if (!entry.loop) {
    entries.delete(entry)
  }
}

/**
 * useFrame
 * Register a callback that will be called on next frame (once or many times).
 * @author Mystro Ken <mystroken@gmail.com>
 */
export function requestFrame(
  method: FrameMethod,
  callback: FrameRequestCallback,
  loop = true
): IUseFrameResponse {
  const useFrameEntry: FrameRequestEntry = { method, callback, loop }
  entries.add(useFrameEntry)
  return {
    dispose: () => {
      entries.delete(useFrameEntry)
    },
  }
}

/**
 * UseFrameOnce
 * Call the callback only once.
 */
export function requestFrameOnce(
  method: FrameMethod,
  callback: FrameRequestCallback
) {
  return requestFrame(method, callback, false)
}
