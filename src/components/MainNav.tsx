'use client';
import Link from 'next/link';
import Image from 'next/image';


export default function MainNav() {
  const handleScroll = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto w-full rounded-full pt-[2.3rem] hidden lg:block">
      <div className="relative flex h-20 justify-between max-w-[64rem] mx-auto ">
        <div className="relative z-10 flex">
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <div className="flex items-center gap-1 uppercase text-blue-900/90 text-sm tracking-wider font-medium space-x-14">
              <div onClick={() => handleScroll('how-it-works')} style={{ cursor: 'pointer' }} className='hover:underline'>How it works</div>
              <div onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }} className='hover:underline'>Portfolio</div>
              <div onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }} className='hover:underline'>About</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 items-center -mt-2 justify-center">
          <Link href="/" className="flex items-center text-lg text-blue-400 font-medium justify-center">
            <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-80 drop-shadow-sm' width={150} height={150} />
          </Link>
        </div>
        <div className="hidden lg:flex relative z-10 items-center">
          <div className="flex items-center gap-1 uppercase text-blue-900/90 text-sm tracking-wide font-medium space-x-14">
            <div onClick={() => handleScroll('testimonials')} style={{ cursor: 'pointer' }} className='hover:underline'>Testimonials</div>
            <div onClick={() => handleScroll('pricing')} style={{ cursor: 'pointer' }} className='hover:underline'>Pricing</div>
            <Link href="/?open=dialog" className='hover:underline'>
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


