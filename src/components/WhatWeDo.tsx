'use client';
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowBigDown, ArrowRight, BarChart2, BarChart3, BarChart4, Database, Edit, PaintBucket, PaperclipIcon, Pen, Phone, PieChart, Rabbit } from "lucide-react";
import Image from "next/image";
import Logos from "./Logos";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function WhatWeDo() {
  const router = useRouter();
  const handleClick = () => {
    router.replace('/?open=dialog', { scroll: false });
  };
  return (
    <div className="lg:pt-32 pb-8 sm:pb-20 lg:pb-28">
      <MaxWidthWrapper className="">
        <div className="sm:grid grid-cols-12 grid-flow-col md:px-10 lg:px-0 gap-x-12 justify-between items-start  w-full">

          {/* <div className="w-full col-span-5 d h-full py-6 -xl flex flex-col justify-between items-center content-between">
            <div className=" bg-blue-100/60 backdrop-blur border-slate-200/90">
              <Image src="/cpu.png" height={800} width={800} alt="cpu-image" className="object-cover max-h-96 " />
            </div>
            <Logos />
          </div> */}
          <div className="col-span-12  backdrop-blur-lg ">
            <div className="flex lg:space-x-10 lg:flex-row pt-8 sm:pt-0 flex-col">
              <div className="w-full lg:w-7/12">
                <h2 className="mx-0 mb-6 px-8 font-neue-kabel sm:px-0 mt-0 py-3 sm:py-14 lg:py-0 text-3xl sm:text-5xl tracking-tightest font-normal text-[#3e4246]">
                  {/* Slashing the price of a full service web design <br /><br /> */}
                  <span className="m-0 text-blue-400 font-normal">$0</span> down,  <span className="m-0 text-blue-400 font-normal tracking-tightest">$150</span> a month,  <div className="sm:h-3" />
                 <span className="">secured by a 12-month </span> <div className="sm:h-3" />
                 <span>minimum contract</span>
                </h2>

<div className="hidden lg:block pt-8">
                <Image src="/google-review.png" height={200} width={200} alt="google-review" className="object-cover opacity-70 sm:pl-1.5 sm:pr-0 " />

</div>

             

                {/* <h3 className="text-[#3e4246]/90 pt-12 text-3xl font-neue-kabel">Whats Included:</h3> */}

              </div>
              <div className="w-full px-8 sm:px-0 lg:w-5/12 border-slate-200/90 font-spartan lg:px-8">
                {/* <Image src="/cpu.png" height={800} width={800} alt="cpu-image" className="object-cover pr-9 sm:pr-0 " /> */}
                <p className="m-0 text-[#3e4246]/65 sm:px-0 text-base sm:leading-[27px] min-[500px]:mb-4 pb-8 sm:pb-0">
                  $0 down for a standard 5-page website tailored for your small business. If your needs extend beyond that, we offer custom pricing which is determined by the scope of work, the number of additional pages, and the time involved. You retain full ownership of your domain, content, listing, and profiles. Cancel anytime without any fees or complications.
                </p>

                <div className="m-0 text-[#3e4246]/65 sm:px-0 text-base min-[500px]:mb-4 sm:leading-[27px] pb-8 sm:pb-0">
                  Our philosophy is simple: <span className="">focus on your business, and we’ll handle your website.</span> From hosting to design, we provide unlimited edits, 24/7 support, top Google Page Speed scores, and valuable analytics. Let’s get the ball rolling on your next project!
                </div>

                <span onClick={handleClick} className='hover:underline block pb-12 sm:pb-0 pt-6 cursor-pointer font-neue-kabel'>
                    <span className="inline-flex  text-lg items-center text-[#3e4246]/80">Join us today
                      <ArrowRight className="ml-2 h-4 w-4 text-blue-400" />

                    </span>
                  </span>
              </div>
            </div>


          </div>


        </div>
      </MaxWidthWrapper>
    </div>
  );
}
