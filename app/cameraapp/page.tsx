import { FarmForm } from "@/components/form-comp";
import Image from "next/image";

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
            <section className="p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                MAYA-B 0.01: An Unique Camera Application
              </h2>
              <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                MAYA-B 0.01 is a revolutionary camera application that offers a
                unique and innovative experience for users.
              </p>
            </section>
            <hr className="border-t border-gray-200" />
            <section className="p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                Capture Your Moments
              </h2>
              <FarmForm />
            </section>
            <hr className="border-t border-gray-200" />
            <section className="p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                Gallery
              </h2>
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
