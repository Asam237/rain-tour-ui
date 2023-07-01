import React from "react"
import { FooterType } from "@/types"
import { BiLocationPlus, BiCalendar } from "react-icons/bi"
import { BsPeople } from "react-icons/bs"

export const FooterData: FooterType[] = [
  {
    title: "Destination",
    description: "Paris",
    icon: <BiLocationPlus color="orange" size={20} />,
  },
  {
    title: "Check in",
    description: "14 March 2023",
    icon: <BiCalendar color="#00d3b3" size={20} />,
  },
  {
    title: "Check out",
    description: "20 March",
    icon: <BiCalendar color="#00d3b3" size={20} />,
  },
  {
    title: "People",
    description: "2 person",
    icon: <BsPeople color="blue" size={20} />,
  },
]
