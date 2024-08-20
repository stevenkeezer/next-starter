'use client';
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
import { useEffect, useState } from "react";

const Navbar =  () => {
  // const nextCookies = cookies();
  // const { user } = await getServerSideUser(nextCookies);

  // create a function to hide the header on scroll down and show on scroll up

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
console.log('hit', visible)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={`lg:px-8 border-b-slate-400/20 bg-white border-[#DAA520]/20 shadow shadow-[#0e1e4a05] fixed right-0 left-0 top-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <MaxWidthWrapper className="sm:px- ">
        <div className="">
          <div className="flex lg:h-auto h-[4rem] py-4.5 items-center flex lg:block justify-between">
            <MainNav />
            <MobileNav />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;