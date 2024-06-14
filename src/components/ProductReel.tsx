"use client";

import { ExternalLink, Link } from "lucide-react";
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
    <section className=" pb-20 pt-6 ">
      <div className="md:flex md:items-center px-4 sm:px-0 mb-4">
        <div className="max-w-2xl lg:max-w-4xl lg:px-0">
          <div className="flex text-[#2a7ec8] font-bold tracking-wide uppercase mb-3 sm:mb-6 text-xs sm:text-sm rounded-full bg-teal-accent-400">
            Portfolio
          </div>
          <h1 className="text-2xl font-semibold text-slate-700 sm:text-4xl">Our recent work</h1>
        </div>
      </div>

      <div className="relative">
        <div className="sm:mt-8 flex items-center w-full">
          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-6 lg:gap-x-10">
            <div className="h-[33rem] bg-slate-100 overflow-y-hidden sm:shadow-lg p-4 sm:p-0">
              <a target="_blank" href="https://jaco-party.vercel.app/" className="relative group">
                <Image
                  src="/jaco1.png"
                  alt="Jaco Party Rentals"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  className={`${isImageLoading ? 'blur' : 'remove-blur'}`}
                />
                <span className="hidden sm:block absolute p-1 rounded-lg top-2 right-2 group-hover:text-white text-transparent group-hover:bg-blue-400 transition-colors duration-300">
                  <ExternalLink className="" />

                </span>
              </a>
            </div>
            <div className="h-[33rem] bg-slate-100 overflow-y-hidden sm:shadow-lg p-4 sm:p-0">
              <a target="_blank" href="https://nepal-teahouse-trekking.vercel.app/" className="relative group">
                <Image
                  src="/nepal.png"
                  alt="Nepal Tea Trekking"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  className={`${isImageLoading ? 'blur' : 'remove-blur'}`}
                />
                <span className="hidden sm:block absolute p-1 rounded-lg top-2 right-2 group-hover:text-white text-transparent group-hover:bg-blue-400 transition-colors duration-300">
                  <ExternalLink className="" />
                </span>
              </a>
            </div>
            <div className="h-[33rem] bg-slate-100 overflow-y-hidden sm:shadow-lg p-4 sm:p-0">
              <a target="_blank" href="https://www.thesonomacountyexperience.com/" className="relative group">
                <Image
                  src="/sonoma.png"
                  alt="Sonoma County Experience"
                  width={400}
                  height={400}
                  onLoad={() => setImageLoading(false)}
                  className={`${isImageLoading ? 'blur' : 'remove-blur'}`}
                />
                <span className="hidden sm:block absolute p-1 rounded-lg top-2 right-2 group-hover:text-white text-transparent group-hover:bg-blue-400 transition-colors duration-300">
                  <ExternalLink className="" />

                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductReel;
