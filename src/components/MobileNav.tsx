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
      name: 'Who we are',
      id: 'about'
    },
    {
      name: 'Portfolio',
      id: 'portfolio'
    },
    {
      name: 'About',
      id: 'about'
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden flex justify-start hover:bg-transparent">
          <MenuIcon className='bg-transparent  text-white' />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className='bg-white pl-0 text-slate-700'>
        <div className="flex flex-col w-full items-start">
          <div className='flex justify-center mx-auto'>
            <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-90 mb-10' width={143} height={143} />
          </div>
          {menuItems.map((item, index) => (
            item.isDialog ?
              <div key={index} className='pl-4 w-full mt-5'>
                <Button
                  variant='default'
                  className='bg-slate-800 hover:bg-slate-700 w-full text-white'
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      router.push(`${item.id}`);
                    }, 300);
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
                  }, 300);
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
