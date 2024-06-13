import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { Button, buttonVariants } from "./ui/button";
import Cart from "./Cart";
// import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";
import ProgressBar from "./ProgressBar";
import { Input } from "./ui/input";
import Image from "next/image";
import MainNav from "./MainNav";

const Navbar = async () => {
  const nextCookies = cookies();
  // const { user } = await getServerSideUser(nextCookies);

  return (
    // <div className=" border-slate-100/90 z-50 top-0 inset-x-0 bg-blue-400 sm:bg-transparent backdrop-blur fixed sm:h-[4.4rem] h-[3.5rem]">
      <header className="lg:px-8 lg:bg-transparent bg-blue-400 shadow sm:shadow-none sticky sm:relative top-0 z-50">
        <MaxWidthWrapper className="sm:px-0">
          <div className="">
            <div className="flex lg:h-[7.55rem] h-[2.85rem] items-center flex lg:block justify-between">
             <MainNav/>
              <MobileNav />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    // </div>
  );
};

export default Navbar;





// {/* <div className=" flex font-black  text-xl lg:ml-0 font-mono uppercase tracking-widest items-center">
// <Link href="/" className="mr-4">
//   {/* <Icons.logo className="h-10 w-10" /> */}
//   <div className="flex relative items-center ">
//     <Image alt="quial" height={100} width={100} src="/quail.svg" className="w-10 h-10  sm:w-[2.8rem] sm:h-[2.8rem] rounded-full shadow bg-primary object-cover absolute left-0" />
//     <Image alt="gs-logo" height={100} width={100} src="/gs-logo.svg" className="w-32 h-32 sm:h-36 sm:w-36 ml-2 sm:ml-[.35rem]" />
//   </div>

//   {/* <span className="p-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white ring-2 ring-primary/30">GS</span> */}
//   {/* <span className="text-primary text-2xl leading-none tracking-tighter"></span> Web Design */}
// </Link>
// {/* <Input placeholder="I'd Like to know more" className="bg-slate-100" /> */}
// </div>

// <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
// <NavItems />
// </div>
// <div className="flex items-center">
// <div className="hidden lg:flex lg:flex-1 ml-32 lg:items-center lg:justify-end lg:space-x-6">
//   <Button variant="outline" size="lg">
//     Get in touch
//   </Button>
// </div>
// </div> */}