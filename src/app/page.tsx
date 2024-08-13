
import About from "@/components/About";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Pricing from "@/components/Pricing";
import ProductReel from "@/components/ProductReel";
import WhatWeDo from "@/components/WhatWeDo";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, ArrowRight, ArrowRightFromLine, CheckCircle, Database, Edit, ExternalLink, HandIcon, Leaf, PaintBucket, Phone, PieChart, PlusIcon, Rabbit } from "lucide-react";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { GetStartedButton } from "@/components/GetStartedBtn";
import { SeeOurWorkButton } from "@/components/SeeOurWorkButton";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import CallToAction from "@/components/CallToAction";


const HeroSide = () => (
  <div className="text-center bg-[#d9edfd]  sm:mb-10">


    <div className="hero min-h-[379px] sm:min-h-[410px] overflow-hidden">
      <div className="parallax-layer layer-6"></div>
      <div className="parallax-layer layer-5 hidden sm:block"></div>
      <div className="parallax-layer layer-4 hidden sm:block sm:-mb-14"></div>
      <div className="parallax-layer bike-1 "></div>
      <div className="parallax-layer layer-3"></div>
      <div className="parallax-layer layer-2"></div>
      <div className="parallax-layer layer-1 relative z-50">
      </div>
    </div>
    {/* <div className="w-full hidden lg:block h-1 ">
      <div className="text-neutral-400  hidden xl:block items-center justify-center z-40 py-4 px-0 inline-flex w-full bg-[#012d53] absolute -bottom-16 pb-10 left-0" id="div-1">
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-24 opacity-20" id="img-1" src="/logo-cloud/1.png" alt="Award 1" width={96} height={96} />
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-24 opacity-20" id="img-3" src="/logo-cloud/2.png" alt="Award 2" width={96} height={96} />
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-24 opacity-20" id="img-5" src="/logo-cloud/3.png" alt="Award 3" width={96} height={96} />
        <Image className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-24 opacity-20" id="img-6" src="/logo-cloud/5.png" alt="Award 5" width={96} height={96} />
        <Image className="cursor-pointer align-middle inline-block w-20 h-auto min-w-[4.00rem] max-w-full my-0 mx-24 opacity-20" id="img-2" src="/logo-cloud/4.png" alt="Award 4" width={80} height={80} />
      </div>
    </div> */}
    <div>
    </div>
  </div>
);



