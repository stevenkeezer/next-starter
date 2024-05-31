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
    <div className="mx-auto w-full rounded-full">
      <div className="relative flex h-16 justify-between max-w-[67rem] mx-auto">
        <div className="relative z-10 flex">
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <div className="flex items-center gap-1 uppercase text-sky-900/80 text-sm tracking-wider font-bold space-x-16  mr-9">
            <div onClick={() => handleScroll('how-it-works')} style={{ cursor: 'pointer' }}>How it works</div>
              <div onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }}>Portfolio</div>
              <div onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }}>About</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex z-0 flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <Link href="/" className="flex items-center text-lg text-blue-400 font-bold justify-center">
                <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-90' width={143} height={143} />
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:relative lg:z-10 lg:flex lg:items-center">
          <div className="flex items-center gap-1 uppercase text-sky-900/80 text-sm tracking-wider font-bold space-x-16  ml-8">
            <div onClick={() => handleScroll('testimonials')} style={{ cursor: 'pointer' }}>Testimonials</div>
            <div onClick={() => handleScroll('pricing')} style={{ cursor: 'pointer' }}>Pricing</div>
            {/* <SignInButton /> */}
            <Link href="/?open=dialog">
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


