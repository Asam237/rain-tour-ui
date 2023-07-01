import { FooterData } from "@/data/footer"
import { FooterType } from "@/types"
import Link from "next/link"
import { FaArrowDown } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="my-8">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4 border rounded-xl shadow-md p-4">
          {FooterData.map((item: FooterType, index) => {
            return (
              <div
                key={index}
                className="w-full lg:w-1/5 py-2 px-4 flex flex-row lg:justify-between lg:mx-2"
              >
                <div>
                  <h1 className="flex items-center text-lg font-bold">
                    {item.icon}
                    <span className="px-2 lg:px-4 text-gray-500">
                      {item.title}
                    </span>
                    <FaArrowDown
                      className="text-gray-500 hidden lg:flex"
                      size={14}
                    />
                  </h1>
                  <p className="mt-2 text-[1.14rem] text-gray-600 text-start font-normal">
                    {item.description}
                  </p>
                  <hr
                    className={`lg:hidden mt-4 ${
                      index === 3 ? "hidden" : "flex"
                    }`}
                  />
                </div>
                <div className="lg:inline-block h-20 min-h-[1em] w-0.5 self-stretch hidden bg-gray-200 opacity-100 text-base"></div>
              </div>
            )
          })}
          <div className="w-full lg:w-1/5 flex justify-center items-center">
            <Link
              className="bg-orange-500 text-white rounded-md px-6 py-3 mt-4 lg:mt-0"
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
