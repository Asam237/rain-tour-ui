import { HeaderData } from "@/data/header"
import { HeaderType } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import LogoPic from "../../../public/images/logo.png"
import { AiOutlineMenu } from "react-icons/ai"

export const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Image alt="logo" src={LogoPic} />
          </div>
          <AiOutlineMenu
            size={30}
            className="lg:hidden"
            onClick={() => {
              setNavbar(!navbar)
            }}
          />
          <nav>
            <ul className="hidden lg:flex flex-col lg:flex-row lg:space-x-20 text-lg font-medium lg:items-center text-gray-700 space-y-2 lg:space-y-0">
              {HeaderData.map((item: HeaderType, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                )
              })}
              <Link
                className="bg-gray-700 text-white rounded-md px-6 py-3"
                href={"#"}
              >
                Sign up
              </Link>
            </ul>
          </nav>
        </div>

        <div
          className={`flex-1 justify-self-center mt-2 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-end justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 lg:hidden text-gray-900 mb-4">
            {HeaderData.map((item: HeaderType, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
