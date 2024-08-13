import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowBigDown, BarChart2, BarChart3, BarChart4, Database, Edit, PaintBucket, PaperclipIcon, Pen, Phone, PieChart, Rabbit } from "lucide-react";
import Image from "next/image";
import Logos from "./Logos";

export default function WhatWeDo() {

  return (
    <div className="sm:py-12">
      <MaxWidthWrapper className="">
        <div className="sm:grid grid-cols-12 grid-flow-col md:px-10 lg:px-0 gap-x-12 justify-between items-start w-full">

          {/* <div className="w-full col-span-5 d h-full py-6 -xl flex flex-col justify-between items-center content-between">
            <div className=" bg-blue-100/60 backdrop-blur border-slate-200/90">
              <Image src="/cpu.png" height={800} width={800} alt="cpu-image" className="object-cover max-h-96 " />
            </div>
            <Logos />
          </div> */}
          <div className="col-span-12  backdrop-blur-lg py-14 sm:py-8 ">
            <div className="flex space-x-10 sm:flex-row flex-col">
              <div className="lg:w-3/5">
                <h2 className="mx-0 mb-6 px-8 font-neue-kabel sm:px-0 mt-0 text-3xl sm:text-4xl leading-9 tracking-tightest font-normal text-[#3e4246]">
                  {/* Slashing the price of a full service web design <br /><br /> */}
                  <span className="m-0 text-blue-400 font-normal">$0</span> down, <span className="m-0 text-blue-400 font-normal tracking-tightest">$150</span> a month, <br />
                  12 month minimum contract
                </h2>

                <p className="m-0 text-[#3e4246]/85 px-8  sm:px-0 text-base sm:leading-[27px] min-[500px]:mb-4 pb-8 sm:pb-0">
                  $0 down for a standard 5-page website tailored for your small business. If your needs extend beyond that, we offer custom pricing which is determined by the scope of work, the number of additional pages, and the time involved. You retain full ownership of your domain, content, listing, and profiles. Cancel anytime without any fees or complications.
                </p>

                <p className="m-0 text-[#3e4246]/85 px-8  sm:px-0 text-base min-[500px]:mb-4 sm:leading-[27px] pb-8 sm:pb-0">
                  Our philosophy is simple: <span className="italic">focus on your business, and we’ll handle your website.</span> From hosting to design, we provide unlimited edits, 24/7 support, top Google Page Speed scores, and valuable analytics. Let’s get the ball rolling on your next project—join us today! </p>

                {/* <h3 className="text-[#3e4246]/90 pt-12 text-3xl font-neue-kabel">Whats Included:</h3> */}

              </div>
              <div className="lg:block hidden sm:w-2/5 border-slate-200/90 max-h-56 sm:-mt-10 ">
                <Image src="/cpu.png" height={800} width={800} alt="cpu-image" className="object-cover pr-9 sm:pr-0 " />
              </div>
            </div>
            

          </div>


        </div>
      </MaxWidthWrapper>
    </div>
  );
}
