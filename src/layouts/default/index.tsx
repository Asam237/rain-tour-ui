import CustomHead, { SEOProps } from "@/components/custom-head"
import clsx from "clsx"
import dynamic from "next/dynamic"
import { useViewportObserver } from "@/hooks/use-viewport"
import { useStore } from "@/lib/store"
import { poppins } from "@/lib/font"
import css from "./layout.module.css"
import { Loader } from "@/components/loader"
import { Header } from "@/components/header"

const Cursor: any = dynamic(
  () => import("@/components/cursor").then(({ Cursor }) => Cursor),
  { ssr: false }
)

const LenisSmoothScroll: any = dynamic(
  () =>
    import("@/components/scroll").then(
      ({ LenisSmoothScroll }) => LenisSmoothScroll
    ),
  {
    ssr: false,
  }
)

type LayoutProps = {
  seo?: SEOProps
  className?: string
}

export default function Layout({
  seo = {
    description: "",
    title: "",
  },
  children,
  className,
}: React.PropsWithChildren<LayoutProps>) {
  useViewportObserver()
  const isLayoutOverflow = useStore((state) => state.overflow)
  return (
    <>
      <CustomHead {...seo} />
      <Cursor />
      <Loader />
      <LenisSmoothScroll />
      <div
        className={clsx(
          css.container,
          `${poppins.className} font-serif`,
          className,
          isLayoutOverflow && "-overflow"
        )}
      >
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}
