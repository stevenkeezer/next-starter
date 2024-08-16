'use client'
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };


  const menuItems = [
    {
      name: 'How it works',
      id: 'about'
    },
    {
      name: 'Our work',
      id: 'portfolio'
    },
    {
      name: 'Testimonials',
      id: 'testimonials'
    },
    {
      name: 'Pricing',
      id: 'pricing'
    },
    {
      name: 'Contact',
      id: '/?open=dialog',
      isDialog: true
    },
  ]

  const handleClick = () => {
    router.replace('/?open=dialog', {scroll: false});
};


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <div className='flex w-full px-4 justify-between items-center mr-auto rounded-full'>
        <Image src="/gs3.svg" alt="Golden State Web Design" className='opacity-90 lg:hidden h-14 w-14 rounded-full mt-1 ml-3 flex' width={55} height={55} />

        <Button variant="ghost" size="icon" className="lg:hidden flex justify-start hover:bg-transparent">
          <MenuIcon className='bg-transparent  text-slate-800 h-6 w-auto' />
        </Button>

        </div>
      </SheetTrigger>

      <SheetContent side="left" className='bg-white pl-0 text-slate-700'>
        <div className="flex flex-col w-full items-start px-4">
          <div className='flex justify-start mr-auto focus:ring-0 -mt-[1.3rem] focus:border-none'>
          <Image src="/gs3.svg" alt="Golden State Web Design" className='opacity-90 lg:hidden ml-3 flex' width={55} height={55} />
          </div>
          {menuItems.map((item, index) => (
            item.isDialog ?
              <div key={index} className='pl-4 w-full mt-5'>
                <Button
                  variant='default'
                  className='bg-slate-900 hover:bg-slate-900/90 w-full text-white focus:ring-0 focus:border-none'
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      handleClick();
                    }, 100);
                  }}>
                  {item.name}
                </Button>
              </div>
              :
              <Button
                key={index}
                variant="link"
                className='text-slate-700'
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    handleScroll(item.id);
                  }, 100);
                }}
              >
                {item.name}
              </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