export default function Home() {
  return (
    <div className="relative pt-10 sm:pt-0">
      <ContactForm />

      <div className="relative bg-white  pt-0 w-full h-full shadow-slate-200 ">


        <Navigation />

        <MaxWidthWrapper>

          <div className="z-40 pt-1 sm:pt-32 pb-16 px-8 sm:px-8 lg:pt-20 lg:px-0 sm:pb-8 sm:pb-[5rem] xl:pb-[7rem] xl:pt-28 2xl:pt-24  max-w-[78.5rem] ml-auto">

            {/* <Image src="/gs3.svg" alt="Golden State Web Design" className='flex mx-auto h-36 sm:mb-4 opacity-90 w-20 lg:hidden' width={134} height={134} /> */}
            <h1 className="mr-auto max-w-[23rem] font-neue-kabel sm:max-w-[36rem] md:max-w-[37rem] lg:max-w-[52rem] xl:max-w-[55rem] 2xl:max-w-[59rem] text-4xl font-normal text-[#3e4246] sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-[3.8rem]">
              Affordable web design for small businesses, startups and non-profits<span className="text-blue-400">.</span>
            </h1>

            {/* <p className="mr-auto mt-6 max-w-2xl sm:text-lg tracking-tight text-[#3e4246]/70">Hand-crafted websites, no page builders or WordPress. Premium web development with lifetime updates & support, starting at just $150 per month.</p>
          <div className="mt-9 flex justify-start sm:flex-row flex-col gap-y-4 sm:gap-y-0 gap-x-4">
            <GetStartedButton />
            <SeeOurWorkButton />
          </div> */}
          </div>
        </MaxWidthWrapper>
        {/* <div className="mx-auto h-[24rem] w-full"> */}
        {/* <HeroSide /> */}

        {/* <Image src="/wp1.webp" alt="Golden State Web Design" fill className='flex mx-auto h-full w-full object-cover'  />   */}
        {/* </div> */}

      </div>


      {/* <section id="how-it-works" className="bg-[#f5f7fa] h-[900px] overflow-hidden shadow max-h-[360px] sm:max-h-[700px]">
        <Image src="/bg4.png" height={1416} width={3840} alt="Golden State Web Design" className='flex hover:blur-sm hover:scale-110 duration-300 transition-all mx-auto h-full w-full object-cover'  />
        <span className="absolute inset-0">
          Check out our latest project
        </span>
      </section> */}
      <section className="relative bg-[#f5f7fa] h-full overflow-hidden">
        <a href="https://jaco-party.vercel.app/" target="blank">
        <div className="relative group">
          <Image
            src="/bg4.png"
            height={1416}
            width={3840}
            alt="Golden State Web Design"
            className='duration-300 transition-all mx-auto h-[350px] sm:h-[500px] lg:h-[500px] xl:h-[700px] w-full object-cover group-hover:blur-sm group-hover:scale-110'
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity font-neue-kabel duration-300 flex flex-col items-center text-center">
              <p className="text-base font-light text-white">Check out our recent project:</p>
              <p className="text-3xl sm:text-5xl pt-4 sm:pt-6 text-white ">Jaco party rentals</p>
            </div>
          </div>
        </div>
        </a>
      </section>

      <div id="about" >
        <WhatWeDo />

      </div>
      <div className="bg-[#f5f7fa] py-8 sm:py-14">
        <MaxWidthWrapper>
          <h3 className="text-[#3e4246]/90 pt-6 px-8 md:px-10 lg:px-0 text-3xl font-neue-kabel">What's Included:</h3>

          <div className="z-40 px-8 md:px-10 lg:px-0 mx-auto sm:grid sm:grid-cols-4 w-full py-10 lg:py-14 bg-slate-50 sm:bg-transparent gap-x-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-12 gap-x-8 col-span-8 justify-between">
              <div>
                <div className="flex items-start">
                  <PlusIcon className="text-sky-500 w-7 h-7 -mt-[.45rem] shrink-0" />
                  <div>
                    <h3 className="mx-0 mb-3 mt-0 pl-2 flex items-center font-light text-slate-800 text-lg leading-[16px]">Hosting Fees Included</h3>
                    <p className="-ml-6 text-[#3e4246]/70 leading-6 text-sm pt-3">
                      Hosting fees are conveniently built directly into the monthly payment, ensuring you have one less thing to manage or worry about.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <PlusIcon className="text-sky-500 w-7 h-7 -mt-[.45rem] shrink-0" />
                  <div>
                    <h3 className="mx-0 mb-3 mt-0 pl-2 flex items-center font-light text-slate-800 text-lg leading-[16px]">Unlimited Edits</h3>
                    <p className="-ml-6 text-[#3e4246]/70 text-sm pt-3 leading-6">
                      Need to make a change to your website? Simply submit your requests, and we’ll handle them promptly and professionally.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <PlusIcon className="text-sky-500 w-7 h-7 -mt-[.45rem] shrink-0" />
                  <div>
                    <h3 className="mx-0 mb-3 mt-0 pl-2 flex items-center font-light text-slate-800 text-lg leading-[16px]">24/7 Customer Service</h3>
                    <p className="-ml-6 text-[#3e4246]/70 text-sm pt-3 leading-6">
                      Call us anytime, day or night, and you’ll reach a real person, not an automated system. We’re here to assist you with any questions.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <PlusIcon className="text-sky-500 w-7 h-7 -mt-[.45rem] shrink-0" />
                  <div>
                    <h3 className="mx-0 mb-3 mt-0 pl-2 flex items-center font-light text-slate-800 text-lg leading-[16px]">Design & Development</h3>
                    <p className="-ml-6 text-[#3e4246]/70 text-sm pt-3 leading-6">
                      Includes over 80 hours of expert design, development, all tailored to create a website that truly represents your brand.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <PlusIcon className="text-sky-500 w-7 h-7 -mt-[.45rem] shrink-0" />
                  <div>
                    <h3 className="mx-0 mb-3 mt-0 pl-2 flex items-center font-light text-slate-800 text-lg leading-[16px]">100 Google Page Speed</h3>
                    <p className="-ml-6 text-[#3e4246]/70 text-sm pt-3 leading-6">
                      Achieve a perfect 100 on Google Page Speed scores with our optimized solutions, boosting your search rankings.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <PlusIcon className="text-sky-500 w-7 h-7 -mt-[.45rem] shrink-0" />
                  <div>
                    <h3 className="mx-0 mb-3 mt-0 pl-2 flex items-center font-light text-slate-800 text-lg leading-[16px]">Google Analytics</h3>
                    <p className="-ml-6 text-[#3e4246]/70 text-sm pt-3 leading-6">
                      Monitor your website’s traffic and its origins with our Google Analytics installation, offering you valuable insights into your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

      </div>
        <div id="portfolio" >
      <section className="pt-14 bg-white shadow">
        <MaxWidthWrapper >
          <ProductReel query={{ sort: "desc", limit: 4 }} href="/products?sort=recent" title="Recent work" />
        </MaxWidthWrapper>

      </section>
        </div>


      <div className="bg-[#f5f7fa]">
        <section id="pricing" className="bg-[#f5f7fa] pt-12">
          <Pricing />
        </section>

        <section id="testimonials" className="bg-white">
          <Testimonials />
        </section>


        {/* <section className="h-96 bg-white"> */}
        {/* <Image src="/bg-1.jpg" height={1416} width={3840} alt="Golden State Web Design" className='flex opacity-60 mx-auto h-full w-full object-cover'  /> */}


        {/* </section> */}

        <section>
          <MaxWidthWrapper>
         <CallToAction />

            <div className="flex text-base text-slate-900 px-8 pb-14 items-center font-neue-kabel  sm:hidden">Get in touch <ArrowRight className="text-blue-400 h-4 ml-3 sm:ml-6 sm:h-10 w-auto" /></div>

          </MaxWidthWrapper>
        </section>
      </div>
    </div>
  );
}

