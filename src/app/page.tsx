
import About from "@/components/About";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Pricing from "@/components/Pricing";
import ProductReel from "@/components/ProductReel";
import WhatWeDo from "@/components/WhatWeDo";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, ArrowRight, ArrowRightFromLine, CheckCircle, ExternalLink, HandIcon, Leaf } from "lucide-react";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { GetStartedButton } from "@/components/GetStartedBtn";
import { SeeOurWorkButton } from "@/components/SeeOurWorkButton";
import Footer from "@/components/Footer";


const HeroSide = () => (
  <div className="text-center bg-[#d9edfd] sm:pb-0">
    <div className="z-40 sm:pt-24 px-4 sm:px-0 xl:pt-28 2xl:pt-24">
      <Image src="/no-color.svg" alt="Golden State Web Design" className='flex mx-auto h-28 opacity-80 w-28 lg:hidden' width={134} height={134} />
      <h1 className="mx-auto max-w-[53rem]  xl:max-w-[59rem] 2xl:max-w-[63rem] drop-shadow text-3xl font-bold tracking-tighter text-slate-800 sm:text-7xl 2xl:text-[5.4rem]">
        Web design{" "}
        <span className="relative whitespace-nowrap text-blue-400">
          <span className="relative">made simple</span>
        </span>{" "}
        for small businesses.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl sm:text-lg tracking-tight text-slate-500">Hand-crafted websites, no page builders or WordPress. Premium web development with lifetime updates & support, starting at just $150 per month.</p>
      <div className="mt-9 flex justify-center sm:flex-row flex-col gap-y-4 sm:gap-y-0 gap-x-4">
        <GetStartedButton />
        <SeeOurWorkButton />
      </div>
    </div>

    <div className="hero min-h-[379px] sm:min-h-[410px] -mt-[9rem] sm:-mt-6 overflow-hidden">
      <div className="parallax-layer layer-6"></div>
      <div className="parallax-layer layer-5 hidden sm:block"></div>
      <div className="parallax-layer layer-4 hidden sm:block sm:-mb-14"></div>
      <div className="parallax-layer bike-1 "></div>
      <div className="parallax-layer layer-3"></div>
      <div className="parallax-layer layer-2"></div>
      <div className="parallax-layer layer-1 relative z-50">
      </div>
    </div>
    <div className="w-full hidden lg:block mt-6 h-1 ">
      <div className="text-neutral-400  hidden xl:block items-center justify-center z-40 py-4 px-0 inline-flex w-full bg-[#012d53] absolute -bottom-16 pb-12 left-0" id="div-1">
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-10" id="img-1" src="/logo-cloud/1.png" alt="Award 1" width={96} height={96} />
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-10" id="img-3" src="/logo-cloud/2.png" alt="Award 2" width={96} height={96} />
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-10" id="img-5" src="/logo-cloud/3.png" alt="Award 3" width={96} height={96} />
        <Image className="cursor-pointer align-middle inline-block w-20 h-auto min-w-[4.00rem] max-w-full my-0 mx-16 opacity-10" id="img-2" src="/logo-cloud/4.png" alt="Award 4" width={80} height={80} />
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-10" id="img-6" src="/logo-cloud/5.png" alt="Award 5" width={96} height={96} />
        <Image className="cursor-pointer align-middle inline-block w-20 h-auto min-w-[4.00rem] max-w-full my-0 mx-16 opacity-10" id="img-6" src="/logo-cloud/1.png" alt="Award 6" width={80} height={80} />
      </div>
    </div>
    <div>
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="relative">
      <ContactForm />

      <div className="relative w-full ">
        <div className="">
          <HeroSide />
        </div>
      </div>

      <section id="how-it-works" className="sm:pt-16 pb-2 bg-[#f2f8ff] shadow-sm">
        <WhatWeDo />
      </section>

      <section id="portfolio" className="pt-10 bg-white shadow-sm">
        <MaxWidthWrapper>
          <ProductReel query={{ sort: "desc", limit: 4 }} href="/products?sort=recent" title="Recent work" />
        </MaxWidthWrapper>
      </section>


      <div className="bg-[#f2f8ff] shadow-sm">
        <section id="about">
          <MaxWidthWrapper>
            <About />
          </MaxWidthWrapper>
        </section>

        <section id="testimonials" className="bg-white shadow-sm">
          <Testimonials />
        </section>

        <section id="pricing">
          <Pricing />
        </section>
      </div>
    </div>
  );
}

