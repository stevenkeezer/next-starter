import NavItems from './NavItems';
import { SignInButton } from './navbar/sign-in-button';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const mainNavItems = ['A', 'B', 'C'];

export default function MainNav() {
  return (



    <div className="mx-auto w-full rounded-full">
      <div className="relative flex h-16 justify-between max-w-[67rem] mx-auto">
        <div className="relative z-10 flex">
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <div className="flex items-center gap-1 uppercase text-sky-900/80 text-sm tracking-wider font-bold space-x-16  mr-9">
              <div>How it works</div>
              <div>Portfolio</div>
              <div>About</div>
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
                <Image src="/no-color.svg" alt="Golden State Web Design" className='' width={143} height={143} />
              </Link>
            </div>
          </div>
        </div>
  
        <div className="hidden lg:relative lg:z-10 lg:flex lg:items-center">
          <div className="flex items-center gap-1 uppercase text-sky-900/80 text-sm tracking-wider font-bold space-x-16  ml-8">
            <div>Testimonials</div>
            <div>Pricing</div>
            {/* <SignInButton /> */}
            <div>Contact</div>
          </div>
        </div>
      </div>

    </div>

    // <div className="hidden gap-2 justify-center w-full md:flex">
    //   {/* <NavItems /> */}
    //   <div className='flex items-center'>
    //     <div className="flex items-center gap-1 uppercase text-sky-800 text-sm tracking-wide font-bold space-x-12  mr-16">
    //       <div>About</div>
    //       <div>Portfolio</div>
    //       <div>How it works</div>
    //     </div>
    //   </div>
    //   <Link href="/" className="flex items-center text-lg text-blue-400 font-bold justify-center">
    //     <Image src="/no-lines.svg" alt="Golden State Web Design" className='' width={130} height={130} />
    //   </Link>
    //   <div className="flex items-center gap-1 uppercase text-sky-800 text-sm tracking-wide font-bold space-x-12  ml-16">
    //     <div>Pricing</div>
    //     <div>Testimonials</div>
    //     {/* <SignInButton /> */}
    //     <div>Contact</div>

    //   </div>


    // </div>
  );
}



const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

