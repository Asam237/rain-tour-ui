import { FooterData } from "@/data/footer"
import { FooterType } from "@/types"
import Link from "next/link"
import { FaArrowDown } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="my-4 lg:my-8">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4 border rounded-xl shadow-md p-4">
          {FooterData.map((item: FooterType, index) => {
            return (
              <div
                key={index}
                className="w-full lg:w-1/5 py-2 px-4 flex flex-row lg:justify-between lg:mx-2"
              >
                <div>
                  <h1 className="flex items-center text-base font-bold">
                    {item.icon}
                    <span className="px-4 text-gray-500">{item.title}</span>
                    <FaArrowDown className="text-gray-500" size={14} />
                  </h1>
                  <p className="mt-2 text-xl text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="lg:inline-block h-20 min-h-[1em] w-0.5 self-stretch hidden bg-gray-200 opacity-100 text-base"></div>
              </div>
            )
          })}
          <div className="w-full lg:w-1/5 flex justify-center items-center">
            <Link
              className="bg-orange-500 text-white rounded-md px-6 py-3"
              href={"#"}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
