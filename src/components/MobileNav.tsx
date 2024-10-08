'use client'
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

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
  ];

  const handleClick = () => {
    router.replace('/?open=dialog', { scroll: false });
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const threshold = 10; // Adjust this value as needed
      if (window.scrollY <= threshold) {
        // At the top of the page or within the threshold
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    // Check if the dialog is open via query parameters
    if (searchParams.get('open') === 'dialog') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [searchParams]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={`fixed right-0 left-0 z-[99999] bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex w-full fixed px-4 justify-between items-center mr-auto'>
          <Image src="/gs3.svg" alt="Golden State Web Design" className='opacity-90 lg:hidden h-14 w-14 rounded-full mt-1 ml-3 flex' width={55} height={55} />

          <Button variant="ghost" size="icon" className="lg:hidden flex justify-start hover:bg-transparent">
            <MenuIcon className='bg-transparent text-slate-800 h-6 w-auto' />
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
