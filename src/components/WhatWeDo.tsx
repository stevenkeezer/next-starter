import React from "react";
import SvgComputerGirl from "./SvgComputerGirl";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowBigDown, BarChart2, BarChart3, BarChart4, Database, Edit, PaintBucket, PaperclipIcon, Pen, Phone, PieChart, Rabbit } from "lucide-react";
import Image from "next/image";
import Logos from "./Logos";
import { QuickForm } from "./QuickForm";

export default function WhatWeDo() {
  const features = [
    {
      name: "Push to deploy.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: ArrowBigDown,
    },
    {
      name: "SSL certificates.",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: ArrowBigDown,
    },
    {
      name: "Simple queues.",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
      icon: ArrowBigDown,
    },
    {
      name: "Advanced security.",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
      icon: ArrowBigDown,
    },
    {
      name: "Powerful API.",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: ArrowBigDown,
    },
    {
      name: "Database backups.",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
      icon: ArrowBigDown,
    },
  ];

  return (
    <div className="sm:py-14">
      <MaxWidthWrapper>
              {/* <div className="flex text-[#2a7ec8] px-4  tracking-wide text-xs sm:text-sm sm:px-0 font-bold uppercase mb-4 -full bg-teal-accent-400">
                WHAT WE DO
              </div> */}
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
            {/* <div className="mt-6">
              <SvgComputerGirl />
            </div> */}
<div className=" border-l border-r border-t bg-blue-100/50 border-slate-200/90">
            <Image src="/cpu.png" height={800} width={800} />

</div>
            <Logos />
            {/* <QuickForm /> */}
            {/* <div className="h-[80%] w-full justify-end mx-auto flex mt-16">
              <div className="overflow-hidden bg-slate-100 px-8 pt-7 pb-4 h-auto">
                <Image src="/ui.svg" height={500} width={500} alt="trees" className="w-full h-full mx-auto object-cover" />
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="mx-auto mt-16 sm:mt-12 md:pb-24">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 ml-20 text-sm leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9 bg-sky-50 shadow -xl p-6">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div> */}
      </MaxWidthWrapper>
    </div>
  );
}
