"use client";

import Image from "next/image";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
}

const ProductReel = (props: ProductReelProps) => {
  return (
    <section className=" pb-20 pt-6 ">
      <div className="md:flex md:items-center px-4 sm:px-0 mb-4">
        <div className="max-w-2xl lg:max-w-4xl lg:px-0">
          <div className="flex text-[#2a7ec8] font-bold tracking-wide uppercase mb-3 sm:mb-6 text-xs sm:text-sm rounded-full bg-teal-accent-400">
            Portfolio
          </div>
          <h1 className="text-3xl font-semibold text-slate-700 sm:text-4xl">Our recent work</h1>
        </div>
      </div>

      <div className="relative">
        <div className="sm:mt-8 flex items-center w-full">
          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-6 lg:gap-x-10">
            <div className="h-[33rem] overflow-hidden sm:shadow-md sm:border border-slate-100 p-4 sm:p-0">
              <Image src="/jaco1.png" alt="Jaco Party Rentals" width={500} height={500} />
            </div>
            <div className="h-[33rem] overflow-hidden sm:shadow-md sm:border border-slate-100 p-4 sm:p-0">
              <Image src="/nepal.png" alt="Nepal Tea Trekking" width={500} height={500} />
            </div>
            <div className="h-[33rem] overflow-hidden sm:shadow-md sm:border border-slate-100 p-4 sm:p-0">
              <Image src="/sonoma.png" alt="sonoma county experience" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
