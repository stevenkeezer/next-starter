import Link from 'next/link';
import { getServerSession } from 'next-auth';


import { SignInButton } from '@/components/navbar/sign-in-button';
import { ThemeToggle } from '@/components/navbar/theme-toggle';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import Image from 'next/image';

export const Navbar = async () => {


  return (
    <header className="w-full bg-[#d9edfd]">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center text-lg text-blue-400 font-semibold py-2 pr-3">
          {/* <Image src="/og.jpeg" alt="Golden State Web Design" className='mt-2' width={150} height={150} /> */}
          <div className='pl-3 text-lg -space-y-1.5 uppercase flex items-center  flex-col'>
            <span>Golden State</span>
            <span>Web Design</span>
          </div>
        </Link>
        <div className="flex items-center gap-1 text-slate-700 text-base font-semibold space-x-12">
          <div>Portfolio</div>
          <div>About</div>          <div>Pricing</div>


          {/* <ThemeToggle /> */}
           <SignInButton />
        </div>
      </div>
    </header>
  );
};
