import { create } from "zustand"
import type Lenis from "@studio-freight/lenis"

interface IStore {
  lenis: Lenis | null
  setLenis: Function

  overflow: boolean
  setOverflow: Function
}

export const useStore = create<IStore>((set) => ({
  overflow: true,
  setOverflow: (overflow: boolean) => set({ overflow }),

  // Lenis
  lenis: null,
  setLenis: (lenis: Lenis | null) => set({ lenis }),
}))
