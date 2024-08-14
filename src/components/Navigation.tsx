'use client';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useRouter } from "next/navigation";

export default function Navigation() {

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -60; // Adjust this value to change the offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const router = useRouter();
  const handleClick = () => {
    router.replace('/?open=dialog', {scroll: false});
};

    return (
        <MaxWidthWrapper className="mx-auto w-full rounded-full hidden py-0.5  pt-9  lg:block">
        <div className="relative flex justify-start items-center max-w-[78rem] mx-auto  mr-10">
          {/* <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-80 drop-shadow-sm' width={imageHeight} height={imageHeight}  /> */}
          <div className="hidden lg:flex flex-1 items-center hover:opacity-90 justify-start">
            <Link href="/" className="flex items-center text-lg -ml-2 pb-1.5 text-blue-400 opacity-85 font-light justify-center">
              <Image src="/gs3.svg" alt="Golden State Web Design" className='' width={80} height={80} />
            </Link>
          </div>
          <div className="relative z-10 flex">
            <div className="hidden lg:flex flex-shrink-0 pt-0.5 items-center font-neue-kabel">
              <div className="flex items-center mb-2 gap-1.5 text-[#3e4246] text-lg tracking-normal font-normal space-x-14">
                {/* <div onClick={() => handleScroll('how-it-works')} style={{ cursor: 'pointer' }} className='hover:underline'>How it works</div> */}
                <div onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }} className='hover:underline'>How it works</div>
                <div onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }} className='hover:underline'>Portfolio</div>
                {/* <div onClick={() => handleScroll('pricing')} st2 yle={{ cursor: 'pointer' }} className='hover:underline'>Blog</div> */}
                {/* <div className="flex items-center gap-1 uppercase text-slate-800/80 text-xs tracking-wide font-light space-x-14"> */}
                <div onClick={() => handleScroll('pricing')} style={{ cursor: 'pointer' }} className='hover:underline'>Pricing</div>
                <div onClick={() => handleScroll('testimonials')} style={{ cursor: 'pointer' }} className='hover:underline'>Testimonials</div>


                <div onClick={handleClick} className='hover:underline tracking-normal cursor-pointer flex items-center space-x-2'>
                  <div className="text-slate-800/80">Get in touch
                  </div>
                  <ArrowRight className="ml-3 mb-0.5 h-5 w-5 text-blue-400" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* <div className="hidden lg:flex relative z-10 items-center">
        
      </div> */}
        </div>
      </MaxWidthWrapper>
    );
}