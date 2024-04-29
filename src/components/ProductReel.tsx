"use client";

import Link from "next/link";
import ProductListing from "./ProductListing";
import Image from "next/image";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
}

const FALLBACK_LIMIT = 4;

const ProductReel = (props: ProductReelProps) => {


  const map = [
    {},

  ]


  return (
    <section className=" pb-20">
      {/* <hr className="border-slate-300"/> */}
      <div className="md:flex md:items-center mb-4">
        <div className="max-w-2xl lg:max-w-4xl lg:px-0">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">Our Recent Work</h1>
          {/* {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null} */}
          <div className="mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-blue-400"></span>
            <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-400"></span>
            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-400"></span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="mt-12 flex items-center w-full">
          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-6 lg:gap-x-8">
            {/* {map.map((product, i) => (
              <ProductListing key={`product-${i}`} product={product} index={i} />
            ))} */}
            <div className="h-[40rem] overflow-y-auto shadow-md">

              <Image src="/jaco1.png" alt="Golden State Web Design" width={500} height={500} />
            </div>
            {/* <Image src="/pure.png" alt="Golden State Web Design"  width={500} height={500} /> */}
            <div className="h-[40rem] overflow-y-auto shadow-md">

              <Image src="/nepal.png" alt="Golden State Web Design" width={500} height={500} />
            </div>


            <div className="h-[40rem] overflow-y-auto shadow-md">
              <Image src="/sonoma.png" alt="Golden State Web Design" width={500} height={500} />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
