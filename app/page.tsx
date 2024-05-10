import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="bg-[#007b83] py-4 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            BGS Group
          </h1>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg">
            <section className="p-8 md:p-10 lg:p-12 hover:shadow-md">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                About Us:
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                BGS Group is an innovation-based tech firm dedicated to
                exploring different ideas to solve current global issues
                threatening both nature & mankind.
              </p>
            </section>
            <hr className="border-t border-gray-200" />
            <section className="p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                Products:
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-medium md:text-2xl lg:text-3xl">
                  VHUMI
                </h3>
                <p className="mt-1 mb-4 text-md md:text-lg lg:text-xl">
                  A multivendor ecommerce platform for food products.
                </p>
                <Link href="https://vhumi.in/">
                  <Button className="mb-2 bg-[#007b83] text-white rounded-md shadow-md hover:bg-[#005a5f] px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg hover:scale-105 hover:shadow-md">
                    Visit VHUMI
                  </Button>
                </Link>
                <p className="text-md md:text-lg lg:text-xl">
                  VHUMI is a revolutionary multivendor ecommerce platform
                  specifically designed for food products. It connects producers
                  directly with consumers, ensuring fresher products and fairer
                  prices.
                </p>
                <div className="flex overflow-x-auto space-x-4 py-4 md:py-6 lg:py-8 scrollbar-thin scrollbar-thumb-[#007b83] scrollbar-track-gray-200 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700">
                  <Image
                    alt="Image 1"
                    className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-40 lg:w-40"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <Image
                    alt="Image 2"
                    className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-40 lg:w-40"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <Image
                    alt="Image 3"
                    className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-40 lg:w-40"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <Image
                    alt="Image 4"
                    className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-40 lg:w-40"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <Image
                    alt="Image 5"
                    className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-40 lg:w-40"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <Image
                    alt="Image 6"
                    className="h-24 w-24 rounded-full md:h-32 md:w-32 lg:h-40 lg:w-40"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                </div>
              </div>
              <hr className="my-8 border-t border-gray-200 md:my-10 lg:my-12" />
              <div>
                <h3 className="text-xl font-medium md:text-2xl lg:text-3xl">
                  MAYA-B 0.01
                </h3>
                <p className="mt-1 mb-4 text-md md:text-lg lg:text-xl">
                  A unique camera application.
                </p>
                <Link href={"/cameraapp"}>
                  <Button className="mb-2 bg-[#007b83] text-white rounded-md shadow-md hover:bg-[#005a5f] px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg hover:scale-105 hover:shadow-md">
                    Visit MAYA-B 0.01
                  </Button>
                </Link>
                <div className="flex flex-wrap gap-4 justify-center md:gap-6 lg:gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#007b83] scrollbar-track-gray-200 dark:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-700 px-4 md:px-6 lg:px-8">
                  <Image
                    alt="Image 1"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <Image
                    alt="Image 2"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <Image
                    alt="Image 3"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <Image
                    alt="Image 4"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <Image
                    alt="Image 5"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                  <Image
                    alt="Image 6"
                    className="h-16 w-16 rounded-full md:h-20 md:w-20 lg:h-24 lg:w-24"
                    height="64"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="bg-[#007b83] py-4 shadow-md">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
          <p className="text-sm md:text-base lg:text-lg">
            UDYAM/MSME REG NO: UDYAM WB-0080197
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Email: director@bgsgroup.in
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            Address: Narmada Park, Parbangla, Batanagar, Maheshtala (M), Kolkata
            700140
          </p>
        </div>
      </footer>
    </div>
  );
}
