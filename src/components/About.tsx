import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-1 pb-8 pt-16 dark:bg-dark-2 lg:py-20">
      <div className="">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[490px] lg:mb-0">
                <h2 className="text-4xl font-bold leading-tight text-slate-800 sm:leading-[1.2]">Who we are</h2>
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 rounded-full bg-blue-400"></span>
                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-400"></span>
                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-400"></span>
                  </div>
                <p className="mb-10 pt-8 text-base leading-relaxed text-slate-600">
                  My name is Steve, I am a former athlete turned full-stack web Jedi. I&apos;m here to obsess over your website so you don&apos;t have too. 
                  <br />
                  <br />

                  We take a systematic, scientific and artistic approach to building SEO-effective websites that not only look great but also convert.
                  I currently work at <a className="text-orange-600 font-bold">Flapjack</a>, where we are designing software to build restaurant menus. Picture this: websites crafted with the perfect mix of meticulous science and a dash of warm, friendly artistry. Together, we&apos;ll transform your online space into more than just a functional hub—it&apos;ll be a delightful experience for your audience.
                  <br />
                  <br />
                  Excited to start this journey and build a lasting, friendly relationship as we bring your unique vision to life! 🌟
                </p>

                <a href="javascript:void(0)" className="inline-flex items-center justify-center border border-slate-200 bg-sky-600 px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                  Know More
                </a>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <Image height={200} width={200} src="/jaco.png" alt="about image" className="h-full w-full object-cover object-center" />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image height={300} width={300} src="/yoda.jpeg" alt="about image" className="h-full w-full object-cover object-center" />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">07</span>
                      <span className="block text-base font-semibold text-white">Professional</span>
                      <span className="block text-base font-medium text-white text-opacity-70">Years of experience</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
