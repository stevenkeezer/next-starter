import NavItems from './NavItems';
import { SignInButton } from './navbar/sign-in-button';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const mainNavItems = ['A', 'B', 'C'];

export default function MainNav() {
  return (
    <div className="hidden gap-2 justify-center w-full md:flex">
      {/* <NavItems /> */}
      <div className='flex items-center'>
        <div className="flex items-center gap-1 uppercase text-sky-800 text-sm tracking-wide font-bold space-x-12  mr-16">
          <div>About</div>
          <div>Portfolio</div>
          <div>How it works</div>
        </div>
      </div>
      <Link href="/" className="flex items-center text-lg text-blue-400 font-bold justify-center">
        <Image src="/no-lines.svg" alt="Golden State Web Design" className='' width={140} height={140} />
      </Link>
      <div className="flex items-center gap-1 uppercase text-sky-800 text-sm tracking-wide font-bold space-x-12  ml-16">
        <div>Pricing</div>
        <div>Testimonials</div>
        <SignInButton />

      </div>


    </div>
  );
}  