import Lenis from "@studio-freight/lenis"

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_NAME: string
    NEXT_PUBLIC_SITE_URL: string
    NEXT_PUBLIC_SANITY_PROJECT_ID: string
    NEXT_PUBLIC_SANITY_DATASET: string
  }
}

declare global {
  interface Window {
    lenis: Lenis | undefined
    scrollNeedRestoration: boolean
  }

  interface Navigator {
    msMaxTouchPoints: number
  }
}
