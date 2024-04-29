// import { HeroForm } from '@/components/form';
// import { Icons } from '@/components/icons';
// import { Button } from '@/components/ui/button';

// const Home = () => {
//   return (
//     <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
//       <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
//         Next.js starter template
//       </h1>
//       <p className="text-muted-foreground max-w-2xl">
//         A Next.js starter template, packed with features like TypeScript,
//         Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your
//         project with efficiency and style.
//       </p>
//       <div className="mt-1">
//         <HeroForm />
//       </div>
//       <div className="mt-2 flex gap-4">
//         <Button asChild>
//           <a
//             href="https://github.com/Skolaczk/next-starter/blob/main/README.md#getting-started"
//             target="_blank"
//           >
//             Get Started
//           </a>
//         </Button>
//         <Button variant="outline" asChild>
//           <a href="https://github.com/Skolaczk/next-starter" target="_blank">
//             <Icons.github className="mr-2 size-4" /> Github
//           </a>
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default Home;


import About from "@/components/About";
import CTA from "@/components/CTA";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Pricing from "@/components/Pricing";
import ProductReel from "@/components/ProductReel";
import WhatWeDo from "@/components/WhatWeDo";
// import { Badge } from "@/components/ui/badge";

import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, ArrowRight, ArrowRightFromLine, CheckCircle, ExternalLink, HandIcon, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import animationData from "../../public/edit.json";
import { Card } from "@/components/ui/card";
import LogoCloud from "@/components/LogoCloud";
import { FadeInStagger, FadeIn } from "@/components/FadeInStagger";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  speed: 0.5,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const perks = [
  {
    name: "Unlimited Edits",
    Icon: () => <Image alt="edit" src="/edit.svg" width={90} height={90} />,
    description: "Great design takes time, we'll work together with you to create a website that you and your clients will love.",
  },
  {
    name: "24/7 Customer Support",
    Icon: () => <Image alt="arm-wrestling" src="/arm-wrestling.svg" width={40} height={40} />,
    description: "We take care of the all the technical stuff so you can focus on doing what you do best - running your business.",
  },
  {
    name: "100 Google Page Speed",
    Icon: () => <Image alt="google=logo" src="/google.svg" width={30} height={30} />,
    description: "Boost search ranking with a perfect 100 Page Speed score. Stay updated with web performance best practices.",
  },
];

const HeroSide = () => (
  <div className="text-center bg-[#d9edfd]">
    {/* <Badge className="bg-sky-100 text-primary border-primary/30 border mb-6 px-5 py-1.5">
      Golden State Web Design Promise <ExternalLink className="ml-3 h-4 w-4" />
    </Badge> */}
    <div className="z-40 pt-24 xl:pt-28 2xl:pt-24">
      <h1 className="mx-auto max-w-[53rem]  xl:max-w-[59rem] 2xl:max-w-[63rem] drop-shadow text-4xl font-bold tracking-tighter text-slate-800 sm:text-7xl 2xl:text-[5.4rem]">
        Web design{" "}
        <span className="relative whitespace-nowrap text-blue-400">
          {/* <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/20" preserveAspectRatio="none">
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
        </svg> */}
          <span className="relative">made simple</span>
        </span>{" "}
        for small businesses.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-500">Hand-crafted websites, no page builders or WordPress. Premium web development with lifetime updates & support, starting at just $150 per month.</p>
      <div className="mt-9 flex justify-center sm:flex-row flex-col gap-y-4 sm:gap-y-0 gap-x-4">
        <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "shadow z-40")}>
          <span className="font-medium">Get started</span> <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Button variant="ghost" size="lg" className="z-40 bg-white/5 backdrop-blur-lg text-slate-600">
          See our work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

    </div>


    <div className="hero -mt-6">
      {/* 
      <div className="logo -mt-40 ">
     
      </div> */}

      {/* <div className="mt-44"></div> */}
      <div className="parallax-layer layer-6"></div>
      <div className="parallax-layer layer-5"></div>
      <div className="parallax-layer layer-4 -mb-14"></div>
      <div className="parallax-layer bike-1"></div>
      {/* <div className="parallax-layer bike-2"></div> */}
      <div className="parallax-layer layer-3"></div>
      <div className="parallax-layer layer-2"></div>

      <div className="parallax-layer layer-1 relative z-50">


        <div className="text-neutral-400 items-center justify-center z-40 py-4 px-0 inline-flex w-full bg-[#012d53] absolute -bottom-14 pb-6 left-0" id="div-1">
          <img className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-20" id="img-1" src="https://truesocialmarketing.com/wp-content/uploads/2023/01/ca_folsom_web-developers_2023_inverse.png" />


          <img className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-20" id="img-3" src="https://truesocialmarketing.com/wp-content/uploads/2022/05/white-clutch-1.png" />

          {/* <img className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-20" id="img-4" src="https://truesocialmarketing.com/wp-content/uploads/2022/05/Untitled-3.png" /> */}

          <img className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-20" id="img-5" src="https://truesocialmarketing.com/wp-content/uploads/2022/05/White-Google-Logo.png" />
          <a className="text-sky-500" href="https://www.pandia.com/us/folsom-ca/graphic-design">
            <img className="cursor-pointer align-middle inline-block w-20 h-auto min-w-[4.00rem] max-w-full my-0 mx-16 opacity-20" id="img-2" src="https://truesocialmarketing.com/wp-content/uploads/2024/03/imag321e.png" />
          </a>

          <img className="align-middle inline-block w-24 h-auto min-w-[5.00rem] max-w-full my-0 mx-16 opacity-20" id="img-6" src="https://truesocialmarketing.com/wp-content/uploads/2022/05/white-yelp-logo-.png" />

          <a className="text-sky-500" href="https://findbestfirms.com/services/top-shopify-development-companies">
            <img className="cursor-pointer align-middle inline-block w-20 h-auto min-w-[4.00rem] max-w-full my-0 mx-16 opacity-20" id="img-7" src="https://truesocialmarketing.com/wp-content/uploads/2024/02/jgsfse23523.png" />
          </a>
        </div>
      </div>

    </div>

    <div>

    </div>


    {/* <MaxWidthWrapper>
      <div className="mt-28 flow-root">
        <div className="-m-2 rounded-xl bg-slate-900/5 backdrop-blur-lg p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-2">
          <FadeInStagger className="grid grid-cols-1 gap-y-12 rounded-2xl sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3  lg:gap-y-0">
            {perks.map((perk) => (
              <FadeIn key={perk.name}>
                <Card key={perk.name} className="relative z-10  flex items-center bg-white backdrop-blur-lg  shadow rounded-xl hover:bg-slate-50 border-none justify-center overflow-hidden px-6 py-6 h-full">
                  <div className="md:flex-shrink-0 z-20 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center shadow border rounded-full bg-slate-100 text-blue-900">{<perk.Icon />}</div>
                  </div>

                  <div className="md:ml-4 z-20 md:mt-0 text-left lg:ml-4">
                    <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{perk.description}</p>
                  </div>

                  <div>
                    <span className="absolute left-0 top-0 -z-10">
                      <svg width="106" height="144" viewBox="0 0 106 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304" transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)" />
                        <defs>
                          <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111" y2="178.431" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-0 top-0 -z-10">
                      <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614" transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)" />
                        <defs>
                          <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495" y2="133.937" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 -z-10">
                      <svg width="175" height="104" viewBox="0 0 175 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179" transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)" />
                        <defs>
                          <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </MaxWidthWrapper> */}
  </div>
);

