import type { AppProps } from "next/app"

import "../style.css"

export default function App({ Component, pageProps }: AppProps) {
  const Page = Component as any
  return <Page {...pageProps} />
}
