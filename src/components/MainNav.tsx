'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
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
    if (window.scrollY > 390) {
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
    <div id="navbar" className={`fixed top-0 bg-white/85 backdrop-filter  backdrop-blur-[20px] left-0 border-b pt-2 w-full  border-slate-200/70 duration-400 ${isNavbarVisible ? 'top-0 shadow-lg shadow-[#0e1e4a05]' : 'top-[-120px]'}`}>

      <MaxWidthWrapper className="mx-auto w-full rounded-full hidden py-0.5 lg:block">
        <div className="relative flex justify-end items-center  max-w-[78rem] mx-auto ">
          {/* <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-80 drop-shadow-sm' width={imageHeight} height={imageHeight}  /> */}
          <div className="hidden lg:flex flex-1 items-center hover:opacity-90  justify-start">
            <Link href="/" className="flex items-center text-lg text-blue-400 font-medium  pr-4 opacity-80 justify-center">
              <Image src="/gs3.svg" alt="Golden State Web Design" className='drop-shadow-sm' width={isNavbarVisible ? 57 : 0} height={isNavbarVisible ? 57 : 0} />
            </Link>
          </div>
          <div className="relative z-10 -pt-6 flex">
            <div className="hidden lg:flex flex-shrink-0 items-center font-neue-kabel">
              <div className="flex items-center gap-1  text-[#3e4246] text-base tracking-wider font-normal space-x-14">
                {/* <div onClick={() => handleScroll('how-it-works')} style={{ cursor: 'pointer' }} className='hover:underline'>How it works</div> */}
                <div onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }} className='hover:underline'>How it works</div>
                {/* <div onClick={() => handleScroll('pricing')} st2 yle={{ cursor: 'pointer' }} className='hover:underline'>Blog</div> */}
                <div onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }} className='hover:underline'>Portfolio</div>
                {/* <div className="flex items-center gap-1 uppercase text-slate-800/80 text-xs tracking-wide font-medium space-x-14"> */}
                <div onClick={() => handleScroll('pricing')} style={{ cursor: 'pointer' }} className='hover:underline'>Pricing</div>
                <div onClick={() => handleScroll('testimonials')} style={{ cursor: 'pointer' }} className='hover:underline'>Testimonials</div>


                <div onClick={handleClick} className='hover:underline flex items-center space-x-2'>
                  <div className="text-slate-800/80">Get in touch
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 text-blue-400" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          {/* <div className="hidden lg:flex relative z-10 items-center">
          
        </div> */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}