export default function Home() {
  return (
    <div className="relative">
      {/* <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5]/60 to-[#9089fc]/40 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}

      <div className="relative w-full ">
        {/* <Image src="/framer.webp" alt="Hero" objectFit="cover" fill className="object-cover top-0 -mt-20 z-[-1] left-0 right-0 opacity-80 absolute inset-x-0 transform-gpu w-full h-full" /> */}
        {/* <div className="absolute inset-x-0 -top-20 opacity-20 right-0 bottom-0 left-0 z-[-1] w-full  overflow-hidden">
          <Image src="/hero.jpg" alt="Hero" layout="fill" objectFit="cover" fill className="object-cover w-full h-full  max-w-none" />
        </div> */}
        {/* <div className="absolute fill-slate-500 bottom-16 z-[1] left-0 right-0">
          <svg viewBox="0 0 4000 1000" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M190 55l11 1c3 1 4 5 4 8-1 9 2 19-1 28l5-8c3 1 5 4 7 7l12-2c-3 8-11 16-6 25l9-9c2 5 5 12 1 17-4 6-11 8-17 11h8c2 4 3 7 6 10l12 3-12 25-10 1 15 4-1 8c3-8 12-10 19-7l-4 17-8 4-2-10 7 3-4-11c-4 7-8 14-8 23-10 2-19 5-28 11l-2-4-14-1c6 8 16 7 25 9l12-8 7 4 9-15v12c4-5 10-8 16-9l-3 9c-2 5-7 7-11 10h14l-3 9c-4 1-9 1-13 4l-21 20c-4 4-10 2-15 2-6 0-12 3-18 5l2 2 12-1c4 0 7 5 10 7l3-6 7-3 22 18 1-5c6-1 13-3 18-7l4 5 7-5 3 7h8c-2 5-5 9-8 12-6 5-3 14-4 21l-7 4-10-4-3 5 11 2-8 12c6 0 12 3 17 1 4-1 3-4 4-7 0-5 3-9 5-13 14 4 28 3 41 3-4 6-7 12-13 16-4 1-9 0-14-1l5 9-13 5 4-12c-5 5-12 6-19 5l6 9-2 2-15-8c-12-1-23 2-34 3-8 1-16 4-23 6-5 2-11 3-14 8-2 8 0 16 0 24l8-1-6-1c-1-5 6-4 10-4 7 2 14-1 21-3l-4 7c3 2 6 5 10 4 5-1 11-3 17-1l4-2h17l4 8 10-2 2 6-16-1 3 9c-8 4-13 12-21 17v3l-6 4c7 5 15 7 23 8-3 7-12 6-19 6l4 8-4 4c-3-4-7-8-13-9l2 11c-12-5-18-18-29-24l-11 4 3 4c6 1 10 5 14 8h-20c0 18-1 36 1 54l2 40 46 11c16 7 35 7 52 10 13 4 26 9 34 20 5 6 7 15 15 17 16 6 33 12 47 23 11 7 16 20 26 29 5 4 10 9 17 11 8 2 17 5 23 12 8 9 8 23 15 33 8 2 17 3 25 7 8 5 12 13 20 18l16 14c9 13 20 25 35 31 16 7 34 5 51 8 6 1 10-3 15-6 16-11 33-22 51-28l47-16c6-2 12-5 18-5h17c13-4 24-12 36-16 6-1 11-4 16-7 13 0 25-2 37-6 15-3 28 4 41 9 10 1 21 0 31 3 16 5 32-4 48-4 8 0 16 2 24 5 8 2 17-2 26-2 20-1 38 6 56 13 37 1 71 15 106 22 10 2 20-2 31-3 24-2 47 4 70 10 20 6 40 13 61 11 14-1 28 0 42 2 20 4 38 18 54 30 11 9 23 16 35 23 7 5 17 6 25 9 8 4 16 9 23 15 12 8 25 14 37 21 8 4 16 9 24 10 16 1 32-3 48-5 17-2 33 7 48 13 8 3 16 2 24 1 19-1 38 0 57 2 13 1 24 5 36 8 13 4 26 1 39 3 11 1 21 5 32 5 10-2 19-5 29-6 9-1 17-7 27-8l16 2h32c9 0 15-7 24-7 13-2 24 5 36 8 16 4 32 3 48 6 27 3 51 16 76 22 35 8 67 21 100 34l29 11c9 3 19 2 29 3 12 2 24-4 36-3 21 1 39 13 59 18 22 6 46 7 69 4 19-2 39-3 59-2 18 2 36-3 55-2 18 1 36-2 54-1 17 0 35-3 52-2 26 1 52-8 78-7 25 0 50 3 75 4 46 3 92 8 139 8 27-1 49-18 74-25 13-4 27-4 41-3 23 2 47 2 71 0 9-1 17-4 25-7 18-8 37-12 54-18 13-5 25-8 38-11 9-2 15-11 22-16 20-15 41-30 65-36 11-3 20-12 30-15 8-2 16-4 23-9 13-9 27-17 43-21 8-3 16 2 24 3 5 0 10-1 14-3l-4-9 13 3c1 3-1 9 3 10 5 3 11 3 17 4v-5c-5 0-9-2-14-3 10-12 13-28 24-39 9-4 23 1 29-9 4-10 3-24 12-32 5-6 15-8 16-16l5-18c-1-6-6-9-9-14 1-6 5-12 5-18l-1-15c8 2 14 5 21 9 9 4 19 0 27-6-6-7-14-11-21-16l7-11c5 4 10 9 17 12 6 2 12 2 18 0 2-3 4-7 1-9-3-4-8-3-13-4l-2-9c-4 2-7 7-11 8-5 1-7-6-11-8l-6 2-1-8-11-10c-2-4-2-9-2-13 17 1 29 19 48 18-1-5-3-10-7-14-5-6-14-7-20-12-3-6-1-13-3-19-4-5-10-1-15 0 0-8-5-15-9-21h11l14-7c6 0 9 5 13 8 9 9 24 11 36 9l-4-7c-9-1-18-2-26-5l6-18-11-6c-4-5-6-12-3-18 10 4 18 11 28 15 8 3 17 2 24-3 2-5-4-7-6-10l4-9-19-3 5-6-2-12c-5 1-10 4-14 8l-6-3c-8-9-13-21-21-30 7-10 0-24 8-34 5 3 9 7 12 12h14c6 4 8 11 13 16l10 1c2-5 0-14 8-15 12-1 25-7 30-19-7-2-14-5-20-9l-11 2c-11-10-25-17-34-29 4-1 8-2 12 0 9 4 17 9 27 10l-11-13v-10c-11-6-21-16-27-27l2-8c6 2 13 5 17 10 6 8 17 8 24 15 5-5 10-12 6-19-6-8-11-17-19-23l-1-4 12-5-8-8-1-8c7 2 15 6 23 7h30c1-13-14-21-25-18l-7-9 6-6c10 2 20 4 30 3 0-11-2-22-1-32 5 6 4 15 7 23 5 5 12 6 18 8l2-23 8 7c2 9 3 18 1 27 4 6 6 12 5 18l-13 12v7l21-14 20-8c-3 8-6 16-12 22-3 4-2 10-3 15h-15c-2 7-5 13-9 20 5 1 11 0 17-2 1 4-1 11 5 12l22-5c0 3 2 6 1 10-3 9-13 14-16 23-3 8-11 12-14 20 5 0 9 1 14-1 8-3 15-11 25-8-5 3-10 5-12 10 0 5 5 6 9 7l4-9c6-2 11-6 15-11 4-1 10-2 13-5 7-4 15-7 24-7-10 8-15 19-18 31-11 0-18 11-27 16l5 9c-9 1-21 1-24 11 0 7 5 11 10 14-3 6-6 12-5 18l-14 1 4 10c-7-3-13-10-19-14-6-2-7 6-9 9l-20-13c-3-2-6-5-9-4l-3 20c-1 4 3 7 6 11l-7 8c1 4 4 5 8 6 7 4 14-3 20-6l-13-11c11 1 23 2 35 5 6 2 14 1 20-1 3-3 4-7 8-9l17-11c6-3 13-2 20-2l-8-9 2-5c13 7 28 6 43 5-1-8-8-14-16-15-5 0-9-4-12-7 3-1 5-5 9-4l22 2c-1-9-3-18 0-27 2 6 2 13 5 19 3 4 9 5 14 7l2-20 7 7 2 22c0 5 3 10 2 15-4 5-13 8-10 16 10-9 22-14 35-19-5 11-13 20-15 32l-10-1-9 16h13c2 3 1 8 5 8l18-2c4 2 2 8-1 11-5 6-11 12-13 20-4 3-12 8-6 12 10 0 18-8 28-10v3c-4 3-8 5-11 9l11 4v20l-8 8c-1 6 4 10 8 13v1c-3 4-5 9-5 13l-11 1 3 9c-6-5-12-10-18-13l-4 9c-8-6-16-12-25-16 0 9-4 20 3 27l-7 7 12 6 13-7-12-8c10 0 20 2 30 4 5 1 10 1 14-1 4 0 5-5 7-8v20l-10 6 1 5 9 3v29l-14-9 2 12-8 1c0 4-2 9 0 12 6 5 13 6 20 10v9l-10-3c-2 4-7 8-4 12l14 10v5l-14 3 5 10h-12v5l13 1-6 15c-6-3-10-7-14-11l-17 3c6 9 18 12 27 18l8-6 10 5v210H0V502l32 11c16-3 34-9 50-3 18 9 39 8 58 7 15 0 29 7 43 11l-2-58-7-1 8-4c-17-8-36-7-54-6l3 7-17 3c-5 1-11-3-16-4-6 3-10 8-15 11-6 2-13-1-20-1v-6l-12 5c-7-4-16-6-25-5 0-7 2-13 4-19l-8-8 2-6c7 2 14 5 20 10a482 482 0 0110-6c-5-3-9-7-13-12l13 5 13-4c-7-2-16 0-21-5-8-6-5-17-5-25-4 0-9 0-13-2l-8-11 4-4 8 1-14-6c1-4 2-8 5-12l14-1 13-7 6 5-5-15-11-2c3-4 4-11 10-12 5-1 10 2 14 3h15l-25 13 11 13 10-5-1-2 7-5-1-11 18 8 8-8-3-5-4 4c-23-4-44-16-67-14l9-9-16-2c-7 0-10-8-16-11l-9-1v-8l4-7 10 7 11-15c8 11 23 10 35 8v-12l-10-3-8 10c-1-8-5-17-2-25l-6-8 15-7 4 5c1-5 4-9 7-12 5 6 12 8 19 10-5-10-9-22-7-33l14-11 2 8 17 3c4-4 8-8 13-9-2-3-6-5-7-9-3-6 0-12 1-17-3 2-6 6-10 7-6 1-7-6-9-10h15l-13-18h7l5-9c6 2 12 5 17 9l8-5 8 6 10-13h-19l3-6-14-2-2-17c1-4 4-6 6-9l-1 17 11-27 17 7c0-5-2-10-4-15l8 2c2-7 5-14 11-19 1-5 4-11 8-15 4 2 4 6 5 9 5-4 9-8 11-13zm3 10c-3 1 0 6 2 4 3-2 0-6-2-4zm-19 8c-2 2 2 6 4 4s-1-6-4-4zm32 30h7l1-6-8 6zm-15 1v13l5-13h-5zm5 4c-3 6 7 1 0 0zm-42 14c-3 1-2 7 1 6 4-1 3-7-1-6zm-3 17l1 4 6-13c-5 1-9 4-7 9zm13-2c-1 3 0 4 4 3 1-3-1-4-4-3zm-15 9l4 13c3-5 2-12-4-13zm-26 16c-1 4-2 8-5 12l10-6v-6h-5zm94 29c5 2 10 2 14 0l-6-11-8 11zm-74 0c-3 0-7-1-8 3h12l2-9-6 6zm-27 1c-1 3 3 6 5 4 2-3-3-6-5-4zm45 25c6 1 12 0 18-1l-3-6c-5 1-10 4-15 7zm-80-3v8c2-2 5-4 6-8-1-2-4 0-6 0zm75-1c-3 2 1 7 4 4 3-1-1-7-4-4zm-41 15l-1 6 5-4 7 8 5-1 1-9h-17zm118-1l-1 4h6v-5l-5 1zm-95 5c-1 3 0 4 3 3 1-3 0-4-3-3zm24 3l8 3-2-5-6 2zm64 5c1 7 6-3 0 0zm-165 4l5 8 3-10-8 2zm77 8c-3 1-1 6 2 5s2-7-2-5zm-51 22l11-4 1-4c-4 2-9 4-12 8zm17-5l-10 15c2 0 4 2 5 3l4-10c10-1 20-5 31-6l-10 13 10-4c-2 7-2 13 0 20 10 2 21 0 30 5l3-5-2-5 14-2c-6-8-17-10-25-5l4-5c-10-4-19-10-28-15-2-1-5 1-7 2l-3-4c-5 3-10 4-16 3zm86 12l5 8c4-4 11-5 11-11l-16 3zm34 0c-3 6 7 0 0 0zm-117 11c5 0 10-2 13-7-5 1-13 0-13 7zm83 0l-1 8c8-2 18-1 25 4 0-3 3-9-2-10-7-2-15-5-22-2zm-88 4c2 5 3 9 6 13h12l-4 7 5 6-7 8c5-3 10-4 13-9 0-6-2-12-4-18-7 1-14-3-21-7zm136 16c-1 3 0 5 4 3 1-3 0-4-4-3zm3500 8c-1 5 4 9 6 13l4-12c-4-1-7-3-10-1zM194 340c4 3 6-2 8-5l6 3-6-5c-4 1-11 2-8 7zm-139 0c0 3 5 4 6 2 1-3-4-4-6-2zm135 2c-1 3 0 4 3 3 1-3 0-4-3-3zm-44 9l15-1-4-5c-4 1-7 4-11 6zm3656-3c-1 4 0 5 4 4 1-4 0-5-4-4zM150 366c-3 2-7 5-5 9 4 3 9 2 13 1 7-1 13 2 20 2 1-4 2-8 0-11-3-4-8-5-12-7-4 4-10 4-16 6zm-8-2c-1 3 1 4 4 3 1-3 0-4-4-3zm-116 7c-2 3 3 6 5 4 2-3-2-6-5-4zm106 2l1 5c4-1 7-4 11-6l-12 1zm27 7c0 7 6-3 0 0zm3573 1c-2 3 3 6 5 3s-3-6-5-3zm-3507 1c-1 3 0 4 3 3 1-3 0-4-3-3zm3515 6c-2 3 3 5 5 3s-3-5-5-3zM45 392c3 3 2 7 1 11l12 3v-11l-8 2-1-4-4-1zm91 6l7-1v-5l-7 6zm12-5l-2 5c5-1 10-2 15-5h-13zm25-1c-4 1-3 8 1 6 3-1 3-7-1-6zm41 0l3 7 6 1 1-6-10-2zm23 2c0 7 6-3 0 0zm-75 6c-3 6 7 1 0 0zm-50 3c-3 2 2 6 4 3 3-2-1-7-4-3zm17 0c-1 4 8 2 10 0-2-3-7-2-10 0zm77 13c4 5 9 8 15 7-1-7-10-6-15-7zm16 1c-2 2 1 6 4 4 2-2-1-5-4-4zm15 7c-3 4 3 6 5 3s-3-6-5-3zm-132 12c6 0 12 1 17 3l-1-11-16 8zm-36-6c-3 3 2 8 4 5 3-3-1-8-4-5zm60 3c1 4 2 8 1 11l-12 11 28-1 35 4 1-18c-6-1-12-3-15-7h-12l-9 7-1-5c-5 1-10 0-16-2zm20 0c1 1 1 1 0 0zm3635 13c3 9 14 7 22 6 6-2 10-8 9-14-8 0-16 0-24-3-6-2-11 6-7 11zm-32-6l1 6c2-1 6 0 7-4l-8-2zm-86 7c-3 6 7 0 0 0zm36 25c-4 1-2 7 1 6 4-1 3-7-1-6zm15 13l-4 13c2 4 6 6 10 5 7-2 15-3 21-7 0-3-1-5-3-7-5-8-16-2-24-4zm161 20l10 1 5 7c3-4 10-8 8-14-1-6-8-9-11-14-5 5-15 11-12 20zm25-16l6 12 3-11-9-1zm-155 13c-4 3-7 8-12 10-9 1-17 0-26 2v5l23 4c6-2 9-9 15-10 6-2 12-3 19-3l-2-11c-6 1-13-2-17 3zm96 12c-4 3-2 8 3 9 6 0 12-3 18-2l15 6 2-6c-7-3-12-12-20-13-6 1-13 2-18 6zm114-1c-3 6 7 0 0 0zm-130 11c3 2 7 1 11 1l1-5c-4-2-13-3-12 4zm-105 17c1 4 5 4 9 5 2-5 3-11-2-16-3 3-8 6-7 11zm83 0c6 3 11 5 16 9l4-7-14-12c-4 1-6 6-5 10zm80-6c0 3 1 4 3 3 1-3 0-4-3-3zm-97 2c-4 1-7 3-10 6-2 4 0 9 4 10 6 2 12 3 18 2 5-2 6-8 2-12-3-4-8-11-14-6zm111 3c1 7 6-3 0 0zm7 4c-5 1-2 7 1 6 5-1 2-7-1-6zm-50 7v9l-20-10c0 4 1 9 3 13l-9 2c-1 5-4 10-2 16l8 2c-1-6-1-13 3-18 4 3 8 6 10 10 4 0 8-2 12 0 4 4 6 9 10 12h9l2-8c4-4 9-3 14-5 6-2 12-7 14-14-5-1-11-3-16-7l-9 2-12-10c-6 1-11 4-17 6zm-99-3c-2 1-1 6 2 4 3-1 1-6-2-4zm59 11c-7 4 3 14 9 9 3-6-4-12-9-9zm-152 11c0 3 1 6 5 7s10 3 13-1c-2-6-3-13-8-17l-10 11zm128-10c-4 1-2 7 1 6 5-1 3-7-1-6zm-137 2v6l5-2 1-4h-6zm41 1l-1 13c-1 3 1 6 4 5 6 1 14 0 14-8l-13-2 1-9-5 1zm78 0c1 4-1 10 4 12l17 4c3-1 2-4 1-6-5-7-13-10-22-10zm-3 21c0 7 3 13 6 19 2 5 8 4 13 4-1-7 3-16-4-20-4-3-11-8-15-3zm173 1l-5 5 6 9c9 1 23 0 23-11l-24-3zm-28 3l-1 6 7-1-6-5zm-7 7c-3 6 7 0 0 0zm-224 16h8l-1-8c-3 2-5 4-7 8zm152-6c-3 2 2 7 5 5 2-3-2-8-5-5zm19 15l-7-1c3 9 13 6 20 6l-3-11c-4 0-8 2-10 6zm17-4c-3 6 7 1 0 0zm13 11l-4 11c9 7 19 0 27-3-2-3-3-9-9-10l-14 2zm-182 6l8 1-1-6c-4-1-5 3-7 5zm33-3l4 18 5-3 1-16-10 1zm112 2l9 4-7 7c4 3 9 6 14 7 5 2 11-1 16-2v-7l-6-1 5-10c-10 4-21 2-31 2zm-37 0c-2 3 2 7 5 4 2-3-3-7-5-4zm90 17c-8 1-17-2-23 3 4 5 11 3 17 5 6 1 9-5 14-7l17-4-2-9h-7c-7 1-10 9-16 12zm-173-2c-3 3 2 7 5 4s-2-7-5-4zm-7 7v9c5 1 6-4 7-8l-7-1zm258 1c-3 4 6 6 6 1 0-2-4-4-6-1zm-179 5l-2 5 15-1-13-4zm90 13c2 3 5 2 8 3 1-4 2-9-2-12-5 0-6 6-6 9zm72-10l-3 9 12 7 5-5-14-11zm-15 4l-12 7c0 10 13 11 21 10 6-6-3-17-9-17zm-206 2c-3 1-1 4-1 6l7-5-6-1zm105 4l1 4 21 2c-5-6-15-3-22-6zm-117 7c0 7 5-3 0 0zm238 6l-1 8h10c0-5-4-8-9-8zm-19 2l-2 3c2 6 9-3 2-3zm-15 3c1 3-1 9 3 9l17 4c-2-9-12-14-20-13zm-293 14l-2 7c2 3 6 6 10 7 6-1 5-6 6-10-5-2-10-4-14-4zm289 3l6 15c2 4 7 5 11 3 1-5 2-13-4-16-3-4-8-5-13-2zm-151 1v4h19c-3-8-13-3-19-4zm-162 23c6 3 12 1 17-2-2 3-4 6-4 10 6-2 11-6 11-13l-14-10c-5 4-7 10-10 15zm26 14c-4 2-2 6-2 10l8-2c2-4 1-8 1-12l-7 4zm260 1l4 14c5-4 6-11 3-17l-7 3zm63 1c0 7 5-3 0 0zm9 4c1 7 6-3 0 0zm-379 4l2 9c6 1 12 0 17-3-5-5-12-5-19-6zm73 3c-2 4 1 6 5 7v-5l-5-2zm43-1c0 7 5-3 0 0zm186 2c0 7 6-3 0 0zm-6 6c-3 3 2 7 4 4s-2-7-4-4zm-296 4c-3 8-1 17 0 25 3 2 7 0 11 0 1-3 2-6 4-7l21 1 5-9c-6-3-14-3-21-2-8 1-14-5-20-8zm311 8c-1 3 0 4 3 3 1-3 0-4-3-3zm-348 7l6 9c4-2 11-2 9-7-2-7-10-3-15-2zm8 16l-9 1c4 2 8 4 12 2l19-8-4-5c-8-1-12 6-18 10zm-4 16h7c0-3 0-6-2-8-5-1-4 5-5 8zm374-5c4 5 12 2 17 2-4-5-11-4-17-2zm-407 21l9-1c1-3 0-6-2-8l-7 9zm-26-27c2-2 4-1 4 2-2 2-4 1-4-2z"
              fill="#64748b"
              // style="fill:var(--c10)"
            ></path>
          </svg>
        </div>
        <div className="absolute top-[30rem] opacity-20 left-0 right-0 z-[-1]">
          <div className="b-landscape" role="img" aria-label="Monotone illustration of a landscape. Trees are in the foreground, a loch and forest is in a valley and in the background a mountain range is visible.">
            <div
              className="[ b-landscape__sun b-landscape__parallax ]"
              // style="--offset: 1; --sun-h: 0; --sun-v: 1;"
              data-active="true"
            >
              <div className="[ b-landscape__sunH ] h-full w-full absolute">
                <div className="[ b-landscape__sunV ] h-full w-full absolute"></div>
              </div>
            </div>
            <div
              className="[ b-landscape__layer b-landscape__parallax b-landscape__layer--2 ] h-full w-full absolute"
              // style="--offset:0.92"
            >
              <div className="b-landscape__image">
                <svg viewBox="0 0 4000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1740 213c11 1 556 40 576 44 10 1 19 5 29 4 14-3 27-9 41-10 13-1 25 3 38 3 12-1 24 3 36 3 9 1 20 0 28 5 9 4 18 9 28 9 11 1 21-3 32-3 14 0 25 9 37 13 9 3 19 1 27-3 11-3 17-14 28-16 11-3 21 4 32 2l30-6c12-1 23-5 34-4l24 4h32c15 1 29 5 44 5 12 0 25-2 37 0l23 6c10 2 19 8 30 9 16 2 30 12 47 13 16 2 33 3 49-1 4-1 0 710 0 710H0h1146s-7-784 0-786c8-2 16-2 24 0 10 2 20 8 30 10l54 3c27 0 53-5 80-4l39 2c14 2 29 3 43-3 11-3 21-9 32-9 11-1 22 2 32 7 15 6 32 3 47-1 18-3 35-12 53-12 17-1 35 3 52 3 9 0 19 4 28 2 14-2 28-6 42-7 13-1 25 7 38 8z"></path>
                  <path
                    d="M2687 271c32 36 78 61 108 62 23 0 55-22 72-43-7 15-16 27-28 35 21-4 36-15 50-29-2 5-7 11-14 18 6-2 12-6 18-11-45 42-68 44-94 48l-22 4c-4 0-10-5-10-5-46 2-81-7-104-39-1-3 0-4 1-6 1-3 0-6-2-9 1-3 3-4 5-6l-3-11c28 31 55 51 81 55-28-16-49-35-58-63zm-1491-27c17 11 32 26 49 38s39 28 54 37c12 7 24 13 37 17 17 6 41 15 62 15 36 1 75-4 112-17 22-7 76-33 99-43 19-9 46-21 55-27 13-8 22-9 19-19-1-4-13-1-15-2-4-1-8-2-7-3 1-3 9-1 23-7 8-4 20-5 17-15-1-7-18-7-31-4-16 4-38 3-48 4-11 0-22 0-16 8 3 4 28 17 27 19s-19-3-29-3h-28l-12 3c-1-1 1-2 6-6 8-7 4-11-6-12-6 0-21 3-29-6 0-1 0-2-2-2-12 3-36 6-44 5-3 0-3 5 0 6 3 2 18 3 19 5 0 2-15 8-10 13 3 2 26 5 24 7-3 2-25-1-29 0-2 1-9 5-15 4-8 0-23-6-32-5-10 1-17 15-17 20-1 2 3 5 4 6 2 1 8 0 7 2-2 4-9 2-12 3-3 2-8 11-8 15 1 3 13 5 13 7s-13 2-18 0c-6-2-16-11-21-13-3-1-10 4-10 0-1-5 20-6 28-15 9-9 20-31 22-41 2-7-1-17-5-18-3-1-15 6-30 7-20 2-67-4-94-2-29 2-74 5-91 2-15-2-38 3-18 17zm1322 33c1-2 1-4 4-4 10 0 26-2 31-1 9 3 18 4 22 10 5 5 4 17 5 25 1 14-20 31-32 30-5 0-8-2-8-2h5c12-1 32-22 23-33-7-8-38 21-47 24-2 0-4-4-5-2-2 3-16 4-19 1 0-1 12-3 10-5-2-1-14 1-18 1l-5-4c-3-2-9-1-14-1-6 0-12-4-12-4-2 5 23 13 22 14-2 2-27-8-40-14-13-5-30-9-39-14-6-4-12-10-15-15-4-6-6-14-6-19 0-2 3-5 6-6l10-1 16 2 6 1 2 5c0 3 2 14 0 14-1 0-14-14-15-13-1 2 7 13 11 17l8 9c1 1 4 1 5-2l-3-17-2-9c1-2 3-4 5-4l7-1 2 2 1 26 3 6 2 2h2c0-1-2-2-2-7l1-13 2-13c0-1 0-3 3-3 8 0 20 0 26 2l15 5 16 6c4 2-1 9-2 15l-1 17h2c1-6 7-19 12-27zm6 39c4-2 16-19 17-27l1 1-1 7h2l3-2 1 1c-4 6-19 21-22 21-1 0-2 0-1-1zm-10 0c5-3 8-8 8-15l-7 6c-1-1 5-14 12-20 2-2 7-1 7 1 3 10-10 26-15 28-4 2-5 0-5 0zm7-30c-3 4-9 19-9 22 1 1-2 0-2-2 0-4 7-18 9-21 1-1 3 0 2 1zm-38 16l1 5 2-1c0-2-2-5-3-4zm14-24c0 12-2 10-2 26h-2v-15c-1-2-6-7-7-6l-1 14c-1 1-2 0-2-1l-2-8v-9l-3-3-1 13c0 2-2 0-2-1l1-13c0-1 2-4 4-4s6 1 7 3l5 9c2-1 2-4 3-5h2zm-51 19l2 4c2 1 4 0 3-2-1-1-4-3-5-2zm105-3l-2 4h1l3-3c0-1-1-2-2-1zm-87-25v24c0 2-4 2-5 0a55 55 0 013-23c0-1 2-3 2-1z"
                    // style="fill:var(--c3)"
                    fill="#64743b"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="[ b-landscape__layer b-landscape__parallax b-landscape__layer--3 ] h-full w-full absolute"
              //  style="--offset:0.9"
            >
              <div className="b-landscape__image">
                <svg viewBox="0 0 4000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1982 177c15-3 31 0 47 4s29 14 45 19l43 16c11 4 22 11 35 12 20 2 38-7 56-11 14-2 28-4 40 3 17 9 35 14 52 23 20 9 38 23 59 32 36 17 73 31 111 46 32 14 66 24 100 33 19 4 37 10 54 18 24 11 52 13 78 12 21-3 41-7 61-12 15-4 30-2 44-9 27-16 55-32 87-37 20-4 41-5 61-11 17-4 32-10 48-18 21-10 44-14 67-14 21 1 41 6 62 8 15 1 29-6 42-13 15-7 30-15 46-19 8-2 15 0 22 1 17 5 34 6 50 12 25 9 52 10 77 17 19 4 37 12 56 14 19 3 37 11 56 14 18 3 35 9 52 10 11 1 22 1 32 4 15 5 31 5 46 10 20 8 40 12 60 20 21 9 42 18 65 21 34 5 67-4 101-9 25-3 50-4 75-4 29 1 59 6 88 8v623H0V362c22-11 45-22 68-30 17-5 35-8 53-12 33-8 68-14 102-23l92-24c25-9 52-16 79-17l24-1c25-2 49 4 74 3 13-1 25-6 38-4 10 2 18 10 28 12 19 5 39 2 58-1l44-9c16-4 32-12 48-17 27-11 54-18 82-25 11-4 22-4 33-2 15 3 29 5 43 9 16 4 34 6 51 4 15-1 29-8 44-10 18-2 36 5 54 8 12 3 23-3 35-4 10-2 20 1 30 2 27 3 52-10 78-9 7-1 15 1 22 4 12 8 25 15 36 24 29 21 61 37 91 55 37 19 79 30 121 32 12 0 25 2 37 0 13-1 24-6 36-10l46-16 43-19c37-13 72-31 106-50 26-12 54-19 82-24 27-5 55 0 82 1 43 0 81-23 122-32z"
                    // style="fill:var(--c3)"
                    fill="#64749b"
                  ></path>
                  <path
                    d="M3169 281l5-3c15-7 30-15 46-19 8-2 15 0 22 1l6 2-2 2c-15 0-23 5-26 7-2 1-3 6 0 6 14 1 26 8 31 11 2 2 7 7 2 9-14 5-15 13-6 19-3 4 0 10 1 14 1 6-3 16-7 23-21 35-81 50-118 54-31 2-75 2-93 6-19 5-39 8-53 10-10 1-21 1-30-1-8 7-59 11-88 13s-53-1-82 0c-8 0-19-4-26-5-6 0-14 1-20-1-4-1-5-4-12-8-4-2-12-2-17-7l16-1c2 0 9-3 2-4-5 0-20 2-32 0 10-2 34-7 39-12 2-1 1-4-1-4-4 1-35 2-45-1 20-3 36-6 41-11l41-9c15-4 30-2 44-9 27-16 55-32 87-37 20-4 41-5 61-11 17-4 32-10 48-18 17-8 35-13 54-14 13 5 9 16 7 20-4 12-23 27-33 30-3 0-3 4 0 4 7 1 28-3 41-10a1259 1259 0 0197-46zm-702 153c-12 0-20-2-32-3-15-1-27 4-58-1-51-8-85-33-122-43-31-9-64-10-96-17-41-9-90-25-125-44-43-23-130-46-164-54l-30-3c-3 0-24 2-45 8-32 10-69 27-73 28-66 13-164 54-207 67-17 5-44 15-51 13-2 0-5-5-8-5-13 2-41 19-59 21-37 3-91-10-164-5-34 2-61 16-119 16-30 0-84-12-121-26-29-8-71-19-91-21-18-2-48-6-73-1-16 3-29 11-33 8-6-7 4-24 16-33 12-10 44-14 59-26 15-11 32-35 45-42 10-5 22-6 33-5-7-7-5-12 1-17-18-13-40-19-58-23l25-1c15-1 29-8 44-10 18-2 36 5 54 8 12 3 23-3 35-4 10-2 20 1 30 2 25 2 48-8 72-9a124 124 0 00-56 25c-17 13-57 44-77 47-4 0-39 18-56 22-13 4-30 1-39 2-6 0-13 4-13 4l52 7c9 0 21 7 17 10-2 3-6 4-30 4l45 5c32 2 58 1 82 0l-60-13c-6-1-19-2-19-4 2-5 19-8 26-8 20 0 80 6 96 6v-4c-9 0-17-7-18-10-2-5 5-13 11-12 14 0 54-2 67 3 3 1 13-3 13-3-8 0-25-8-30-13-4-4-8-9-7-14 2-9 17-31 23-38 1-2 10-2 17-2l20 14c29 21 61 37 91 55 37 19 79 30 121 32l18 1 19-1c13-1 24-6 36-10l46-16 43-19c37-13 72-31 106-50l22-9 10-3 38-10 3 3c3 1 12-2 18-1 10 1 32 0 41 8 3 4-18 6-17 8s16 4 20 6 4 5 3 8c-3 8-15 10-15 11 0 3 21 2 21 2l33 6 52 13-36-20 8-13s33 3 49 7c20 5 45 13 67 22l75 38s-15-11-21-19-16-21-16-32c0-8 4-19 12-21 16-4 65-2 80-5l12-2c19 0 36-8 53-12 10-2 21-3 31-1l20 22c10 10 22 26 34 35 11 10 26 15 38 23 15 11 34 46 61 61 17 10 38 10 60 9l11-1c3-1 3-4 0-4-7 0-27-2-37-8-10-5-21-10-29-17-6-5-18-16-15-21 1-2 16-1 23 0 9 2 24 7 28 10 3 2 6 0 4-2-4-4-21-13-32-18l-31-11c-17-6-47-14-69-28-14-9-30-24-37-33l-2-5c11 5 23 9 34 15 20 9 38 23 59 32 36 17 73 31 111 46 25 10 51 19 77 27l-1 4c-8 3-27-1-32-4-2-2-4 0-3 0 7 9 35 17 46 19 5 1 7 8 16 13 15 10 26 11 31 15 2 1 0 6-2 6-6 0-29-1-35-5-2-1-4 2-1 3 4 3 18 9 30 11l-19-2c-7-1-18 0-25 2-14 3-41 15-56 19-9 3-28 4-28 4l-1 1zM0 400v-38c22-11 45-22 68-30 17-5 35-8 53-12 33-8 68-14 102-23l92-24c25-9 52-16 79-17l24-1h21c-19-1-78 2-108 21-35 22-87 55-113 82-12 12-19 36-46 41-18 4-46-8-68-5-22 2-50 17-68 17-12 0-27-8-36-11zm568-132c16 2 33-1 48-3l44-9c16-4 32-12 48-17 27-11 54-18 82-25 11-4 22-4 33-2l10 2-19 1c-13 2-28 9-40 15-21 9-54 33-86 41-50 14-101 12-114 2l-6-5zm1391-85l3 3c2 1 6-1 8-1l13 5v4c-3 0-3 2 0 5-11 1-22 1-23 7 0 0 9 0 13 2l11 9c-4 3-1 5 2 9 0 0-23-5-26 2-1 3 26 20 26 20-31-12-74-25-127-39h1c35 0 66-15 99-26z"
                    // style="fill:var(--c4)"
                    fill="#64788b"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="[ b-landscape__layer b-landscape__parallax b-landscape__layer--4 ] h-full w-full absolute"
              // style="--offset:0.86"
            >
              <div className="b-landscape__image">
                <svg viewBox="0 0 4000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 408s1229-15 1235-22c8-10 23-16 37-15 19 0 37-2 56-5 20-3 40-2 60-6 31-3 61-6 91-15 23-7 48-9 71-17 40-13 80-24 119-41 20-7 40-15 61-21 29-10 61-6 90 2l44 8c22 3 44 9 65 13 19 4 37 9 54 16 11 4 23 9 35 9 19 0 39 1 58 6 13 4 26 10 39 13l41 12c24 8 50 13 76 17 22 3 43 7 64 14 52 18 105 35 158 49 11 3 22-2 33 2 4 2 8 6 10 10h388c47-1 79-3 80-4 6-11 14-19 25-25 19-11 38-24 60-26l33-7 44-11c59-12 119-23 179-33 30-6 62-10 92-18 39-11 78-21 118-23 23 0 45-2 67 3 17 3 34 6 49 13 23 10 45 23 69 34 15 6 28 16 43 23 16 8 34 14 51 22 16 7 35 14 52 9 7-2 14-1 21 0 20 2 39-1 58-3 15-1 27 12 42 11l32 1v597H0V408z"
                    // style="fill:var(--c5)"
                    fill="gray"
                  ></path>
                  <path
                    d="M3470 296c15-3 31-5 46-6 23 0 45-2 67 3 17 3 34 6 49 13 23 10 45 23 69 34 15 6 28 16 43 23 16 8 34 14 51 22 16 7 35 14 52 9 7-2 14-1 21 0 20 2 39-1 58-3 15-1 27 12 42 11l32 1v84c-16 49-56 84-111 112l-171-143s39-18 40-26c0-2-8-9-17-12-12-4-41-10-56-10-9 0-24-6-26-10-2-2 0-4 3-5 0 0-13-12-22-14-9-3-25-1-31-1-3 0-5-3-2-4 3-3 13-4 20-4 0 0-26-15-41-20a267 267 0 00-88-8c-4 1-6-3-3-6 7-5 36-9 47-14 0 0-11-3-15-6l-8-8c-9-2-35-5-45-10l-4-2zm-1705-21c31 2 158 35 158 35-18 2-21 2-20 12 1 9 14 12 16 16-3 4-1 8 0 10-10 5-40 18-60 23-11 2-27 3-34 2-5-1-8-7-12-10s-11-4-11-6c1-3 9-7 15-9l16-4c4-1 3-9-1-10l-26-1c-9 0-19 2-24 3-1-4-4-4-5-6-1-3 5-7 0-12-6-4-10-2-15-2 6-6 23-10 28-12 5-3 4-9-3-11-7-3-36-5-42-7 3-5 13-12 20-11z"
                    // style="fill:var(--c4)"
                    fill="blue"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="[ b-landscape__layer b-landscape__parallax b-landscape__layer--5 ] h-full w-full absolute"
              //  style="--offset:0.83"
            >
              <div className="b-landscape__image">
                <svg viewBox="0 0 4000 1000" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M396 354c9 0 18-3 27-5 7-1 14 0 20 2 17 3 34-1 51 2 9 2 19 2 29 2 13 1 26-3 39-1 11 2 22 1 33 1 16-2 33 1 49-1 22-2 44 3 66 2 16 0 31 4 46 5 9 0 18 4 28 4 6 1 12 0 18-1 12-1 22-6 34-7l33-2c10-1 19 4 29 4 9 1 18 1 27 4 14 3 28 3 42 3 19 1 39-2 59 2 15 3 30 6 46 6 17-1 35 0 52-4 23-5 47-5 70-3 17 2 32 11 48 15 27 7 56 10 84 10 16-1 31 6 45 13 10 4 20 4 30 7 6 2 10 9 16 12 7 2 15-2 22-5 12-4 25-2 37-5 23-6 47-1 70-4 15-3 29 9 43 3 13-5 28-10 43-7s29 6 44 7c9 0 17-5 26-5 16 0 33 2 49-1 10-2 18-7 28-8 8-1 17 3 25 1 31-11 63-4 94-10 11-2 23-3 34-2 14 0 28-5 42-4 11 1 20 7 31 9 9 2 18-1 27-3 13-2 26 1 38-2l18-6c7 0 14 4 21 4 13 0 26 3 40 4 11-1 20 8 31 8s22 0 33-3 22-8 33-10l28-5c4-1 8 3 11 5 13 1 27 6 39 1 7-2 14 1 21 3 12 4 24 6 37 9 11 3 22 1 34 3 7 1 15 4 23 4h35c9 1 17 5 26 6l29 4c13 3 27 1 41 2 10 0 19 5 28 6l36 3c14 3 28 2 42 2 12 0 24 2 35 0 12-1 23-4 33-7 10-4 20-3 30-3 11 0 21-5 32-6 13 0 27-1 40-4 7-2 14-7 22-7 8-1 17-1 25-4 13-4 26-2 39-3l23 1c12 2 24 1 35 5 9 3 19 5 29 5 8 0 16-2 24-4 11-2 22 1 32 0l27-1c11 0 22-3 33-1l37 3c11 0 22 6 33 5l21 1c10 3 20-2 30-3 16-2 32-6 48-1 16 6 34 1 51 3l55-7c8-1 16 3 24 3 9 0 17-8 26-8s17 6 24 11c12 9 26 17 42 18 15 2 31 3 46 1 25-3 50-7 74-13 13-2 25-10 39-8 18 2 37 4 55 3 17-1 34 2 51 0 12-2 24 0 36 1 7 0 12-6 19-8 8 0 16 2 25 1 12-3 23 3 35 3 13 2 25-5 37-5 10-2 18 8 29 7 9-1 18-3 28-3v597H0V391l36-5c11-1 23 1 34 3 17-3 34-9 52-8 15 1 31-2 46-3 9-1 15-7 24-8 13 0 26 1 39-4 5-1 10-5 16-5 20 1 39-1 59-1 16 1 30-6 46-6l24-2c7-1 13 2 20 2z"
                    // style="fill:var(--c6)"
                    fill="#d3d3d3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div> */}
        <div className="">
          {/* <MaxWidthWrapper> */}
          <HeroSide />
          {/* </MaxWidthWrapper> */}
        </div>

        {/* 
        {/* <MaxWidthWrapper className="pt-20">
        <PageSpeedAnalyzer />
      </MaxWidthWrapper> */}

        {/* <div className="absolute top-0 z-[-1] opacity-20  bottom-0 left-0 -mr-96">
          <Image src="/hero-lines.jpg" alt="Hero" layout="fill" objectFit="cover" fill className="object-cover" />
        </div> */}
      </div>

      {/* <div className=" border-b-8 border-sky-100 border-dashed ">
        <svg className="fill-primary shadow text-blue hidden sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div> */}

      {/* <MaxWidthWrapper>
        <div className="relative text-center py-20">
          <div className="absolute w-full border-t border-slate-200/80 border-dashed top-1/2 transform -translate-y-1/2"></div>
          <Badge className="rounded-full relative bg-sky-100/60 shadow-sm text-primary/80 border font-bold px-6 border-sky-200/50 text-base z-10">What we do</Badge>
          <div className="absolute w-full border-t border-slate-200/80 border-dashed top-1/2 transform -translate-y-1/2"></div>
        </div>
      </MaxWidthWrapper> */}
      {/* <div className="pb-10 ">
        <MaxWidthWrapper className=" relative  rounded-2xl px-4 pb-3">
          <div className="grid grid-cols-1 gap-y-12  p-6 rounded-2xl backdrop-blur border border-slate-200/40 bg-gradient-to-r from-slate-100/80 to-primary/5 shadow sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <Card key={perk.name} className="relative z-10 flex items-center bg-white backdrop-blur-lg border shadow rounded-xl hover:bg-slate-50 border-none justify-center overflow-hidden px-6 py-6 h-full">
                <div className="md:flex-shrink-0 z-20 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center shadow border rounded-full bg-slate-100 text-blue-900">{<perk.Icon />}</div>
                </div>

                <div className="md:ml-4 z-20 md:mt-0 lg:ml-4">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{perk.description}</p>
                </div>

                <div>
                  <span className="absolute left-0 top-0 -z-10">
                    <svg width="106" height="144" viewBox="0 0 106 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304" transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)" />
                      <defs>
                        <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111" y2="178.431" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-0 top-0 -z-10">
                    <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614" transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)" />
                      <defs>
                        <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495" y2="133.937" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 right-0 -z-10">
                    <svg width="175" height="104" viewBox="0 0 175 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179" transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)" />
                      <defs>
                        <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </Card>
            ))}
            <PageSpeedAnalyzer />
          </div>
        </MaxWidthWrapper>
      </div> */}

      <div className="pt-16 bg-sky-50">
        <WhatWeDo />
      </div>

      <div className="bg-sky-50">
        <MaxWidthWrapper>
          <ProductReel query={{ sort: "desc", limit: 4 }} href="/products?sort=recent" title="Recent work" />
        </MaxWidthWrapper>
      </div>


      <div className="bg-sky-50">
        <MaxWidthWrapper>
          <About />
        </MaxWidthWrapper>

      </div>
      {/* <CTA /> */}
      <Pricing />
    </div>
  );
}