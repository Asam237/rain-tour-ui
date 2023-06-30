import { HeaderData } from "@/data/header"
import { HeaderType } from "@/types"
import Image from "next/image"
import Link from "next/link"
import LogoPic from "../../../public/images/logo.png"

export const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
          <div>
            <Image alt="logo" src={LogoPic} />
          </div>
          <nav>
            <ul className="flex flex-col lg:flex-row lg:space-x-28 text-base font-medium lg:items-center text-gray-700 space-y-2 lg:space-y-0">
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
      </div>
    </header>
  )
}
