import Layout from "@/layouts/default"
import Image from "next/image"
import BannerImg from "../../public/images/banner.png"

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 lg:items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-[1.875rem] lg:text-[3.75rem] font-light text-center lg:text-start leading-relaxed">
                Are you ready to <br />
                <span className="bg-[#fcead9] text-[#ff9200] font-bold underline underline-offset-[16px]">
                  Discovery
                </span>
                <span className="text-black font-bold ml-2 lg:ml-4">the world</span>
              </h1>
              <p className="pt-10 text-gray-500 text-lg font-normal">
                Book your trip and be relax we will make a best trip for you
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image alt="image" className="w-full h-auto" src={BannerImg} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
