'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useRouter } from 'next/navigation';

export default function MainNav() {
  const [imageHeight, setImageHeight] = useState(124);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -60; // Adjust this value to change the offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleShrinkImageOnScroll = () => {
    const newHeight = Math.max(90, 150 - window.scrollY / 5); // Adjust these values as needed
    setImageHeight(newHeight);

    const scrollThreshold = 60;

    if (window.scrollY > scrollThreshold) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleShrinkImageOnScroll);
    return () => {
      window.removeEventListener('scroll', handleShrinkImageOnScroll);
    };
  }, []);

  const router = useRouter();
  const handleClick = () => {
    router.replace('/?open=dialog', {scroll: false});
  };

  return (
    <div
      id="navbar"
      className={`fixed top-0 py-[.15rem] bg-white backdrop-filter backdrop-blur-[20px] transition-all ease-in-out left-0  w-full border-slate-200/70 duration-400 ${
        isNavbarVisible ? 'top-0 shadow-lg shadow-[#0e1e4a05]' : 'top-[-120px]'
      }`}
    >
      <MaxWidthWrapper className="mx-auto w-full rounded-full hidden lg:block">
        <div className="relative flex justify-end items-center max-w-[78rem]  mx-auto mr-10 ">
          <div className="hidden lg:flex flex-1 items-center hover:opacity-90 justify-start">
            <Link href="/" className="flex items-center text-lg text-blue-400 pt-2 font-medium pr-4 opacity-80 justify-center">
              <Image
                src="/gs3.svg"
                alt="Golden State Web Design"
                className="drop-shadow-sm"
                width={isNavbarVisible ? 57 : 0}
                height={isNavbarVisible ? 57 : 0}
              />
            </Link>
          </div>
          <div className="relative z-10 pb-0.5 flex">
            <div className="hidden lg:flex flex-shrink-0 items-center font-neue-kabel">
              <div className="flex items-center gap-1 text-[#3e4246] text-[18px] font-normal space-x-14">
                <div onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }} className="hover:underline">
                  How it works
                </div>
                <div onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }} className="hover:underline">
                  Our work
                </div>
                <div onClick={() => handleScroll('pricing')} style={{ cursor: 'pointer' }} className="hover:underline">
                  Pricing
                </div>
                <div onClick={() => handleScroll('testimonials')} style={{ cursor: 'pointer' }} className="hover:underline">
                  Testimonials
                </div>

                <div onClick={handleClick} className="hover:underline cursor-pointer flex items-center ">
                  <div className="text-slate-800/80">Get in touch</div>
                  <ArrowRight className="ml-3.5 mb-0.5 h-5 w-5 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}