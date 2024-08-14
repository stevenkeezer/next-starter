"use client";

import { ArrowRight, ExternalLink, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
}

const ProductReel = (props: ProductReelProps) => {
  const [isImageLoading, setImageLoading] = React.useState(true)

  return (
    <section className=" md:pt-3 lg:pb-28 lg:pt-16 ">
      <div className="md:flex md:items-center px-8 md:px-10 lg:px-0 sm:mb-14">
        <div className="max-w-2xl lg:max-w-4xl lg:px-0">
          {/* <div className="flex text-[#2a7ec8] font-bold font-neue-kabel tracking-wide uppercase mb-3 sm:mb-6 text-xs sm:text-sm rounded-full bg-teal-accent-400">
            Portfolio
          </div> */}
          <h2 className="text-3xl font-normal font-neue-kabel text-[#3e4246] md:text-4xl lg:text-5xl">Our work</h2>
        </div>
      </div>

      <div className="relative">
        <div className="md:mt-8 sm:mt-16 flex items-center w-full">
          <div className="w-full p-8 md:p-10 lg:p-0 grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-2 md:gap-y-10 lg:gap-x-10">
            <div className="xl:h-[700px] overflow-hidden relative">
              <a
                target="_blank"
                href="https://jaco-party.vercel.app/"
                className="relative group block"
              >
                <Image
                  src="/p1-jaco.png"
                  alt="Jaco Party Rentals"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="duration-300 transition-transform mx-auto h-full w-full object-cover group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute font-neue-kabel opacity-0 group-hover:opacity-100 inset-0 flex flex-col justify-between p-12 bg-transparent group-hover:bg-black/30 transition-all duration-300 ease-in-out">
                  <div className="transition-opacity duration-300 ease-in-out">
                    <p className="text-2xl sm:text-5xl leading-loose text-white font-light mb-2">
                      Branding website for a party tour business in Costa Rica
                    </p>
                    <div className="flex space-x-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      See it live
                      <ArrowRight className="ml-3" />
                    </div>
                  </div>
                  <p className="pb-8 transition-opacity duration-300 ease-in-out">
                    Full case study coming soon...
                  </p>
                </div>
              </a>
            </div>

            <div className="xl:h-[700px] overflow-hidden relative">
              <a
                target="_blank"
                href="https://www.thesonomacountyexperience.com/"
                className="relative group block"
              >
                <Image
                  src="/p1-sonoma.png"
                  alt="Sonoma County Experience"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="duration-300 transition-transform mx-auto h-full w-full object-cover group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute font-neue-kabel opacity-0 group-hover:opacity-100 inset-0 flex flex-col justify-between p-12 bg-transparent group-hover:bg-black/30 transition-all duration-400 ease-in-out">
                  <div className="transition-opacity duration-300 ease-in-out">
                    <p className="text-2xl sm:text-5xl leading-loose text-white font-light mb-2">
                      Website for an exclusive tour company in Sonoma County
                    </p>
                    <div className="flex space-x-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      See it live
                      <ArrowRight className="ml-3" />
                    </div>
                  </div>
                  <p className="pb-8 transition-opacity duration-300 ease-in-out">
                    Full case study coming soon...
                  </p>
                </div>
              </a>
            </div>

          
            <div className="xl:h-[700px] overflow-hidden relative">
              <a
                target="_blank"
                href="https://www.cchealthcareservices.com/"
                className="relative group block"
              >
                <Image
                  src="/cc.png"
                  alt="C&C Healthcare"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="duration-300 transition-transform mx-auto h-full w-full object-cover group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute font-neue-kabel opacity-0 group-hover:opacity-100 inset-0 flex flex-col justify-between p-12 bg-transparent group-hover:bg-black/30 transition-all duration-300 ease-in-out">
                  <div className="transition-opacity duration-300 ease-in-out">
                    <p className="text-2xl sm:text-5xl leading-loose text-white font-light mb-2">
                      A website for a healthcare company in the Bay Area
                    </p>
                    <div className="flex space-x-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      See it live
                      <ArrowRight className="ml-3" />
                    </div>
                  </div>
                  <p className="pb-8 transition-opacity duration-300 ease-in-out">
                    Full case study coming soon...
                  </p>
                </div>
              </a>
            </div>

            <div className="xl:h-[700px] overflow-hidden relative">
              <a
                target="_blank"
                href="https://nepal-teahouse-trekking.vercel.app/"
                className="relative group block"
              >
                <Image
                  src="/p2-nepal.png"
                  alt="Nepal Tea Trekking"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  layout="responsive"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="duration-300 transition-transform mx-auto h-full w-full object-cover group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute font-neue-kabel opacity-0 group-hover:opacity-100 inset-0 flex flex-col justify-between p-12 bg-transparent group-hover:bg-black/30 transition-all duration-300 ease-in-out">
                  <div className="transition-opacity duration-300 ease-in-out">
                    <p className="text-2xl sm:text-5xl leading-loose text-white font-light mb-2">
                      Trekking website for tea house tours in Nepal
                    </p>
                    <div className="flex space-x-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      See it live
                      <ArrowRight className="ml-3" />
                    </div>
                  </div>
                  <p className="pb-8 transition-opacity duration-300 ease-in-out">
                    Full case study coming soon...
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductReel;
