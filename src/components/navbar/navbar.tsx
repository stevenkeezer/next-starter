import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { ThemeToggle } from '@/components/navbar/theme-toggle';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import Image from 'next/image';

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="w-full bg-[#d9edfd]">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center text-lg text-blue-400 font-semibold py-2 pr-3">
          {/* <Image src="/gsw-logo.png" alt="Golden State Web Design" className='mt-2' width={50} height={50} /> */}
          <div className='pl-3 text-xl -space-y-1.5 uppercase flex items-center  flex-col'>
            <span>Golden State</span>
            <span>Web Design</span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session ? <UserDropdown session={session} /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
};
