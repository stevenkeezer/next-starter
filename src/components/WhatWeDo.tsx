import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowBigDown, BarChart2, BarChart3, BarChart4, Database, Edit, PaintBucket, PaperclipIcon, Pen, Phone, PieChart, Rabbit } from "lucide-react";
import Image from "next/image";
import Logos from "./Logos";

export default function WhatWeDo() {

  return (
    <div className="sm:py-14">
      <MaxWidthWrapper>
        <div className="sm:grid grid-cols-12 grid-flow-col gap-x-8 justify-between items-start w-full">
          <div className="col-span-7 bg-white py-8 sm:p-8 shadow ">
            <h2 className="mx-0 mb-6 px-4 sm:px-0 mt-0 text-[26px] sm:text-4xl leading-tight tracking-tightest font-semibold text-slate-700">
              <span className="m-0 text-blue-400 font-semibold">$0</span> down, <span className="m-0 text-blue-400 font-semibold tracking-tightest">$150</span> a month, <br />
              12 month minimum contract
            </h2>

            <p className="m-0 text-slate-500 px-4  sm:px-0 text-base min-[500px]:mb-4 pb-8 sm:pb-0">
              $0 down for a standard 5-page website tailored for your small business. If your needs extend beyond that, we offer custom pricing which is determined by the scope of work, the number of additional pages, and the time involved. <br />
              <br />
              You retain full ownership of your domain, content, listing, and profiles. Cancel anytime without any fees or complications. You can count on us for support throughout the lifetime of your website.
            </p>
            <div className="z-40 mx-auto grid grid-cols-2 w-full pt-6 bg-slate-50 sm:bg-white gap-x-20">
              <div className="grid sm:grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-12 col-span-2 justify-between">
                <div>
                  <div className="flex items-start shadow p-4 sm:p-0 sm:shadow-none bg-white mx-4  sm:mx-0">
                    <Database className="text-sky-500 w-9 h-9 -mt-2.5" />
                    <div>
                      <h3 className="mx-0 mb-3 mt-0 pl-3.5 flex items-center font-semibold text-slate-800 text-sm leading-[16px]">Hosting Fees Included</h3>
                      <p className="m-0 pl-3.5 text-slate-500/80 text-sm">Hosting fees are built directly into the monthly payment. Giving you one less thing to worry about.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start shadow p-4 sm:p-0 sm:shadow-none bg-white mx-4  sm:mx-0">
                    <Edit className="text-sky-500 w-9 h-9 -mt-2.5" />
                    <div>
                      <h3 className="mx-0 mb-3 mt-0 pl-3.5 flex items-center font-semibold text-slate-800 text-sm leading-[16px]">Unlimited Edits</h3>

                      <p className="pl-3.5 m-0 text-slate-500/80 text-sm">Need to make a change? Submit requests for changes to your site which often will be made that day.</p>
                    </div>
                  </div>{" "}
                </div>

                <div>
                  <div className="flex items-start shadow p-4 sm:p-0 sm:shadow-none bg-white mx-4  sm:mx-0">
                    <Phone className="text-sky-500 w-9 h-9 -mt-2.5" />
                    <div>
                      <h3 className="mx-0 mb-3 mt-0 pl-3.5 flex items-center font-semibold text-slate-800 text-sm leading-[16px]">24/7 Customer Service</h3>

                      <p className="pl-3.5 m-0 text-slate-500/80 text-sm">Call direct anytime day or night, no annoying phone trees or tedious automated responses.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start shadow p-4 sm:p-0 sm:shadow-none bg-white mx-4  sm:mx-0">
                    <PaintBucket className="text-sky-500 w-9 h-9 -mt-2.5" />
                    <div>
                      <h3 className="mx-0 mb-3 mt-0 pl-3.5 flex items-center font-semibold text-slate-800 text-sm leading-[16px]">Web Design & Development</h3>

                      <p className="pl-3.5 m-0 text-slate-500/80 text-sm">Includes over 80 hours of expert design, development and thoroughly extensive research and testing.</p>
                    </div>
                  </div>{" "}
                </div>

                <div className="">
                  <div className="flex items-start shadow p-4 sm:p-0 sm:shadow-none bg-white mx-4  sm:mx-0">
                    <Rabbit className="text-sky-500 w-9 h-9 -mt-2.5" />
                    <div>
                      <h3 className="mx-0 mb-3 mt-0 pl-3.5 flex items-center font-semibold text-slate-800 text-sm leading-[16px]">100 Google Page Speed</h3>

                      <p className="pl-3.5 m-0 text-slate-500/80 text-sm">We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.</p>
                    </div>
                  </div>{" "}
                </div>

                <div className="">
                  <div className="flex items-start shadow p-4 sm:p-0 sm:shadow-none bg-white mx-4  sm:mx-0">
                    <PieChart className="text-sky-500 w-9 h-9 -mt-2.5" />
                    <div>
                      <h3 className="mx-0 mb-3 mt-0 pl-3.5 flex items-center font-semibold text-slate-800 text-sm leading-[16px]">Google Analytics</h3>

                      <p className="pl-3.5 m-0 text-slate-500/80 text-sm">Monitor traffic and its origins with our complimentary Analytics installation, offering valuable insights.</p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full col-span-5 h-full flex flex-col justify-between items-center content-between">
            <div className=" border-l border-r border-t bg-blue-100/50 border-slate-200/90">
              <Image src="/cpu.png" height={800} width={800} alt="cpu-image" />
            </div>
            <Logos />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
