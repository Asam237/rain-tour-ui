import localFont from "next/font/local"

export const poppins = localFont({
  display: "swap",
  variable: "--font-poppins",
  src: [
    {
      path: "../fonts/poppins/Poppins-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Medium.ttf",
      weight: "400",
      style: "medium",
    },
    {
      path: "../fonts/poppins/Poppins-SemiBold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
})
