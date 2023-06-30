import localFont from "next/font/local"

export const poppins = localFont({
  display: "swap",
  variable: "--font-poppins",
  src: [
    {
      path: "../fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
})
