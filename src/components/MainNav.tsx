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
    <div className="mx-auto w-full rounded-full mt-0.5">
      <div className="relative flex h-16 justify-between max-w-[65rem] mx-auto">
        <div className="relative z-10 flex">
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <div className="flex items-center gap-1 uppercase text-sky-900/90 text-sm tracking-wide font-semibold space-x-16">
              <div onClick={() => handleScroll('how-it-works')} style={{ cursor: 'pointer' }} className='hover:underline'>How it works</div>
              <div onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }} className='hover:underline'>Portfolio</div>
              <div onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }} className='hover:underline'>About</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex z-0 flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <Link href="/" className="flex items-center text-lg text-blue-400 font-semibold justify-center">
                <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-90 drop-shadow-sm' width={143} height={143} />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:relative lg:z-10 lg:flex lg:items-center">
          <div className="flex items-center gap-1 uppercase text-sky-900/90 text-sm tracking-wide font-semibold space-x-16">
            <div onClick={() => handleScroll('testimonials')} style={{ cursor: 'pointer' }} className='hover:underline'>Testimonials</div>
            <div onClick={() => handleScroll('pricing')} style={{ cursor: 'pointer' }} className='hover:underline'>Pricing</div>
            {/* <SignInButton /> */}
            <Link href="/?open=dialog" className='hover:underline'>
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


