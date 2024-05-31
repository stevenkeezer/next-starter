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

      <SheetContent side="left" className='bg-white text-slate-700'>
        <div className="flex flex-col items-start">
          <Image src="/no-color.svg" alt="Golden State Web Design" className='opacity-90 mb-10' width={143} height={143} />
          {menuItems.map((item, index) => (
            item.isDialog ?
              <div key={index}>
                <Button onClick={(e) => {
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
